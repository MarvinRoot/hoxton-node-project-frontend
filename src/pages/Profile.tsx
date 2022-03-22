import { Header } from "../components/Header";
import { Question_Card } from "../components/Question_Card";

export function Profile() {
    return (
        <section className="profile">
            <Header />
            <section className="profile-wrapper">
                <div className="empty-space"></div>
                <div className="profile-content">
                    <div className="profile-pic-username">
                        <img src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="profile" />
                        <h3>@username</h3>
                    </div>
                    <div>
                        <button className="profile-button">Answers</button>
                        <button className="profile-button">Questions</button>
                    </div>
                    <div className="profile-cards">
                        <div className="question-card">
                            <p>sdgsdfsfsd</p>
                            <h4>sdfsdfsdfs</h4>
                            <p>sdfsdfsd</p>
                        </div>
                        <div className="question-card">
                            <p>sdgsdfsfsd</p>
                            <h4>sdfsdfsdfs</h4>
                            <p>sdfsdfsd</p>
                        </div>
                        <div className="question-card">
                            <p>sdgsdfsfsd</p>
                            <h4>sdfsdfsdfs</h4>
                            <p>sdfsdfsd</p>
                        </div>
                        <div className="question-card">
                            <p>sdgsdfsfsd</p>
                            <h4>sdfsdfsdfs</h4>
                            <p>sdfsdfsd</p>
                        </div>
                    </div>
                </div>
                <div className="empty-space"></div>
            </section>

        </section>
    )
}