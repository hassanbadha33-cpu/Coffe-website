import React from 'react';
import './About.css';
import aboutimg from '../../assets/about-img.jpeg'
const About = () => {
  return (
    <section className="about-section" id='About'>
      <div className="about-container">
        
        {/* LEFT SIDE: Large Background Image */}
        <div className="about-image-side">
          <img 
            src="src/assets/about-img.jpeg" 
            alt="Construction background" 
            className="main-visual"
          />
        </div>

        {/* RIGHT SIDE: Your Text Content */}
        <div className="about-text-side">
          <h4 className="about-subtitle">ABOUT US</h4>
          <h2 className="about-title">What Makes Our Services Special?</h2>
          
          <p className="about-description">
            With years of experience in construction and industrial services, we help 
            businesses and communities build stronger, safer, and smarter environments. 
            Our commitment to quality ensures every project is delivered with 
            unmatched precision and structural integrity.
          </p>
          
          <p className="about-description">
            Whether you are looking for a commercial build or industrial infrastructure, 
            our team provides end-to-end management, cost estimation, and 
            regulatory compliance to optimize your vision.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

      </div>
    </section>
  );
};

export default About;