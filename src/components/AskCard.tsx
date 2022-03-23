import { useParams } from 'react-router-dom';
import '../styling/AskCard.css';
type Props = {
  currentUser: User | null;
  setModalMessage: React.Dispatch<React.SetStateAction<string>>;
};
function AskCard({ currentUser, setModalMessage }: Props) {
  const params = useParams();

  function askQuestion(question: string) {
    if (currentUser) {
      fetch(`http://localhost:4000/questions`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question, username: params.username })
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) setModalMessage(data.error);
          else setModalMessage(data.message);
        });
    } else setModalMessage('You need to sign in to ask a question!');
  }
  return (
    <div className='ask-card'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //@ts-ignore
          askQuestion(e.target.question.value);
          //@ts-ignore
          e.target.reset();
        }}
      >
        <h4>Ask {params.username}</h4>
        <textarea
          name='question'
          rows={3}
          style={{ resize: 'none' }}
          required
        />
        <button type='submit'>Ask away</button>
      </form>
    </div>
  );
}

export default AskCard;
