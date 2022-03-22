import '../styling/Profile.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import { useEffect, useState } from 'react';

type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
};

function Profile({ setCurrentUser, currentUser }: Props) {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Question[]>([]);
  useEffect(() => {
    if (currentUser === null) navigate('/sign-in');
  }, []);

  if (currentUser === null) {
    return (
      <div className='main'>
        <h2>There's nothing for you here</h2>
      </div>
    );
  } else
    useEffect(() => {
      fetch(`http://localhost:4000/answers/${currentUser.username}`, {})
        .then((resp) => resp.json())
        .then((data) => setAnswers(data));
    }, []);
  return (
    <div className='main'>
      <Header setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <ProfileSection user={currentUser} />
      <nav>
        <NavLink to='./'> Answers</NavLink>
        <NavLink to='./questions'> Questions</NavLink>
      </nav>
      <Outlet context={answers} />
    </div>
  );
}

export default Profile;
