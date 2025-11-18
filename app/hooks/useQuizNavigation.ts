import { useState, useCallback } from "react"

export function useQuizNavigation(totalQuestions: number) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = useCallback(() => {
        setCurrentIndex((i) => Math.min(i + 1, totalQuestions - 1))
    }, [totalQuestions])

    const prev = useCallback(() => {
        setCurrentIndex((i) => Math.max(i - 1, 0))
    }, [])

    return { currentIndex, next, prev, setCurrentIndex }
}
