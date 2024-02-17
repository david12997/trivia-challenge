
export type CategoryQuestionProps = {
    category: string;
}

const CategoryQuestion = ({category}:CategoryQuestionProps) => {
    return (
        <div className="header  truncate w-[100%] h-[50px] flex justify-center items-center p-1 mt-8">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-8 max-w-[200px] md:max-w-[500px] truncate ">{category}</h2>
        </div>
    )
}

export default CategoryQuestion;