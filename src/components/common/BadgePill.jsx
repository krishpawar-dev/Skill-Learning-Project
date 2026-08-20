import { Award } from 'lucide-react'
import { cn } from '../../utils/formatters'

export default function BadgePill({ title, description, tone, locked = false }) {
  return (
    <div
      className={cn(
        'glass-subtle flex items-center gap-3 rounded-lg p-3 transition-all duration-300',
        locked ? 'opacity-45' : 'hover:border-cyan-300/40 hover:shadow-cyan',
      )}
    >
      <div className={cn('grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br text-white', tone)}>
        <Award className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-slate-950 dark:text-white">{title}</p>
        <p className="truncate text-xs text-slate-500 dark:text-slate-400">{description}</p>
      </div>
    </div>
  )
}
