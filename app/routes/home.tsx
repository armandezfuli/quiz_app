import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Quiz APP | Home" },
        { name: "description", content: "Choose a quiz and test your knowledge!" },
    ]
}

export default function Home() {
    return (
        <>
            <h1>Home</h1>
        </>
    )
}
