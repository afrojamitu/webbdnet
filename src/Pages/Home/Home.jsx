import React from 'react';
import Banner from './Banner';
import Courses from './Courses';
import Services from './Services';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Services></Services>
            <Team></Team>
        </div>
    );
};

export default Home;