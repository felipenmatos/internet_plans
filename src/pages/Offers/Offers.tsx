import React from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import CardOffers from "../../components/CardOffers/CardOffers";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Offers() {
  return (
    <Container>
      <Header src={logo} alt="logo" text="Sair" />
      <Body>
        <Row>
          <CardOffers
            location="Location"
            description1="03 CI Protege (antivírus)"
            description2=" TV – Streaming com canais"
            description3="500 Mega"
            button="Contratar"
          />
          <CardOffers
            location="Location"
            description1="01 CI Protege (antivírus)"
            description2="Deezer"
            description3="300 Mega"
            button="Contratar"
          />
          <CardOffers
            location="Location"
            description1="03 CI Protege (antivírus)"
            description2="TV – Streaming com canais"
            description3="200 Mega"
            button="Contratar"
          />
        </Row>
        <Button>Ops, errei meu cep!</Button>
      </Body>
      <Footer contato="(00) 0000 - 0000" email="challenge@internet.com" />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  width: 213px;
  height: 47px;
  margin-bottom: -40px;
  margin-left: 63%;
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

export default Offers;
