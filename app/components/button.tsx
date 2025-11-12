import clsx from "clsx"

type ButtonType = {
    variant: "secondary" | "primary"
    text?: string
    icon?: string
    onClick?: () => void
}

function Button({ variant, text, icon, onClick }: ButtonType) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "btn-base",
                variant === "primary" && "btn-primary",
                variant === "secondary" && "btn-secondary"
            )}>
            {(icon || text) && (
                <div className={icon && text ? "btn-content" : undefined}>
                    {icon && <img src={icon} />}
                    {text && <span>{text}</span>}
                </div>
            )}
        </button>
    )
}

export default Button
