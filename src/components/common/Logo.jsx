import { Link } from 'react-router-dom'

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 premium-focus rounded-lg">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-premium-button text-sm font-black text-white shadow-glow">
        SF
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-lg font-bold text-slate-950 dark:text-white">
            SkillForge
          </span>
          <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
            AI learning OS
          </span>
        </span>
      )}
    </Link>
  )
}
