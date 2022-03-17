import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Banner />
            <Header/>
            <About/>
        </div>
    );
};

export default Home;