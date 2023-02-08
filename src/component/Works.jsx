import React from 'react'
import './Works.css'

import p1 from '../project1.png'
import { FaReact } from "react-icons/fa";
function Works() {
  return (
    <div className='works-container'>
        <div className="left">
            <div className="image">
               <img src={p1}  />
               
            </div>

            
        </div>

        <div className="right">
            <div className="details">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quod quam eius asperiores rerum provident. A, qui explicabo. Eius temporibus ducimus explicabo saepe rerum vel sed ipsa placeat aliquid iusto.
            </div>

            <div className="tools">
              <FaReact/>
            </div>

            <div className="action">
            <div className="live button" onClick={(e) => window.open('https://tteoky.onrender.com/', '_blank')}>View Live</div>
            <div className="live button" onClick={(e) => window.open('https://github.com/95SR/portfolio-2' , '_blank')}>github</div>

            </div>

            
        </div>
      
    </div>
  )
}

export default Works
