import { Header } from "../components/Header"
import { Question_Card } from "../components/Question_Card"

export function Home() {
    return (
        <section className="home">
            <Header/>
            <section className="main">
                <div className="empty-space"></div>
                <div className="main-content">
                    <h1>Main content</h1>
                    {Question_Card('marvin', 'dadssdsdsd', '2022/02/02')}
                    {Question_Card('rinor', 'dadssdsdsd', '2022/02/02')}
                    {Question_Card('marvinor', 'dadssdsdsd', '2022/02/02')}
                    {Question_Card('rinomarv', 'dadssdsdsd', '2022/02/02')}
                    {Question_Card('vin', 'dadssdsdsd', '2022/02/02')}
                    {Question_Card('rin', 'dadssdsdsd', '2022/02/02')}
                    {Question_Card('luffy', 'dadssdsdsd', '2022/02/02')}
                    {Question_Card('sasuke', 'dadssdsdsd', '2022/02/02')}
                    {Question_Card('vegeta', 'dadssdsdsd', '2022/02/02')}
                    {Question_Card('marvin', 'dadssdsdsd', '2022/02/02')}
                </div>
                <div className="empty-space"></div>
            </section>
        </section>
    )
}