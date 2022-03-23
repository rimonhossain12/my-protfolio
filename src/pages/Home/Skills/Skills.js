import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { skills1, skill2 } from '../../../data/skill.data';
import Skill from './Skill';
import './Skill.css';
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return (
        <section id="skills">
            <Container>
                <div className="main-title">
                    <h2 className="text-center">
                        {/* <Zoom left cascade> */}
                        My Skills
                        {/* </Zoom> */}
                    </h2>
                </div>
                <Row>
                    <Fade right>
                    <Col md={6}>
                        <div className="skill-bars">
                            <Fade right>
                                {skills1.map((skill) => (
                                    <Skill {...skill} key={skill.id} />
                                ))}
                            </Fade>
                        </div>
                    </Col>
                    </Fade>
                    <Fade right>
                        <Col md={6}>
                            <div className="skill-bars">
                                {skill2.map((skill) => (
                                    <Skill {...skill} key={skill.id} />
                                ))}
                            </div>
                        </Col>
                    </Fade>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;