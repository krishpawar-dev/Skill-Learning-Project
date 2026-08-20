import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/formatters'

const variants = {
  primary:
    'bg-premium-button text-white shadow-glow hover:shadow-cyan border-transparent',
  secondary:
    'border-slate-200/80 bg-white/68 text-slate-900 hover:border-violet-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:border-cyan-300/50 dark:hover:bg-white/[0.09]',
  ghost:
    'border-transparent bg-transparent text-slate-700 hover:bg-slate-950/5 dark:text-slate-200 dark:hover:bg-white/10',
}

export default function PremiumButton({
  children,
  icon: Icon,
  trailingIcon: TrailingIcon,
  to,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classNames = cn(
    'premium-focus inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300',
    variants[variant],
    className,
  )

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {TrailingIcon && <TrailingIcon className="h-4 w-4" aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={classNames} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={classNames}
      {...props}
    >
      {content}
    </motion.button>
  )
}
