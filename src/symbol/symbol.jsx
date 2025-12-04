import React from "react";
import { SymbolStyle } from "./symbol.js";

const AboutSection = () => {
  return (
    <SymbolStyle>
      <section className="about-container">
        <h1 className="about-title">
          A Symbol of Excellence in Placement Training
        </h1>

        <p className="about-text">
          Aptitude Guru Hem was born from the aspiration to create a learning
          environment that inspires greatness. Our founder, driven by personal
          experiences and a desire to make a difference, established the company
          with a mission to empower students with the right skills and mindset for
          success.
        </p>
        
        <div className="boxes-container">
          <div className="vision-section">
            <div className="section-content">
              <h1 className="about-subtitle">
                | Our Vision
              </h1>
              <p className="about-description">
               Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. 
               At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.
              </p>
            </div>
          </div>
          
          <div className="mission-section">
            <div className="section-content">
              <h1 className="about-mission">
                | Our Mission
              </h1>
              <p className="about-mission-text">
                Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development.
                 We foster a culture of inclusivity and personal growth.
              </p>
              
            </div>
          </div>
        </div>
        
        <div className="courses-section">
          <h1 className="courses">Our Courses</h1>
          <p className="courses-text">
            Discover our comprehensive range of courses designed to enhance your skills and prepare you for success in your career.
          </p>
        </div>
      </section>
    </SymbolStyle>
    
  );
};

export default AboutSection;