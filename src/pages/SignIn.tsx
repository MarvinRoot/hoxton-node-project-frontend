import { useNavigate } from "react-router-dom"

export function SignIn() {
    const navigate = useNavigate()

    return (
        <div className="sign-in">
            <h1 className="logo">questions.fm</h1>
            <form>
                <div className="container">
                    <h1>Hey there!</h1>

                    <label>
                        <span>Email</span>
                        <input required defaultValue={'marvin@mail.com'} name="email" type="email" placeholder="Enter your email adress" />
                    </label>

                    <label>
                        <span>Password</span>
                        <input required defaultValue={'marvin'} name="password" type="password" placeholder="Enter your password" />
                    </label>

                    <button type="submit" value="Submit">
                        Sign In
                    </button>

                    <p onClick={() => navigate('/sign-up')}>Don't have an account? Create one</p>
                </div>
            </form >
        </div>
    )
}