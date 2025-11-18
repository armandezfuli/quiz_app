export type Question = {
    id: number
    question: string
    options: string[]
    correctAnswer: string
}

export type QuizItem = {
    id: number
    title: string
    slug: string
    description: string
    author: string
    questionCount: number
    points: number
    levels: string
    questions: Question[]
}

export type QuizCategory = {
    id: number
    category_name: string
    slug: string
    items: QuizItem[]
}

export type CategoryCardProps = QuizItem & {
    categorySlug: string
    quizSlug: string
    categoryId: number
}

export type ButtonType = {
    variant: "secondary" | "primary"
    text?: string
    icon?: string
    onClick?: () => void
    disabled?: boolean
    className?: string
}

export type IconTextProps = {
    icon: string
    text: string | number
    suffix?: string
}

export type QuestionCardProps = {
    question: {
        question: string
        options: string[]
    }
    questionIndex: number
    answers: string[]
    setAnswer: (index: number, value: string) => void
}
