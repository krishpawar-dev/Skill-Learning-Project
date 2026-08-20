import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import GlassCard from '../components/common/GlassCard'
import PremiumButton from '../components/common/PremiumButton'
import { pageTransition } from '../animations/pageTransitions'

export default function NotFoundPage() {
  return (
    <motion.main {...pageTransition} className="relative z-10 grid min-h-screen place-items-center px-4">
      <GlassCard className="max-w-xl p-8 text-center">
        <p className="text-sm font-bold uppercase text-violet-600 dark:text-cyan-300">404</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950 dark:text-white">That path has not been forged yet.</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Head back to the dashboard and keep the learning loop moving.
        </p>
        <PremiumButton to="/dashboard" icon={ChevronLeft} className="mt-6">
          Back to dashboard
        </PremiumButton>
      </GlassCard>
    </motion.main>
  )
}
