type Props = {
    user: User;
};

export function UserCard({ user }: Props) {
    return(
        <div className="user-card">
            <img src={user.image} alt="image" />
            <span>{user.username}</span>
        </div>
    )
}