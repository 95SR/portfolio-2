import React, {useState,useEffect,useRef} from 'react'
import './Project.css'
import './About.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { AiFillGithub, AiOutlineEdit , AiOutlineClose} from "react-icons/ai";
import { BsLinkedin} from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import {  IoLogOutOutline  } from "react-icons/io5";
import Works from './Works';
import { API, Auth} from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';



function Project() {
  const [popup, setPopup] = useState(false)
  const [project, setProject] = useState({
    name: '', 
    details: '',
    live:'',
    github:''
    
  })
  const [userName, setUserName] = useState()
  const [pwd, setPwd] = useState()
  const [tools, setTools] = useState()
  const [toolList, setToolList] = useState([])
  const [input, setInput] = useState([])
  const select = useRef()
  const [slide, setSlide] = useState(0)
  const [logIn, setLogIn] = useState(false)

  const loggedInState = () => {
    Auth.currentAuthenticatedUser().then(()=> {
      setLogIn(true)
    }).catch(()=> {
      setLogIn(false)
    })
  }

  useEffect(()=> {
    loggedInState()
  },[])

  const SignIn = async () => {
    try {
     await  Auth.signIn(userName, pwd)
     loggedInState()
    } catch (error) {
      console.log('login error', error)
    }
    
  }


  const signOut = async () => {
    await Auth.signOut()
    loggedInState()
  }

  const editHandler = () => {
    setPopup(!popup)
  }

const closePopUp =() => {
  editHandler()
  resetfield()
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
      tools
    ]))
    
    
    
   
  }

  useEffect(() => {
    setProject(prev => 
      ({...prev,toolList
    }))
    
  },[toolList])
  


  const submitWork= async (e) => {
    e.preventDefault();
    console.log(toolList)

    try {
      await API.graphql({query:mutations.createTodo, variables:{input:project}, authMode: "AMAZON_COGNITO_USER_POOLS"})
      resetfield()
    
editHandler()

fetchWork()
    } catch (error) {
      console.log('error on sending data', error)
    }

  }

  const resetfield = () => {
    setProject({
      name: '', 
      details: '',
      live:'',
      github:''
      
    })
    setToolList([])
    select.current.value=""
  }



  const deleteTools = (idx) => {
    const newTools = toolList.filter((item,index) => index != idx)
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
 
 useEffect(()=> {
  fetchWork()
 },[])

 const fetchWork = async () => {
  try {
    const workData = await API.graphql({ query: queries.listTodos,authMode:'AWS_IAM' })
   const workList = workData.data.listTodos.items;
    //const toolsData = await API.graphql({ query: queries.listTools })
    //const toolsList = toolsData.data.listTools.items;
    //console.log(workList)
    //console.log(toolsList)
    setInput(workList)
    
  } catch (error) {
    console.log('error on fetching', error)
  } 
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

          {logIn ? <div className="logout" onClick={signOut}><IoLogOutOutline/></div> 
          : ""}

          

          

          <div className={popup ? "work-edit-popup" : "hide"}>
            {logIn ?
            <div className="popup">
            <div className="header">Edit your Project</div>
            <div className="open" onClick={closePopUp}>
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
                  <option value="amplify">AWS Amplify</option>
                </select>
                <div className="add" onClick={addTools}>
                  Add
                </div>
                
              </div>

              {toolList.length != 0 ? 
              <div className="toolList-container">
              <label></label>
                {toolList.map((item,index)=> {
                  return(
                    
                    <div className='toolList'  key={index}>
                      
                      {item}
                      <div className="closet" onClick={(e)=>deleteTools(index)} >
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
          :
          <div className="loginContainer">
            <div className="closeLogin" onClick={editHandler}>
              <AiOutlineClose/>
            </div>
            <BiError/>
            Login Please

            <form className='login-form'>
              <div className="login-field">
                <label htmlFor="userName">Username:</label>
                <input name='userName' onChange={(e)=> setUserName(e.target.value)} value={userName}></input>
              </div>

              <div className="login-field">
                <label htmlFor="pwd">Password:</label>
                <input name='pwd' onChange={(e)=> setPwd(e.target.value)} value={pwd}></input>
              </div>

              <div className="button" onClick={SignIn}>Log in</div>



            </form>
            </div>}
            

            
          </div>

          {input.length != 0
          ?
          <div className="works-element-container">
            {input.map((item)=> {
              return (
                <div className="slides " style={{transform:`translateX(${-(slide)*100}%)`}}>
          <Works  details={item.details} live={item.live} github={item.github} tools={item.toolList}/>

          </div>
              )
            })}
          
                      
        </div>
        :
        <div className="works-element-container">
            
          <p>No Project Yet</p>
                      
        </div>}

          

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