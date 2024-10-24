import { IconCheck, IconWrong } from "../icons"

export type PropsCardResult = {
    question:string,
    correct_answer:string,
    user_answer:string
}

const CardResults = (props:PropsCardResult):React.JSX.Element =>{

    return<>
    
        <div className="answer border border-white flex w-[300px] md:w-[550px] m-2 md:m-4 rounded-[6px] hover:bg-white hover:text-[#6e6e6e] text-white hover:shadow-xl">
            <div className="icon m-2">
                {
                    props.correct_answer === props.user_answer 
                    ?
                    <IconCheck width={"44"} height={"44"} color="#00CB2D" />
                    :
                    <IconWrong width={"44"} height={"44"}color="blue"/>
                }
               
               
                
            </div>
            <div className="data-answer m-2">
                    <h3 className="text-[18px] font-normal mb-2">{props.question}</h3>
                    <p className="text-[18px] ">Your answer : <span className="font-bold">{props.user_answer.toUpperCase()}</span></p>
                    <p className="text-[18px]">Correct answer : <span className="font-bold">{props.correct_answer.toUpperCase()}</span></p>
            </div>
        </div>
        
    </>
}

export default CardResults;