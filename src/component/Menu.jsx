import './Menu.css'
import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Menu({width}) {
  const [show, setShow] =useState(false)
  const [active, setActive] = useState(true)
  const [day, setDay] = useState(true)
  const handleClick = () => {
    setShow(!show)
  }
  
  const handleTheme = () => {
    setDay(!day)
  }

 
  return (
    <nav className='container menu'>
      <div className='burger' onClick={handleClick} >
        <AiOutlineMenu/>
      </div>
      
      { width <= 800 ? 
        <div className={show ? 'menu-show' : 'menu-hide'}>
          <div className="close" onClick={handleClick}><AiOutlineClose/></div>
          <NavLink to='/about' activeClassName='active' className='section-title' onClick={handleClick}>ABOUT Me</NavLink>
          <NavLink to='/project' activeClassName='active' className='section-title' onClick={handleClick}>Project</NavLink>
          <NavLink to='/hi' activeClassName='active' className='section-title' onClick={handleClick}>Say Hi</NavLink>
        </div>
    :

      <div className='large-screen'>
          
          <NavLink to='/about' activeClassName='active' className='section-title' >ABOUT Me</NavLink>
          <NavLink to='/project' activeClassName='active' className='section-title'  >Project</NavLink>
          <NavLink to='/hi' activeClassName='active' className='section-title' >Say Hi</NavLink>

    </div>
    }

<div className="toggle-btn lng " onClick={() => setActive(!active)}>
            {
                active?
                <div className="en">EN</div> :
                <div className="kr">KR</div>

            }
            
            
            
        </div>

        <div className='theme' onClick={handleTheme}>
           {
            day ?

            <IconContext.Provider value={{ size: '1.5em' }} >
                <div className='theme' >
                    <BsFillSunFill/>
                </div>
            </IconContext.Provider>

            :

            <IconContext.Provider value={{ size: '1.5em' }} >
                <div className='theme active' >
                    <BsFillMoonFill/>
                </div>
            </IconContext.Provider>


           } 
            
            
            
                
            
            
            
            
            
        </div>
      

     
            
        
        
    </nav>
  )
}

export default Menu