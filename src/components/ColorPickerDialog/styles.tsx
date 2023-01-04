import styled from "styled-components";

export const ColorPickerContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    justify-content: space-around;  
    width: 100%;
    height: 100%;
`;

const BasicColorOption = styled.div<ColorOptionProps>`
    background: ${(props: any) => props.colorHex};

    width: 35px;
    height: 35px;
    border: 1px solid black;
    margin: auto;
    cursor: pointer;
    border-radius: 50%;
`;

interface ColorOptionProps {
    colorHex: string,
    onClick: any
} 

export const ColorOption: React.FC<ColorOptionProps> = ({colorHex, onClick}: ColorOptionProps) => {
    return <BasicColorOption colorHex={colorHex} onClick={onClick}></BasicColorOption>
}