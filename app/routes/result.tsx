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
        <main className="p-5 md:p-10 flex flex-col items-center">
            <div className="w-full flex items-center justify-center md:justify-start text-text-secondary gap-6">
                <Button variant="secondary" icon={LeftIcon} text="Go Home" />
            </div>
            <div className="mt-[90px] flex flex-col gap-y-[90px] items-center ">
                <h1 className="text-text-secondary text-3xl md:text-5xl">You finished the quiz!</h1>
                <h2 className="text-success text-3xl md:text-5xl">
                    Excellent! You’re doing great! 🎉
                </h2>
                <div className="flex items-center gap-x-[90px]">
                    <h3 className="text-text-secondary text-3xl md:text-[40px]">Score</h3>
                    <h3 className="text-3xl md:text-[40px]">8 / 10</h3>
                </div>
                <div className="flex items-center gap-x-[90px]">
                    <h3 className="text-text-secondary text-3xl md:text-[40px]">Percentage</h3>
                    <h3 className="text-3xl md:text-[40px]">80%</h3>
                </div>
                <Button variant="secondary" text="Try Again" />
            </div>
        </main>
    )
}
