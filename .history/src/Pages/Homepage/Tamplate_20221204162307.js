import React from 'react';
import '../Homepage/Tamplate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Tamplate = () => {
    return (
      <div class="services">
      <div class="card graphic-design">
        <div class="service-bg">
        <i class="fa-solid fa-user"></i>
          
          <div class="service-description">
            <h4>Graphic Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
  
      <div class="card web-design">
        <div class="service-bg">
          <i class="fa fa-globe"></i>
          <div class="service-description">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div> 
  
      <div class="card seo">
        <div class="service-bg">
          <i class="fa fa-search"></i>
          <div class="service-description">
            <h4>SEO</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div> 
  
  
    </div>
      
    );
};

export default Tamplate;