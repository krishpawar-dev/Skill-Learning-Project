import {
  BarChart3,
  Brain,
  CheckCircle2,
  Code,
  Database,
  Play,
  RefreshCcw,
  Server,
  Timer,
  Trophy,
  XCircle,
  Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import GlassCard from '../components/common/GlassCard'
import PremiumButton from '../components/common/PremiumButton'
import ProgressRing from '../components/common/ProgressRing'
import { pageTransition } from '../animations/pageTransitions'
import { leaderboard, quizCategories } from '../data/quizzes'
import { useDailyQuiz } from '../hooks/useDailyQuiz'
import { saveQuizAttempt } from '../services/progressService'
import { useSkillForgeStore } from '../store/useSkillForgeStore'
import { getDailyRotationKey } from '../utils/quizSeed'
import { getLevelProgress } from '../utils/formatters'

const categoryIcons = {
  frontend: Code,
  backend: Server,
  react: Code,
  javascript: Code,
  python: Code,
  'ai-ml': Brain,
  devops: Server,
  database: Database,
  'system-design': BarChart3,
}

export default function QuizPage() {
  const [selectedId, setSelectedId] = useState('react')
  const [session, setSession] = useState('idle')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(180)
  const submittedRef = useRef(false)
  const completeQuiz = useSkillForgeStore((state) => state.completeQuiz)
  const user = useSkillForgeStore((state) => state.user)
  const level = getLevelProgress(user.xp)
  const category = quizCategories.find((item) => item.id === selectedId) || quizCategories[0]
  const questions = useDailyQuiz(category.id, category.questions)
  const currentQuestion = questions[currentIndex]
  const progress = questions.length ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0
  const selectedAnswer = answers[currentIndex]

  const result = useMemo(() => {
    const correct = answers.filter((answer, index) => answer === questions[index]?.answer).length
    const score = questions.length ? Math.round((correct / questions.length) * 100) : 0
    const xp = Math.round((category.xp * score) / 100)
    return { correct, score, xp }
  }, [answers, category.xp, questions])

  const finishQuiz = useCallback((nextAnswers = answers) => {
    if (submittedRef.current) return
    submittedRef.current = true
    const correct = nextAnswers.filter((answer, index) => answer === questions[index]?.answer).length
    const score = questions.length ? Math.round((correct / questions.length) * 100) : 0
    const xp = Math.round((category.xp * score) / 100)

    setSession('finished')
    completeQuiz({ category: category.title, score, xp })
    saveQuizAttempt({
      category: category.id,
      score,
      xp,
      answers: nextAnswers,
      seed: getDailyRotationKey(category.id),
    })
    toast.success(`Quiz complete: ${score}% and +${xp} XP`)
  }, [answers, category.id, category.title, category.xp, completeQuiz, questions])

  useEffect(() => {
    if (session !== 'active') return undefined
    if (timeLeft <= 0) {
      finishQuiz(answers)
      return undefined
    }

    const timer = window.setTimeout(() => setTimeLeft((value) => value - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [answers, finishQuiz, session, timeLeft])

  const startQuiz = () => {
    submittedRef.current = false
    setSession('active')
    setCurrentIndex(0)
    setAnswers([])
    setTimeLeft(180)
  }

  const resetQuiz = () => {
    submittedRef.current = false
    setSession('idle')
    setCurrentIndex(0)
    setAnswers([])
    setTimeLeft(180)
  }

  const handleAnswer = (option) => {
    if (selectedAnswer || session !== 'active') return

    const nextAnswers = [...answers]
    nextAnswers[currentIndex] = option
    setAnswers(nextAnswers)

    window.setTimeout(() => {
      if (currentIndex >= questions.length - 1) {
        finishQuiz(nextAnswers)
      } else {
        setCurrentIndex((index) => index + 1)
      }
    }, 650)
  }

  return (
    <motion.div {...pageTransition} className="space-y-6">
      <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
        <div>
          <p className="text-sm font-bold uppercase text-violet-600 dark:text-cyan-300">Quizzes</p>
          <h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white md:text-4xl">
            Daily rotating quizzes with XP rewards.
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
            Each category uses a date-based seed so the same learner sees a fresh ordered set every day.
          </p>
        </div>
        <GlassCard className="flex items-center gap-4 p-4">
          <ProgressRing value={level.percent} size={76} stroke={7} label={`Lv ${level.level}`} />
          <div>
            <p className="font-black text-slate-950 dark:text-white">{user.xp} XP</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{level.needed} XP to next level</p>
          </div>
        </GlassCard>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {quizCategories.map((item, index) => {
          const Icon = categoryIcons[item.id] || Trophy
          const isActive = selectedId === item.id

          return (
            <GlassCard
              key={item.id}
              interactive
              delay={index * 0.02}
              className={`p-5 ${isActive ? 'border-violet-300/60 dark:border-cyan-300/50' : ''}`}
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedId(item.id)
                  resetQuiz()
                }}
                className="w-full text-left premium-focus"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-premium-button text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-lg bg-slate-950/5 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    {item.difficulty}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{item.title}</h2>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-slate-950/[0.03] p-3 dark:bg-white/[0.05]">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Reward</p>
                    <p className="mt-1 font-black text-slate-950 dark:text-white">{item.xp} XP</p>
                  </div>
                  <div className="rounded-lg bg-slate-950/[0.03] p-3 dark:bg-white/[0.05]">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Questions</p>
                    <p className="mt-1 font-black text-slate-950 dark:text-white">{item.questions}</p>
                  </div>
                </div>
              </button>
            </GlassCard>
          )
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <GlassCard className="p-5 md:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">{category.title} Challenge</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Seed: {getDailyRotationKey(category.id)}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-950/[0.04] px-3 py-2 font-black text-slate-950 dark:bg-white/[0.08] dark:text-white">
              <Timer className="h-4 w-4 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
              {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </div>
          </div>

          {session === 'idle' && (
            <div className="mt-10 grid min-h-[320px] place-items-center rounded-lg border border-dashed border-slate-300/80 bg-white/40 p-8 text-center dark:border-white/10 dark:bg-white/[0.04]">
              <div>
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-premium-button text-white shadow-glow">
                  <Play className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">
                  Start today&apos;s non-repeating set.
                </h3>
                <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-300">
                  Questions are shuffled from the bank with a date seed and are ready for backend delivery from MongoDB.
                </p>
                <PremiumButton icon={Play} className="mt-6" onClick={startQuiz}>
                  Start quiz
                </PremiumButton>
              </div>
            </div>
          )}

          {session === 'active' && currentQuestion && (
            <div className="mt-8">
              <div className="mb-5">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-500 dark:text-slate-400">
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  <span className="text-slate-950 dark:text-white">{progress}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    className="h-full rounded-full bg-premium-button"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-black leading-snug text-slate-950 dark:text-white">
                {currentQuestion.question}
              </h3>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {currentQuestion.options.map((option) => {
                  const isPicked = selectedAnswer === option
                  const isCorrect = currentQuestion.answer === option
                  const shouldReveal = Boolean(selectedAnswer)

                  return (
                    <motion.button
                      type="button"
                      key={option}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      className={`flex min-h-14 items-center justify-between rounded-lg border p-4 text-left font-bold transition-all premium-focus ${
                        shouldReveal && isCorrect
                          ? 'border-emerald-400 bg-emerald-400/12 text-emerald-700 dark:text-emerald-200'
                          : shouldReveal && isPicked && !isCorrect
                            ? 'border-rose-400 bg-rose-400/12 text-rose-700 dark:text-rose-200'
                            : 'border-slate-200/80 bg-white/60 text-slate-700 hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200 dark:hover:border-cyan-300/50'
                      }`}
                    >
                      <span>{option}</span>
                      {shouldReveal && isCorrect && <CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
                      {shouldReveal && isPicked && !isCorrect && <XCircle className="h-5 w-5" aria-hidden="true" />}
                    </motion.button>
                  )
                })}
              </div>
            </div>
          )}

          {session === 'finished' && (
            <div className="mt-8 grid min-h-[360px] place-items-center rounded-lg border border-slate-200/80 bg-white/50 p-8 text-center dark:border-white/10 dark:bg-white/[0.04]">
              <div>
                <ProgressRing value={result.score} label={`${result.score}%`} sublabel="score" />
                <h3 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">
                  {result.correct}/{questions.length} correct
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  You earned {result.xp} XP. Badges unlock automatically when your score and streak cross thresholds.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <PremiumButton icon={RefreshCcw} variant="secondary" onClick={resetQuiz}>
                    Choose category
                  </PremiumButton>
                  <PremiumButton icon={Play} onClick={startQuiz}>
                    Retry set
                  </PremiumButton>
                </div>
              </div>
            </div>
          )}
        </GlassCard>

        <aside className="space-y-4">
          <GlassCard className="p-5">
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Leaderboard</h2>
            <div className="mt-5 space-y-3">
              {leaderboard.map((item, index) => (
                <div key={item.name} className="flex items-center gap-3 rounded-lg bg-slate-950/[0.03] p-3 dark:bg-white/[0.05]">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-premium-button text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-slate-950 dark:text-white">{item.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.streak} day streak</p>
                  </div>
                  <span className="text-sm font-black text-violet-600 dark:text-cyan-300">{item.xp}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <Zap className="h-6 w-6 text-violet-500 dark:text-cyan-300" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-black text-slate-950 dark:text-white">Dynamic question generator</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              The frontend uses seeded shuffling today. A real API can replace it with MongoDB question bank sampling and AI-generated distractors.
            </p>
          </GlassCard>
        </aside>
      </section>
    </motion.div>
  )
}
