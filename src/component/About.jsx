import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className="container">
        <div className="title">
          <div className="number">
          01/<span>03</span> 
          </div>

          <div className="subtitles">
            <div className="sub">
              Intro
            </div>
            <div className="sub">
              Background
            </div>
            <div className="sub">
              Skill
            </div>
          </div>

          <div className="scroll">
            <span>  </span> scroll
          </div>
        
        </div>
        <div className="content">
          content
        </div>
      </div>

      
      
    </div>
  )
}

export default About