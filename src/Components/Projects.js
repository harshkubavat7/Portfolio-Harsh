import React from 'react';
import ProjectBox from './ProjectBox';
import CourseSiteImage from '../images/course-site.jpg';
import ShoppingPage from '../images/shopping-cart-page-09.webp';
import BlogSite from '../images/website-blog.jpg';
import JobLinkImage from '../images/Screenshot 2025-07-03 192432.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={JobLinkImage} projectName="JobPortal" />
        <ProjectBox projectPhoto={CourseSiteImage} projectName="CourseSite" />
        <ProjectBox projectPhoto={ShoppingPage} projectName="ShoppingPage" />
        <ProjectBox projectPhoto={BlogSite} projectName="BlogSite" />
      </div>

    </div>
  )
}

export default Projects