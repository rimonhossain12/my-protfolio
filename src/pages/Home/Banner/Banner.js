import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Navbar className="navbar-dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='nav-style'>Rimon Hossain</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className='nav-style' style={{color:'white'}}>Home</Nav.Link>
                            <Nav.Link href="#about" className='nav-style' style={{ color: 'white' }}>About Me</Nav.Link>
                            <Nav.Link href="#skill" className='nav-style' style={{ color: 'white' }}>skill</Nav.Link>
                            <Nav.Link href="#project" className='nav-style' style={{ color: 'white' }}>projects</Nav.Link>
                            <Nav.Link href="#contact" className='nav-style' style={{ color: 'white' }}>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Banner;