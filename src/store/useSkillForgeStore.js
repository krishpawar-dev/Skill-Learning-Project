import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { assistantHistorySeed } from '../data/assistantPrompts'
import { badgeCatalog, notifications as notificationSeed, recentActivities } from '../data/dashboard'
import { getLevelFromXp, todayKey } from '../utils/formatters'

const initialUser = {
  name: 'Krish Pawar',
  username: 'krish.forges',
  email: 'krish@example.com',
  role: 'Full-stack learner',
  avatar: 'KP',
  xp: 860,
  streak: 12,
  completedSkills: 38,
  quizzesTaken: 24,
}

const createUserFromEmail = (email) => {
  const normalizedEmail = email.trim().toLowerCase()
  const localPart = normalizedEmail.split('@')[0] || 'learner'
  const words = localPart
    .replace(/[._-]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  const name = words.join(' ') || 'SkillForge Learner'
  const usernameBase = localPart.replace(/[^a-z0-9]/gi, '').toLowerCase() || 'learner'
  const avatar = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return {
    ...initialUser,
    name,
    username: `${usernameBase}.forge`,
    email: normalizedEmail,
    avatar: avatar || 'SF',
  }
}

const unique = (items) => [...new Set(items)]

const withChatTimestamps = (chat) => ({
  ...chat,
  createdAt: chat.createdAt || Date.now(),
  updatedAt: chat.updatedAt || chat.createdAt || Date.now(),
  messages: (chat.messages || []).map((message, index) => ({
    ...message,
    timestamp: message.timestamp || chat.createdAt || Date.now() + index,
  })),
})

const evaluateBadges = ({ user, completedQuizzes, roadmapsProgress, chats }) => {
  const earned = ['streak-master', 'quiz-ace', 'explorer']

  if (user.xp >= 1000) earned.push('xp-hunter')
  if (getLevelFromXp(user.xp) >= 10) earned.push('level-10')
  if (chats.some((chat) => chat.bookmarked)) earned.push('resume-pro')
  if (Object.keys(roadmapsProgress).length > 4) earned.push('explorer')
  if (completedQuizzes.some((quiz) => quiz.score >= 80)) earned.push('quiz-ace')

  return unique(earned)
}

const createActivity = (title, meta, type) => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  title,
  meta,
  type,
})

