import { clamp } from '../../utils/formatters'

export default function ProgressRing({
  value,
  size = 148,
  stroke = 10,
  label,
  sublabel,
  className = '',
}) {
  const normalized = clamp(value)
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (normalized / 100) * circumference

  return (
    <div className={`relative inline-grid place-items-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-slate-200 dark:text-white/10"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="url(#skillforge-ring)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
        <defs>
          <linearGradient id="skillforge-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="52%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <div className="text-2xl font-black text-slate-950 dark:text-white">{label || `${normalized}%`}</div>
        {sublabel && <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{sublabel}</div>}
      </div>
    </div>
  )
}
