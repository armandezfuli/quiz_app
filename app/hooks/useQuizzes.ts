import { useEffect, useState } from "react"
import api from "~/api/axios"
import type { QuizCategory } from "~/types"

export function useQuizzes() {
    const [quizzes, setQuizzes] = useState<QuizCategory[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchQuizzes = async () => {
            setLoading(true)
            setError(null)
            try {
                const res = await api.get("/quizzes")
                setQuizzes(res.data)
            } catch (err) {
                setError("Failed to fetch quizzes")
            } finally {
                setLoading(false)
            }
        }

        fetchQuizzes()
    }, [])

    return { quizzes, loading, error }
}
