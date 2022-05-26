import React from 'react';
import Activity from './Activity/Activity';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br /> <br /> <br /> <br />
             <InventoryItems></InventoryItems>
             <br /> <br /> <br /> <br />
             <Activity></Activity>
             <br /> <br /> <br /> <br />
             <Reviews></Reviews>
             <br /> <br /> <br /> <br />
             
        </div>
    );
};

export default Home;