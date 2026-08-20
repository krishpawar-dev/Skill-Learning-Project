import { cn } from '../../utils/formatters'

export default function IconButton({ icon: Icon, label, className = '', ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        'premium-focus grid h-10 w-10 place-items-center rounded-lg border border-slate-200/80 bg-white/70 text-slate-700 transition-all duration-300 hover:border-violet-300 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-cyan-300/50 dark:hover:bg-white/[0.1]',
        className,
      )}
      {...props}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  )
}
