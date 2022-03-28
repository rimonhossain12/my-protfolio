import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Navbar className="navbar-dark fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='nav-style'>Rimon Hossain</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className='nav-style'>Home</Nav.Link>
                            <Nav.Link href="#about" className='nav-style'>About Me</Nav.Link>
                            <Nav.Link href="#skill" className='nav-style'>skill</Nav.Link>
                            <Nav.Link href="#project" className='nav-style'>projects</Nav.Link>
                            <Nav.Link href="#contact" className='nav-style' >Contact</Nav.Link>
                            <Nav.Link href="#contact" className='nav-style' >
                                <a href="https://drive.google.com/file/d/13lZ6IshNLg3b5eISudcmecmT1ww4zH9n/view?usp=sharing" target={`_blank`}>Resume</a>
                            </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Banner;