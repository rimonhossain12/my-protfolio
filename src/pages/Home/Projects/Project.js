// import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { projects } from '../../../data/project';
import './Project.css';

const Project = () => {
    return (
        <div style={{ marginTop: '15vh' }}>
            <h2>This is my projects</h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {projects.map((project) => (
                        <>
                            <Col>
                                <Card className='project-card mt-2'>
                                    <Card.Img variant="top" className='img-fluid' src={project.img} />
                                    <Card.Body className='mt-3 text-start'>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                        {/* <a href= `{project.live}`></a> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Project;