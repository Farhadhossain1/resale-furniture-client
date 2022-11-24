import React from 'react';
import Categories from '../Categories/Categories';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <h1>This is Home Page!!!</h1>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;