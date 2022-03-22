import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import AnswersList from '../components/AnswersList';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
};

function User({ setCurrentUser, currentUser }: Props) {
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
  if (user && currentUser && user.id === currentUser.id) {
    navigate('/profile');
  }
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
        {/* @ts-ignore */}
        <ProfileSection user={user} />
        <nav>
          <NavLink to='./'> Answers</NavLink>
        </nav>
        <Outlet context={answers} />
      </div>
    );
}

export default User;
