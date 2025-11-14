export default function highlightText(text: string) {
    const parts = text.split(/\$\$(.*?)\$\$/g)
    return parts.map((part, index) =>
        index % 2 === 1 ? (
            <span className="text-text-secondary" key={index}>
                {part}
            </span>
        ) : (
            part
        )
    )
}
