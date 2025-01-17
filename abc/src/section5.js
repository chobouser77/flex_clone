import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import "./section.scss"

gsap.registerPlugin(ScrollTrigger);

function Section5() {
  const horizontalSection = useRef(null);

  useEffect(() => {
    const element = horizontalSection.current;

    if (!element) return;
    
    const scrollWidth = element.scrollWidth;
    const viewportWidth = window.innerWidth;
    const horizontalScrollHeight = scrollWidth - viewportWidth;
    const totalHeight = horizontalScrollHeight + window.innerHeight * 2;
    document.body.style.height = `${totalHeight}px`;

    const horizontalScroll = gsap.to(element, {
      x: () => -(horizontalScrollHeight),
      ease: "none",
      scrollTrigger: {
        trigger: element, // 수평 스크롤 섹션
        start: "top top", // 섹션 시작 지점
        end: `+=${horizontalScrollHeight}`,
        scrub: true, // 스크롤과 동기화
        pin: true, // 수평 스크롤 동안 섹션 고정
        anticipatePin: 1, // 부드러운 고정
        invalidateOnRefresh: true,
      },
    });
    return () => {
      
      horizontalScroll.scrollTrigger.kill();
    };
  }, []);
  return (
    <> 
      <div className="section section5">
        <div className="horizontal" ref={horizontalSection}>
          <div className="ho-section ho-s1">
            <div className="ho-s1-left">
              <p><span>F</span>LEX</p>
              <p className="mg">CLASS</p>
            </div>
            <div className="ho-s1-right">
              <div className="s1-r-t">
                <p>in FLEX, we have <span>Design</span> and <span>Development</span></p>
                <p>lecturess and <span>Portfolio</span> creation classes.</p>
                <p>As a prime example, I will tell you only the points</p>
                <p>that the company really needs.</p>
              </div>
              <div className="s1-r-b">
                <p>플렉스에서는 디자인과 개발 강의와 포트폴리오 제작 클래스를 진행합니다.</p>
                <p>소수정예로 회사에서 정말 필요한 포인트만 딱 집어서 알려드립니다.</p>
              </div>
            </div>
          </div>
          <div className="ho-section ho-s2"></div>
          <div className="ho-section ho-s3"></div>
          <div className="ho-section ho-s4"></div>
          <div className="ho-section ho-s5"></div>
        </div>
      </div>   
    </>
  );
}

export default Section5;
