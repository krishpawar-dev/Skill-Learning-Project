import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Code,
  Database,
  Flame,
  Layers,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlassCard from '../components/common/GlassCard'
import Logo from '../components/common/Logo'
import PremiumButton from '../components/common/PremiumButton'
import SectionHeader from '../components/common/SectionHeader'
import ThemeToggle from '../components/common/ThemeToggle'
import { testimonials } from '../data/dashboard'
import { featuredRoadmaps, roadmapCategories } from '../data/roadmaps'
import { fadeUp, pageTransition, staggerContainer } from '../animations/pageTransitions'

const features = [
  {
    icon: Brain,
    title: 'AI roadmaps that adapt',
    description: 'Turn your target role, timeline, and current level into weekly milestones.',
  },
  {
    icon: BarChart3,
    title: 'Progress that feels alive',
    description: 'XP, streaks, skill bars, and dashboards keep your learning loop visible.',
  },
  {
    icon: Shield,
    title: 'Production-minded paths',
    description: 'Every roadmap favors projects, testing, architecture, and interview proof.',
  },
]

const categoryIcons = {
  frontend: Code,
  backend: Database,
  'ai-ml': Brain,
  devops: Layers,
  mobile: Rocket,
  'cyber-security': Shield,
  'data-science': BarChart3,
}

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/60 shadow-cyan"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 53) % 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.18, 0.72, 0.18],
            scale: [1, 1.45, 1],
          }}
          transition={{
            duration: 4 + (index % 5),
            repeat: Infinity,
            delay: index * 0.18,
          }}
        />
      ))}
    </div>
  )
}

function ProductPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.75, delay: 0.15 }}
      className="relative mx-auto max-w-5xl"
    >
      <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/16" />
      <div className="glass-panel relative grid overflow-hidden rounded-lg p-3 lg:grid-cols-[240px_1fr]">
        <aside className="hidden border-r border-slate-200/70 p-4 dark:border-white/10 lg:block">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          {['Dashboard', 'Roadmaps', 'Quizzes', 'AI Roadmap'].map((item, index) => (
            <div
              key={item}
              className={`mb-2 rounded-lg px-3 py-2 text-sm font-semibold ${
                index === 0
                  ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="p-4 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-4">
            {[
              ['Total XP', '12.8K', Zap],
              ['Streak', '32d', Flame],
              ['Skills', '86', CheckCircle2],
              ['Level', '18', Star],
            ].map(([label, value, Icon]) => (
              <div key={label} className="glass-subtle rounded-lg p-4">
                <Icon className="h-4 w-4 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
                <p className="mt-3 text-xl font-black text-slate-950 dark:text-white">{value}</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="glass-subtle rounded-lg p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-950 dark:text-white">Weekly XP</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Animated learning velocity</p>
                </div>
                <span className="rounded-lg bg-emerald-400/12 px-3 py-1 text-xs font-bold text-emerald-500">
                  +18%
                </span>
              </div>
              <div className="flex h-32 items-end gap-2">
                {[44, 66, 52, 78, 64, 94, 82].map((height, index) => (
                  <motion.div
                    key={height}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.7, delay: index * 0.06 }}
                    className="flex-1 rounded-t-lg bg-gradient-to-t from-violet-500 via-cyan-400 to-pink-400"
                  />
                ))}
              </div>
            </div>
            <div className="glass-subtle rounded-lg p-5">
              <p className="text-sm font-bold text-slate-950 dark:text-white">AI plan</p>
              <div className="mt-4 space-y-3">
                {['React architecture', 'Project sprint', 'Interview loop'].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-400/14 text-xs font-black text-cyan-500">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <motion.main {...pageTransition} className="relative z-10 min-h-screen overflow-hidden">
      <FloatingParticles />
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300 md:flex">
          <a href="#features" className="hover:text-slate-950 dark:hover:text-white">
            Features
          </a>
          <a href="#roadmaps" className="hover:text-slate-950 dark:hover:text-white">
            Roadmaps
          </a>
          <a href="#testimonials" className="hover:text-slate-950 dark:hover:text-white">
            Stories
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <PremiumButton to="/login" variant="secondary" trailingIcon={ArrowRight} className="hidden sm:inline-flex">
            Open app
          </PremiumButton>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div variants={fadeUp} className="mx-auto mb-5 inline-flex items-center gap-2 rounded-lg border border-violet-300/30 bg-white/58 px-3 py-1.5 text-sm font-bold text-violet-600 backdrop-blur-xl dark:border-cyan-300/20 dark:bg-white/[0.06] dark:text-cyan-200">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Personalized roadmaps, quizzes, XP, and AI coaching
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-black leading-[1.05] text-slate-950 dark:text-white md:text-7xl"
          >
            Forge Your Tech Skills With AI
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            SkillForge blends structured roadmaps, daily non-repeating quizzes, and an AI career assistant into one calm learning operating system.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PremiumButton to="/login" icon={Rocket} trailingIcon={ArrowRight}>
              Start forging
            </PremiumButton>
            <PremiumButton to="/ai-roadmap" icon={Brain} variant="secondary">
              Ask AI assistant
            </PremiumButton>
          </motion.div>
        </motion.div>

        <div className="mt-14">
          <ProductPreview />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-3">
          {[
            ['30K+', 'practice questions generated and rotated'],
            ['100 XP', 'level-up rhythm for every milestone'],
            ['27+', 'deep roadmaps across modern roles'],
          ].map(([value, label]) => (
            <GlassCard key={value} className="p-5 text-center">
              <p className="text-3xl font-black text-slate-950 dark:text-white">{value}</p>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Learning engine"
          title="A premium command center for serious skill growth"
          description="Minimal surfaces, rich feedback, and just enough game mechanics to keep momentum high."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <GlassCard key={feature.title} interactive delay={index * 0.06} className="p-6">
              <feature.icon className="h-7 w-7 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="roadmaps" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Categories"
          title="Choose a lane, then go deep"
          description="From fundamentals to role-ready capstones, every track is built around visible progress."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {roadmapCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers

            return (
              <Link key={category.id} to={`/roadmaps?category=${category.id}`} className="group premium-focus rounded-lg">
                <GlassCard interactive className="h-full p-5">
                  <div className={`grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br ${category.accent} text-white`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{category.summary}</p>
                </GlassCard>
              </Link>
            )
          })}
        </div>

        <div className="mt-14">
          <SectionHeader eyebrow="Trending" title="Roadmaps learners are opening this week" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {featuredRoadmaps.map((roadmap) => (
              <Link key={roadmap.slug} to={`/roadmaps/${roadmap.slug}`} className="premium-focus rounded-lg">
                <GlassCard interactive className="h-full p-5">
                  <div className={`mb-5 h-1.5 rounded-full bg-gradient-to-r ${roadmap.accent}`} />
                  <h3 className="text-lg font-black text-slate-950 dark:text-white">{roadmap.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{roadmap.duration} - {roadmap.skills} skills</p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader align="center" eyebrow="Stories" title="Designed for the learner who wants signal" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard key={item.name} className="p-6">
              <p className="leading-7 text-slate-700 dark:text-slate-200">"{item.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-premium-button text-sm font-black text-white">
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <p className="font-bold text-slate-950 dark:text-white">{item.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200/70 px-4 py-8 dark:border-white/10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
          <Logo />
          <p>Built for focused learning, daily practice, and proof-of-work portfolios.</p>
        </div>
      </footer>
    </motion.main>
  )
}
