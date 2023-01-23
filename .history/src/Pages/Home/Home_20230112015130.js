import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

import Footer from '../Homepage/Footer';
import Header from '../Homepage/Header';
import Products from '../Homepage/Products';


const Home = () => {
    const [user, loading] = useAuthState(auth);
    
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;