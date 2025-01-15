import React, { useEffect, useRef } from 'react';
import Matter from "matter-js";
import './index.scss';
import './section.scss';

function Section1() {
  const sceneRef = useRef(null); 

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

    const getRandom = (min, max) => {
      return Math.random() * (max - min) + min; // min과 max 사이의 랜덤 값 반환
    };

    const shapes = [
      Matter.Bodies.rectangle(window.innerWidth * 0.25, 100, 300, 500, { 
        render: { fillStyle: "#FF6347" },
        angle: getRandom(0.1, 0.5),
        velocity: { 
          x: getRandom(0.2, 1), 
          y: getRandom(0,10) },
      }), 
      Matter.Bodies.circle(window.innerWidth * 0.5, 50, 200, {
        render: { fillStyle: "#4682B4" },
        angle: getRandom(0.1, 0.5),
        velocity: { 
          x: getRandom(0.2, 1.2), 
          y: getRandom(0,8) },
      }), // 원
      Matter.Bodies.polygon(window.innerWidth * 0.75, 70, 5, 300, {
        render: { fillStyle: "#32CD32" },
        angle: getRandom(0.1, 0.5),
        velocity: { 
          x: getRandom(0.2, 1.6), 
          y: getRandom(0,10) },
      }),
    ];
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
  return (
    <> 
    <div className="section1 section">
      <div ref={sceneRef} className="canvus"></div>
      <div className="move-font">
        <p>FL<span>Brande</span>X Agency</p>
      </div>
      <div className="middle-font">
        <div className="m-f">
          <p>
            Number of Customers <br/>
            inquired <span>Today6</span>
          </p>          
        </div>
        <div className="m-f">
          <p>
            Number of Student <br/>
            inquired <span>Today4</span>
          </p>          
        </div>        
      </div>
      <div className="s1-bt-area">
          <div className="move-bt">
            <div className="s1-slid-font">
              <p>DEVELOPER</p>
              <p>학생작품 보러가기</p>
            </div>
            <div className="arrow">
              <p>&gt;</p>              
            </div> 
          </div>    
          <div className="move-bt">
            <div className="s1-slid-font">
              <p>DESIGNER</p>
              <p>학생작품 보러가기</p>
            </div>
            <div className="arrow">
              <p>&gt;</p>              
            </div>
          </div>       
      </div>
    </div>    
    </>
  );
}

export default Section1;
