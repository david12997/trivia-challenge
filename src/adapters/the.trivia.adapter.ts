
import { ITriviaAPI } from '../interfaces/trivia.it';
import { GetData } from '../services/get.data';
import { CommonTriviaQuestion } from '../types/trivia.types';


export class OpenTriviaAdapter implements ITriviaAPI {
  
    async fetchQuestions(amount: number | undefined, difficulty: string | undefined, type: string | undefined): Promise<any> {

        amount = amount || 12;
        difficulty = difficulty || 'easy';
        type = type || 'multiple';

        const response = GetData([
            `https://the-trivia-api.com/v2/questions?amount=${amount}&difficulty=${difficulty}&type=${type}`
        
        ]).then((data) => {

            //  map the response to the common trivia question type
            let response: CommonTriviaQuestion[] = [];
            if(data.length > 0){
                data.map((question: any) => {

                    response.push({
                        category: question.category,
                        difficulty: question.difficulty,
                        question: question.question,
                        correct_answer: question.correct_answer,
                        incorrect_answers: question.incorrect_answers
                    });

                });
            }
        
            
            return response;

        }).catch((error) => console.error(error));

        return response;
        
    }

}