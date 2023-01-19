import React, {useState, useEffect} from 'react'
import './About.css'

function About() {
  const [scrollY, setScrollY] = useState(0);
const [pageNum, setPageNum] = useState('01')
  
    const handleScroll = e => {
      let scroll=e.target.scrollTop/2;
      setScrollY(scroll)
      console.log(scrollY)
      if(scrollY < 70) {
        setPageNum('01')
      } else if(scrollY >= 70 && scrollY < 200){
        setPageNum('02')
      } else {setPageNum('03')}
    }



    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);

    
  return (
    <div className='about'  >
      
      <div className="container"  onScroll={handleScroll} >
      <div className="cursor-custom" style={{transform: `translate3d(${mousePos.x-80}px, ${mousePos.y-90}px, 0)`}}>
      
      {
        scrollY < 260 
        ? 

        <div className="scroll">
            <span>  </span> scroll
      </div>
      :

      <div className="scroll up">
            <span>  </span> scroll up
      </div>

      }
      
        </div>
      <div className="blank"></div>
        <div className="title" >
          <div className="number">
          {pageNum}/<span>03</span> 
          </div>

          <div className="subtitles" >
            <div className="sub intro" style={{transform: `translateY(${-scrollY}px)`}}>
              Intro
            </div>
            <div className="sub bg" style={{transform: `translateY(${-scrollY}px)`}}>
              Background
            </div>
            <div className="sub skill" style={{transform: `translateY(${-scrollY}px)`}}>
              Skill
            </div>
          </div>

       

          
          
        
        </div>

        <div className="content">
          {pageNum == '01' ? <div>p</div> : <div>s</div>}
        
            
        </div>

        

      </div>

     
      
    </div>
  )
}

export default About