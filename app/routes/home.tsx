import Category_Card from "~/components/category_card"
import type { Route } from "./+types/home"

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

            <div className="category_bar">
                <div className="category_title">
                    <h2>English Vocabulary</h2>
                </div>
                <div className="category_grid">
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                </div>
            </div>
            <div className="category_bar">
                <div className="category_title">
                    <h2>English Vocabulary</h2>
                </div>
                <div className="category_grid">
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                </div>
            </div>
        </main>
    )
}
