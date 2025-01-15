import React, {useEffect , useState} from 'react';
// import { gsap } from "gsap";
import './index.scss';
import './section.scss';

function Section2() {
  const [rotation, setRotation] = useState(0);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setRotation(scrollY * 0.2); // 스크롤 값에 따라 회전 값 설정
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <> 
      <div className="section2 section">
        <div className="s2-area">
          <p className="title">Who we are?</p>
          <p className='text'>
            FLEX is comprehencsive <span>Creative Agency</span> that
            covers both design and development We provide an
            <span>'All in One'</span> service where ane person 
            handeles everything from planning and design to frontend
            and backend development, offering clients the most
            efficient solutions in terms of time end cost.
          </p>
          <p className='last'>
            FLEX는 디자인과 개발 모두 아우르는 종합 크리에이티브 에이전시입니다.
            기획부터 디자인, 프론트엔드와 백엔드 개발까지 모든 과정을 한 사람이 담당하는
            'All in One'서비스를 통해, 클라이언트에게 시간과 비용 측명에서 
            최적의 솔루션을 제공합니다
          </p>
        </div>
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

export default Section2;
