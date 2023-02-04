import React, {useState, useEffect,useMemo} from 'react'
import { useRef } from 'react';
import './About.css'
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsMouse } from "react-icons/bs";

function About() {
 const [scrollY, setScrollY] = useState(window.scrollY)

 const handleScroll= () => {
  setScrollY(window.scrollY)
 }
 useEffect(()=> {
  window.addEventListener('scroll', handleScroll)
  console.log(scrollY)

 },[scrollY])

  return (
    <div className='about body' >
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

        <div className="scroll">
          Scroll Down
          <div className="mouse">
          <BsMouse/>
          </div>
          <div className="intro" style={{clipPath:`circle(${scrollY}px)`}}>
            <div className="item" style={{transform: `translateX(${scrollY-200}px)`}}>#newExperience #Passionate  #Curious #newExperience #Passionate  #Curious#newExperience #Passionate #Curious</div>
            <div className="item" style={{transform: `translateX(${-scrollY+200}px)`}}>#explorer #adventurer  #explorer #adventurer #Curiousity  #Passionate #adventurer #Passionate</div>
            <div className="item" style={{transform: `translateX(${scrollY-200}px)`}}>#Passionate #Curiousity  #Passionate #Curious #Passionate #Curious</div>
          </div>
        </div>

        

        <div className="background">
        <div className="sub-title">Background</div>
            <div className="icon">
                <div className="left">
                  <IoMdSchool />
                  <ul>
                    <li><span className='year'> 2019 ~ 2021 </span> Kyunghee University, Master Degree in Electronic Engineering</li>
                    <li><span className='year'> 2012 ~ 2016 </span> Bandung Institute of Technology, Bachelor Degree in Mathematics</li>
                    <li><span className='year'> 2015 </span> Kumoh National Institute of Technology, Exchange Program in Applied Mathematics</li>
                  </ul>

                </div>
                
                <div className="right">
                  <MdWork/>
                  <ul>
                    <li><span className='year'> 2022 ~ 2023 </span> ASEAN-Korea Centre, Project Assistant</li>
                    <li><span className='year'> 2018 ~ 2019 </span> PriceWaterHouseCoopers, Data Analyst</li>
                    <li><span className='year'> 2015 </span> Total E&P Indonesie, Well Performance, Internship</li>
                  </ul>

                </div>
                
              </div>
          
        </div>


      </div>
     
        

      
    </div>
  )
}

export default About