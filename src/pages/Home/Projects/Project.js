// import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import './Project.css';

const Project = () => {
    return (
        <div style={{ marginTop: '15vh' }}>
            <h2>This is my projects</h2>
            <Container>
                <Row className="g-4">
                    <Col xs={1} md={2} lg={3}>
                        <Card className="project-card">
                            <Card.Img className='img-fluid mb-1' variant="top" src={'https://i.ibb.co/QvzJ79Y/Screenshot-54.png'} />
                            <div className='mt-2'>
                                <Card.Title className="text-start mt-2">world top programmer</Card.Title>
                                <p className='text-start'>This is world most talented programmer website. who are making various programming languages. And making important things for modern technologies </p>
                            </div>
                            <div className='technology'>
                                <span>Html</span>
                                <span>Css</span>
                                <span>Bootstrap5</span>
                                <span>JS</span>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={1} md={2} lg={3}>
                        <Card className="project-card">
                            <Card.Img className='img-fluid mb-1' variant="top" src={'https://i.ibb.co/k0M4hKM/Screenshot-55.png'} />
                            <div className='mt-2'>
                                <Card.Title className="text-start mt-2">Mac Book project</Card.Title>
                                <p className='text-start'>This is mac book project user can click any product button then price added the card.After click all the button users see the total product price. If user have any promo code then type promo code users will be discount product price.</p>
                            </div>
                            <div className='technology'>
                                <span>Html</span>
                                <span>Css</span>
                                <span>Bootstrap5</span>
                                <span>JS</span>
                                <span>ES6</span>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={1} md={2} lg={3}>
                        <Card className="project-card">
                            <Card.Img className='img-fluid mb-1' variant="top" src={'https://i.ibb.co/rsykcM1/Screenshot-60.png'} />
                            <div className='mt-2'>
                                <Card.Title className="text-start mt-2">React static medical project</Card.Title>
                                <p className='text-start'>It's is React static medical projects. users can see the home page all service doctors list.</p>
                            </div>
                            <div className='technology'>
                                <span>Html</span>
                                <span>Css</span>
                                <span>Bootstrap5</span>
                                <span>React</span> <br />
                                <span>Firebase</span>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={1} md={2} lg={3}>
                        <Card className="project-card">
                            <Card.Img className='img-fluid mb-1' variant="top" src={'https://i.ibb.co/hXJY997/Screenshot-63.png'} />
                            <div className='mt-2'>
                                <Card.Title className="text-start mt-2">The MealDb</Card.Title>
                                <p className='text-start'>It's is React static food project.</p>
                            </div>
                            <div className='technology'>
                                <span>Html</span>
                                <span>Css</span>
                                <span>Bootstrap5</span>
                                <span>React</span>
                                <span>REST API</span>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={1} md={2} lg={3}>
                        <Card className="project-card">
                            <Card.Img className='img-fluid mb-1' variant="top" src={'https://i.ibb.co/Gd52kfv/travel-site-1.png'} />
                            <div className='mt-2'>
                                <Card.Title className="text-start mt-2">Travel web site</Card.Title>
                                <p className='text-start'>React Travel web site. user booking any place. DashBoard page manage all the booking place and cancel tour.</p>
                            </div>
                            <div className='technology'>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>Mongodb</span>
                                <span>Firebase</span>
                                <span>Bootstrap5</span>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={1} md={2} lg={3}>
                        <Card className="project-card">
                            <Card.Img className='img-fluid mb-1' variant="top" src={'https://i.ibb.co/5L8bRtT/Screenshot-51.png'} />
                            <div className='mt-2'>
                                <Card.Title className="text-start mt-2">Rect ByCycle webpage</Card.Title>
                                <p className='text-start'>React ByCycle website. users buy any product and see his all product in dashboard pages. Admin can manage all the orders.</p>
                            </div>
                            <div className='technology'>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>Mongodb</span>
                                <span>Firebase</span>
                                <span>Bootstrap5</span>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project;