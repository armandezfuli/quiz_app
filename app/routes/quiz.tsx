import Button from "~/components/button"
import LeftArrow from "../assets/icons/Left arrow.svg"
import RightArrow from "../assets/icons/Right arrow.svg"
import { useParams, useNavigate } from "react-router"
import { QUIZZES } from "~/data/questions"
import { useState } from "react"

export function meta() {
    return [
        { title: "Quiz App | Quiz" },
        { name: "description", content: "Answer fun quizzes and challenge yourself!" },
    ]
}

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<string[]>([])

    const { categorySlug, quizSlug } = useParams<{
        categorySlug: string
        quizSlug: string
    }>()
    const navigate = useNavigate()
    const category = QUIZZES.find((c) => c.slug === categorySlug)
    const quiz = category?.items.find((q) => q.slug === quizSlug)

    if (!quiz) return <p>Quiz not found!</p>

    function highlightText(text: string) {
        const parts = text.split(/\$\$(.*?)\$\$/g)
        return parts.map((part, index) =>
            index % 2 === 1 ? (
                <span className="text-text-secondary" key={index}>
                    {part}
                </span>
            ) : (
                part
            )
        )
    }

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

                <div className="quiz_options">
                    {question.options.map((option) => (
                        <Button
                            key={option}
                            variant="primary"
                            text={option}
                            onClick={() => {
                                setAnswers((prev) => {
                                    const newAnswers = [...prev]
                                    while (newAnswers.length <= currentQuestionIndex) {
                                        newAnswers.push("")
                                    }
                                    newAnswers[currentQuestionIndex] = option
                                    return newAnswers
                                })
                            }}
                            className={
                                answers[currentQuestionIndex] === option
                                    ? "btn-selected"
                                    : ""
                            }
                        />
                    ))}
                </div>

                <div className="quiz_navigation">
                    <div className="quiz_navigation_inner">
                        <Button
                            variant="primary"
                            icon={LeftArrow}
                            onClick={() =>
                                setCurrentQuestionIndex((i) => Math.max(i - 1, 0))
                            }
                        />
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
                                if (currentQuestionIndex < quiz.questions.length - 1) {
                                    setCurrentQuestionIndex((i) => i + 1)
                                } else {
                                    navigate(`/result/${categorySlug}/${quizSlug}`, {
                                        state: { answers },
                                    })
                                }
                            }}
                            disabled={!answers[currentQuestionIndex]}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
