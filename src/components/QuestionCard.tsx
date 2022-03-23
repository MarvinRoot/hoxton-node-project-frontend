import '../styling/QuestionCard.css';
type Props = {
  question: Question;
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
};

function QuestionCard({ question, setQuestions }: Props) {
  function submitAnswer(questionId: number, answer: string) {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answer })
    })
      .then((resp) => resp.json())
      // update state
      .then((questions) => setQuestions(questions));
  }
  return (
    <div className='question-card'>
      <p>{question.asker.username}</p>
      <h2>{question.question}</h2>
      <form
        className='answer-form'
        onSubmit={(e) => {
          e.preventDefault();
          //@ts-ignore
          submitAnswer(question.id, e.target.answer.value);
        }}
      >
        <input placeholder='Type your answer here' name='answer' required />
        <button type='submit'>Submit</button>
        <button type='button'>Delete</button>
      </form>
      <p>{question.createdAt.slice(0, 19)}</p>
    </div>
  );
}

export default QuestionCard;
