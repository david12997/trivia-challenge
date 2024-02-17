
const Spinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="animate-spin rounded-full h-[290px] w-[290px] border-t-4 border-b-4 border-blue-500"></div>
        </div>
    );
};

export default Spinner;