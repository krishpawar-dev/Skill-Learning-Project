import {
  Brain,
  LayoutDashboard,
  LogOut,
  Map,
  PanelLeftClose,
  PanelLeftOpen,
  Trophy,
  User,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../utils/formatters'
import IconButton from '../common/IconButton'
import Logo from '../common/Logo'

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Roadmaps', to: '/roadmaps', icon: Map },
  { label: 'Quizzes', to: '/quizzes', icon: Trophy },
  { label: 'AI Roadmap', to: '/ai-roadmap', icon: Brain },
  { label: 'Profile', to: '/profile', icon: User },
]

export default function Sidebar({ open, collapsed, onClose, onToggleCollapse }) {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-sm transition-opacity lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex flex-col border-r border-slate-200/80 bg-white/86 p-4 shadow-soft-light backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-ink/82 dark:shadow-soft-dark lg:sticky lg:top-0',
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          collapsed ? 'w-[86px]' : 'w-[272px]',
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <Logo compact={collapsed} />
          <IconButton
            icon={collapsed ? PanelLeftOpen : PanelLeftClose}
            label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="hidden lg:grid"
            onClick={onToggleCollapse}
          />
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'group relative flex min-h-12 items-center gap-3 rounded-lg px-3 text-sm font-semibold text-slate-600 transition-all duration-300 premium-focus hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
                  isActive &&
                    'bg-slate-950 text-white shadow-soft-light dark:bg-white dark:text-slate-950 dark:shadow-cyan',
                  collapsed && 'justify-center px-0',
                )
              }
              title={collapsed ? item.label : undefined}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={cn(
                      'grid h-8 w-8 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-105',
                      isActive
                        ? 'bg-white/16 dark:bg-slate-950/10'
                        : 'bg-slate-950/5 dark:bg-white/10',
                    )}
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {!collapsed && <span>{item.label}</span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="glass-subtle rounded-lg p-3">
          {!collapsed && (
            <>
              <p className="text-xs font-bold uppercase text-violet-600 dark:text-cyan-300">
                Weekly focus
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                Finish React advanced architecture.
              </p>
            </>
          )}
          <button
            type="button"
            className={cn(
              'mt-3 flex min-h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-bold text-slate-500 transition-colors hover:bg-slate-950/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white',
              collapsed && 'mt-0',
            )}
            title="Sign out"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            {!collapsed && <span>Sign out</span>}
          </button>
        </div>
      </aside>
    </>
  )
}
