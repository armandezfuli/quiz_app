import ScoreIcon from "../assets/icons/ic_outline-sports-score.svg"
import VerificationIcon from "../assets/icons/ic_baseline-domain-verification.svg"
import RenameIcon from "../assets/icons/ic_baseline-drive-file-rename-outline.svg"
import LightbulbIcon from "../assets/icons/ic_outline-lightbulb.svg"
import Button from "./button"

type CategoryCardProps = {
    title: string
    description: string
    points: number
    levels: string
    questionCount: number
    author: string
}

function Category_Card({
    title,
    description,
    points,
    levels,
    questionCount,
    author,
}: CategoryCardProps) {
    return (
        <div className="category_card">
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>

            <div className="icon-text">
                <img src={ScoreIcon} />
                <span className="text-xl">{points} Points</span>
            </div>

            <div className="icon-text">
                <img src={VerificationIcon} />
                <span className="text-xl">{levels}</span>
            </div>
            <div className="icon-text">
                <img src={LightbulbIcon} />
                <span className="text-xl">{questionCount} Questions</span>
            </div>
            <div className="icon-text">
                <img src={RenameIcon} />
                <span className="text-xl">{author}</span>
            </div>
            <Button variant="primary" text="Start" />
        </div>
    )
}

export default Category_Card
