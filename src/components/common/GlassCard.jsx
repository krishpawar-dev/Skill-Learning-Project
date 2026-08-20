import { motion } from 'framer-motion'
import { cn } from '../../utils/formatters'

export default function GlassCard({
  children,
  className = '',
  interactive = false,
  delay = 0,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.34, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={interactive ? { y: -4 } : undefined}
      className={cn(
        'glass-panel rounded-lg p-5',
        interactive &&
          'transition-all duration-300 hover:border-cyan-300/40 hover:shadow-cyan dark:hover:bg-white/[0.08]',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
