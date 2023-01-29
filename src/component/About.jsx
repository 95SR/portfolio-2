import React, {useState, useEffect,useMemo} from 'react'
import { useRef } from 'react';
import './About.css'
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";

function About() {
  const [scrollY, setScrollY] = useState(0);
  const content = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);

  
  
  
const handleScroll = e => {
  
  setScrollY(window.scrollY)
  const x = content.current.offsetLeft;
    setX(x);
  
}
   
  const isInViewport2 = useIsInViewport(content2);
  console.log(isInViewport2==true);
  
const [x, setX] = useState();

const getPosition = () => {
    const x = content.current.offsetLeft;
    setX(x);
  };

console.log(scrollY)
console.log(x)

 


    /*const [mousePos, setMousePos] = useState({});

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };

      const handleScroll2 = (e) => {
        console.log('2')
      }
  
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll2);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);*/



    useEffect(() => {
      
  
      window.addEventListener('scroll', handleScroll,true);
      
      return () => {
        window.removeEventListener(
          'scroll',
          handleScroll,true
        );
      };
    }, []);

    function useIsInViewport(ref) {
      const [isIntersect, setIsIntersection] = useState(false)
//create the observer
    const observer = useMemo(()=> 
      new IntersectionObserver(([entry]) => 
      setIsIntersection(entry.isIntersecting),
      ),[],
    )

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      }
    },[ref,observer])

    return isIntersect;
    }

    

    
  return (
    <div className='about body' >
     
        <div className="blank"></div>
        <div className="title" >
          <div className="number">
          {
            (scrollY < 290) 
            ?
            '01'
            :
            (scrollY >= 290 && scrollY < 700)
            ?
            '02'
            :'03'

          }
          /<span>03</span> 
          </div>

          <div className="subtitles" >
          {
            isInViewport2
            ?
            <div className="sub bg" >
              Background
            </div>

            :
            <div className="sub intro" >
              Intro
            </div>
          }

          </div>

          
          

       {scrollY > 1000 
       ?
        <div className="scroll up">
              <span>  </span> scroll up
        </div>
          :
        <div className="scroll down"><span>  </span> scroll </div>}

          
          
        
      </div>

        <div className={!isInViewport2 ? "content" : "content no-border"}>
          <h3 className='scroll-title'>Scroll Down</h3>
          
          <div className={"intro-content"} ref={content} style={{clipPath:`circle(${scrollY}px)`}} >
          <div className="intros2" style={{transform: `translateX(${scrollY-200}px)`}}>#newExperience #Passionate  #newExperience #Passionate #newExperience #Passionate #Curious</div>
            <div className="intros" style={{transform: `translateX(${-scrollY+50}px)`}} >#explorer #adventurer  #explorer #adventurer </div>
           
            <div className="intros2" style={{transform: `translateX(${scrollY-200}px)`}}> #Passionate #Curiousity  #Passionate #Curious #Passionate #Curious</div>
            
          </div>
         
         
         <div className= "bg-content "  ref={content2} >
            <div className="sub-title">Background</div>
            <div className="icon">
                <div className="left">
                  <IoMdSchool />
                  <ul>
                    <li><span className='year'> 2019 ~ 2021 </span> Kyunghee University, Master Degree in Electronic Engineering</li>
                    <li><span className='year'> 2012 ~ 2016 </span> Bandung Institute of Technology, Bachelor Degree in Mathematics</li>
                    <li><span className='year'> 2015 </span> Kumoh National Institute of Technology, Exchange Program in Applied Mathematics</li>
                  </ul>

                </div>
                
                <div className="right">
                  <MdWork/>
                  <ul>
                    <li><span className='year'> 2022 ~ 2023 </span> ASEAN-Korea Centre, Project Assistant</li>
                    <li><span className='year'> 2018 ~ 2019 </span> PriceWaterHouseCoopers, Data Analyst</li>
                  </ul>

                </div>
                
              </div>
          </div>

         <div className="content-item" ref={content3} >
          skill
         </div>
          
         
         
            
        </div>

        

      

     
      
    </div>
  )
}

export default About