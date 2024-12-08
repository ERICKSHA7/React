// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <Container>
      <Row>
        {/* Columna con información sobre el portafolio */}
        <Col md={6}>
          <h5>Sobre mí</h5>
          <p>
            Soy un desarrollador apasionado por crear soluciones digitales efectivas. 
            ¡Gracias por visitar mi portafolio!
          </p>
        </Col>
        {/* Columna con enlaces sociales */}
        <Col md={6} className="text-md-end">
          <h5>Conéctate conmigo</h5>
          <a 
            href="https://www.linkedin.com/in/tu-perfil" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white me-3"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white me-3"
          >
            GitHub
          </a>
          <a 
            href="mailto:tu-email@example.com" 
            className="text-white"
          >
            Correo
          </a>
        </Col>
      </Row>
      {/* Copyright */}
      <Row className="mt-3">
        <Col className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Erick . Todos los derechos reservados.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
