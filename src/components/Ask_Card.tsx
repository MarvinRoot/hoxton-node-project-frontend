type Props = {
    question: Question
}

export function Ask_Card({question}: Props) {
    return (
        <div className="question-card">
            <p>Ask {question.asker.username} a question</p>
            <form onSubmit={(e)=>{
                e.preventDefault()

            }}>
                <input type="text" name="question" placeholder="Type question here" />
                <button type="submit">Ask Away</button>
            </form>
        </div>
    )
}