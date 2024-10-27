import { useState, useEffect, CSSProperties } from "react";

export type HoverStyles = {
    styles?:CSSProperties;
    hoverStyles?:CSSProperties;
}

export const useHoverEffect = (stylesElement:CSSProperties,hoverStylesElement:CSSProperties) => {

    const [isHover, setIsHover] = useState<boolean>(false);

    const [elementHover, setElementHover] = useState<CSSProperties>(stylesElement);

    useEffect(() => {
        if (isHover) {
            setElementHover(hoverStylesElement);
        } else {
            setElementHover(stylesElement);
        }
    }, [isHover]);

    const handleEnter = () => setIsHover(true);
    const handleLeave = () => setIsHover(false);

    return [elementHover, isHover, handleEnter, handleLeave] as const;
};