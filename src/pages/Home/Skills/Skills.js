import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { skills1, skill2 } from '../../../data/skill.data';
import Skill from './Skill';
import './Skill.css';

const Skills = () => {
    return (
        <div>
            <Container>
                <div className="main-title">
                    <h3 className='text-center fw-bold' style={{ color: '#B7950B' }} >My Skills</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="skill-bar">
                            {
                                skills1.map((skill) => <Skill {...skill}
                                    key={skill.id}
                                />)
                            }
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="skill-bar">
                            {
                                skill2.map((skill) => <Skill {...skill}
                                    key={skill.id}
                                />)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;