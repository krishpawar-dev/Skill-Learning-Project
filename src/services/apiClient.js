const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export const apiRequest = async (path, options = {}) => {
  if (!API_BASE_URL) {
    throw new ApiError('API base URL is not configured. Using local demo data.', 0)
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new ApiError(`Request failed with ${response.status}`, response.status)
  }

  return response.json()
}

export const api = {
  auth: {
    login: (payload) => apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
    google: (payload) =>
      apiRequest('/auth/google', { method: 'POST', body: JSON.stringify(payload) }),
  },
  roadmaps: {
    saveProgress: (slug, completedNodes) =>
      apiRequest(`/roadmaps/${slug}/progress`, {
        method: 'PUT',
        body: JSON.stringify({ completedNodes }),
      }),
    bookmarks: (slug) =>
      apiRequest(`/roadmaps/${slug}/bookmark`, {
        method: 'POST',
      }),
  },
  quizzes: {
    getDailyQuestions: (category) => apiRequest(`/quizzes/daily?category=${category}`),
    submitAttempt: (payload) =>
      apiRequest('/quizzes/attempts', { method: 'POST', body: JSON.stringify(payload) }),
  },
  ai: {
    generateRoadmap: (payload) =>
      apiRequest('/ai/roadmap', { method: 'POST', body: JSON.stringify(payload) }),
  },
}
