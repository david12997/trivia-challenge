
import { ITriviaAPI } from '../interfaces/trivia.it';
import { GetData } from '../services/get.data';

export class OpenTriviaAdapter implements ITriviaAPI {
  
    async fetchQuestions(amount: number, difficulty: string, type: string): Promise<any> {

    
    const response = GetData([
        `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
    
    ]).then((data) => {

        //console.log(data);

        return data;
    }
);
    return response;
  }
}