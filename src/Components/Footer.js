import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si"

const Footer = () => {
  return (
    // <footer>

    //   <div className='footerLinks'>
    //     <a href="https://github.com/DevanshSahni" target='_blank'><FaGithub/></a>
    //     <a href="https://www.linkedin.com/in/devansh-sahni/" target='_blank'><FaLinkedin/></a>
    //     <a href='mailTo:devanshsahni@gmail.com' target='_blank'><GrMail/></a>
    //     <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a>
    //   </div>
    // </footer>

    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2.5rem 0 1.5rem 0', // more gap above
        // background: '#fafbfc' // removed background color
      }}
    >
      <div
        className='footerLinks'
        style={{
          display: 'flex',
          gap: '2.2rem', // increased gap between icons
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <a
          href="https://github.com/harshkubavat7"
          target='_blank'
          rel="noopener noreferrer"
          style={{ fontSize: '1.8rem', color: '#726d6dff' }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh-kubavat-55a615289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target='_blank'
          rel="noopener noreferrer"
          style={{ fontSize: '1.8rem', color: '#0077b5' }}
        >
          <FaLinkedin />
        </a>
        <a
          href='mailto:hkubavat15@gmail.com'
          target='_blank'
          rel="noopener noreferrer"
          style={{ fontSize: '1.8rem', color: '#ea4335' }}
        >
          <GrMail />
        </a>
        <a
          href="https://leetcode.com/u/Harsh_Kubavat/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '1.8rem', color: '#f89f1b' }}
        >
          <SiLeetcode />
        </a>
      </div>
    </footer>
  )
}

export default Footer