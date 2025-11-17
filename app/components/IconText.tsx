import { memo } from "react"
import type { IconTextProps } from "~/types"

function IconText({ icon, text, suffix }: IconTextProps) {
    return (
        <div className="icon-text">
            <img src={icon} />
            <span className="text-xl">
                {text} {suffix}
            </span>
        </div>
    )
}

export default memo(IconText)
