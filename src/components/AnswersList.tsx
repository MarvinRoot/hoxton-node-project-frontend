import '../styling/AnswerList.css';
import { useOutletContext } from 'react-router-dom';
import AnswerCard from './AnswerCard';

function AnswersList() {
  const answers = useOutletContext<Question[]>();

  return (
    <div className='answers-list'>
      {answers.map((answer) => (
        <AnswerCard answer={answer} key={answer.id} />
      ))}
    </div>
  );
}

export default AnswersList;
