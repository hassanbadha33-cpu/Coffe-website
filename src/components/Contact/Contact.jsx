import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="connect-section" id="Contact">
      <h2 className="connect-header">CONTACT <span>US</span></h2>
      
      <div className="connect-wrapper">
        {/* Left Side: Map */}
        <div className="connect-map-box">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.1624401614!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d0d1b0d7d3%3A0x6a9f7f45c7b3b3a3!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>

        {/* Right Side: Form */}
        <div className="connect-form-container">
          <h3 className="connect-form-title">GET IN TOUCH</h3>
          <form className="connect-main-form">
            <input type="text" className="connect-field" placeholder="Name" required />
            <input type="email" className="connect-field" placeholder="Email" required />
            <input type="text" className="connect-field" placeholder="Phone Number" required />
            
            <div className="connect-action-area">
               <button type="submit" className="connect-submit-btn">
                 Send Message
               </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;