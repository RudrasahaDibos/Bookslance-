import React from 'react';

import Footer from '../Homepage/Footer';
import Header from '../Homepage/Header';
import Products from '../Homepage/Products';


const Home = () => {
    const{user,loading} = 
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;