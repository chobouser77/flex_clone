import React, { useEffect, useRef, useState } from 'react';
import Matter from "matter-js";
import './index.scss';
import './section.scss';
function Section6() {
  const sceneRef = useRef(null); 
  const [activeButton, setActiveButton] = useState('client');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const targetElementRef = useRef(null);

  // 도형들
  useEffect(() => {    
    const engine = Matter.Engine.create();
    const world = engine.world;

    // 렌더링 설정
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "#00000000",
      },
    });

    // 렌더링 실행
    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // 월드 경계 설정
    const boundaries = [
      Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 20, { isStatic: true }), // 바닥
      Matter.Bodies.rectangle(0, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true }), // 왼쪽 벽
      Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true }), // 오른쪽 벽
    ];
    Matter.World.add(world, boundaries);

    const getRandom = (min, max) => Math.random() * (max - min) + min;

    const shapes = [];

    for (let i = 0; i < 63; i++) {
      const randomX = getRandom(0, window.innerWidth); // 랜덤 x 좌표
      const randomY = getRandom(0, 100); // 고정된 y 좌표 범위 (필요에 맞게 조정 가능)
      const shapeType = i % 3; // 3가지 도형을 순차적으로 생성

      let shape;

      if (shapeType === 0) {
        // 사각형 생성
        shape = Matter.Bodies.rectangle(randomX, randomY, 30, 50, {
          render: { fillStyle: "#FF6347" },
          angle: getRandom(0.1, 1),
          velocity: { 
            x: getRandom(0.2, 2), 
            y: getRandom(0, 10) 
          },
        });
      } else if (shapeType === 1) {
        // 원 생성
        shape = Matter.Bodies.circle(randomX, randomY, 20, {
          render: { fillStyle: "#4682B4" },
          angle: getRandom(0.1, 1),
          velocity: { 
            x: getRandom(0.2, 2.4), 
            y: getRandom(0, 8) 
          },
        });
      } else {
        // 다각형 생성
        shape = Matter.Bodies.polygon(randomX, randomY, 5, 30, {
          render: { fillStyle: "#32CD32" },
          angle: getRandom(0.1, 1),
          velocity: { 
            x: getRandom(0.2, 3.2), 
            y: getRandom(0, 10) 
          },
        });
      }
      shapes.push(shape);
    }
    Matter.World.add(world, shapes);

    // 반응형 처리
    const handleResize = () => {
      render.bounds.max.x = window.innerWidth;
      render.bounds.max.y = window.innerHeight;
      render.options.width = window.innerWidth;
      render.options.height = window.innerHeight;

      Matter.World.clear(world, false);  
      Matter.World.add(world, boundaries.concat(shapes)); 
    };

    window.addEventListener("resize", handleResize);

    // 클린업
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //  버튼
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);  // 클릭한 버튼을 활성화 상태로 설정
  };
  // 호버 이미지 커서
  const handleMouseMove = (e) => {
    const targetElement = document.querySelector(".img-in"); 
  
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
      <div className="band">
        <div className="band-in in1">
          THAT FLEX IS A COMPANY THAT FLEX IS A COMPANY THAT FLEX IS A COMPANY THAT FLEX IS A COMPANY
        </div>
        <div className="band-in in2">
          THAT FLEX IS A COMPANY THAT FLEX IS A COMPANY THAT FLEX IS A COMPANY THAT FLEX IS A COMPANY
        </div>
        <div className="button-in">
          <p>당신은 누구입니까?</p>
          <div className="bt-area">
            <button
              className={activeButton === 'client' ? 'active' : ''}
              onClick={() => handleButtonClick('client')}
            >
              의뢰인
            </button>
            <button
              className={activeButton === 'student' ? 'active' : ''}
              onClick={() => handleButtonClick('student')}
            >
              학생
            </button>
          </div>
        </div>
        <div className="img-in"
        onMouseMove={handleMouseMove}>
          <div className={`client box ${activeButton === 'client' ? 'active' : ''}`}></div>
          <div className={`student box ${activeButton === 'student' ? 'active' : ''}`}></div>
          <div
            ref={targetElementRef}
            className="custom-cursor-s6"
            style={{
              top: cursorPosition.y,
              left: cursorPosition.x,
            }}
          >
            <p>FLEX에 당신의 프로젝트를 의뢰하세요!</p>            
          </div>
        </div>
      </div>
      
      <div className="section6 section">
        <div ref={sceneRef} className="canvus"></div>                       
      </div> 
    </>
  );
}

export default Section6;
