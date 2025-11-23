import { useQuery } from "@tanstack/react-query"
import api from "~/api/axios"
import type { QuizCategory } from "~/types"

async function fetchQuizzes(): Promise<QuizCategory[]> {
    const res = await api.get("/quizzes")
    return res.data
}

export function useQuizzes() {
    return useQuery({
        queryKey: ["quizzes"],
        queryFn: fetchQuizzes,
    })
}
