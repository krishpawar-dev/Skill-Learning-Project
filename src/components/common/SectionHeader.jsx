import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase text-violet-600 dark:text-cyan-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
      )}
    </motion.div>
  )
}
