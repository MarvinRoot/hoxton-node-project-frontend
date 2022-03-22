type Props = {
    question: Question
}

export function Ask_Card({question}: Props) {
    return (
        <div className="question-card">
            <p>{question.asker.username}</p>
            <h4>{question.question}</h4>
            <form onSubmit={(e)=>{
                e.preventDefault()

            }}>
                <input type="text" name="question" placeholder="Type answer here" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}