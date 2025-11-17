import ScoreIcon from "../assets/icons/ic_outline-sports-score.svg"
import VerificationIcon from "../assets/icons/ic_baseline-domain-verification.svg"
import RenameIcon from "../assets/icons/ic_baseline-drive-file-rename-outline.svg"
import LightbulbIcon from "../assets/icons/ic_outline-lightbulb.svg"
import Button from "./button"
import { useNavigate } from "react-router"
import type { CategoryCardProps } from "~/types"
import { memo, useCallback } from "react"
import IconText from "./IconText"

function Category_Card({
    title,
    description,
    points,
    levels,
    questionCount,
    author,
    categorySlug,
    quizSlug,
}: CategoryCardProps) {
    const navigate = useNavigate()

    const handleStart = useCallback(() => {
        navigate(`/quiz/${categorySlug}/${quizSlug}`)
    }, [navigate, categorySlug, quizSlug])

    return (
        <div className="category_card">
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <IconText icon={ScoreIcon} text={points} suffix="Points" />
            <IconText icon={VerificationIcon} text={levels} />
            <IconText icon={LightbulbIcon} text={questionCount} suffix="Questions" />
            <IconText icon={RenameIcon} text={author} />
            <Button variant="primary" text="Start" onClick={handleStart} />
        </div>
    )
}

export default memo(Category_Card)
