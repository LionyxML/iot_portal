import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./index.css";

export const Navegacao = () => {
  return (
    <>
      <Navbar
        bg=""
        variant="dark"
        expand="md"
        className="nav__red"
        sticky="top"
      >
        <Navbar.Brand href="/" className="mx-2">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "45px", borderRadius: "2px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="mx-2" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          ></Nav>
          <Nav className="mx-2 font-weight-bold">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/laboratorios">Laboratórios</Nav.Link>

            <NavDropdown
              title="Dados"
              id="navbarScrollingDropdown"
              className=""
            >
              <NavDropdown.Item href="/nodeMeteorologia">
                Meteorologia
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/nodeMeteorologia">
                Consumo de Energia
              </NavDropdown.Item>
              <NavDropdown.Item href="/nodeMeteorologia">
                Geração de Energia
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/nodeMeteorologia">
                Consumo de Água
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/nodeMeteorologia">
                Subestação Didática
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/nodeMeteorologia">
                Gerador de Emergência
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navegacao;
