import React from 'react'
import './Works.css'

import p1 from '../project1.png'
import { FaReact } from "react-icons/fa";
function Works({details, live, github, tools}) {
  return (
    <div className='works-container'>
        <div className="left">
            <div className="image">
               <img src={p1}  />
               
            </div>

            
        </div>

        <div className="right">
            <div className="details">
                {details}
            </div>

            <div className="tools">
              {tools ==='react' ? <FaReact/> : "" }
            </div>

            <div className="action">
            <div className="live button" onClick={(e) => window.open(`${live}`, '_blank')}>View Live</div>
            <div className="live button" onClick={(e) => window.open(`${github}` , '_blank')}>github</div>

            </div>

            
        </div>
      
    </div>
  )
}

export default Works
