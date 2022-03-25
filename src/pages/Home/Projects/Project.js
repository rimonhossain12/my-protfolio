// import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Container,Row } from 'react-bootstrap';
import './Project.css';

const Project = () => {
    return (
        <div style={{ marginTop: '15vh' }}>
            <h2>This is my projects</h2>
           <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col>
                            <Card className="project-card">
                                <Card.Img variant="top" src="holder.js/100px160" />
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