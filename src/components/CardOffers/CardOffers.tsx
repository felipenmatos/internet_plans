import React from "react";
import styled from "styled-components";

type TypeCard = {
  location: string;
  description1: string;
  description2: string;
  description3: string;
  button: string;
  onClick?: () => void;
};

function CardOffers({
  location,
  description1,
  description2,
  description3,
  button,
  onClick,
}: TypeCard) {
  return (
    <Container>
      <Header>
        <Location>{location}</Location>
      </Header>
      <Ul>
        <Li>{description1}</Li>
        <Li>{description2}</Li>
        <Li>{description3}</Li>
      </Ul>
      <Button onClick={onClick}>{button}</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 263px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 206, 252, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 183px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 206, 252, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
`;

const Header = styled.div`
  width: 263px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 20px 20px 0px 0px;

  @media (max-width: 768px) {
    width: 183px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 20px 20px 0px 0px;
  }
`;

const Location = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #060462;

  @media (max-width: 768px) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;

    color: #060462;
  }
`;

const Ul = styled.ul`
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Li = styled.li`
  margin-top: 9px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-top: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
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

  @media (max-width: 768px) {
    width: 112px;
    height: 31px;
    margin-top: 17px;
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
  }
`;

export default CardOffers;
