import { useState, useCallback } from "react"

function useAnswers(totalQuestions: number) {
    const [answers, setAnswers] = useState<string[]>(Array(totalQuestions).fill(""))

    const setAnswer = useCallback((index: number, value: string) => {
        setAnswers((prev) => {
            const newAnswers = [...prev]
            newAnswers[index] = value
            return newAnswers
        })
    }, [])

    return { answers, setAnswer }
}

export { useAnswers }
