import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QuizResult, userResponse } from "../types/types.game";

export interface TriviaGameState {
    trivia: QuizResult[] | null;
    response: userResponse[] | null;
}

const initialState: TriviaGameState = {
    trivia: null,
    response: null
}

const triviaGameSlice = createSlice({
    name: 'triviaGame',
    initialState,
    reducers: {
        setTriviaGame(state, action: PayloadAction<QuizResult[]>) {
      
            state.trivia = action.payload
        },
        setResponse(state, action: PayloadAction<userResponse[]>) {
            state.response = action.payload
        }
    }
})

export const { setTriviaGame, setResponse } = triviaGameSlice.actions

export default triviaGameSlice.reducer