import { Bookmark, ChevronDown, ChevronLeft, Check, Circle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import GlassCard from '../components/common/GlassCard'
import PremiumButton from '../components/common/PremiumButton'
import ProgressRing from '../components/common/ProgressRing'
import { pageTransition } from '../animations/pageTransitions'
import { getRoadmapBySlug } from '../data/roadmaps'
import { saveRoadmapProgress } from '../services/progressService'
import { useSkillForgeStore } from '../store/useSkillForgeStore'
import { cn } from '../utils/formatters'

export default function RoadmapDetailPage() {
  const { slug } = useParams()
  const roadmap = getRoadmapBySlug(slug)
  const roadmapsProgress = useSkillForgeStore((state) => state.roadmapsProgress)
  const toggleRoadmapStep = useSkillForgeStore((state) => state.toggleRoadmapStep)
  const recordRoadmapView = useSkillForgeStore((state) => state.recordRoadmapView)
  const bookmarkedRoadmaps = useSkillForgeStore((state) => state.bookmarkedRoadmaps)
  const toggleRoadmapBookmark = useSkillForgeStore((state) => state.toggleRoadmapBookmark)
  const completedNodes = roadmapsProgress[slug] || []
  const [openPhases, setOpenPhases] = useState(
    () => new Set(roadmap?.phases?.[0] ? [roadmap.phases[0].id] : []),
  )

  useEffect(() => {
    if (slug) {
      recordRoadmapView(slug)
    }
  }, [recordRoadmapView, slug])

  const completion = useMemo(() => {
    if (!roadmap) return 0
    return Math.round((completedNodes.length / roadmap.skills) * 100)
  }, [completedNodes.length, roadmap])

  if (!roadmap) {
    return (
      <motion.div {...pageTransition}>
        <GlassCard className="p-8 text-center">
          <p className="text-sm font-bold uppercase text-violet-600 dark:text-cyan-300">Roadmap missing</p>
          <h1 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">This roadmap does not exist.</h1>
          <PremiumButton to="/roadmaps" className="mt-6" icon={ChevronLeft}>
            Back to roadmaps
          </PremiumButton>
        </GlassCard>
      </motion.div>
    )
  }

  const togglePhase = (phaseId) => {
    setOpenPhases((current) => {
      const next = new Set(current)
      if (next.has(phaseId)) next.delete(phaseId)
      else next.add(phaseId)
      return next
    })
  }

  const handleStepToggle = (stepId) => {
    const nextCompleted = completedNodes.includes(stepId)
      ? completedNodes.filter((item) => item !== stepId)
      : [...completedNodes, stepId]

    toggleRoadmapStep(roadmap.slug, stepId)
    saveRoadmapProgress({ slug: roadmap.slug, completedNodes: nextCompleted })
    toast.success(nextCompleted.includes(stepId) ? 'Roadmap node completed' : 'Roadmap node reopened')
  }

  return (
    <motion.div {...pageTransition} className="space-y-6">
      <Link
        to="/roadmaps"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        Back to roadmaps
      </Link>

      <GlassCard className="relative overflow-hidden p-6 md:p-8">
        <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${roadmap.accent}`} />
        <div className="grid gap-8 lg:grid-cols-[1fr_220px] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-violet-600 dark:text-cyan-300">{roadmap.category}</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 dark:text-white md:text-5xl">
              {roadmap.title} Roadmap
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {roadmap.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[roadmap.difficulty, roadmap.duration, `${roadmap.skills} skills`, `${completion}% complete`].map((item) => (
                <span key={item} className="rounded-lg border border-slate-200/80 bg-white/60 px-3 py-1.5 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <ProgressRing value={completion} label={`${completion}%`} sublabel="complete" />
            <PremiumButton
              variant={bookmarkedRoadmaps.includes(roadmap.slug) ? 'primary' : 'secondary'}
              icon={Bookmark}
              onClick={() => toggleRoadmapBookmark(roadmap.slug)}
            >
              {bookmarkedRoadmaps.includes(roadmap.slug) ? 'Bookmarked' : 'Bookmark'}
            </PremiumButton>
          </div>
        </div>
      </GlassCard>

      <section className="grid gap-4 xl:grid-cols-[1fr_340px]">
        <div className="space-y-4">
          {roadmap.phases.map((phaseItem, phaseIndex) => {
            const phaseCompleted = phaseItem.items.filter((item) => completedNodes.includes(item.id)).length
            const phasePercent = Math.round((phaseCompleted / phaseItem.items.length) * 100)
            const isOpen = openPhases.has(phaseItem.id)

            return (
              <GlassCard key={phaseItem.id} className="p-0">
                <button
                  type="button"
                  onClick={() => togglePhase(phaseItem.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left premium-focus"
                >
                  <div className="flex items-center gap-4">
                    <span className={`grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br ${roadmap.accent} text-sm font-black text-white`}>
                      {phaseIndex + 1}
                    </span>
                    <div>
                      <h2 className="text-xl font-black text-slate-950 dark:text-white">{phaseItem.title}</h2>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {phaseCompleted}/{phaseItem.items.length} complete - {phasePercent}%
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-slate-500 transition-transform dark:text-slate-400',
                      isOpen && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-200/70 p-5 dark:border-white/10"
                  >
                    <div className="grid gap-3 md:grid-cols-2">
                      {phaseItem.items.map((item) => {
                        const isComplete = completedNodes.includes(item.id)

                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => handleStepToggle(item.id)}
                            className={cn(
                              'flex min-h-12 items-center gap-3 rounded-lg border p-3 text-left text-sm font-semibold transition-all premium-focus',
                              isComplete
                                ? 'border-emerald-400/30 bg-emerald-400/12 text-emerald-700 dark:text-emerald-200'
                                : 'border-slate-200/80 bg-white/52 text-slate-700 hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-cyan-300/50',
                            )}
                          >
                            <span
                              className={cn(
                                'grid h-6 w-6 shrink-0 place-items-center rounded-lg',
                                isComplete
                                  ? 'bg-emerald-500 text-white'
                                  : 'bg-slate-950/5 text-slate-400 dark:bg-white/10',
                              )}
                            >
                              {isComplete ? <Check className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
                            </span>
                            {item.label}
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </GlassCard>
            )
          })}
        </div>

        <aside className="space-y-4">
          <GlassCard className="p-5">
            <Sparkles className="h-6 w-6 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-black text-slate-950 dark:text-white">AI coach note</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Finish one node, write a short note, and connect it to a project. SkillForge rewards proof of practice, not just passive completion.
            </p>
            <PremiumButton to="/ai-roadmap" className="mt-5 w-full" icon={Sparkles}>
              Ask for sprint plan
            </PremiumButton>
          </GlassCard>

          <GlassCard className="p-5">
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Database sync</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Node completion calls the progress service. In demo mode it persists locally; with a Node API it writes to MongoDB.
            </p>
            <div className="mt-4 rounded-lg bg-slate-950 p-4 text-xs font-semibold leading-6 text-cyan-100">
              PUT /roadmaps/{roadmap.slug}/progress
            </div>
          </GlassCard>
        </aside>
      </section>
    </motion.div>
  )
}
