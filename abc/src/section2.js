import React, {useEffect , useRef, useState} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.scss';
import './section.scss';

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const [rotation, setRotation] = useState(0);
  const textRef = useRef(null);
  const pathRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const targetElementRef = useRef(null);
  
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
  // 패스
  useEffect(() => {
    const path = pathRef.current;
  
    const pathLength = path.getTotalLength();
  
    gsap.set(path, {
      strokeDasharray: pathLength, // 경로의 길이만큼 대시 배열 설정
      strokeDashoffset: pathLength, // 처음에는 경로가 보이지 않도록 설정
    });
  
    gsap.to(path, {
      strokeDashoffset: 0, // 스크롤에 따라 경로가 채워짐
      scrollTrigger: {
        trigger: path,
        start: 'top 40%', // 시작 지점을 경로의 80%로 설정
        end: 'bottom 90%', // 끝 지점
        scrub: 1, // 스크롤에 따라 애니메이션 진행
        // markers: true, 
      },
    });
  }, []);
  // 이미지 커스텀 커서
  const handleMouseMove = (e) => {
    const targetElement = document.querySelector(".img-area"); // img-area 요소 선택
  
    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect();        
      const cursorX = e.clientX - targetRect.left; 
      const cursorY = e.clientY - targetRect.top;  
      
      setCursorPosition({
        x: cursorX,
        y: cursorY,
      });
    }
  };
  
  return (
    <> 
      <div className="section2 section">
        {/* 텍스트 */}
        <div className="s2-area" >
          <p  className="title line">Who we are?</p>
          <p className="text" ref={textRef}>
            <span className="line">FLEX is a comprehensive <span className='hig'>Creative Agency</span> that</span>
            <span className="line">covers both design and development. We provide an </span>
            <span className="line"><span className='hig'>'All in One'</span> service where</span>
            <span className="line">one person handles everything</span>
            <span className="line">from planning and design to frontend</span>
            <span className="line"> and backend development, offering clients</span>
            <span className="line">the most efficient solutions in terms of time and cost.</span>
          </p>
          <p  className='last line'>
            FLEX는 디자인과 개발 모두 아우르는 종합 크리에이티브 에이전시입니다.
            기획부터 디자인, 프론트엔드와 백엔드 개발까지 모든 과정을 한 사람이 담당하는
            'All in One'서비스를 통해, 클라이언트에게 시간과 비용 측명에서 
            최적의 솔루션을 제공합니다
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
        {/* 패스 */}
        <svg width="100%" height="1000">
          <path
            ref={pathRef}
            d="M -50,0 C 500,500 1500,500 2000,1500"
            fill="transparent"
            stroke="#3EFF3E"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>  
        {/* 이미지 호버 */}
        <div className="img-area" 
        onMouseMove={handleMouseMove}>
          <img src="./image/0010.png" alt="지붕 들고 있는 양반" />
          <div className="top-title">
            <p className="big">FLEX</p>
            <p className="w"><span>From</span> Branding</p>
            <p className="w d">Design</p>
            <p className="w d"><span>To</span> Developer</p>
          </div>
          <div className="bottom-title">
            <span>B</span>randing
          </div>
          <div
            ref={targetElementRef}
            className="custom-cursor-s2"
            style={{
              top: cursorPosition.y,
              left: cursorPosition.x,
            }}
          >
            <p>차곡차곡,집을 설계하듯 브랜딩을 도와드립니다.</p>            
          </div>
        </div>      
      </div>    
    </>
  );
}

export default Section2;
