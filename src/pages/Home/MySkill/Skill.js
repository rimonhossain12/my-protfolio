import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

const Skill = () => {
    return (
        <div style={{marginTop:'12vh'}}>
            <Container>
                <h3 className='text-center fw-bold' style={{ color: '#B7950B',marginBottom:'4vh' }} >My Skills</h3>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <p className='w-75 text-start'>
                            <span className='text-uppercase'>HTML5</span>
                            <ProgressBar  animated now={95} label={`${95}%`} />
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
                    </Col>
                    <Col xs={12} md={6} lg={6}>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skill;