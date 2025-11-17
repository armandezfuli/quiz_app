import { useEffect, useState } from "react"
import api from "~/api/axios"
import type { QuizItem, QuizCategory } from "~/types"

export function useQuiz(categorySlug: string, quizSlug: string) {
    const [quiz, setQuiz] = useState<QuizItem | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        setError("")
        setQuiz(null)

        const fetchQuiz = async () => {
            try {
                const res = await api.get("/quizzes")
                const categories: QuizCategory[] = res.data

                const category = categories.find((c) => c.slug === categorySlug)
                if (!category) {
                    setError("Category not found")
                    return
                }

                const foundQuiz = category.items.find(
                    (q: QuizItem) => q.slug === quizSlug
                )
                if (!foundQuiz) {
                    setError("Quiz not found")
                    return
                }

                setQuiz(foundQuiz)
            } catch (err) {
                setError("Failed to fetch quiz")
            } finally {
                setLoading(false)
            }
        }

        fetchQuiz()
    }, [categorySlug, quizSlug])

    return { quiz, loading, error }
}
