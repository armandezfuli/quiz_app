import clsx from "clsx"

type ButtonType = {
    variant: "secondary" | "primary"
    text?: string
    icon?: string
    onClick?: () => void
    disabled?: boolean
    className?: string
}

function Button({ variant, text, icon, onClick, disabled, className  }: ButtonType) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                "btn-base",
                variant === "primary" && "btn-primary",
                variant === "secondary" && "btn-secondary",
                disabled && "btn-disabled",
                className
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
