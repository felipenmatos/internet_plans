import React from "react";
import styled from "styled-components";

type TypeForm = {
  title: string;
  placeholder: string;
  button: string;
};

function FormCep({ title, placeholder, button }: TypeForm) {
  return (
    <Container>
      <Title>{title}</Title>
      <Input placeholder={placeholder} type="text" />
      <Button>{button}</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 361px;
  height: 340px;
  background: rgba(0, 206, 252, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const Title = styled.p`
  margin-top: 69px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

const Input = styled.input`
  width: 200px;
  height: 24px;
  margin-top: 37px;
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  border: none;
  outline: none;

  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #898989;
  }
`;

const Button = styled.button`
  width: 122px;
  height: 51px;
  margin-top: 37px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background: #00cefc;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export default FormCep;
