import React from 'react';
import Book from '../Homepage/Book';
import Footer from '../Homepage/Footer';
import Header from '../Homepage/Header';
import Tamplate from '../Homepage/Tamplate';
import Navbarsecond from '../Shared/Navbarsecond';

const Home = () => {
    return (
        <div>
             <Navbarsecond></Navbarsecond>
            <Header></Header>
            <Book></Book>
            <Tamplate></Tamplate>
            <Footer></Foote>
          
           
      
        </div>
    );
};

export default Home;