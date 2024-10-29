
import { setTriviaGame } from "../store/trivia.game";
import { CommonTriviaQuestion } from "../types/types.game";

const saveQuestionsGame = (data:CommonTriviaQuestion[],dispatch:any)=>{

    if(data.length > 0){
        dispatch(setTriviaGame(data));
    }

}

export default saveQuestionsGame;