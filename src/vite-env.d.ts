/// <reference types="vite/client" />
type Asker = {
  username: string;
};

type Question = {
  id: number;
  question: string;
  answer: string;
  createdAt: string;
  isAnswered: boolean;
  askerId: number;
  userId: number;
  asker: Asker;
};
type User = {
  id: number;
  email: string;
  username: string;
  image: string;
};

type MyError = {
  error: string;
};
