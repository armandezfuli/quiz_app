import LeftIcon from "../assets/icons/Left arrow.svg"
import Button from "~/components/button"

export function meta() {
    return [
        { title: "Quiz App | Results" },
        { name: "description", content: "See your quiz results and score summary." },
    ]
}

export default function Result() {
    return (
        <main className="result_main">
            <div className="result_header">
                <Button variant="secondary" icon={LeftIcon} text="Go Home" />
            </div>

            <div className="result_content">
                <h1>You finished the quiz!</h1>
                <h2>Excellent! You’re doing great! 🎉</h2>

                <div className="result_score">
                    <h3>Score</h3>
                    <h3>8 / 10</h3>
                </div>

                <div className="result_percentage">
                    <h3>Percentage</h3>
                    <h3>80%</h3>
                </div>

                <Button variant="secondary" text="Try Again" />
            </div>
        </main>
    )
}
