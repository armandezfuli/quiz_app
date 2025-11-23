import Category_Card from "~/components/category_card"
import type { Route } from "./+types/home"
import { useQuizzes } from "~/hooks/useQuizzes"
import { useMemo } from "react"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Quiz APP | Home" },
        { name: "description", content: "Choose a quiz and test your knowledge!" },
    ]
}

export default function Home() {
    const { data: quizzes, isLoading, isError, error } = useQuizzes()

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{(error as Error).message}</p>

    const categoryElements = quizzes?.map((category) => (
        <div className="category_bar" key={category.id}>
            <div className="category_title">
                <h2>{category.category_name}</h2>
            </div>
            <div className="category_grid">
                {category.items.map((quiz) => (
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
    ))

    return <main>{categoryElements}</main>
}
