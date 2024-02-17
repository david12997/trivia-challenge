
export type Button1Props = {
    width: string;
    height: string;
    color: string;
    background: string;
    text: string;
    onClick?: () => void;
}

const Button1 = ({ width, height, color, text, background, onClick }: Button1Props):React.JSX.Element => {

    const buttonStyles={
        width: width,
        height: height,
        color: color,
        background: background
    }

    return<>
        <button style={buttonStyles} onClick={onClick} className=" m-1 rounded-[9px] font-extrabold text-[20px] flex items-center justify-center">
            {text}
        </button>
    </>
};

export default Button1;