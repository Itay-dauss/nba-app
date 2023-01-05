import styled from "styled-components";

export const ListTitle = styled.h1`
  color: whitesmoke;
  text-decoration: underline;
  width: 100%;
  text-align: center;
`;

export const ListContainer = styled.div`
  width: 45%;
  height: 100%;
  margin: auto;
  direction: rtl;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  background: #cc2b31;
  border-radius: 10px;
`;

export const PlayersList = styled.div`
  margin: 10px 0;
  direction: rtl;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
`;
