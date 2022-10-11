import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import Footer from "../../components/Footer/Footer";
import FormCep from "../../components/FormCep/FormCep";
import Header from "../../components/Header/Header";
import TitleHome from "../../components/TitleHome/TitleHome";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

function Home() {
  const navigate = useNavigate();
  const [cep, setCep]: any = useState("");
  const [error, setError]: any = useState(false);

  function consult() {
    if (cep.length < 8) {
      setError(true);
    } else {
      navigate("/Offers");
    }
  }

  function ReturnModal() {
    setError(false);
  }

  console.log(cep);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cepValue = event.target.value;
    setCep(cepValue);
  };

  return (
    <Container>
      <Header src={logo} alt="logo" text="Sair" />
      <Body>
        <Div>
          <FormCep
            title="Informe seu CEP"
            placeholder="Digite seu CEP..."
            button="Consultar"
            onClick={() => consult()}
            value={cep}
            onChange={inputHandler}
          />
        </Div>
        <Div>
          <TitleHome
            title="Sua conectividade cada vez mais veloz "
            description="Empresa especializada em fornecimento de internet 
            com preços que cabem no seu bolso. Consulte as ofertas com seu Cep."
            button="Saiba Mais"
          />
        </Div>
      </Body>
      <Footer contato="(00) 0000 - 0000" email="challenge@internet.com" />
      {error && (
        <Modal
          title="Informe um CEP válido"
          button="Return"
          onClick={() => ReturnModal()}
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
  flex-direction: row;
  justify-content: space-between;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
