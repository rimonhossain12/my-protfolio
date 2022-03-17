import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h5 className='fs-6'>HI! I'M</h5>
            <p className="fs-1 fw-bold">Rimon Hossain</p>
            <span style={{ color: '#98B0BC', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={[`MERN STACK DEVELOPER`,`WEB APP DEVELOPER`]}
                    loop={150}
                    cursor
                    cursorStyle='_'
                    typeSpeed={200}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                />
            </span>

            <div className='mt-3'>
                <a href="https://github.com/rimonhossain12" target={`_blank`} className='me-3'><FaGithub size={35} /></a>
                <a href="https://www.linkedin.com/in/rimonhossain12/" target={`_blank`}><FaLinkedin size={35} /></a>
            </div>
        </div>
    );
};

export default Header;