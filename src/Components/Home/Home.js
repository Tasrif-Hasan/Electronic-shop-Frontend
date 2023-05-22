import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Offer from '../Offer/Offer';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-4 mb-4' style={{ color: 'darkblue' }}>My Electronic Shop</h1>
            <Banner></Banner>
            <Inventories></Inventories>
            <Offer></Offer>
            <Review></Review>
        </div>
    );
};

export default Home;