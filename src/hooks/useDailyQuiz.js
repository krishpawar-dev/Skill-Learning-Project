import { useMemo } from 'react'
import { questionBank } from '../data/quizzes'
import { getDailyRotationKey, seededShuffle } from '../utils/quizSeed'

export const useDailyQuiz = (categoryId, count = 5) =>
  useMemo(() => {
    const questions = questionBank[categoryId] || []
    const rotationKey = getDailyRotationKey(categoryId)
    const shuffledQuestions = seededShuffle(questions, rotationKey)

    return shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length)).map((question) => ({
      ...question,
      options: seededShuffle(question.options, `${rotationKey}:${question.question}`),
    }))
  }, [categoryId, count])
