// src/components/Projects.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Archivo de imagenes de animales.",
    link: "https://github.com/ERICKSHA7/Animales.io.git",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Cree un login.",
    link: "https://github.com/ERICKSHA7/LOGIN.io.git",
    
  },
  
];


const Projects = () => (
  <section id="projects" className="py-5 ">
    <Container>
      <h2 className="text-center mb-4">Proyectos</h2>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} sm={12} md={6} lg={4}>
            <Card className="mb-3 shadow-lg">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="secondary" href={project.link} target="_blank">
                  Ver proyecto
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <div style={{display:'grid',
      placeItems:'center',
      height:'50vh'
    }}className="container center">
       <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9bdcaec-6ba9-4281-807b-966672c125f7/d1wq6i5-a88e5fb5-7a60-45f3-919a-ffbd56d280c7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y5YmRjYWVjLTZiYTktNDI4MS04MDdiLTk2NjY3MmMxMjVmN1wvZDF3cTZpNS1hODhlNWZiNS03YTYwLTQ1ZjMtOTE5YS1mZmJkNTZkMjgwYzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5CrOjinak3KCcKwoefCG3Z3iLVdP580v5LTcCuGTW4M"  alt="..." style={{width:'300px',height:'auto'}}></img>
    
    </div>
    
  </section>
);

export default Projects;
