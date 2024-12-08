// src/components/Header.jsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => (
  <Navbar className="bg-secondary" >
    <Container>
      <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Proyectos</Nav.Link>
          <Nav.Link href="#about">Acerca de mí</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
