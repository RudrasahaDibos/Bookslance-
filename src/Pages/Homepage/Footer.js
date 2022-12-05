import React from 'react';
import { Link } from 'react-router-dom';
import  '../Homepage/Footer.css'

const Footer = () => {
    return (
        <div>
            <div class="footer-basic">
        <footer>
            <div class="social">
                <a href="#"><i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    </div>
        
            <p class="copyright">Booklance © 2022</p>
        </footer>
    </div>
        </div>
    );
};

export default Footer;