import React from "react";
import styled from "styled-components";

type TypeFooter = {
  contato: string;
  email: string;
};

function Footer({ contato, email }: TypeFooter) {
  return (
    <Container>
      <Row>
        <Line />
        <Column>
          <Number>Contato: {contato}</Number>
          <Email>E-mail: {email}</Email>
        </Column>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    height: 9vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Line = styled.div`
  width: 2px;
  height: 48px;
  margin-left: 45px;
  background: #00cefc;
`;

const Number = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #060462;
`;

const Email = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #060462;
`;

export default Footer;
