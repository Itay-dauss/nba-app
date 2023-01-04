import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 94%;
  height: 94%;
  margin: auto;
`;

export const Logo = styled.img`
  height: 100px;
`;

export const ListsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
  width: 100%;
`;

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
  margin: auto;
  direction: rtl;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 80%;
`;

export const SearchPlayer = styled.input`
  width: 62%;
  height: 25px;
  direction: ltr;
  outline: 0;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid darkgrey;
  padding: 0 0 1px 5px;
`;
