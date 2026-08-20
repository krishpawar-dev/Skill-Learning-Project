export const pageTransition = {
  initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(8px)' },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
}
