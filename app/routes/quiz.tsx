import Button from "~/components/button"
import LeftArrow from "../assets/icons/Left arrow.svg"
import RightArrow from "../assets/icons/Right arrow.svg"
import { useParams, useNavigate } from "react-router"
import highlightText from "~/utils/highlightText"
import { useQuiz } from "~/hooks/useQuiz"
import { useAnswers } from "~/hooks/useAnswers"
import { useQuizNavigation } from "~/hooks/useQuizNavigation"
import QuestionCard from "~/components/QuestionCard"

export function meta() {
    return [
        { title: "Quiz App | Quiz" },
        { name: "description", content: "Answer fun quizzes and challenge yourself!" },
    ]
}

export default function Quiz() {
    const { categorySlug, quizSlug } = useParams<{
        categorySlug: string
        quizSlug: string
    }>()
    const navigate = useNavigate()

    const { quiz, loading, error } = useQuiz(categorySlug!, quizSlug!)
    const questionCount = quiz?.questions.length ?? 0
    const { answers, setAnswer } = useAnswers(questionCount)
    const {
        currentIndex: currentQuestionIndex,
        next,
        prev,
    } = useQuizNavigation(questionCount)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!quiz) return <p>Quiz not found</p>

    const question = quiz.questions[currentQuestionIndex]

    return (
        <main className="quiz_main">
            <div className="quiz_header">
                <Button
                    variant="secondary"
                    icon={LeftArrow}
                    onClick={() => navigate("/")}
                />
                <span className="quiz_title">{quiz.title}</span>
            </div>

            <div className="quiz_card">
                <div className="quiz_question">
                    <h1>{highlightText(question.question)}</h1>
                </div>
                <QuestionCard
                    question={question}
                    questionIndex={currentQuestionIndex}
                    answers={answers}
                    setAnswer={setAnswer}
                />
                <div className="quiz_navigation">
                    <div className="quiz_navigation_inner">
                        <Button variant="primary" icon={LeftArrow} onClick={prev} />
                        <span>
                            {currentQuestionIndex + 1} of {quiz.questions.length}
                        </span>
                        <Button
                            variant="primary"
                            icon={
                                currentQuestionIndex === quiz.questions.length - 1
                                    ? undefined
                                    : RightArrow
                            }
                            text={
                                currentQuestionIndex === quiz.questions.length - 1
                                    ? "Finish Quiz"
                                    : undefined
                            }
                            onClick={() => {
                                if (currentQuestionIndex < quiz.questions.length - 1)
                                    next()
                                else
                                    navigate(`/result/${categorySlug}/${quizSlug}`, {
                                        state: { answers },
                                    })
                            }}
                            disabled={!answers[currentQuestionIndex]}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
