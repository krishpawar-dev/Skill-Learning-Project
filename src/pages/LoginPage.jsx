import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, LockKeyhole, Mail, UserRound, ArrowRight, ShieldCheck } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Logo from '../components/common/Logo.jsx'
import ThemeToggle from '../components/common/ThemeToggle.jsx'
import { pageTransition } from '../animations/pageTransitions.js'
import { useSkillForgeStore } from '../store/useSkillForgeStore'

export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const signIn = useSkillForgeStore((state) => state.signIn)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const username = form.username.trim().replace(/^@/, '')
    const email = form.email.trim().toLowerCase()

    if (!username || !email || !form.password) {
      toast.error('Please enter your username, email and password.')
      return
    }

    setLoading(true)

    // Demo authentication: username is now the display name for the active SkillForge account.
    // Replace this validation with api.auth.login(...) when the backend is connected.
    signIn(email, username)

    const storage = remember ? localStorage : sessionStorage
    if (!remember) localStorage.removeItem('skillforge-auth')
    storage.setItem(
      'skillforge-auth',
      JSON.stringify({
        email,
        loggedIn: true,
        loggedInAt: new Date().toISOString(),
      }),
    )

    window.setTimeout(() => {
      toast.success('Welcome back to SkillForge!')
      navigate('/dashboard')
    }, 300)
  }

  return (
    <motion.main
      {...pageTransition}
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/20" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/15" />

      <div className="absolute left-4 right-4 top-5 mx-auto flex max-w-7xl items-center justify-between sm:left-6 sm:right-6 lg:left-8 lg:right-8">
        <Logo />
        <ThemeToggle />
      </div>

      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-white/60 bg-white/65 shadow-soft-light backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-soft-dark lg:grid-cols-[0.9fr_1.1fr]">
        <section className="relative hidden overflow-hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,.42),transparent_38%),radial-gradient(circle_at_90%_70%,rgba(34,211,238,.25),transparent_35%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-cyan-200">
              <ShieldCheck className="h-4 w-4" />
              Secure learning workspace
            </span>
            <h1 className="mt-8 max-w-md font-display text-4xl font-black leading-tight">
              Keep forging your next skill.
            </h1>
            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Sign in to continue your roadmaps, quizzes, XP, streaks, and AI coaching from one focused workspace.
            </p>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-3">
            {[
              ['XP', 'Track progress'],
              ['AI', 'Personalize learning'],
              ['27+', 'Deep roadmaps'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                <p className="text-xl font-black">{value}</p>
                <p className="mt-1 text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            <div>
              <p className="text-sm font-bold text-violet-500 dark:text-cyan-300">Welcome back</p>
              <h2 className="mt-2 font-display text-3xl font-black text-slate-950 dark:text-white">
                Sign in to SkillForge
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Continue where you left off and keep your learning streak alive.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Username
                </span>
                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type="text"
                    name="username"
                    autoComplete="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    className="premium-focus h-12 w-full rounded-xl border border-slate-200/80 bg-white/70 pl-10 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-cyan-300/60"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Email address
                </span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="premium-focus h-12 w-full rounded-xl border border-slate-200/80 bg-white/70 pl-10 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-cyan-300/60"
                  />
                </div>
              </label>

              <label className="block">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Password</span>
                  <button
                    type="button"
                    onClick={() => toast('Password reset will connect to your backend later.')}
                    className="premium-focus rounded text-xs font-bold text-violet-500 hover:text-violet-600 dark:text-cyan-300"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="current-password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="premium-focus h-12 w-full rounded-xl border border-slate-200/80 bg-white/70 pl-10 pr-12 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-cyan-300/60"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword((current) => !current)}
                    className="premium-focus absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </label>

              <label className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 accent-violet-500"
                />
                Remember me on this device
              </label>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                className="premium-focus flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-premium-button px-5 py-3 text-sm font-bold text-white shadow-glow transition-all hover:shadow-cyan disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Signing in...' : 'Sign in'}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </motion.button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              <span className="text-xs font-semibold text-slate-400">OR</span>
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
            </div>

            <Link
              to="/"
              className="premium-focus flex min-h-11 w-full items-center justify-center rounded-xl border border-slate-200/80 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:hover:border-cyan-300/50"
            >
              Explore SkillForge first
            </Link>

            <p className="mt-6 text-center text-xs leading-5 text-slate-400">
              Demo mode is enabled: each email + username combination is saved to the local profile. Connect the submit handler to your authentication API for production.
            </p>
          </div>
        </section>
      </div>
    </motion.main>
  )
}
