
export type CommonTriviaQuestion = {
    category: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[] ;
}
export interface userResponse {
    question:string;
    user_answer:string;
    correct_answer:string;
}