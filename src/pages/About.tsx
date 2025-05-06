import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <div className="about-wrapper">
      <section className="about-section">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi welcome to my portfolio! I’m a full-stack developer with a
          background in health sciences and operations, I have a love for
          thoughtful, user-focused design. I build responsive web applications
          using JavaScript, React, and Node.js, and enjoy solving problems that
          blend function with creativity. After completing an intensive
          full-stack bootcamp, I’ve been focused on growing my skills in web
          development and design. I’m passionate about creating intuitive user
          experiences and am always looking for ways to improve my coding skills
          and knowledge of the latest technologies.
          <br />
          <br />
          Outside of coding, I’m inspired by animation, interior design, and
          caring for my three cats. I'm always learning and excited to bring
          curiosity, precision, and creativity to every project I work on.
        </p>
      </section>
    </div>
  );
};

export default About;
