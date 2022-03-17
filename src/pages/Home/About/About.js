import React from 'react';
import profile from '../../../images/abou_me.jpg';

const About = () => {
    return (
        <div className='container' style={{marginTop:'10vh'}}>
            <div>
                <h2 className='text-start'>About Me</h2>
                <div className="row mt-3">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <img src={profile} alt="profile images" className='img-fluid rounded' />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur quasi facere architecto, ipsam molestiae maxime doloribus laudantium ducimus ipsum.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;