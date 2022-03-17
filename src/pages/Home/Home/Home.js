import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Skill from '../MySkill/Skill';

const Home = () => {
    return (
        <div>
            <Banner />
            <Header/>
            <About/>
            <Skill/>
        </div>
    );
};

export default Home;