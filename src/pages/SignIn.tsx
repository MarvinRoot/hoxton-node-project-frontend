import '../styling/SignInAndSignUp.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
  setModalMessage: React.Dispatch<React.SetStateAction<string>>;
};
function SignIn({ setCurrentUser, currentUser, setModalMessage }: Props) {
  const navigate = useNavigate();

  function signIn(email: string, password: string) {
    fetch('http://localhost:4000/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setModalMessage(data.error);
        } else {
          localStorage.token = data.token;
          setCurrentUser(data.user);
        }
      });
  }
  useEffect(() => {
    if (currentUser) {
      navigate('/profile/');
    }
  }, [currentUser]);

  return (
    <div className='sign-in'>
      <h1 className='logo'>questions.fm</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // @ts-ignore
          const email = e.target.email.value;
          // @ts-ignore
          const password = e.target.password.value;
          signIn(email, password);
        }}
      >
        <div className='container'>
          <h1>Hey there!</h1>

          <label>
            <span>Email</span>
            <input
              required
              name='email'
              type='email'
              placeholder='Enter your email adress'
            />
          </label>

          <label>
            <span>Password</span>
            <input
              required
              name='password'
              type='password'
              placeholder='Enter your password'
            />
          </label>

          <button type='submit' value='Submit'>
            Sign In
          </button>

          <p onClick={() => navigate('/sign-up')}>
            Don't have an account? Create one
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
