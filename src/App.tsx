import './styling/App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import User from './pages/User';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import AnswersList from './components/AnswersList';
import QuestionsList from './components/QuestionsList';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

function App() {
  const navigate = useNavigate();
  function validateUser() {
    if (localStorage.token) {
      fetch('http://localhost:4000/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error.message);
          } else {
            setCurrentUser(data);
          }
        });
    }
  }
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [modalMessage, setModalMessage] = useState('user');
  useEffect(() => {
    validateUser();
  }, []);
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Navigate replace to={'sign-in'} />} />
        <Route
          path='/sign-in'
          element={
            <SignIn setCurrentUser={setCurrentUser} currentUser={currentUser} setModalMessage={setModalMessage} />
          }
        />
        <Route
          path='/sign-up'
          element={
            <SignUp setCurrentUser={setCurrentUser} currentUser={currentUser} />
          }
        />
        <Route
          path='/users/:username/'
          element={
            <User setCurrentUser={setCurrentUser} currentUser={currentUser} />
          }
        >
          <Route path='' element={<AnswersList />} />
        </Route>
        <Route
          path='/profile'
          element={
            <Profile
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          }
        >
          <Route path='' element={<AnswersList />} />
          <Route path='questions' element={<QuestionsList />} />
        </Route>
      </Routes>
      {modalMessage !== '' && (
        <Modal modalMessage={modalMessage} setModalMessage={setModalMessage} />
      )}
    </div>
  );
}

export default App;
