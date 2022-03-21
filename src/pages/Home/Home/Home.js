import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Skill from '../MySkill/Skill';

const Home = () => {
    return (
        <div>
            <Banner />
            <Header/>
            <About/>
            <Skill/>
            <Footer/>
        </div>
    );
};

export default Home;