import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => (
  <section id="about" className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-4">Acerca de mí</h2>
      <Row>
        <Col>
          <p>
            Soy Erick, desarrollador web con experiencia en tecnologías
            como React, JavaScript, y Bootstrap. Me apasiona construir soluciones efectivas para problemas digitales.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
