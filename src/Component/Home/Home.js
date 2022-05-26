import React from 'react';
import ReviewsInHome from '../ReviewsInHome/ReviewsInHome';
import Activity from './Activity/Activity';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br /> <br /> <br /> <br />
             <InventoryItems></InventoryItems>
             <br /> <br /> <br /> <br />
             <Activity></Activity>
             <br /> <br /> <br /> <br />
             <ReviewsInHome></ReviewsInHome>
             <br /> <br /> <br /> <br />
            
        </div>
    );
};

export default Home;