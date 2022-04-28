import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h5 className='fs-6'>HI! I'M</h5>
            <p className="fs-1 fw-bold">Rimon Hossain</p>
            <span style={{ color: '#fff', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={[`MERN STACK DEVELOPER`,`WEB DEVELOPER`]}
                    loop={150}
                    cursor
                    style={{fontStyle:'italice'}}
                    cursorStyle='_'
                    typeSpeed={200}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>

            <div className='mt-3'>
                <a href="https://github.com/rimonhossain12" target={`_blank`} className='me-3'><FaGithub size={35} /></a>
                <a href="https://www.linkedin.com/in/rimonhossain12/" target={`_blank`}><FaLinkedin size={35} /></a>
            </div>
            <div className='resume'>
                <a id='resume-button' className='text-decoration-none' href="https://drive.google.com/file/d/13lZ6IshNLg3b5eISudcmecmT1ww4zH9n/view?usp=sharing" target={`_blank`}>Resume</a>
            </div>
        </div>
    );
};

export default Header;