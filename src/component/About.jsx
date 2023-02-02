import React, {useState, useEffect,useMemo} from 'react'
import { useRef } from 'react';
import './About.css'
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function About() {
 

  return (
    <div className='about body' >
      <div className="contents">
        <div className="logo-container">
            <Link to='/'><img src={logo} className='logo'/></Link>
        </div>

        <div className="socmed">
          <div className="line"></div>
          <div className="email"  onClick={(e) => {window.location.href ='mailto:ririramadhani2@email.com';}}>
          <SiGmail/>
          </div>
          <div className="github" onClick={(e) => {window.open('https://github.com/95SR', '_blank');}}>
            <AiFillGithub/>
          </div>
          <div className="linkedin" onClick={(e) => {window.open('https://www.linkedin.com/in/syahri-ramadhani-21381312b/', '_blank');}}>
            <BsLinkedin/>
          </div>

        </div>
      </div>
     
        
        
        

        

      

     
      
    </div>
  )
}

export default About