import { NextResponse } from "next/server";
import { MailtrapClient } from "mailtrap";
import type { ContactFormData } from "@/types";

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "joren.canteras@gmail.com";

function validateBody(body: unknown): body is ContactFormData {
  if (!body || typeof body !== "object") return false;
  const data = body as Record<string, unknown>;
  return (
    typeof data.fullName === "string" &&
    data.fullName.length >= 2 &&
    typeof data.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.subject === "string" &&
    data.subject.length >= 3 &&
    typeof data.message === "string" &&
    data.message.length >= 10
  );
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailContent(body: ContactFormData) {
  const html = `
    <h2>New portfolio message</h2>
    <p><strong>Name:</strong> ${escapeHtml(body.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(body.subject)}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(body.message).replace(/\n/g, "<br />")}</p>
  `;

  const text = [
    "New portfolio message",
    `Name: ${body.fullName}`,
    `Email: ${body.email}`,
    `Subject: ${body.subject}`,
    "",
    "Message:",
    body.message,
  ].join("\n");

  return { html, text };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!validateBody(body)) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const token = process.env.MAILTRAP_API_TOKEN;

    if (!token) {
      console.warn(
        "[Contact Form] MAILTRAP_API_TOKEN is not set — message not emailed:",
        { to: CONTACT_EMAIL, from: body.email, subject: body.subject }
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please email directly or try again later.",
        },
        { status: 503 }
      );
    }

    const useSandbox = process.env.MAILTRAP_SANDBOX === "true";
    const testInboxId = process.env.MAILTRAP_INBOX_ID
      ? Number(process.env.MAILTRAP_INBOX_ID)
      : undefined;

    if (useSandbox && !testInboxId) {
      console.error(
        "[Contact Form] MAILTRAP_SANDBOX is true but MAILTRAP_INBOX_ID is missing"
      );
      return NextResponse.json(
        { error: "Email sandbox is misconfigured." },
        { status: 503 }
      );
    }

    const client = new MailtrapClient({
      token,
      ...(useSandbox && testInboxId
        ? { sandbox: true, testInboxId }
        : {}),
    });

    const fromEmail =
      process.env.MAILTRAP_FROM_EMAIL ?? "mailtrap@demomailtrap.com";
    const fromName =
      process.env.MAILTRAP_FROM_NAME ?? "John Rendell Portfolio";
    const { html, text } = buildEmailContent(body);

    const response = await client.send({
      from: { email: fromEmail, name: fromName },
      to: [{ email: CONTACT_EMAIL }],
      reply_to: { email: body.email, name: body.fullName },
      subject: `[Portfolio] ${body.subject}`,
      html,
      text,
      category: "portfolio-contact",
    });

    if (!response.success) {
      console.error("[Contact Form] Mailtrap error:", response);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: useSandbox
          ? "Message captured in Mailtrap sandbox (dev mode)."
          : "Message sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact Form]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
