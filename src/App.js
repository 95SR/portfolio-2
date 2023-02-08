import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import About from './component/About'
import Project from './component/Project'
import Contact from './component/Contact'

import Home from './component/Home'
import logo from './logo.png'
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsMouse } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
      
    }

    window.addEventListener('resize', handleWindowResize);
    

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [width]);

  


  return (
    <div className="App">
      <BrowserRouter>
        
        {/*<Header width={width}/>*/}
       

        
            <Routes>
            <Route exact path='/' element = {
                    <Home/>
                  }/>
                  <Route path='/about' element = {
                    <About/>
                  }/>

                <Route path='/project' element = {
                    <Project/>
                }/>

                <Route path='/hi' element = {
                  <Contact/>
                }/>
            </Routes>
              <Menu width={width}/>
            

        
        

        

      </BrowserRouter>
      
      
      

    </div>
  );
}

export default App;
