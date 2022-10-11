import React from "react";
import styled from "styled-components";

type TypeHeader = {
  src: string;
  alt: string;
  text: string;
};

function Header({ src, alt, text }: TypeHeader) {
  return (
    <Container>
      <Logo src={src} alt={alt} />
      <Button>{text}</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`;

const Logo = styled.img`
  width: 100px;
  margin-left: 45px;
`;

const Button = styled.button`
  width: 112px;
  height: 32px;
  margin-right: 45px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #00cefc;
  background: #ffffff;
  border: 1px solid #00cefc;
  cursor: pointer;
`;

export default Header;
