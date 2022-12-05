import React from 'react';
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
            <ul >
                <li ><a href="#">Home</a></li>
                <li ><a href="#">Services</a></li>
                <li ><a href="#">About</a></li>
                <li ><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Company Name © 2018</p>
        </footer>
    </div>
        </div>
    );
};

export default Footer;