import LeftIcon from "../assets/icons/Left arrow.svg"
import Button from "~/components/button"
import { useLocation, useParams, useNavigate } from "react-router"
import { QUIZZES } from "~/data/questions"

export function meta() {
    return [
        { title: "Quiz App | Results" },
        { name: "description", content: "See your quiz results and score summary." },
    ]
}

export default function Result() {
    const location = useLocation()
    const navigate = useNavigate()
    const { categorySlug, quizSlug } = useParams<{
        categorySlug: string
        quizSlug: string
    }>()
    const answers: string[] = location.state?.answers || []

    const category = QUIZZES.find((c) => c.slug === categorySlug)
    const quiz = category?.items.find((q) => q.slug === quizSlug)

    if (!quiz) return <p>Quiz not found!</p>

    const correctCount = quiz.questions.reduce((count, question, index) => {
        return count + (question.correctAnswer === answers[index] ? 1 : 0)
    }, 0)

    const totalQuestions = quiz.questions.length
    const percentage = Math.round((correctCount / totalQuestions) * 100)

    function getResultMessage(percentage: number) {
        if (percentage === 100) return "Perfect score! 🎯 You nailed it!"
        if (percentage >= 80) return "Excellent! You’re doing great! 🎉"
        if (percentage >= 50) return "Good job! Keep practicing! 👍"
        if (percentage > 0) return "Not bad, but you can do better! 💪"
        return "Oops! Try again, you’ll get it next time! 😅"
    }

    return (
        <main className="result_main">
            <div className="result_header">
                <Button
                    variant="secondary"
                    icon={LeftIcon}
                    text="Go Home"
                    onClick={() => navigate("/")}
                />
            </div>

            <div className="result_content">
                <h1>You finished the quiz!</h1>
                <h2>{getResultMessage(percentage)}</h2>

                <div className="result_score">
                    <h3>Score</h3>
                    <h3>
                        {correctCount} / {totalQuestions}
                    </h3>
                </div>

                <div className="result_percentage">
                    <h3>Percentage</h3>
                    <h3>{percentage}%</h3>
                </div>

                <Button
                    variant="secondary"
                    text="Try Again"
                    onClick={() => navigate(`/quiz/${categorySlug}/${quizSlug}`)}
                />
            </div>
        </main>
    )
}
