import React from "react";
import styled from "styled-components";

type TypeTitleHome = {
  title: string;
  description: string;
  button: string;
};

function TitleHome({ title, description, button }: TypeTitleHome) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>{button}</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 432px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Description = styled.p`
  margin-top: 37px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Button = styled.button`
  margin-top: 37px;
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

export default TitleHome;
