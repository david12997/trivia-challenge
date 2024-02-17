
export type QuestionProps = {

    question: string;
    color: string;
}


const Question = ({question, color}:QuestionProps) => {
    return (
        <div className="rounded-lg text-center w-[300px] md:w-[500px]  mt-6" style={{color:color}}>
            <p className="text-[18px] md:text-[22px]">
                {question}
            </p>

        </div>
    )
}

export default Question;