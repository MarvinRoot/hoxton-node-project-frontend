import '../styling/ProfileSection.css';
type Props = {
  user: User;
};
function ProfileSection({ user }: Props) {
  return (
    <div className='profile'>
      <img src={user.image} alt='profile' />
      <h3>@{user.username}</h3>
    </div>
  );
}

export default ProfileSection;
