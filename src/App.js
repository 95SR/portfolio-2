import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import About from './component/About'
import Project from './component/Project'
import Contact from './component/Contact'
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

  console.log(width)


  return (
    <div className="App">
      <BrowserRouter>
      <div className='header'>
      <Header width={width}/>
      </div>
      
      <div className='body'>
      <Routes>
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
      <div className='menu'>
      <Menu width={width}/>
      </div>
      </BrowserRouter>
      
      
      

    </div>
  );
}

export default App;
