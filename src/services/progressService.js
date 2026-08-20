import { api } from './apiClient'

export const saveRoadmapProgress = async ({ slug, completedNodes }) => {
  try {
    return await api.roadmaps.saveProgress(slug, completedNodes)
  } catch (error) {
    return {
      ok: true,
      source: 'local-demo',
      message: error.message,
      completedNodes,
    }
  }
}

export const saveQuizAttempt = async (attempt) => {
  try {
    return await api.quizzes.submitAttempt(attempt)
  } catch (error) {
    return {
      ok: true,
      source: 'local-demo',
      message: error.message,
      attempt,
    }
  }
}
