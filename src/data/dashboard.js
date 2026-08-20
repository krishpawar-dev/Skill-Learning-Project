export const weeklyXp = [
  { day: 'Mon', xp: 80, quizzes: 2 },
  { day: 'Tue', xp: 120, quizzes: 3 },
  { day: 'Wed', xp: 95, quizzes: 2 },
  { day: 'Thu', xp: 180, quizzes: 4 },
  { day: 'Fri', xp: 150, quizzes: 3 },
  { day: 'Sat', xp: 220, quizzes: 5 },
  { day: 'Sun', xp: 170, quizzes: 3 },
]

export const badgeCatalog = [
  {
    id: 'streak-master',
    title: 'Streak Master',
    description: '7 active learning days',
    tone: 'from-orange-400 to-pink-500',
  },
  {
    id: 'xp-hunter',
    title: 'XP Hunter',
    description: 'Earn 1,000 XP',
    tone: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'quiz-ace',
    title: 'Quiz Ace',
    description: 'Score 80% in any quiz',
    tone: 'from-violet-400 to-purple-600',
  },
  {
    id: 'explorer',
    title: 'Explorer',
    description: 'Open 5 roadmaps',
    tone: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'resume-pro',
    title: 'Resume Pro',
    description: 'Build a resume plan',
    tone: 'from-fuchsia-400 to-rose-500',
  },
  {
    id: 'level-10',
    title: 'Level 10',
    description: 'Reach level 10',
    tone: 'from-amber-300 to-indigo-500',
  },
]

export const recentActivities = [
  { id: 1, title: 'React Hooks quiz completed', meta: '+80 XP', type: 'quiz' },
  { id: 2, title: 'Streak Master badge earned', meta: 'Achievement', type: 'badge' },
  { id: 3, title: 'JavaScript roadmap phase finished', meta: '+120 XP', type: 'roadmap' },
]

export const skillOverview = [
  { skill: 'Frontend', progress: 76, tone: 'bg-cyan-400' },
  { skill: 'Backend', progress: 44, tone: 'bg-violet-400' },
  { skill: 'AI/ML', progress: 31, tone: 'bg-pink-400' },
  { skill: 'DevOps', progress: 52, tone: 'bg-emerald-400' },
]

export const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Frontend Engineer',
    quote:
      'SkillForge made my roadmap feel like a living plan, not a spreadsheet. The daily XP loop kept me honest.',
  },
  {
    name: 'Mira Shah',
    role: 'CS Student',
    quote:
      'The AI assistant turned my placement prep into weekly milestones with projects I could actually ship.',
  },
  {
    name: 'Rohan Iyer',
    role: 'Backend Developer',
    quote:
      'The dashboards are calm, but motivating. I always know what to do next without feeling overloaded.',
  },
]

export const notifications = [
  { id: 'n1', title: 'Daily React quiz is ready', read: false },
  { id: 'n2', title: 'Your Docker roadmap is 42% done', read: false },
  { id: 'n3', title: 'New AI/ML interview sprint added', read: true },
]
