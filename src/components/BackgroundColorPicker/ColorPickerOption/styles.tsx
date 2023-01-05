import React from "react";
import styled from "styled-components";
import { ColorOptionProps } from "./interfaces";

export const BasicColorOption = styled.div<ColorOptionProps>`
  background: ${(props: any) => props.colorHex};

  width: 35px;
  height: 35px;
  border: 1px solid black;
  margin: auto;
  cursor: pointer;
  border-radius: 50%;
`;
