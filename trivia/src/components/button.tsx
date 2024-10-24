import { useEffect, useState } from "react";

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

    const buttonStyles={
        width: width,
        height: height,
        color: color,
        background: background,
       
    }
    const [isHover, setIsHover] = useState<boolean>(false);
    const [buttonHover, setButtonHover] = useState<any | undefined>(buttonStyles);

    

    useEffect(()=>{

        if(isHover){
            setButtonHover({
                width: hover?.width == undefined ? width : hover?.width,
                height: hover?.height == undefined ? height : hover?.height,
                color: color,
                background: background,
                boxShadow: hover?.shadow == undefined ? "none" : `0px 0px 10px 5px rgba(0,0,0,0.1)`
            })
        }else{
            setButtonHover(buttonStyles)
        }
        
    },[isHover])

    return<>
        <button className={`m-1 rounded-[9px] font-extrabold text-[20px] flex items-center justify-center` }
            style={buttonHover} 
            onClick={onClick} 
            onMouseEnter={()=>setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
        >
            {text}
        </button>
    </>
};

export default Button1;