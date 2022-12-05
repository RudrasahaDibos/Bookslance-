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
            {/* <ul >
                <li ><Link href="#">Home</Link></li>
                <li ><Link href="#">Services</Link></li>
                <li ><Link href="#">About</Link></li>
                <li ><Link href="#">Terms</Link></li>
                <li ><Link href="#">Privacy Policy</Link></li>
            </ul> */}
            <p class="copyright">Company Name © 2018</p>
        </footer>
    </div>
        </div>
    );
};

export default Footer;