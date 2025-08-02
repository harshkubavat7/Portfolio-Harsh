import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>HARSH KUBAVAT</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am a <b className="highlight">highly motivated</b> and <b className="highlight">detail-oriented</b> Computer Science Engineering student with a strong foundation in <b className="highlight">full stack web development</b>.
            <br /><br />
            My technical expertise includes building <b className="highlight">responsive</b>, <b className="highlight">user-centric applications</b> using technologies such as <span className="tech">React</span>, <span className="tech">Node.js</span>, <span className="tech">Express</span>, and <span className="tech">MongoDB</span>.
            <br /><br />
            I am passionate about creating <b className="highlight">efficient</b> and <b className="highlight">scalable</b> software solutions that solve real-world problems.
            <br /><br />
            With a deep interest in both <span className="tech">frontend</span> and <span className="tech">backend</span> development, I continuously strive to expand my knowledge and stay updated with the latest <b className="highlight">industry trends</b> and <b className="highlight">best practices</b>.
            <br /><br />
            <span className="opportunity">
              <CiCoffeeCup style={{ verticalAlign: 'middle', marginRight: 6 }} />
              I am currently seeking opportunities where I can apply my skills, contribute to impactful projects, and grow as a professional in the software development field.
            </span>          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home