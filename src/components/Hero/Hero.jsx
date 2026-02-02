import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id='Home'>
     <div className="hero-overlay">
  <div className="hero-content">
    <h1 className="hero-title">
      FRESH COFFEE <br />
      <span>IN THE MORNING</span>
    </h1>

    <p className="brew">
      The Perfect Brew: Discover the Rich and Flavorful World of Coffee
      with Our Expertly Roasted Beans and Blends.
    </p>

    <button className="hero-btn">Get Yours Now</button>
  </div>
</div>

    </section>
  );
};

export default Hero;