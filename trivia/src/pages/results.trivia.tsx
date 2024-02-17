import {  IconStart } from "../components/icons";
import SectionBg from "../components/section.bg"
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";
import { useEffect, useState } from "react";
import CardResults from "../components/results/card.results";
import { userResponse } from "../types/types.game";
import he from 'he';
import Button1 from "../components/button";

const ResultsTriviaPage = ():React.JSX.Element => {

    const router = useNavigate();
    const stateAnswers = useAppSelector(state => state.trivia.response);
    const [totalAnswers,setTotalAnswer] = useState<number>(12);
    const [successAnswers,setSuccessAnswers] = useState<number>(0)

    useEffect(()=>{

        let correctAnswer:number = 0;

        if(stateAnswers === null || stateAnswers === undefined || stateAnswers.length ===0) router('/');
        if(stateAnswers !== null && stateAnswers !== undefined && stateAnswers.length !==0){

            setTotalAnswer(stateAnswers.length)
            stateAnswers.forEach((result:userResponse)=> result.correct_answer === result.user_answer && correctAnswer++);
            setSuccessAnswers(correctAnswer)
        }

    },[])

    return<>
        <SectionBg>

            <div className="header  truncate w-[100%] h-[50px] flex justify-center items-center p-1 mt-2">
                <h2 className="text-xl md:text-3xl font-bold text-white  ">Your scored</h2>
            </div>
            <div className=" w-[100%] h-[80px] flex justify-center items-center p-1 mt-[-20px]">
                <IconStart width={"34"} height={"33"} color="#FFAA06" />
                <h2 className="text-xl md:text-3xl font-bold text-white ml-2"> 
                    {successAnswers} / {totalAnswers}
                </h2>
            </div>

            <div className="container-answers flex flex-col items-center justify-start h-[400px] md:h-[360px] overflow-y-scroll p-2 w-[100%] md:w-[60%] md:ml-[20%]">
                {
                    stateAnswers !==  null && stateAnswers.map((result:userResponse,index:number)=>{

                        return<span key={index}>
                            <CardResults question={he.decode(result.question)} user_answer={result.user_answer}  correct_answer={result.correct_answer}/>

                        </span>
                    })
                }
               
            </div>

            <div className="container-button fixed bottom-[20px] w-screen flex items-center justify-center">

                <span className="md:hidden block">
                    <Button1
                        width="300px"
                        height="60px"
                        color="white"
                        background="#00BB67"
                        text="PLAY AGAIN?"
                        onClick={() => router('/')}
                    />
                </span>
                
                <span className="md:block hidden">
                    <Button1
                        width="500px"
                        height="60px"
                        color="white"
                        background="#00BB67"
                        text="PLAY AGAIN?"
                        onClick={() => router('/')}
                    />
                </span>
            </div>

        </SectionBg>
    </>
}

export default ResultsTriviaPage