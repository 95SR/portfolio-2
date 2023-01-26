import React, {useState, useEffect,useMemo} from 'react'
import { useRef } from 'react';
import './About.css'

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
  //console.log('isInViewport2: ', isInViewport2);
  
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
            <div className="sub intro" style={{transform: `translateY(${-scrollY/2}px)`}}>
              Intro
            </div>
            <div className="sub bg" style={{transform: `translateY(${-scrollY/2}px)`}}>
              Background
            </div>
            <div className="sub skill" style={{transform: `translateY(${-scrollY/2}px)`}}>
              Skill
            </div>
          </div>

       {scrollY > 1000 
       ?
        <div className="scroll up">
              <span>  </span> scroll up
        </div>
          :
        <div className="scroll down"><span>  </span> scroll </div>}

          
          
        
      </div>

        <div className="content">
          
            <div className="content-item intros" ref={content} style={{transform: `translateX(${-scrollY/2}px)`}}>
          intro
         </div>
         <div className={isInViewport2 ? "content-item enter" : "content-item"} ref={content2} >
          bg
         </div>
         <div className="content-item" ref={content3} >
          skill
         </div>
          
         
         
            
        </div>

        

      

     
      
    </div>
  )
}

export default About