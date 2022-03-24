import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import AnswersList from '../components/AnswersList';
import AskCard from '../components/AskCard';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
  setModalMessage: React.Dispatch<React.SetStateAction<string>>;
};

function User({ setCurrentUser, currentUser, setModalMessage }: Props) {
  const navigate = useNavigate();
  const params = useParams();
  const [answers, setAnswers] = useState<Question[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<MyError | null>(null);
  useEffect(() => {
    fetch(`http://localhost:4000/answers/${params.username}`)
      .then((resp) => resp.json())
      .then((answers) => setAnswers(answers));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:4000/users/${params.username}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) setError(data);
        else setUser(data);
      });
  }, []);
  useEffect(() => {
    if (user && currentUser && user.id === currentUser.id) {
      navigate('/profile/');
    }
  }, [currentUser, user]);

  if (error) {
    return (
      <div className='main'>
        <h2>{error.error}</h2>
      </div>
    );
  } else if (user === null)
    return (
      <div className='main'>
        <h2>Loading</h2>
      </div>
    );
  else
    return (
      <div className='main'>
        <Header setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <ProfileSection user={user} />
        <AskCard currentUser={currentUser} setModalMessage={setModalMessage} />
        <nav>
          <NavLink to='./'> Answers</NavLink>
        </nav>
        <Outlet context={{ answers }} />
      </div>
    );
}

export default User;
