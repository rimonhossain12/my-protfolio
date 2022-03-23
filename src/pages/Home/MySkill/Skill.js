import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Skill = () => {
    return (
        <div style={{ marginTop: '12vh' }}>
            <Zoom bottom cascade>
                <h3 className='text-center fw-bold' style={{ color: '#B7950B' }} >My Skills</h3>
            </Zoom>
            <Container>
                <Row className='mx-auto'>
                    <Col xs={12} md={6} lg={6}>
                        <Fade right>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>HTML5</span>
                                <ProgressBar animated now={95} label={`${95}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase text-start'>css</span>
                                <ProgressBar animated now={90} label={`${90}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>bootstrap</span>
                                <ProgressBar animated now={85} label={`${85}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>JavaScript</span>
                                <ProgressBar animated now={75} label={`${75}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>React Js</span>
                                <ProgressBar animated now={85} label={`${85}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>C</span>
                                <ProgressBar animated now={75} label={`${75}%`} />
                            </p>
                        </Fade>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Fade left>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>C++</span>
                                <ProgressBar animated now={55} label={`${55}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>tailwind</span>
                                <ProgressBar animated now={67} label={`${67}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase text-start'>meterail ui</span>
                                <ProgressBar animated now={55} label={`${55}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>Node Js</span>
                                <ProgressBar animated now={50} label={`${50}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>Express js </span>
                                <ProgressBar animated now={50} label={`${50}%`} />
                            </p>
                            <p className='w-75 text-start'>
                                <span className='text-uppercase'>Mongodb</span>
                                <ProgressBar animated now={50} label={`${50}%`} />
                            </p>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skill;