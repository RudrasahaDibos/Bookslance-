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
                <li ><LINK href="#">Home</LINK></li>
                <li ><LINK href="#">Services</LINK></li>
                <li ><LINK href="#">About</LINK></li>
                <li ><LINK href="#">Terms</LINK></li>
                <li ><LINK href="#">Privacy Policy</LINK></li>
            </ul>
            <p class="copyright">Company Name © 2018</p>
        </footer>
    </div>
        </div>
    );
};

export default Footer;