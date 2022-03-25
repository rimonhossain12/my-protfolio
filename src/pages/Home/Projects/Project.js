import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { projects } from '../../../data/project';
import './Project.css';

const Project = () => {
    return (
        <div style={{ marginTop: '15vh' }}>
            <h2>This is my projects</h2>
           <Container>
                <Row xs={1} md={3} className="g-4">
                    {projects.map((project) => (
                        <Col>
                            <Card className='project-card'>
                                <Card.Img variant="top" className='img-fluid' src={project.img} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
           </Container>
        </div>
    );
};

export default Project;