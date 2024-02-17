export interface QuizResult {
    type: 'boolean';
    difficulty: 'hard';
    category: string;
    question: string;
    correct_answer: 'True' | 'False';
    incorrect_answers: Array<'True' | 'False'>; 
}
  

export interface QuizResponse {
    response_code: number;
    results: QuizResult[];
}

export interface userResponse {
    question:string;
    user_answer:string;
    correct_answer:string;
}