import '../styling/AnswerCard.css';

type Props = {
  answer: Question;
};

function AnswerCard({ answer }: Props) {
  return (
    <div className='answer-card'>
      <p>{answer.asker.username}</p>
      <h2>{answer.question}</h2>
      <h4>{answer.answer}</h4>
      <p>{answer.createdAt.slice(0, 19)}</p>
    </div>
  );
}

export default AnswerCard;
