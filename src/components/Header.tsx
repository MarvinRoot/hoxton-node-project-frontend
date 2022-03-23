import { NavLink } from 'react-router-dom';
import '../styling/Header.css';
type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
};

function Header({ setCurrentUser, currentUser }: Props) {
  function signOut() {
    localStorage.removeItem('token');
    setCurrentUser(null);
  }
  return (
    <header className='header'>
      <h1 className='logo'>questions.fm</h1>
      {currentUser ? (
        <nav className='logged-in-nav'>
          <ul className='icons'>
            <li>
              <NavLink to='/profile/'>
                <span className='material-icons'>person_outline</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/users'>
                <span className='material-icons'>group</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/settings'>
                <span className='material-icons'>settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-in' onClick={signOut}>
                <span className='material-icons'>exit_to_app</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className='signed-out-nav'>
          <ul className='icons'>
            <li>
              <NavLink to='/users'>
                <span className='material-icons'>group</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-in'>
                <span className='material-icons'>login</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up'>
                <span className='material-icons'>person_add_alt</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
