import Button from "~/components/button"
import LeftArrow from "../assets/icons/Left arrow.svg"
import RightArrow from "../assets/icons/Right arrow.svg"

export function meta() {
    return [
        { title: "Quiz App | Quiz" },
        { name: "description", content: "Answer fun quizzes and challenge yourself!" },
    ]
}

export default function Quiz() {
    return (
        <main className="quiz_main">
            <div className="quiz_header">
                <Button variant="secondary" icon={LeftArrow} />
                <span className="quiz_title">Oxford Word Skills Elementary</span>
            </div>

            <div className="quiz_card">
                <div className="quiz_question">
                    <h1>I usually drink a cup of coffee in the __________.</h1>
                </div>

                <div className="quiz_options">
                    <Button variant="primary" text="morning" />
                    <Button variant="primary" text="night" />
                    <Button variant="primary" text="lunch" />
                    <Button variant="primary" text="afternoon" />
                </div>

                <div className="quiz_navigation">
                    <div className="quiz_navigation_inner">
                        <Button variant="primary" icon={LeftArrow} />
                        <span>1 of 10</span>
                        <Button variant="primary" icon={RightArrow} />
                    </div>
                </div>
            </div>
        </main>
    )
}
