import React, {useState,useEffect,useRef} from 'react'
import './Project.css'
import './About.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { AiFillGithub, AiOutlineEdit , AiOutlineClose} from "react-icons/ai";
import { BsLinkedin} from "react-icons/bs";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import Works from './Works';



function Project() {
  const [popup, setPopup] = useState(false)
  const [project, setProject] = useState({
    name: '', 
    details: '',
    live:'',
    github:''
    
  })
  const [tools, setTools] = useState()
  const [toolList, setToolList] = useState([])
  const [input, setInput] =useState({})
  const [trigger,setTrigger] = useState(false)
  const select = useRef()
  const [slide, setSlide] =useState(0)

  

  const editHandler = () => {
    setPopup(!popup)
  }

  const formHandler = (e) => {
    const fieldName = e.target.name
    
    setProject(prevValue => ({
      ...prevValue,
      [fieldName]: e.target.value,
      
    }))
  }
  
  const toolHandler = (e) => {
    setTools(e.target.value)
    
  }
  
  const addTools = () => {
    
    setToolList(prev => ([
      ...prev,
      {tools, id:Math.random()}
    ]))
    
  }


  const submitWork=() => {
    setProject(prev => ({...prev,toolList

    }))
    setTrigger(!trigger)

    

    
    
  }

  useEffect(()=> {
    setInput(project)
    setProject({
      name: '', 
    details: '',
    live:'',
    github:''
    })
    setToolList([])
    select.current.value=""

    
  },[trigger])

  



  
  

  const deleteTools = (index) => {
    const newTools = toolList.filter(item => item.id != index)
    setToolList(newTools)
  }

 


   
 const backHandler = () => {
  let slideClass = Array.from(
    document.getElementsByClassName('slides')
  );
  {slide===0 ?
    setSlide(slideClass.length-1) :
    setSlide(slide => slide-1)}
  
  console.log(slide)
 }
  
 const forwardHandler = () => {
  let slideClass = Array.from(
    document.getElementsByClassName('slides')
  );
  {slide === slideClass.length-1 ?
  setSlide(0) :
  setSlide(slide => slide+1)}
  
  
 }
  

  return (
    <div className='project' >
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

        <div className="project-content">
          <div className="subtitle">
            SOME Project <span>I've been working on</span>
            <div className="edit" onClick={editHandler}>
              <AiOutlineEdit/>
            </div>
          </div>

          <div className={popup ? "work-edit-popup" : "hide"}>
            <div className="popup">
              <div className="header">Edit your Project</div>
              <div className="open" onClick={editHandler}>
                <AiOutlineClose/>
              </div>
              <div className="form">
                
              <form action="">
                <div className="form-item">
                  <label htmlFor="name">Project Name</label>
                  <input name='name' onChange={formHandler} value={project.name}></input>
                </div>
                <div className="form-item">
                  <label htmlFor="details">Project Details</label>
                  <input name='details' onChange={formHandler} value={project.details}></input>
                </div>
                <div className="form-item">
                  <label htmlFor="live" >Live Link</label>
                  <input name='live' type='link' onChange={formHandler} value={project.live}></input>
                </div>
                <div className="form-item">
                  <label htmlFor="github">Github</label>
                  <input name='github' type='link' onChange={formHandler} value={project.github}></input>
                </div>
                <div className="form-item form-tools">
                  <label htmlFor="tools">Tools</label>
                  <select name="tools" id="tools" onChange={toolHandler} ref={select} >
                    <option value="" disabled selected>Select ..</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">JS</option>
                    <option value="react">React</option>
                    <option value="express">Express</option>
                  </select>
                  <div className="add" onClick={addTools}>
                    Add
                  </div>
                  
                </div>

                {toolList.length != 0 ? 
                <div className="toolList-container">
                <label></label>
                  {toolList.map((item)=> {
                    return(
                      
                      <div className='toolList'  key={item.id}>
                        
                        {item.tools}
                        <div className="closet" onClick={(e)=>deleteTools(item.id)} >
                        <AiOutlineClose/>
                        </div>
                        
                      
                      </div>
                    )
                      
                      
                  })}
                  </div>
                  :
                  ""}

                

                <div className="form-item">
                  <label htmlFor="image">Upload image</label>
                  <input type="file" name='image' accept='image/png, image/jpeg' />
                </div>

                <div className="button" onClick={submitWork}>Add Project</div>
                </form>
              </div>
              

            </div>

            
          </div>

          <div className="works-element-container">
            
            <div className="slides one" style={{transform:`translateX(${-(slide)*100}%)`}}>
            <Works  details={'test detail'} live={'https://tteoky.onrender.com/'} github={'https://github.com/95SR/portfolio-2'} tools={'react'}/>

            </div>
            <div className="slides two" style={{transform:`translateX(${-(slide)*100}%)`}}>
            <Works details={'test detail 2'} live={'https://tteoky.onrender.com/'} github={'https://github.com/95SR/portfolio-2'} tools={'js'}/>
            </div>

            <div className="slides three" style={{transform:`translateX(${-(slide)*100}%)`}}>
            <Works details={'test detail 3'} live={'https://tteoky.onrender.com/'} github={'https://github.com/95SR/portfolio-2'} tools={'js'}/>
            </div>
                        
          </div>

          <div className="page-number">
            <div className="arrow">
              <IoIosArrowBack onClick={backHandler}/>
              <IoIosArrowForward onClick={forwardHandler}/>
            </div>
          </div>

        

      </div>
      </div>

      
    </div>
    
  )
}

export default Project