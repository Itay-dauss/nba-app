import styled from "styled-components";
import { BackgroundProps } from "./interfaces";

export const BasicBackground = styled.div<BackgroundProps>`
  background: ${({ backgroundColor }: BackgroundProps) => backgroundColor};

  width: 100%;
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
