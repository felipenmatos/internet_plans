import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import Footer from "../../components/Footer/Footer";
import FormCep from "../../components/FormCep/FormCep";
import Header from "../../components/Header/Header";
import TitleHome from "../../components/TitleHome/TitleHome";
import { useNavigate } from "react-router-dom";
import { useHook } from "../../context/state";
import Modal from "../../components/Modal/Modal";

function Home() {
  const navigate = useNavigate();
  const { userContext } = useHook();
  const { setDataList } = userContext;
  const [cep, setCep] = useState("");
  const [error, setError] = useState(false);

  function consult() {
    if (cep.length < 8) {
      setError(true);
    } else {
      const formatCep = cep.replace(/[^\d]/g, "");
      console.log(formatCep);
      fetch(`https://viacep.com.br/ws/${formatCep}/json/`)
        .then((res) => {
          res.json().then(function (data) {
            navigate("/Offers");
            setDataList(data);
            localStorage.setItem("user","current_user");
          });
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    }
  }

  function ReturnModal() {
    setError(false);
  }

  console.log(cep);

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
            onChange={(e) => setCep(e.target.value)}
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

  @media (max-width: 768px) {
    width: 100%;
    height: 75vh;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
