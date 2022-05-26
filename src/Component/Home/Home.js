import React from 'react';
import ReviewsInHome from '../ReviewsInHome/ReviewsInHome';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br /> <br /> <br /> <br />
             <InventoryItems></InventoryItems>
             <br /> <br /> <br /> <br />
             <AboutUs></AboutUs>
             <br /> <br /> <br /> <br />
             <ReviewsInHome></ReviewsInHome>
             <br /> <br /> <br /> <br />
            
        </div>
    );
};

export default Home;