import '../styling/SignInAndSignUp.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
  setModalMessage: React.Dispatch<React.SetStateAction<string>>;
};

function SignUp({ setCurrentUser, currentUser, setModalMessage }: Props) {
  const navigate = useNavigate();
  function signUp(
    email: string,
    username: string,
    password: string,
    image: string
  ) {
    fetch('http://localhost:4000/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, username, password, image })
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
    <div className='sign-up'>
      <h1 className='logo'>questions.fm</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //@ts-ignore
          const email = e.target.email.value;
          //@ts-ignore
          const username = e.target.username.value;
          //@ts-ignore
          const password = e.target.password.value;
          //@ts-ignore
          const image = e.target.image.value;
          signUp(email, username, password, image);
        }}
      >
        <div className='container'>
          <h1>SIGN UP!</h1>

          <label>
            <span>Username</span>
            <input
              required
              name='username'
              type='text'
              placeholder='Create a username'
            />
          </label>

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
              placeholder='Create a password'
            />
          </label>
          <label>
            <span>Image</span>
            <input
              required
              name='image'
              type='url'
              placeholder='Paste your image url'
            />
          </label>

          <button type='submit' value='Submit'>
            Sign Up
          </button>

          <p onClick={() => navigate('/sign-in')}>
            Already have an account? Sign in
          </p>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
