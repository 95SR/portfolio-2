import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import About from './component/About'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Home from './component/Home'

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
        <div className='header'>
        <Header width={width}/>
        </div>


        <div className='middle'>
          <div className='body'>
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
            </div>

            <div className='menus'>
              <Menu width={width}/>
            </div>

        </div>
        

        <div className='footer'>
              <Footer/>
        </div>

      </BrowserRouter>
      
      
      

    </div>
  );
}

export default App;
