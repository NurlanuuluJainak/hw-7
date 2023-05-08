import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";

export const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState();
  const [formValid, setFormValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    setFormValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };
  const validateEmailHandler = () => {
    setEmailValid(enteredEmail.includes("@"));
  };
  const validatePasswordHandler = () => {
    setPasswordValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.getLogin(enteredEmail, enteredPassword);
  };

  return (
    <ContainerDiv>
      <MiniContainerDiv>
        <form onSubmit={submitHandler}>
          <InputControl>
            <Label htmlFor="email">E-Mail</Label>

            {emailValid === false ? (
              <InputDiv
                style={{ borderColor: "red", background: "#f1aeae" }}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                type="email"
                id="email"
              />
            ) : (
              <InputDiv
                type="email"
                id="email"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            )}
          </InputControl>
          <InputControl>
            <Label htmlFor="password">Password</Label>
            {passwordValid === false ? (
              <InputDiv
                style={{ borderColor: "red", background: "#f1aeae" }}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                type="password"
                id="password"
              />
            ) : (
              <InputDiv
                type="password"
                id="password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            )}
          </InputControl>
          <Button disabled={!formValid} type="submit">
            login
          </Button>
        </form>
      </MiniContainerDiv>
    </ContainerDiv>
  );
};
const InputDiv = styled.input`
  width: 400px;
  height: 35px;
  background-color: #dad5d5;

  border: 2px solid #fff;
  border-radius: 10px;
  font: inherit;
  &:focus {
    outline: none;
    border-color: #7c1292;
    background: #e7c8ef;
  }
`;

const Label = styled.label`
padding-right: 10px;
font-weight:bold;
`
const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const MiniContainerDiv = styled.div`
  width: 600px;
  height: 220px;
  border: 2px solid;
  background-color: #fff;
  border-radius: 12px;

  box-shadow: #918a8a
   0px 0px 40px 0px;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const InputControl = styled.div`
margin-top:20px;
margin-bottom: 20px;
`;