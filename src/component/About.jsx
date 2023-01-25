import React, {useState, useEffect} from 'react'
import './About.css'

function About() {
  const [scrollY, setScrollY] = useState(0);

  
const handleScroll = e => {
  
  setScrollY(window.scrollY)
  
  console.log(window.scrollY)
  
}
    






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
         
         {
            (scrollY < 290) 
            ?
            <div className="content-item">
          intro
         </div>
            :
            (scrollY >= 290 && scrollY < 700)
            ?
            <div className="content-item">
          bg
         </div>
            :
            <div className="content-item">
          skill
         </div>

          }
            
        </div>

        

      

     
      
    </div>
  )
}

export default About