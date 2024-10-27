import { useEffect, useState } from "react";
import Button1 from "../components/button";
import SectionBg from "../components/section.bg";
import { GetData } from "../utils/get.data";
import { QuizResponse, QuizResult, userResponse } from "../types/types.game";
import Question from "../components/trivia/question";
import CircleQuestion from "../components/trivia/circle.question";
import PaginationQuestion from "../components/trivia/pagination.question";
import CategoryQuestion from "../components/trivia/category.question";
import { useAppDispatch } from "../store";
import he from 'he';
import saveQuestionsGame from "../services/save.questions.trivial";
import addAnswer from "../services/add.answer";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/spinner";

const TriviaPage = ():React.JSX.Element => {

    const dispatch = useAppDispatch();
    const [questions, setQuestions] = useState< QuizResult[] | any[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answersUser, setAnswersUser] = useState<userResponse[]>([]);
    const router = useNavigate();

    useEffect(() => {
        
        questions.length === 0
        &&
        GetData(['http://localhost:3009/api/opentdb/questions?amount=12&difficulty=hard&type=boolean'])
        .then((data) => {

            console.log(data);

            const dataApi = data as [QuizResponse];
            if(dataApi.length > 0 && dataApi[0].response_code === 0){
                setQuestions(dataApi[0].results);
                saveQuestionsGame(dataApi[0].results,dispatch);
            }
            
        })
        .catch((error) => console.error(error));

        // if the user has answered all the questions
        //the answers are saved in the store and the user is redirected to the results page
        if (answersUser.length === 12) {
            addAnswer(answersUser, dispatch);
            router('/trivia/results');
        }

    }, [answersUser]);


    // function to handle the answer of the user
    const handleAnswer = (answer: 'True' | 'False') => {

        const newUserResponses = [...answersUser, {
            question: questions[currentQuestion].question,
            user_answer: answer,
            correct_answer: questions[currentQuestion].correct_answer
        }];

        setAnswersUser(newUserResponses);

        if (currentQuestion < 11) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    return<>
        <SectionBg>
            {
                questions.length > 0
                ?
               <>
                <CategoryQuestion category="Entertainment: Video Games" />

                    <div className="flex flex-col items-center justify-center min-h-screen">

                        <CircleQuestion numberQuestion={currentQuestion+1} color="white" background="#0096FF"/>

                        <Question color="white" question={ he.decode(questions[currentQuestion].question)}/>

                        <div className="buttons min-w-[310px] max-w-[500px] flex justify-around mt-8">
                            <Button1
                                width="150px"
                                height="50px"
                                color="white"
                                background="#00BB67"
                                text="True"
                                onClick={()=>handleAnswer('True')}
                            />
                            <Button1
                                width="150px"
                                height="50px"
                                color="white"
                                background="#FF3B30"
                                text="False"
                                onClick={()=>handleAnswer('False')}
                            />
                        </div>

                    </div>

                    <PaginationQuestion numberQuestion={questions.length} currentQuestion={currentQuestion+1}/>
                                
               </>
               :
               <Spinner/>
            }           
           
        </SectionBg>
    </>
};


export default TriviaPage;