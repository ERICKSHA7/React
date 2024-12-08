import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => (
  <section id="contact" className="py-5">
    <Container>
      <h2 className="text-center mb-4">Contacto</h2>
      <Row>
        <Col md={6} className="mx-auto">
          <Form>
            <Form.Group className="mb-3 shadow p-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" />
            </Form.Group>
            <Form.Group className="mb-3 shadow p-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Tu correo" />
            </Form.Group>
            <Form.Group className="mb-3 shadow p-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;
