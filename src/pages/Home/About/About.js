import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';


const About = () => {
    return (
        <div className='container' style={{ marginTop: '25vh' }}>
            <div class="row g-4">
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    {/* <p style={{ textAlign: 'justify' }}> */}
                    <Fade right>
                        <img id="profile-img" className='img-fluid' src="https://i.ibb.co/R7pX5yv/74418535.jpg" alt="74418535" border="0" />
                    </Fade>
                    {/* </p> */}
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <Zoom bottom cascade>
                        <h3 className='text-start fw-bold' style={{ color: '#B7950B' }} >About Me</h3>
                    </Zoom>
                    <Fade left>
                        <p style={{ textAlign: 'justify', marginTop: '6vh', fontSize: '17px' }}>
                            Hi! I am Rimon Hossain, a 4th year student of Diploma in Computer Science and Technology. I am a Marn Stack developer as well as a programming problem solving lover. I am constantly improving myself to improve myself in this field.</p>
                    </Fade>
                </div>
            </div >
        </div>
    );
};

export default About;