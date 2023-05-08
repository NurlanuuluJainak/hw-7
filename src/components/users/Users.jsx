import { useEffect, useState } from "react";
import { Header } from "../Header/header";
import styled from "styled-components";

const URL = "https://jsonplaceholder.typicode.com/users";

export const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
     <Header />
    <GeneralDiv>
      {data.map((el) => {
        return (
          <DivContein>
          <ul>
            <span>ID  {el.id}</span>
            <h3>{el.name}</h3>
            <p>{el.email}</p>
          </ul>
          </DivContein>
        );
      })}
    </GeneralDiv>
    </>
  );
};
const GeneralDiv = styled.div`
display: flex;
flex-direction:column;
align-items: center;
`;

const DivContein = styled.div`
  background-color: #959b9a;
  color: #fff;
  border-radius: 10px;
  border:2px solid #726868;
  box-shadow:0px 0px 25px 0px #726868;
  font-size: 23px;
  margin-top: 50px;
  width: 60rem;
  height: 12rem;
`;