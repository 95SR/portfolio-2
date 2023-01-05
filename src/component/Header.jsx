import React from 'react'
import './Header.css'
import logo from '../logo.png'
import Toggle from './Toggle';
import { IconContext } from "react-icons";

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function Header() {
  return (
    <div className='container header'>
        <div className="logo-container">
            <img src={logo} className='logo'/>
        </div>
        

        <div className="toggle-btn lng">
            <div className="en">EN</div>
            <div className="kr hide">KR</div>
        </div>

        <div className="theme">
            
            <IconContext.Provider value={{ size: '20px' , className:'theme active'}} >
                <div>
                    <BsFillSunFill/>
                </div>
            </IconContext.Provider>    
            <Toggle/>
            
            <IconContext.Provider value={{ size: '20px' , className:'theme'}} >
                <div>
                    <BsFillMoonFill/>
                </div>
            </IconContext.Provider>
            
            
        </div>

        
    </div>
  )
}

export default Header