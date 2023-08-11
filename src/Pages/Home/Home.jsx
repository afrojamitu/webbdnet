import React from 'react';
import Banner from './Banner';
import Courses from './Courses';
import Services from './Services';
import Team from './Team';
import Events from './Events';
import Contact from './Contact';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Services></Services>
            <Team></Team>
            <Events></Events>
            <Contact></Contact>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;