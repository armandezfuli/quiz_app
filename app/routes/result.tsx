import LeftIcon from "../assets/icons/Left arrow.svg"
import Button from "~/components/button"
import { useLocation, useParams, useNavigate } from "react-router"
import { useQuiz } from "~/hooks/useQuiz"
import { useMemo } from "react"
import { useScore } from "~/hooks/useScore"

export function meta() {
    return [
        { title: "Quiz App | Results" },
        { name: "description", content: "See your quiz results and score summary." },
    ]
}

export default function Result() {
    const location = useLocation()
    const navigate = useNavigate()

    const { categorySlug, quizSlug } = useParams()
    const { quiz, loading, error } = useQuiz(categorySlug!, quizSlug!)
    const answers = useMemo(() => location.state?.answers || [], [location.state])
    const { correctCount, totalQuestions, percentage, message } = useScore(quiz, answers)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!quiz) return <p>Quiz not found!</p>

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
                <h2>{message}</h2>
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
