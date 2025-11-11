import Category_Card from "~/components/category_card"
import type { Route } from "./+types/home"

import Button from "~/components/button"

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
                <h1 className="text-[4rem] text-text-secondary flex justify-center">
                    Quiz App
                </h1>
            </div>

            <div className="category_bar p-7.5">
                <div className="category_title mb-7.5">
                    <h2 className="text-text-secondary text-[3rem]">
                        English Vocabulary
                    </h2>
                </div>
                <div className="grid md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 justify-evenly gap-[54px]">
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                    <Category_Card />
                </div>
            </div>
            <div className="category_bar p-7.5">
                <div className="category_title mb-7.5">
                    <h2 className="text-text-secondary text-[3rem]">
                        English Vocabulary
                    </h2>
                </div>
                <div className="grid md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 justify-evenly gap-[54px]">
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
