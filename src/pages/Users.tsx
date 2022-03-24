import Header from '../components/Header';
import '../styling/Users.css';
import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
};

function debounce(func: Function, ms: number) {
  let timeoutId: number;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, ms, ...args);
  };
}

function Users({ setCurrentUser, currentUser }: Props) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className='main'>
      <Header setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <div className='main-content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            name='search'
            placeholder='Search users'
            onChange={debounce((e: any) => {
              e.preventDefault();
              fetch(`http://localhost:4000/users?search=${e.target.value}`)
                .then((resp) => resp.json())
                .then((users) => setUsers(users));
            }, 500)}
          />
          <button type='submit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='30'
              height='30'
              viewBox='0 0 30 30'
              style={{ fill: 'white' }}
            >
              <path d='M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z'></path>
            </svg>
          </button>
        </form>
        <div className='users'>
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Users;
