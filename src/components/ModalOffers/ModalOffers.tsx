import React from "react";
import styled from "styled-components";

type TypeModal = {
  title: string;
  button: string;
  onClick: () => void;
};

function ModalOffers({ title, button, onClick }: TypeModal) {
  return (
    <Container>
      <Card>
        <Title>{title}</Title>
        <Input placeholder="Digite seu e-mail..." />
        <Button onClick={onClick}>{button}</Button>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  background-size: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;

const Card = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 320px;
    height: 340px;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #e90000;

  @media (max-width: 768px) {
    width: 90%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 29px;
    color: ##e90000;
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

const Input = styled.input`
  width: 200px;
  height: 24px;
  margin-top: 37px;
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #00cefc;
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

export default ModalOffers;
