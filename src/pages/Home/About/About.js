import React from 'react';
import profile from '../../../images/abou_me.jpg';
// import Zoom from 'react-reveal/Zoom';
import './About.css';

const About = () => {
    return (
        <div className='container' style={{ marginTop: '25vh' }}>
            <div class="row g-5">
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <p style={{ textAlign: 'justify' }}>
                        <img src={profile} alt="profile-images" className='img-fluid' />
                    </p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <p style={{ textAlign: 'justify', marginTop:'8vh',fontSize:'18px' }}>
                        Hi! I am Rimon Hossain, a 4th year student of Diploma in Computer Science and Technology. I am a Marn Stack developer as well as a programming problem solving lover. I am constantly improving myself to improve myself in this field.</p>
                </div>
            </div>
        </div >
    );
};

export default About;