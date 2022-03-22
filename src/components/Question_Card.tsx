type Props = {
    question: Question
}

export function Question_Card({question}: Props) {
    return (
        <div className="question-card">
            <p>{question.asker.username}</p>
            <h4>{question.question}</h4>
            <p>{question.createdAt.slice(0,19)}</p>
        </div>
    )
}