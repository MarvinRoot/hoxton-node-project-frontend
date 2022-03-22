/// <reference types="vite/client" />

type Asker = {
    username: string
}

type Question = {
    id: number
    question: string
    answer: string
    createdAt: string
    isAnswered: boolean
    askerId: number
    userId: number
    asker: Asker
}