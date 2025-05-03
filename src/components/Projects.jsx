import React from "react";
import ProjectCard from "./ProjectCard";
import image_reptik from "../assets/reptik_image.jpg";
import image_portfolio from "../assets/portfolio_ss.jpg";
import image_expense from "../assets/expense_ss.jpg";
import image_webapp from "../assets/webapp_ss.jpg";
import trafin_image from "../assets/trafin-home.png";
import walshop_image from "../assets/walshop-home.png";
import employee_image from "../assets/employe-manager-home.png";

const Projects = () => {
  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1 className="projects-title">My Latest Projects</h1>
      </div>
      <section className="projects-grid">
        <ProjectCard
          name={walshop_image}
          link={"https://walshop-client.onrender.com"}
          title="Walshop - Build your shop"
          tech="JavaScript, React, Node.js, PostgreSQL"
        />
        <ProjectCard
          name={trafin_image}
          link={"https://trafin-client.onrender.com"}
          title="Trafin - Track Your Salary"
          tech="React, Java, SpringBoot, PostgreSQL"
        />
        <ProjectCard
          name={image_reptik}
          link={"https://health-food.onrender.com"}
          title="Reptik - Food Delivery"
          tech="React, Node.js, MongoDB, AWS"
        />
        <ProjectCard
          name={image_portfolio}
          link={"https://ritik-portfolio-b4rk.onrender.com"}
          title="Portfolio Website"
          tech="JavaScript, React"
        />
        <ProjectCard
          name={employee_image}
          link={"https://github.com/ritikporwal710/employee-manager-client"}
          title="Employee Management System"
          tech="React, SpringBoot, PostgreSQL"
        />
        <ProjectCard
          name={image_webapp}
          link={"https://wonderful-gingersnap-691801.netlify.app/"}
          title="Chat Application"
          tech="React, Node.js, MongoDB, AWS"
        />
      </section>
    </div>
  );
};

export default Projects;
