import { useHoverEffect } from "../hooks/hoverEffet";

export type Button1Props = {
    width: string;
    height: string;
    color: string;
    background: string;
    text: string;
    hover?:{
        shadow: string ;
        width: string;
        height: string;
    }
    onClick?: () => void;
}


const Button1 = ({ width, height, color, text, background, onClick, hover }: Button1Props):React.JSX.Element => {

   
    const stylesButton:React.CSSProperties = { width: width, height: height, color: color, background: background }
    const hoverStylesButton:React.CSSProperties = { 

        width: hover !== undefined ? hover?.width : width, 
        height: hover !== undefined ? hover?.height : height,
        boxShadow: hover !== undefined ? hover?.shadow : "none", 
        color: color, 
        background: background 
    }

    const [elementHover, __ , handleEnter, handleLeave] = useHoverEffect(stylesButton, hoverStylesButton);



    return<>
        <button className={`m-1 rounded-[9px] font-extrabold text-[20px] flex items-center justify-center` }
            style={elementHover} 
            onClick={onClick} 
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            {text}
        </button>
    </>
};

export default Button1;