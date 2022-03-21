import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserForm from './UserForm';




const Contact = () => {
    return (
        <div className='container' style={{ marginTop: '15vh' }}>
            <div>
                <Row className='g-4 mt-5'>
                    <Col className='mx-auto mt-5' xs={12} md={4} lg={4}>
                        <p className='text-start font-monospace'>
                            <i class="fa-solid fa-phone"></i>
                            <span className='ms-2'>+8801739847468</span>
                        </p>
                        <p className='text-start font-monospace'>
                            <i class="fa-solid fa-envelope"></i>
                            <span className='ms-2'>rimonmpi@gmail.com</span>
                        </p>
                        <p className='text-start font-monospace'>
                            <i class="fa-solid fa-location-dot"></i>
                            <span className='ms-2'>Sirajganj, Bangladesh</span>
                        </p>

                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <UserForm/>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Contact;