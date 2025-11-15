import Category_Card from "~/components/category_card"
import type { Route } from "./+types/home"
import { useState, useEffect } from "react"
import api from "~/api/axios"
import type { QuizItem, QuizCategory } from "~/types"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Quiz APP | Home" },
        { name: "description", content: "Choose a quiz and test your knowledge!" },
    ]
}

export default function Home() {
    const [quizzes, setQuizzes] = useState<QuizCategory[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchQuizzes = async () => {
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

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <main>
            {quizzes.map((category) => (
                <div className="category_bar" key={category.id}>
                    <div className="category_title">
                        <h2>{category.category_name}</h2>
                    </div>
                    <div className="category_grid">
                        {category.items.map((quiz: QuizItem) => (
                            <Category_Card
                                key={quiz.id}
                                {...quiz}
                                categorySlug={category.slug}
                                quizSlug={quiz.slug}
                                categoryId={category.id}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </main>
    )
}
