import React from "react";
import styled from "styled-components";
import background from "./assets/Background.jpg";
import logo from "./assets/Logo.svg";
import Footer from "./components/Footer/Footer";
import FormCep from "./components/FormCep/FormCep";
import Header from "./components/Header/Header";
import TitleHome from "./components/TitleHome/TitleHome";

function App() {
  return (
    <Container>
      <Header src={logo} alt="logo" text="Sair" />
      <Body>
        <Div>
          <FormCep
            title="Informe seu CEP"
            placeholder="Digite seu Cep..."
            button="Consultar"
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
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
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

export default App;
