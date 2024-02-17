
export type CircleQuestionProps = {
    numberQuestion: number;
    color: string;
    background: string;
}

const CircleQuestion = ({numberQuestion, color, background}:CircleQuestionProps) => {
    return (
        <div style={{color:color,background:background}} className=" rounded-[50%] w-[150px] h-[150px] flex items-center justify-center text-[60px] font-extrabold text-center mt-[-130px]">
            {numberQuestion}
        </div>
    )
}

export default CircleQuestion;