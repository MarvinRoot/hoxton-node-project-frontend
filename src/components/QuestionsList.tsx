import '../styling/QuestionsList.css';
import { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';
import { useOutletContext } from 'react-router-dom';

function QuestionsList() {
  const { questions, setQuestions } = useOutletContext<{
    questions: Question[];
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  }>();

  return (
    <div className='questions-list'>
      {questions.map((question) => (
        <QuestionCard
          question={question}
          key={question.id}
          setQuestions={setQuestions}
        />
      ))}
    </div>
  );
}

export default QuestionsList;
