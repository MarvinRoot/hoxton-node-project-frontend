import { Link } from 'react-router-dom';
import '../styling/UserCard.css';

type Props = {
  user: User;
};
function UserCard({ user }: Props) {
  return (
    <Link className='user-link' to={`/users/${user.username}/`}>
      <img src={user.image} alt='profile' />
      <h4>{user.username}</h4>
    </Link>
  );
}

export default UserCard;
