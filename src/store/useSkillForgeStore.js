import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { assistantHistorySeed } from '../data/assistantPrompts'
import { badgeCatalog, notifications as notificationSeed, recentActivities } from '../data/dashboard'
import { getLevelFromXp, todayKey } from '../utils/formatters'

const initialUser = {
  name: 'Krish Pawar',
  username: 'krish.forges',
  role: 'Full-stack learner',
  avatar: 'KP',
  xp: 860,
  streak: 12,
  completedSkills: 38,
  quizzesTaken: 24,
}

const unique = (items) => [...new Set(items)]

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
      chats: assistantHistorySeed,
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
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === threadId ? { ...chat, messages: [...chat.messages, message] } : chat,
          ),
        }))
      },

      createChat: (title) => {
        const id = `chat-${Date.now()}`
        set((state) => ({
          chats: [
            {
              id,
              title,
              messages: [
                {
                  role: 'assistant',
                  content: 'Ready when you are. Share your goal and I will forge the roadmap.',
                },
              ],
              bookmarked: false,
            },
            ...state.chats,
          ],
        }))
        return id
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

      updateProfile: (profile) => {
        set((state) => ({
          user: {
            ...state.user,
            ...profile,
          },
        }))
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
