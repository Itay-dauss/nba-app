import React from "react";
import styled from "styled-components";

export const ColorPickerButton = styled.button`
    position: absolute;
    left: 18px;
    top: 16px;
    width: 80px;
    background: burlywood;
    font-weight: bold;
    border-radius: 6px;
    
    &:hover {
        cursor: pointer;
    }
`;

const BasicBackground = styled.div<BackgroundProps>`
    background: ${(props: any) => props.backgroundColor};

    width: 45%;
    height: 100%;
    margin: auto;
    direction: rtl;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    border-radius: 10px;
    position: relative;
`;

interface BackgroundProps {
    backgroundColor: string,
    children: any,
} 

export const BackgroundContainer: React.FC<BackgroundProps> = ({backgroundColor, children}: BackgroundProps) => {
    return <BasicBackground backgroundColor={backgroundColor} children={children} ></BasicBackground>
}