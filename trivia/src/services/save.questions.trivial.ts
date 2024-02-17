
import { setTriviaGame } from "../store/trivia.game";
import { QuizResult } from "../types/types.game";

const saveQuestionsGame = (data:QuizResult[],dispatch:any)=>{

    if(data.length > 0){
        dispatch(setTriviaGame(data));
    }

}

export default saveQuestionsGame;