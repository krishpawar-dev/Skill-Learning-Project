import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { weeklyXp } from '../data/dashboard'

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/90 px-3 py-2 text-sm text-white shadow-soft-dark backdrop-blur-xl">
      <p className="font-bold">{label}</p>
      <p className="text-cyan-200">{payload[0].value} XP earned</p>
    </div>
  )
}

export default function WeeklyXpChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={weeklyXp} margin={{ top: 14, right: 8, left: -24, bottom: 0 }}>
          <defs>
            <linearGradient id="xpLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="48%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="xpFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.34} />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 8" stroke="currentColor" className="text-slate-200/80 dark:text-white/10" />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'currentColor', fontSize: 12 }} className="text-slate-500 dark:text-slate-400" />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: 'currentColor', fontSize: 12 }} className="text-slate-500 dark:text-slate-400" />
          <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#8B5CF6', strokeWidth: 1 }} />
          <Area
            type="monotone"
            dataKey="xp"
            stroke="url(#xpLine)"
            strokeWidth={4}
            fill="url(#xpFill)"
            activeDot={{ r: 6, strokeWidth: 3, stroke: '#ffffff', fill: '#8B5CF6' }}
            animationDuration={1200}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
