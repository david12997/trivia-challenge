import { setResponse } from "../store/trivia.game"
import { userResponse } from "../types/types.game"


const addAnswer = (answersUser:userResponse[],dispatch:any)=>{

    if(answersUser.length === 12) {
        dispatch(setResponse(answersUser))
    }
   

}

export default addAnswer