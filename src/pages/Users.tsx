import Header from '../components/Header';
import '../styling/Users.css';
import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

type Props = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
};

function Users({ setCurrentUser, currentUser }: Props) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

<<<<<<< HEAD
  return (
    <div className='main'>
      <Header setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <div className='main-content'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //@ts-ignore
            fetch(`http://localhost:4000/users?search=${e.target.search.value}`)
              .then((resp) => resp.json())
              .then((users) => setUsers(users));
          }}
        >
          <input type='text' name='search' placeholder='Search users' />
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
=======
    function getUsersToDisplay() {
        let usersToDisplay: User[] = []
        if(search !== null){
            usersToDisplay = users.filter(user => user.username.toLowerCase().includes(search.toLowerCase())
            )
        }
        return usersToDisplay
    }

    const [search, setSearch] = useState<string | null>(null)
    const [users, setUsers] = useState<User[]>([]) //enter user type
    if(users === null) return <h1>Loading...</h1>
    return (
        <section className="main">
            <Header setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <div className="main-content">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setSearch(e.target.search.value)
                }}>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" placeholder="Search users" />
                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 30 30"
                        style={{ fill: "white" }}><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path></svg></button>
                </form>
                
                <div className="users-cards">
                    {getUsersToDisplay().map(user => (
                        <UserCard user={user}/>
                    ))
                    }
                </div>
            </div>
        </section>

    )
}
>>>>>>> c70a6f81ba9f638473d267a3942dd34f97f59636
