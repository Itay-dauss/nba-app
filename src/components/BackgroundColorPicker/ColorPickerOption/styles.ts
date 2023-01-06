import styled from "styled-components";
import { ColorOptionProps } from "./interfaces";

export const BasicColorOption = styled.div<ColorOptionProps>`
  background: ${({ colorHex }: ColorOptionProps) => colorHex};

  width: 35px;
  height: 35px;
  border: 1px solid black;
  margin: 2px;
  cursor: pointer;
  border-radius: 50%;
`;
