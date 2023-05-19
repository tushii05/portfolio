import React from "react";
import "./About.css";
// import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 + Years of Industry</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>

          <div className="about__para">
            <p>
              Hello everyone! I'm <span className="spn">Tushar Deshmukh, and i hail </span> from{" "}
              <span className="spn">Bhopal, India.</span>  I am thrilled to introduce myself as a Computer Science
              and Engineering graduate with a specialization in Web Development and Node.js Development.
              <br /> <br /> My proficiency in JavaScript enables me to create robust and secure applications,
              ensuring optimal performance and seamless user experiences. I am passionate about delivering
              high-quality code and collaborating with cross-functional teams to achieve project goals.
            </p>
            <p>
              As a curious and passionate tech enthusiast, I am driven to explore and create using the
              latest technologies and programming languages. My eagerness to learn and grow motivates me to seek
              opportunities with prestigious organizations where I can apply and enhance my professional skills in
              a mutually beneficial partnership. I am excited to collaborate with like-minded individuals and
              contribute to the advancement of technology while continually expanding my knowledge and expertise.
            </p>
            <p>
              I am a backend developer specializing in Node.js. With expertise in MySQL and MongoDB databases,
              I create robust and efficient applications. I utilize Socket.io for real-time communication and implement
              various functionalities using Node.js. From handling data storage and
              retrieval to integrating interactive features,I deliver high-quality solutions.
              My skills in Node.js, MySQL, MongoDB, and Socket.io enable me to build scalable and dynamic backend systems.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
