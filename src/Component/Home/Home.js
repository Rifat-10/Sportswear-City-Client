import React from 'react';
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
            
        </div>
    );
};

export default Home;