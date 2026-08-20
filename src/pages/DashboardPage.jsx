import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Flame,
  FileText,
  Map,
  Trophy,
  Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BadgePill from '../components/common/BadgePill'
import GlassCard from '../components/common/GlassCard'
import PremiumButton from '../components/common/PremiumButton'
import ProgressRing from '../components/common/ProgressRing'
import WeeklyXpChart from '../charts/WeeklyXpChart'
import { pageTransition } from '../animations/pageTransitions'
import { badgeCatalog } from '../data/dashboard'
import { roadmaps } from '../data/roadmaps'
import { useSkillForgeStore } from '../store/useSkillForgeStore'
import { formatNumber, getLevelProgress } from '../utils/formatters'

const statIcons = {
  xp: Zap,
  streak: Flame,
  skills: CheckCircle2,
  quizzes: Trophy,
}

const quickActions = [
  { label: 'Take Quiz', to: '/quizzes', icon: Trophy, tone: 'from-cyan-400 to-violet-500' },
  { label: 'View Roadmaps', to: '/roadmaps', icon: Map, tone: 'from-emerald-400 to-cyan-500' },
  { label: 'AI Roadmap', to: '/ai-roadmap', icon: Brain, tone: 'from-violet-500 to-pink-500' },
  { label: 'Build Resume', to: '/ai-roadmap', icon: FileText, tone: 'from-amber-300 to-rose-400' },
]

export default function DashboardPage() {
  const user = useSkillForgeStore((state) => state.user)
  const activities = useSkillForgeStore((state) => state.activities)
  const earnedBadges = useSkillForgeStore((state) => state.earnedBadges)
  const roadmapViews = useSkillForgeStore((state) => state.roadmapViews)
  const progress = getLevelProgress(user.xp)
  const recentRoadmaps = roadmapViews
    .map((slug) => roadmaps.find((roadmap) => roadmap.slug === slug))
    .filter(Boolean)
    .slice(0, 3)

  const stats = [
    { id: 'xp', label: 'Total XP', value: formatNumber(user.xp), meta: '+240 this week' },
    { id: 'streak', label: 'Day Streak', value: user.streak, meta: 'Personal best 32' },
    { id: 'skills', label: 'Skills Done', value: user.completedSkills, meta: '15 nodes this month' },
    { id: 'quizzes', label: 'Quizzes Taken', value: user.quizzesTaken, meta: '84% avg score' },
  ]

  return (
    <motion.div {...pageTransition} className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase text-violet-600 dark:text-cyan-300">
            Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white md:text-4xl">
            Welcome back, {user.name.split(' ')[0]}.
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Your learning system is warm: keep the streak alive, finish one roadmap node, then close with a short quiz.
          </p>
        </div>
        <PremiumButton to="/ai-roadmap" icon={Brain} trailingIcon={ArrowRight}>
          Generate next plan
        </PremiumButton>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = statIcons[stat.id]

          return (
            <GlassCard key={stat.id} interactive delay={index * 0.04}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="mt-3 text-3xl font-black text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold text-emerald-500">{stat.meta}</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-slate-950 text-white shadow-soft-light dark:bg-white dark:text-slate-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            </GlassCard>
          )
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <GlassCard className="p-5">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-black text-slate-950 dark:text-white">Weekly XP Activity</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Hover the gradient line to inspect each day.
              </p>
            </div>
            <span className="rounded-lg bg-cyan-400/12 px-3 py-1 text-sm font-bold text-cyan-600 dark:text-cyan-300">
              1,015 XP
            </span>
          </div>
          <WeeklyXpChart />
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-950 dark:text-white">Overall Progress</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Every 100 XP levels you up.</p>
            </div>
            <Award className="h-5 w-5 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
          </div>
          <div className="mt-8 flex flex-col items-center">
            <ProgressRing value={progress.percent} label={`Lv ${progress.level}`} sublabel={`${progress.needed} XP left`} />
            <div className="mt-7 w-full rounded-lg border border-slate-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-white/[0.05]">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-slate-600 dark:text-slate-300">{progress.currentLevelXp} XP</span>
                <span className="text-slate-950 dark:text-white">100 XP</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress.percent}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-premium-button"
                />
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="p-5">
          <h2 className="text-xl font-black text-slate-950 dark:text-white">Recent Activity</h2>
          <div className="mt-5 space-y-3">
            {activities.slice(0, 5).map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 rounded-lg bg-slate-950/[0.03] p-3 dark:bg-white/[0.05]">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400/12 text-cyan-500">
                  <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-950 dark:text-white">{activity.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{activity.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-black text-slate-950 dark:text-white">Quick Actions</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Small next moves, high signal.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {quickActions.map((action) => (
              <Link key={action.label} to={action.to} className="group premium-focus rounded-lg">
                <div className="glass-subtle flex h-full items-center gap-4 rounded-lg p-4 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:shadow-cyan">
                  <div className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${action.tone} text-white`}>
                    <action.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-black text-slate-950 dark:text-white">{action.label}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Open workspace</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-black uppercase text-slate-500 dark:text-slate-400">
              Continue Learning
            </h3>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {recentRoadmaps.map((roadmap) => (
                <Link key={roadmap.slug} to={`/roadmaps/${roadmap.slug}`} className="rounded-lg premium-focus">
                  <div className="rounded-lg border border-slate-200/80 bg-white/52 p-3 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-300/50">
                    <div className={`mb-3 h-1 rounded-full bg-gradient-to-r ${roadmap.accent}`} />
                    <p className="text-sm font-black text-slate-950 dark:text-white">{roadmap.title}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{roadmap.duration}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-950 dark:text-white">Badges</h2>
          <span className="text-sm font-bold text-violet-600 dark:text-cyan-300">
            {earnedBadges.length}/{badgeCatalog.length} unlocked
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {badgeCatalog.map((badge) => (
            <BadgePill
              key={badge.id}
              {...badge}
              locked={!earnedBadges.includes(badge.id)}
            />
          ))}
        </div>
      </section>
    </motion.div>
  )
}
