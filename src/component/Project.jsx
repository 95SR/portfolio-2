import React from 'react'
import './Project.css'
import './About.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin} from "react-icons/bs";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import Works from './Works';

function Project() {
  return (
    <div className='project' >
      <div className="contents">
      <div className="logo-container">
            <Link to='/'><img src={logo} className='logo'/></Link>
      </div>

      <div className="socmed">
          <div className="line"></div>
          <div className="email"  onClick={(e) => {window.location.href ='mailto:ririramadhani2@gmail.com';}}>
          <SiGmail/>
          </div>
          <div className="github" onClick={(e) => {window.open('https://github.com/95SR', '_blank');}}>
            <AiFillGithub/>
          </div>
          <div className="linkedin" onClick={(e) => {window.open('https://www.linkedin.com/in/syahri-ramadhani-21381312b/', '_blank');}}>
            <BsLinkedin/>
          </div>

        </div>

        <div className="project-content">
          <div className="subtitle">
            SOME Project <span>I've been working on</span>
          </div>

          <div className="works-element-container">
          <Works/>
          </div>

          <div className="page-number">
            <div className="arrow">
              <IoIosArrowBack/>
              <IoIosArrowForward/>
            </div>
          </div>

        

      </div>
      </div>

      
    </div>
    
  )
}

export default Project