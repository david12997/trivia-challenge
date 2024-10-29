import { setResponse } from "../store/trivia.game"
import { userResponse } from "../types/types.game"


const addAnswer = (expectedLength:number,answersUser:userResponse[],dispatch:any)=>{

    if(answersUser.length === expectedLength) {
        dispatch(setResponse(answersUser))
    }
   

}

export default addAnswer