import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Logo />
      <Button />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
`;

const Logo = styled.img``;

const Button = styled.button``;

export default Footer;
