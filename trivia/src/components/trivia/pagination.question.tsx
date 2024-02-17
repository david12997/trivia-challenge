
export type PaginationQuestionProps = {

    numberQuestion: number;
    currentQuestion: number;
}


const PaginationQuestion = ({numberQuestion, currentQuestion}:PaginationQuestionProps) => {
    return (
        <div className="pagination fixed bottom-[25px] w-[100%] flex items-center justify-center text-white font-extrabold text-[18px]">
                <p>{currentQuestion} of {numberQuestion}</p>
        </div>

    )
}

export default PaginationQuestion;