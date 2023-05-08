import React from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";

export const Header = ({ expensHandler, closeLogin, UserMaps, isloggedIn }) => {
  return (
    <Container>
      {isloggedIn ? (
        <>
          <ButtonContainer>
            <Button onClick={expensHandler}>Expens</Button>
            <Button onClick={UserMaps}>User</Button>
            <Button onClick={closeLogin}>Logout</Button>
          </ButtonContainer>
        </>
      ) : null}
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: #ad9be9;
  justify-content: center;
  padding:10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5rem;
`;