import Category_Card from "~/components/category_card"
import type { Route } from "./+types/home"
import { QUIZZES } from "~/data/questions"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Quiz APP | Home" },
        { name: "description", content: "Choose a quiz and test your knowledge!" },
    ]
}

export default function Home() {
    return (
        <main>
            <div className="logo_app">
                <h1>Quiz App</h1>
            </div>
            {QUIZZES.map((category) => (
                <div className="category_bar" key={category.id}>
                    <div className="category_title">
                        <h2>{category.category_name}</h2>
                    </div>
                    <div className="category_grid">
                        {category.items.map((quiz) => (
                            <Category_Card
                                key={quiz.id}
                                {...quiz}
                                categoryId={category.id}
                                categorySlug={category.slug}
                                quizSlug={quiz.slug}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </main>
    )
}
