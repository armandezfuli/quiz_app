import { useMemo } from "react"
import { getResultMessage } from "~/utils/resultMessage"
import type { QuizItem } from "~/types"

export function useScore(quiz: QuizItem | null, answers: string[]) {
    const correctCount = useMemo(() => {
        if (!quiz) return 0
        return quiz.questions.reduce((count, question, index) => {
            return count + (question.correctAnswer === answers[index] ? 1 : 0)
        }, 0)
    }, [quiz, answers])

    const totalQuestions = quiz?.questions.length || 0

    const percentage = useMemo(() => {
        if (!totalQuestions) return 0
        return Math.round((correctCount / totalQuestions) * 100)
    }, [correctCount, totalQuestions])

    const message = useMemo(() => getResultMessage(percentage), [percentage])

    return { correctCount, totalQuestions, percentage, message }
}
