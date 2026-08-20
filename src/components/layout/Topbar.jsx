import { Bell, Menu, Search } from 'lucide-react'
import { useState } from 'react'
import { useSkillForgeStore } from '../../store/useSkillForgeStore'
import IconButton from '../common/IconButton'
import ThemeToggle from '../common/ThemeToggle'
import NotificationCenter from './NotificationCenter'

export default function Topbar({ onOpenSidebar }) {
  const user = useSkillForgeStore((state) => state.user)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/66 px-4 py-3 backdrop-blur-2xl dark:border-white/10 dark:bg-ink/60 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <IconButton icon={Menu} label="Open sidebar" className="lg:hidden" onClick={onOpenSidebar} />
          <label className="glass-subtle hidden min-h-10 w-[320px] items-center gap-2 rounded-lg px-3 text-slate-500 md:flex">
            <Search className="h-4 w-4" aria-hidden="true" />
            <input
              className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
              placeholder="Search roadmaps, quizzes, skills"
            />
          </label>
        </div>

        <div className="relative flex items-center gap-2">
          <ThemeToggle />
          <IconButton
            icon={Bell}
            label="Notifications"
            onClick={() => setNotificationsOpen((current) => !current)}
          />
          <NotificationCenter open={notificationsOpen} />
          <div className="ml-1 flex items-center gap-3 rounded-lg border border-slate-200/80 bg-white/70 py-1.5 pl-2 pr-3 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-premium-button text-xs font-black text-white">
              {user.avatar}
            </div>
            <div className="hidden leading-none sm:block">
              <p className="text-sm font-bold text-slate-950 dark:text-white">{user.name}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Level learner</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
