import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import CardOffers from "../../components/CardOffers/CardOffers";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useHook } from "../../context/state";
import ModalOffers from "../../components/ModalOffers/ModalOffers";

function Offers() {
  const { userContext } = useHook();
  const { dataList } = userContext;
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  function Click() {
    navigate("/");
  }

  return (
    <Container>
      <Header src={logo} alt="logo" text="Sair" />
      <Body>
        <Row>
          <CardOffers
            location={dataList.localidade}
            description1="03 CI Protege (antivírus)"
            description2=" TV – Streaming com canais"
            description3="500 Mega"
            button="Contratar"
            onClick={() => setModal(true)}
          />
          <CardOffers
            location={dataList.localidade}
            description1="01 CI Protege (antivírus)"
            description2="Deezer"
            description3="300 Mega"
            button="Contratar"
            onClick={() => setModal(true)}
          />
          <CardOffers
            location={dataList.localidade}
            description1="03 CI Protege (antivírus)"
            description2="TV – Streaming com canais"
            description3="200 Mega"
            button="Contratar"
            onClick={() => setModal(true)}
          />
        </Row>
        <Button onClick={() => Click()}>Ops, errei meu cep!</Button>
      </Body>
      <Footer contato="(00) 0000 - 0000" email="challenge@internet.com" />
      {modal && (
        <ModalOffers
          title={`Informe seu e-mail para entrarmos em contato com uma unidade mais próxima da cidade ${dataList.localidade} , bairro ${dataList.bairro}.`}
          onClick={() => setModal(false)}
          button="Enviar"
        />
      )}
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
