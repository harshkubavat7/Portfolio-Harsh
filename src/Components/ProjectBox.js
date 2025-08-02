import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    BlogSite: {
      Desc: "This website allows users to explore and read a variety of blogs on different topics. Readers can easily browse, search, and enjoy engaging content shared by authors, making it a simple and accessible platform for staying informed and inspired.",
      Github: "https://github.com/harshkubavat7/rodinblogs",
      // Website: "https://devanshsahni.github.io/tindog/"
    },
    ShoppingPage: {
      Desc: "This page lets customers browse a wide range of clothes and other products, add items to their cart, and complete their purchase easily and securely. It’s designed to provide a smooth shopping experience with clear product details, images, and convenient checkout options.",
      Github: "https://github.com/harshkubavat7/shopping-cart",
      // Website: "https://devanshsahni.github.io/Rog-Free/"
    },
    CourseSite: {
      Desc: "This project is a course management platform where students can browse, enroll in, or purchase courses of their choice. The system also provides an admin panel through which administrators can create, update, and publish new courses for students to access. The goal is to make learning accessible and easy to manage for both students and administrators.",
      Github: "https://github.com/harshkubavat7/learning-site",
      // Website: "https://newsletter-signup-teal.vercel.app/"
    },
    JobPortal: {
      Desc: "A full-stack job portal for modern hiring. Applicants can register, search jobs, apply, and upload resumes. Recruiters can create companies, post jobs, review applicants, download resumes, and update application statuses in real time.",
      Github: "https://github.com/harshkubavat7/JobLink",
      // Website: "https://wiggles.vercel.app/"
    }
  };

  const project = desc[projectName];
  const showGithub = project.Github !== "";

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p className='projectDescription'>{project.Desc}</p>
        <br />

        {showGithub && (
          <a href={project.Github} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}

        <a href={project.Website} target='_blank' rel='noopener noreferrer'>
          {/* <button className='projectbtn'><CgFileDocument /> Demo</button> */}
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
