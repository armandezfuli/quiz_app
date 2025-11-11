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
        <main className="p-5 md:p-10 flex flex-col items-center">
            <div className="w-full flex items-center text-text-secondary gap-6">
                <Button variant="secondary" icon={LeftArrow} />
                <span className="text-2xl md:text-4xl">Oxford Word Skills Elementary</span>
            </div>
            <div className="mt-16 bg-surface rounded-primary p-4 md:p-7.5">
                <div className="text-3xl md:text-[40px]">
                    <h1>I usually drink a cup of coffee in the __________.</h1>
                </div>
                <div className="flex flex-col gap-y-8 mt-[76px]">
                    <Button variant="primary" text="morning" />
                    <Button variant="primary" text="night" />
                    <Button variant="primary" text="lunch" />
                    <Button variant="primary" text="afternoon" />
                </div>
                <div className="flex justify-center md:justify-end  mt-[76px]">
                    <div className="flex gap-x-5.5 items-center">
                        <Button variant="primary" icon={LeftArrow} />
                        <span className="text-2xl sm:text-[32px]">1 of 10</span>
                        <Button variant="primary" icon={RightArrow} />
                    </div>
                </div>
            </div>
        </main>
    )
}
