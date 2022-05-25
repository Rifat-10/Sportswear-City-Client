import React from 'react';
import SignUp from '../Sign-In-Up/SignUp/SignUp';
import Activity from './Activity/Activity';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br /> <br /> <br /> <br />
             <Activity></Activity>
             <br /> <br /> <br /> <br />
             <SignUp></SignUp>
            
        </div>
    );
};

export default Home;