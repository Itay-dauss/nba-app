import styled from "styled-components";
import { ButtonProps } from "./interfaces";

export const CardContainer = styled.div`
  direction: ltr;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background-color: #f5f5f5;
  width: 60%;
  margin: 5px 0;
  padding: 0 12px;
`;

export const CardTitle = styled.h3``;

export const BasicButton = styled.button<ButtonProps>`
  background: ${(props: any) => (props.isFavorite ? "red" : "limegreen")};
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  height: fit-content;
`;
