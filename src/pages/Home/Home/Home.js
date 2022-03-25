import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Skill from '../MySkill/Skill';
import Project from '../Projects/Project';

const Home = () => {
    return (
        <div>
            <Banner />
            <Header/>
            <About/>
            <Skill/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;