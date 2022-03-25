import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styling/Settings.css';
type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
  setModalMessage: React.Dispatch<React.SetStateAction<string>>;
};

export function Settings({
  setCurrentUser,
  currentUser,
  setModalMessage
}: Props) {
  function changeUserDetails(
    username: string,
    email: string,
    currentPassword: string,
    newPassword: string,
    image: string
  ) {
    fetch(`http://localhost:4000/users/${currentUser?.username}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username !== '' ? username : null,
        email: email !== '' ? email : null,
        currentPassword: currentPassword !== '' ? currentPassword : null,
        newPassword: newPassword !== '' ? newPassword : null,
        image: image !== '' ? image : null
      })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setModalMessage(data.error);
        } else {
          setCurrentUser(data);
          setModalMessage('Changes successfully saved!');
        }
      });
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser === null) navigate('/sign-in');
  }, []);
  return (
    <div className='main'>
      <Header setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <section className='settings'>
        <h2>Make changes</h2>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            changeUserDetails(
              e.target.username.value,
              e.target.email.value,
              e.target.password.value,
              e.target.newPassword.value,
              e.target.image.value
            );
          }}
        >
          <h4>username</h4>
          <input
            type='text'
            name='username'
            defaultValue={currentUser?.username}
          />
          <h4>email</h4>
          <input type='email' name='email' defaultValue={currentUser?.email} />
          <h4>current password</h4>
          <input type='password' name='password' required />

          <h4>new password</h4>
          <input type='password' name='newPassword' />
          <h4>profile image</h4>
          <input
            type='text'
            name='image'
            placeholder='image url'
            defaultValue={currentUser?.image}
          />
          <div></div>
          <button type='submit'>Confirm Changes</button>
        </form>
      </section>
    </div>
  );
}
