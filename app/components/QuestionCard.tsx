import Button from "./button"
import type { QuestionCardProps } from "~/types"

export default function QuestionCard({
    question,
    questionIndex,
    answers,
    setAnswer,
}: QuestionCardProps) {
    return (
        <div className="quiz_options">
            {question.options.map((option) => (
                <Button
                    key={option}
                    variant="primary"
                    text={option}
                    onClick={() => setAnswer(questionIndex, option)}
                    className={answers[questionIndex] === option ? "btn-selected" : ""}
                />
            ))}
        </div>
    )
}
