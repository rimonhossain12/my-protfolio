import React from 'react';
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
    return (
        <div style={{marginTop: '5vh'}}>
            <div className='social-container mb-1'>
                <a href="https://github.com/rimonhossain12" target={`_blank`}>
                    <BsGithub className='social-icon'/>
                </a>
                <a href="https://www.facebook.com/ar.rimon.7731" target={`_blank`}>
                    <BsFacebook className='social-icon' />
                </a>

                <a href="https://www.linkedin.com/in/rimonhossain12/" target={`_blank`}>
                    <BsLinkedin className='social-icon'/>
                </a>

            </div>
            <p>All rights reversed &copy; Rimon</p>
        </div>
    );
};

export default Footer;