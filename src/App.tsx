import React from "react";
import styled from "styled-components";
import background from "./assets/Background.jpg";
import logo from "./assets/Logo.svg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Container>
      <Header src={logo} alt="logo" text="Sair" />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default App;
