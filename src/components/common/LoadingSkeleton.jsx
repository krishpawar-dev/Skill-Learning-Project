export default function LoadingSkeleton({ className = 'h-24' }) {
  return <div className={`shimmer rounded-lg bg-slate-200/70 dark:bg-white/10 ${className}`} />
}
