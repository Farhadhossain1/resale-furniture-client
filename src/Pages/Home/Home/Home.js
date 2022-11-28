import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Categories from '../Categories/Categories';
import About from './About/About';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;