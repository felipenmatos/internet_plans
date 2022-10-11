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
        <CardOffers
          location="location"
          description1="teste"
          description2="teste"
          description3="teste"
          button="Contratar"
        />
        <CardOffers
          location="location"
          description1="teste"
          description2="teste"
          description3="teste"
          button="Contratar"
        />
        <CardOffers
          location="location"
          description1="teste"
          description2="teste"
          description3="teste"
          button="Contratar"
        />
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
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default Offers;
