import React, {useEffect , useRef, useState} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.scss';
import './section.scss';

gsap.registerPlugin(ScrollTrigger);

function Section4() {
  const [rotation, setRotation] = useState(0);
  const textRef = useRef(null);
  const pathRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const targetElementRef = useRef(null);
  const cursorSize = 50;
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setRotation(scrollY * 0.2); // 스크롤 값에 따라 회전 값 설정
  };
  // 큐브
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // 텍스트
  useEffect(() => {
    if (!textRef.current) return;
    const lines = textRef.current.querySelectorAll('.line');

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { color : '#ffffff10'},
        {
          color : '#ffffff',
          scrollTrigger : {
            trigger : line, 
            start : 'top 60%',
            end : 'top 40%',
            scrub : 1 ,
          },
        }
      );        
    });
  },[]);
  
  return (
    <> 
      <div className="section4 section">
        {/* 텍스트 */}
        <div className="s4-area" >
          <p  className="title line">Our Projects</p>
          <p className="text" ref={textRef}>
            <span className="line">FLEX is dedicated to bringing your <span className='hig'>cision</span> to life.</span>
            <span className="line">For each project, we thoroughly analyze our</span>
            <span className="line">clients' needs and find the most <span className='hig'>efficient</span>and</span>
            <span className="line"><span className='hig'>creative</span>solutions. Turn your ideas into reality with</span>
            <span className="line">FLEX</span>            
          </p>
          <p  className='last line'>
            FLEX는 고객의 비전을 실현하기 위해 최선을 다합니다. 우리는 각 프로젝트마다 고객의 요구를 철저히 분석하고, 
            그에 맞는 가장 효율적이고 창의적인 방법을 찾아냅니다. FLEX와 함께 여러분의 아이디어를 현실로 만들어보세요!
          </p>
        </div>
        {/* 큐브 */}
        <div 
          className="cube" 
          style={{ transform: `rotateX(${30 + rotation}deg) rotateY(${45 + rotation}deg)` }}>
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>                     
      </div>    
    </>
  );
}

export default Section4;
