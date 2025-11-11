import clsx from "clsx"

type ButtonType = {
    variant: "secondary" | "primary"
    text: string
}

function Button({ variant, text }: ButtonType) {
    const base_styles =
        "w-full h-[58px] flex justify-center items-center rounded-primary text-[32px] py-2.5 px-5 cursor-pointer transition-all duration-300 ease-out"
    const primaryStyle =
        "border border-text-secondary text-text-secondary bg-primary/30 focus:bg-primary hover:bg-primary/70"
    const secondaryStyle =
        "text-text-secondary bg-surface/30 focus:bg-surface hover:bg-surface/70"

    return (
        <button
            className={clsx(
                base_styles,
                variant === "primary" && primaryStyle,
                variant === "secondary" && secondaryStyle
            )}>
            {text}
        </button>
    )
}

export default Button
