import styled from "styled-components";

export const ColorPickerButton = styled.button`
  position: absolute;
  left: 18px;
  top: 16px;
  width: 80px;
  background: burlywood;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #f0d7b8;
  }
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
