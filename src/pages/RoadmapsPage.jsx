import {
  BarChart3,
  Brain,
  Bookmark,
  CheckCircle2,
  Code,
  Database,
  Layers,
  Map,
  Shield,
  Smartphone,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import GlassCard from '../components/common/GlassCard'
import SearchInput from '../components/common/SearchInput'
import { pageTransition } from '../animations/pageTransitions'
import { roadmapCategories, roadmaps } from '../data/roadmaps'
import { useSkillForgeStore } from '../store/useSkillForgeStore'
import { cn } from '../utils/formatters'

const categoryIcons = {
  frontend: Code,
  backend: Database,
  'ai-ml': Brain,
  devops: Layers,
  mobile: Smartphone,
  'cyber-security': Shield,
  'data-science': BarChart3,
}

const getRoadmapCompletion = (roadmap, completed) => {
  if (!roadmap.skills) return 0
  return Math.round(((completed?.length || 0) / roadmap.skills) * 100)
}

export default function RoadmapsPage() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const selectedCategory = params.get('category') || 'all'
  const bookmarkedRoadmaps = useSkillForgeStore((state) => state.bookmarkedRoadmaps)
  const roadmapsProgress = useSkillForgeStore((state) => state.roadmapsProgress)
  const toggleRoadmapBookmark = useSkillForgeStore((state) => state.toggleRoadmapBookmark)

  const filteredRoadmaps = useMemo(
    () =>
      roadmaps.filter((roadmap) => {
        const matchesCategory = selectedCategory === 'all' || roadmap.category === selectedCategory
        const matchesQuery = `${roadmap.title} ${roadmap.summary} ${roadmap.difficulty}`
          .toLowerCase()
          .includes(query.toLowerCase())
        return matchesCategory && matchesQuery
      }),
    [query, selectedCategory],
  )

  return (
    <motion.div {...pageTransition} className="space-y-6">
      <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
        <div>
          <p className="text-sm font-bold uppercase text-violet-600 dark:text-cyan-300">Roadmaps</p>
          <h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white md:text-4xl">
            Structured paths from fundamentals to proof of work.
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
            Expand nodes, mark milestones complete, and keep your roadmap progress ready for the backend API.
          </p>
        </div>
        <div className="w-full xl:w-[360px]">
          <SearchInput value={query} onChange={setQuery} placeholder="Search technologies or skills" />
        </div>
      </div>

      <GlassCard className="p-3">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-soft">
          <button
            type="button"
            onClick={() => setParams({})}
            className={cn(
              'flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 text-sm font-bold transition-all premium-focus',
              selectedCategory === 'all'
                ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                : 'text-slate-600 hover:bg-slate-950/5 dark:text-slate-300 dark:hover:bg-white/10',
            )}
          >
            <Map className="h-4 w-4" aria-hidden="true" />
            All roadmaps
          </button>
          {roadmapCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers
            const isActive = selectedCategory === category.id

            return (
              <button
                type="button"
                key={category.id}
                onClick={() => setParams({ category: category.id })}
                className={cn(
                  'flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 text-sm font-bold transition-all premium-focus',
                  isActive
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                    : 'text-slate-600 hover:bg-slate-950/5 dark:text-slate-300 dark:hover:bg-white/10',
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {category.title}
              </button>
            )
          })}
        </div>
      </GlassCard>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredRoadmaps.map((roadmap, index) => {
          const category = roadmapCategories.find((item) => item.id === roadmap.category)
          const completion = getRoadmapCompletion(roadmap, roadmapsProgress[roadmap.slug])
          const isBookmarked = bookmarkedRoadmaps.includes(roadmap.slug)

          return (
            <GlassCard key={roadmap.slug} interactive delay={index * 0.03} className="flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <div className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${roadmap.accent} text-white`}>
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <button
                  type="button"
                  onClick={() => toggleRoadmapBookmark(roadmap.slug)}
                  className={cn(
                    'grid h-10 w-10 place-items-center rounded-lg transition-colors premium-focus',
                    isBookmarked
                      ? 'bg-violet-500 text-white'
                      : 'bg-slate-950/5 text-slate-500 hover:text-slate-950 dark:bg-white/10 dark:text-slate-300 dark:hover:text-white',
                  )}
                  aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark roadmap'}
                  title={isBookmarked ? 'Remove bookmark' : 'Bookmark roadmap'}
                >
                  <Bookmark className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <p className="mt-5 text-xs font-bold uppercase text-violet-600 dark:text-cyan-300">
                {category?.title}
              </p>
              <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{roadmap.title}</h2>
              <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">{roadmap.summary}</p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-slate-950/[0.03] p-3 dark:bg-white/[0.05]">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Level</p>
                  <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">{roadmap.difficulty}</p>
                </div>
                <div className="rounded-lg bg-slate-950/[0.03] p-3 dark:bg-white/[0.05]">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Duration</p>
                  <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">{roadmap.duration}</p>
                </div>
                <div className="rounded-lg bg-slate-950/[0.03] p-3 dark:bg-white/[0.05]">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Skills</p>
                  <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">{roadmap.skills}</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-600 dark:text-slate-300">Completion</span>
                  <span className="text-slate-950 dark:text-white">{completion}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <div className={`h-full rounded-full bg-gradient-to-r ${roadmap.accent}`} style={{ width: `${completion}%` }} />
                </div>
              </div>
              <Link
                to={`/roadmaps/${roadmap.slug}`}
                className="premium-focus mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
              >
                Open roadmap
              </Link>
            </GlassCard>
          )
        })}
      </section>
    </motion.div>
  )
}
