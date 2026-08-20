import { api } from './apiClient'

const fallbackPlan = (prompt) => `Here is a focused SkillForge roadmap for: "${prompt}"

Month 1: Foundations
- Week 1: Refresh core concepts, tooling, and daily problem-solving habits.
- Week 2: Build small components or scripts every day.
- Week 3: Learn the ecosystem primitives and read production examples.
- Week 4: Ship a polished mini project and document decisions.

Month 2: Job-ready skills
- Week 5: Add routing, state, data fetching, validation, and tests.
- Week 6: Study performance, accessibility, security, and debugging.
- Week 7: Build a portfolio-grade project with real API integration.
- Week 8: Practice interviews twice weekly and keep a mistake journal.

Month 3: Proof of work
- Week 9: Build a capstone with authentication, persistence, and analytics.
- Week 10: Refactor for architecture, loading states, and error handling.
- Week 11: Prepare resume bullets, GitHub README, and demo walkthrough.
- Week 12: Mock interviews, placement revision, and targeted applications.

Daily practice
- 45 minutes concept learning
- 60 minutes building
- 20 minutes revision or flashcards
- 15 minutes interview notes

Projects
- Learning dashboard
- AI roadmap assistant
- Quiz and leaderboard module
- Production-ready portfolio case study`

export const generateRoadmapResponse = async ({ prompt, history = [] }) => {
  try {
    const response = await api.ai.generateRoadmap({ prompt, history })
    return response.content
  } catch {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 700)
    })
    return fallbackPlan(prompt)
  }
}
