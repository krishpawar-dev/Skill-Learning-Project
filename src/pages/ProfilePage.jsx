import {
  Award,
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Flame,
  PenLine,
  Trophy,
  Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import BadgePill from '../components/common/BadgePill'
import GlassCard from '../components/common/GlassCard'
import PremiumButton from '../components/common/PremiumButton'
import ProgressRing from '../components/common/ProgressRing'
import { pageTransition } from '../animations/pageTransitions'
import { badgeCatalog, skillOverview } from '../data/dashboard'
import { roadmaps } from '../data/roadmaps'
import { useSkillForgeStore } from '../store/useSkillForgeStore'
import { getLevelProgress } from '../utils/formatters'

const streakCells = Array.from({ length: 35 }).map((_, index) => ({
  id: index,
  active: index < 27 && ![6, 14, 23].includes(index),
  intensity: (index % 4) + 1,
}))

export default function ProfilePage() {
  const user = useSkillForgeStore((state) => state.user)
  const earnedBadges = useSkillForgeStore((state) => state.earnedBadges)
  const roadmapsProgress = useSkillForgeStore((state) => state.roadmapsProgress)
  const completedQuizzes = useSkillForgeStore((state) => state.completedQuizzes)
  const progress = getLevelProgress(user.xp)
  const completedRoadmaps = roadmaps
    .map((roadmap) => {
      const completed = roadmapsProgress[roadmap.slug]?.length || 0
      return {
        ...roadmap,
        completion: roadmap.skills ? Math.round((completed / roadmap.skills) * 100) : 0,
      }
    })
    .filter((roadmap) => roadmap.completion > 0)
    .sort((a, b) => b.completion - a.completion)
    .slice(0, 4)
  const averageScore =
    completedQuizzes.length > 0
      ? Math.round(
          completedQuizzes.reduce((total, quiz) => total + quiz.score, 0) / completedQuizzes.length,
        )
      : 0

  return (
    <motion.div {...pageTransition} className="space-y-6">
      <GlassCard className="relative overflow-hidden p-6 md:p-8">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-premium-button" />
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="grid h-24 w-24 place-items-center rounded-lg bg-premium-button text-3xl font-black text-white shadow-glow">
              {user.avatar}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-black text-slate-950 dark:text-white">{user.name}</h1>
                <span className="rounded-lg bg-cyan-400/12 px-3 py-1 text-sm font-bold text-cyan-600 dark:text-cyan-300">
                  @{user.username}
                </span>
              </div>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">{user.role}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  [Zap, `${user.xp} XP`],
                  [Award, `Level ${progress.level}`],
                  [Flame, `${user.streak} day streak`],
                  [Trophy, `${user.quizzesTaken} quizzes`],
                ].map(([Icon, label]) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/60 px-3 py-2 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                  >
                    <Icon className="h-4 w-4 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <ProgressRing value={progress.percent} label={`Lv ${progress.level}`} sublabel={`${progress.needed} XP left`} />
            <PremiumButton
              icon={PenLine}
              variant="secondary"
              onClick={() => toast.success('Profile editor is ready for backend wiring')}
            >
              Edit profile
            </PremiumButton>
          </div>
        </div>
      </GlassCard>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <GlassCard className="p-5">
          <div className="mb-5 flex items-center gap-3">
            <Award className="h-5 w-5 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Earned Badges</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {badgeCatalog.map((badge) => (
              <BadgePill key={badge.id} {...badge} locked={!earnedBadges.includes(badge.id)} />
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="mb-5 flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Learning Streak Calendar</h2>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {streakCells.map((cell, index) => (
              <motion.div
                key={cell.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.012 }}
                className={`aspect-square rounded-lg ${
                  cell.active
                    ? cell.intensity > 2
                      ? 'bg-premium-button shadow-glow'
                      : 'bg-cyan-400/40'
                    : 'bg-slate-200/70 dark:bg-white/10'
                }`}
                title={cell.active ? 'Learning day' : 'Rest day'}
              />
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
            {user.streak} active days in your current streak.
          </p>
        </GlassCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <GlassCard className="p-5">
          <div className="mb-5 flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Skills Overview</h2>
          </div>
          <div className="space-y-4">
            {skillOverview.map((skill) => (
              <div key={skill.skill}>
                <div className="mb-2 flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-700 dark:text-slate-200">{skill.skill}</span>
                  <span className="text-slate-500 dark:text-slate-400">{skill.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 0.7 }}
                    className={`h-full rounded-full ${skill.tone}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="mb-5 flex items-center gap-3">
            <BookOpenCheck className="h-5 w-5 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Completed Roadmaps</h2>
          </div>
          <div className="space-y-3">
            {completedRoadmaps.map((roadmap) => (
              <div key={roadmap.slug} className="rounded-lg bg-slate-950/[0.03] p-3 dark:bg-white/[0.05]">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-bold text-slate-950 dark:text-white">{roadmap.title}</p>
                  <span className="text-sm font-black text-violet-600 dark:text-cyan-300">{roadmap.completion}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <div className={`h-full rounded-full bg-gradient-to-r ${roadmap.accent}`} style={{ width: `${roadmap.completion}%` }} />
                </div>
              </div>
            ))}
            {completedRoadmaps.length === 0 && (
              <div className="rounded-lg border border-dashed border-slate-300 p-5 text-center dark:border-white/10">
                <CheckCircle2 className="mx-auto h-6 w-6 text-slate-400" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Complete your first roadmap phase to start this showcase.
                </p>
              </div>
            )}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="mb-5 flex items-center gap-3">
            <Trophy className="h-5 w-5 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Quiz Statistics</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ['Attempts', completedQuizzes.length],
              ['Average', `${averageScore}%`],
              ['Best', `${Math.max(...completedQuizzes.map((quiz) => quiz.score), 0)}%`],
              ['XP won', completedQuizzes.reduce((total, quiz) => total + quiz.xp, 0)],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-slate-950/[0.03] p-4 dark:bg-white/[0.05]">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</p>
                <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {completedQuizzes.slice(0, 3).map((quiz) => (
              <div key={`${quiz.category}-${quiz.date}`} className="flex items-center justify-between rounded-lg bg-slate-950/[0.03] px-3 py-2 text-sm dark:bg-white/[0.05]">
                <span className="font-bold text-slate-700 dark:text-slate-200">{quiz.category}</span>
                <span className="font-black text-violet-600 dark:text-cyan-300">{quiz.score}%</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>
    </motion.div>
  )
}
