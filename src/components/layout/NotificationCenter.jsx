import { CheckCircle2 } from 'lucide-react'
import { useSkillForgeStore } from '../../store/useSkillForgeStore'
import { cn } from '../../utils/formatters'

export default function NotificationCenter({ open }) {
  const notifications = useSkillForgeStore((state) => state.notifications)
  const markNotificationRead = useSkillForgeStore((state) => state.markNotificationRead)

  return (
    <div
      className={cn(
        'absolute right-14 top-12 z-30 w-80 rounded-lg border border-slate-200/80 bg-white/92 p-3 shadow-soft-light backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-slate-950/92 dark:shadow-soft-dark',
        open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-black text-slate-950 dark:text-white">Notifications</p>
        <span className="text-xs font-semibold text-violet-600 dark:text-cyan-300">
          {notifications.filter((item) => !item.read).length} new
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {notifications.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => markNotificationRead(item.id)}
            className="flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors hover:bg-slate-950/5 dark:hover:bg-white/10"
          >
            <span
              className={cn(
                'grid h-8 w-8 place-items-center rounded-lg',
                item.read
                  ? 'bg-slate-100 text-slate-400 dark:bg-white/10'
                  : 'bg-cyan-400/14 text-cyan-500',
              )}
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
