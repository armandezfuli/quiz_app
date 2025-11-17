export function getResultMessage(percentage: number): string {
    if (percentage === 100) return "Perfect score! 🎯 You nailed it!"
    if (percentage >= 80) return "Excellent! You’re doing great! 🎉"
    if (percentage >= 50) return "Good job! Keep practicing! 👍"
    if (percentage > 0) return "Not bad, but you can do better! 💪"

    return "Oops! Try again, you’ll get it next time! 😅"
}
