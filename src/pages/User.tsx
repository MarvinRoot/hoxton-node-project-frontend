import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Question_Card } from "../components/Question_Card"

export function User() {
    const params = useParams()
    const [answers, setAnswers] = useState<Question[]>([])
    useEffect(()=> {
        fetch(`http://localhost:4000/answers/${params.username}`)
        .then(resp => resp.json())
        .then(answers => setAnswers(answers))
    }, [])
    return (
        <section className="home">
            <Header/>
            <section className="main">
                <div className="empty-space"></div>
                <div className="main-content">
                    <h1>Answers</h1>
                    {answers.map(question => <Question_Card question= {question}/>)}
                
                </div>
                <div className="empty-space"></div>
            </section>
        </section>
    )
}