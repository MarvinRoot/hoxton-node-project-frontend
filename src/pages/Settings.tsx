import Header from '../components/Header';
import '../styling/Settings.css';
type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
};

export function Settings({ setCurrentUser, currentUser }: Props) {
  return (
    <div className='main'>
      <Header setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <section className='settings'>
        <h2>Make changes</h2>
        <form>
          <h4>username</h4>
          <input
            type='text'
            name='username'
            defaultValue={currentUser?.username}
            required
          />
          <h4>email</h4>
          <input
            type='email'
            name='email'
            defaultValue={currentUser?.email}
            required
          />

          <h4>new password</h4>
          <input type='password' name='new_password' required />
          <h4>profile image</h4>
          <input
            type='text'
            name='image'
            placeholder='image url'
            defaultValue={currentUser?.image}
            required
          />
          <div></div>
          <button type='submit'>Confirm Changes</button>
        </form>
      </section>
    </div>
  );
}
