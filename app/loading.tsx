export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-violet-600 dark:border-violet-500/30 dark:border-t-violet-500" />
        <p className="text-sm font-medium text-slate-600 dark:text-slate-500">Loading portfolio...</p>
      </div>
    </div>
  );
}
