import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
const Home = () => {
    return (
        <div>
            <Banner />
            <Header/>
            <About/>
            <Skills/>
        </div>
    );
};

export default Home;