import ScoreIcon from "../assets/icons/ic_outline-sports-score.svg"
import VerificationIcon from "../assets/icons/ic_baseline-domain-verification.svg"
import RenameIcon from "../assets/icons/ic_baseline-drive-file-rename-outline.svg"
import LightbulbIcon from "../assets/icons/ic_outline-lightbulb.svg"
import Button from "./button"

function Category_Card() {
    return (
        <div className="category_card">
            <div>
                <h3>Oxford Word Skills Elementary</h3>
            </div>
            <div>
                <p>
                    These are the words I encountered in this book whose meanings I did
                    not know. In this set, the front of the cards contains the word along
                    with simple, short sentences in which those words are used, and the
                    back of the cards only contains the meaning of the target word.
                </p>
            </div>

            <div className="icon-text">
                <img src={ScoreIcon} />
                <span className="text-xl">100 Points</span>
            </div>

            <div className="icon-text">
                <img src={VerificationIcon} />
                <span className="text-xl">A1 (Beginner) and A2 (Elementary) levels</span>
            </div>
            <div className="icon-text">
                <img src={LightbulbIcon} />
                <span className="text-xl">10 Question</span>
            </div>
            <div className="icon-text">
                <img src={RenameIcon} />
                <span className="text-xl">Arman Dezfuli</span>
            </div>
            <Button variant="primary" text="Start" />
        </div>
    )
}

export default Category_Card