export const useSkillForgeStore = create(
  persist(
    (set, get) => ({
      user: initialUser,
      accountsByEmail: {
        [initialUser.email]: initialUser,
      },
      roadmapsProgress: {
        react: ['react-basics-jsx', 'react-basics-components', 'intermediate-react-hooks'],
        javascript: ['javascript-basics-variables', 'javascript-basics-functions'],
      },
      roadmapViews: ['react', 'javascript', 'docker'],
      bookmarkedRoadmaps: ['react', 'machine-learning'],
      completedQuizzes: [
        { category: 'React', score: 84, xp: 100, date: '2026-05-21' },
        { category: 'JavaScript', score: 76, xp: 70, date: '2026-05-22' },
      ],
      activities: recentActivities,
      notifications: notificationSeed,
      chats: assistantHistorySeed.map(withChatTimestamps),
      earnedBadges: ['streak-master', 'quiz-ace', 'explorer'],

      addXp: (amount, reason = 'Learning progress') => {
        set((state) => {
          const user = {
            ...state.user,
            xp: state.user.xp + amount,
          }
          const nextState = {
            ...state,
            user,
            activities: [createActivity(reason, `+${amount} XP`, 'xp'), ...state.activities].slice(0, 8),
          }

          return {
            user,
            activities: nextState.activities,
            earnedBadges: evaluateBadges(nextState),
          }
        })
      },

      toggleRoadmapBookmark: (slug) => {
        set((state) => ({
          bookmarkedRoadmaps: state.bookmarkedRoadmaps.includes(slug)
            ? state.bookmarkedRoadmaps.filter((item) => item !== slug)
            : [slug, ...state.bookmarkedRoadmaps],
        }))
      },

      recordRoadmapView: (slug) => {
        set((state) => ({
          roadmapViews: unique([slug, ...state.roadmapViews]).slice(0, 8),
        }))
      },

      toggleRoadmapStep: (slug, stepId) => {
        set((state) => {
          const current = state.roadmapsProgress[slug] || []
          const nextSteps = current.includes(stepId)
            ? current.filter((item) => item !== stepId)
            : [...current, stepId]
          const user = {
            ...state.user,
            xp: nextSteps.length > current.length ? state.user.xp + 15 : state.user.xp,
            completedSkills:
              nextSteps.length > current.length
                ? state.user.completedSkills + 1
                : Math.max(0, state.user.completedSkills - 1),
          }
          const nextState = {
            ...state,
            user,
            roadmapsProgress: {
              ...state.roadmapsProgress,
              [slug]: nextSteps,
            },
            activities:
              nextSteps.length > current.length
                ? [
                  createActivity('Roadmap node completed', '+15 XP', 'roadmap'),
                  ...state.activities,
                ].slice(0, 8)
                : state.activities,
          }

          return {
            user,
            roadmapsProgress: nextState.roadmapsProgress,
            activities: nextState.activities,
            earnedBadges: evaluateBadges(nextState),
          }
        })
      },

      completeQuiz: ({ category, score, xp }) => {
        set((state) => {
          const user = {
            ...state.user,
            xp: state.user.xp + xp,
            quizzesTaken: state.user.quizzesTaken + 1,
            streak: state.user.streak + 1,
          }
          const completedQuizzes = [
            { category, score, xp, date: todayKey() },
            ...state.completedQuizzes,
          ].slice(0, 20)
          const nextState = {
            ...state,
            user,
            completedQuizzes,
            activities: [
              createActivity(`${category} quiz completed`, `Score ${score}%`, 'quiz'),
              ...state.activities,
            ].slice(0, 8),
          }

          return {
            user,
            completedQuizzes,
            activities: nextState.activities,
            earnedBadges: evaluateBadges(nextState),
          }
        })
      },

      markNotificationRead: (id) => {
        set((state) => ({
          notifications: state.notifications.map((item) =>
            item.id === id ? { ...item, read: true } : item,
          ),
        }))
      },

      addChatMessage: (threadId, message) => {
        const timestamp = Date.now()
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === threadId
              ? {
                  ...chat,
                  updatedAt: timestamp,
                  messages: [...chat.messages, { ...message, timestamp }],
                }
              : chat,
          ),
        }))
      },

      createChat: (title) => {
        const id = `chat-${Date.now()}`
        const timestamp = Date.now()
        set((state) => ({
          chats: [
            {
              id,
              title,
              createdAt: timestamp,
              updatedAt: timestamp,
              messages: [
                {
                  role: 'assistant',
                  content: 'Ready when you are. Share your goal and I will forge the roadmap.',
                  timestamp,
                },
              ],
              bookmarked: false,
            },
            ...state.chats,
          ],
        }))
        return id
      },

      renameChat: (id, title) => {
        const nextTitle = title.trim()
        if (!nextTitle) return
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === id ? { ...chat, title: nextTitle, updatedAt: Date.now() } : chat,
          ),
        }))
      },

      deleteChat: (id) => {
        set((state) => ({
          chats: state.chats.filter((chat) => chat.id !== id),
        }))
      },

      toggleChatBookmark: (id) => {
        set((state) => {
          const chats = state.chats.map((chat) =>
            chat.id === id ? { ...chat, bookmarked: !chat.bookmarked } : chat,
          )
          const nextState = { ...state, chats }

          return {
            chats,
            earnedBadges: evaluateBadges(nextState),
          }
        })
      },

      signIn: (email, username) => {
        const normalizedEmail = email.trim().toLowerCase()
        const normalizedUsername = username?.trim().replace(/^@/, '')
        if (!normalizedEmail || !normalizedUsername) return

        set((state) => {
          const currentEmail = state.user?.email
          const accounts = {
            ...state.accountsByEmail,
            ...(currentEmail ? { [currentEmail]: state.user } : {}),
          }
          const existingUser = accounts[normalizedEmail]
          const baseUser = existingUser || createUserFromEmail(normalizedEmail)
          const avatar = normalizedUsername
            .split(/[\s._-]+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0])
            .join('')
            .toUpperCase()

          // The username entered at login is the single source of truth for
          // the dashboard greeting and profile display name.
          const user = {
            ...baseUser,
            name: normalizedUsername,
            username: normalizedUsername,
            email: normalizedEmail,
            avatar: avatar || 'SF',
          }

          return {
            user,
            accountsByEmail: {
              ...accounts,
              [normalizedEmail]: user,
            },
          }
        })
      },

      signOut: () => {
        set({ user: initialUser })
      },

      updateProfile: (profile) => {
        set((state) => {
          const nextUser = {
            ...state.user,
            ...profile,
          }

          if (profile.name) {
            const avatar = profile.name
              .split(' ')
              .filter(Boolean)
              .slice(0, 2)
              .map((word) => word[0])
              .join('')
              .toUpperCase()
            if (avatar) nextUser.avatar = avatar
          }

          return {
            user: nextUser,
            accountsByEmail: {
              ...state.accountsByEmail,
              [nextUser.email]: nextUser,
            },
          }
        })
      },

      getEarnedBadges: () => {
        const state = get()
        return badgeCatalog.filter((badge) => state.earnedBadges.includes(badge.id))
      },
    }),
    {
      name: 'skillforge-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        accountsByEmail: state.accountsByEmail,
        roadmapsProgress: state.roadmapsProgress,
        roadmapViews: state.roadmapViews,
        bookmarkedRoadmaps: state.bookmarkedRoadmaps,
        completedQuizzes: state.completedQuizzes,
        activities: state.activities,
        notifications: state.notifications,
        chats: state.chats,
        earnedBadges: state.earnedBadges,
      }),
    },
  ),
)
