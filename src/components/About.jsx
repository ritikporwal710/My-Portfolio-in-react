import React, { useState } from "react";
import logoo from "../assets/ritik_black.png";
import me from "../assets/ritik_profile-pic2jpg.jpg";

const About = () => {
  let tablinks = document.getElementsByClassName("tab-links");
  let tabcontents = document.getElementsByClassName("titles-content");

  const opentab = (tabname) => {
    for (let i = 0; i < 3; ++i) {
      tablinks[i].classList.remove("active");
    }
    for (let i = 0; i < 3; ++i) {
      tabcontents[i].classList.remove("active-tab");
    }
  };

  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img id="myimg" src={me} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            {/* <p>
              I am a software engineer working in Bengaluru, India with
              specialization in Full-stack MERN Development.
            </p>
            <p>
              I have solved over 1200+ DSA questions on various platforms like
              Leetcode, Codechef, GFG, etc
            </p> */}
            <p>
              I am a software engineer based in Bengaluru, India, specializing
              in Full-stack development with expertise in the MERN stack
              (MongoDB, Express.js, React, Node.js) as well as Java and Spring
              Boot for backend development.
            </p>
            <p>
              I have solved over 1200+ Data Structures and Algorithms problems
              across platforms like LeetCode, CodeChef, and GeeksforGeeks.
            </p>
            <p>
              My technical skill set also includes PostgreSQL with Sequelize
              ORM, real-time communication using Socket.io, JWT-based
              authentication, RESTful API development, and deployment using
              Docker and cloud platforms.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>DSA</p>
              <hr style={{ width: "100%" }} />{" "}
            </div>{" "}
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "67%" }} />{" "}
            </div>{" "}
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />{" "}
            </div>{" "}
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "65%" }} />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>13+</h1>
          <p>Happy Clients</p>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default About;
