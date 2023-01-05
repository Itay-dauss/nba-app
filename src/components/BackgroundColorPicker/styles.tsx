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

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
