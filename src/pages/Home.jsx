import React from 'react';
import Banner from '../comp/Banner';
import Tranding from '../comp/Tranding';
import Newsletter from './Newsletter';
import Topcontree from './Topcontree';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tranding></Tranding>
            <Topcontree></Topcontree>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;