import React from "react";
import Carrossel from "../Carrossel";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="mt-3">
        <h2>Bem vindo!</h2>
        <p>
          Você está acessando nosso portal de gestão informacional conectado!
          Utilize a barra de navegação superior para conhecer!
        </p>
      </Container>
      <Container className="mt-3">
        <Carrossel />
      </Container>
    </>
  );
};

export default Home;
