import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import "./section.scss";

gsap.registerPlugin(ScrollTrigger);

function Section5() {
  const horizontalSection = useRef(null);
  const hoS3Ref = useRef(null);
  const hoS5Ref = useRef(null);
  const [horizontalScrollHeight, setHorizontalScrollHeight] = useState(0);

  useEffect(() => {
    const element = horizontalSection.current;

    if (!element) return;

    const scrollWidth = element.scrollWidth;
    const viewportWidth = window.innerWidth;
    const viewH = window.innerHeight / 2;
    const calculatedHorizontalScrollHeight = scrollWidth - viewportWidth;
    const totalHeight = calculatedHorizontalScrollHeight + window.innerHeight * 2;

    setHorizontalScrollHeight(calculatedHorizontalScrollHeight);
    document.body.style.height = `${totalHeight}px`;

    const horizontalScroll = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: `+=${calculatedHorizontalScrollHeight + viewH}`, // 추가 스크롤 공간
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    
    // 수평 스크롤 애니메이션
    horizontalScroll.to(element, {
      x: () => -calculatedHorizontalScrollHeight,
      ease: "none",
    });
    
    // 추가 스크롤로 수직 이동 애니메이션
    horizontalScroll.to(
      element,
      {
        y: () => -viewH * 2, // 수직으로 위로 이동
        ease: "power1.inOut",
      },      
    );
    

    const hoS3Images = gsap.utils.toArray(".ho-s3 .img");
    gsap.timeline({
      scrollTrigger: {
        trigger: hoS3Ref.current,
        start: "170%", // 섹션 시작
        end: "220%", // 섹션 끝
        scrub: true,
        // markers: true, 
      },
    })
    .set(hoS3Images, { opacity: 0 }) 
    .to(hoS3Images[0], { opacity: 1 }) 
    .to(hoS3Images[0], { opacity: 0 }, )
    .to(hoS3Images[1], { opacity: 1 }) 
    .to(hoS3Images[1], { opacity: 0 }, )
    .to(hoS3Images[2], { opacity: 1 }); 

    const hoS5Images = gsap.utils.toArray(".ho-s5 .img");
    gsap.timeline({
      scrollTrigger: {
        trigger: hoS5Ref.current,
        start: "370%",
        end: "420%", 
        scrub: true,
        markers: true, 
      },
    })
    .set(hoS5Images, { opacity: 0 }) 
    .to(hoS5Images[0], { opacity: 1 }) 
    .to(hoS5Images[0], { opacity: 0 }, )
    .to(hoS5Images[1], { opacity: 1 }) 
    .to(hoS5Images[1], { opacity: 0 }, )
    .to(hoS5Images[2], { opacity: 1 });

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
          <div className="ho-section ho-s2">
            <div className="s2-text-area">
              <p className="big"><span>D</span>ESIGN</p>
              <p className="big l-margin">CLASS</p>  
              <p className="middle">
                We provide UX/UI designesrs with essential tools <br/>
                and Guide them in creating portfolios that hightlight <br/>
                their unique starenghts, including work on promotions, dafd <br/>
                websites, apps,and portolios.
              </p>
              <p >
                UXUI 디자이너에게 필요한 툴들 부터 프로모션,홈페이지, <br/>
                앱,포트폴리오 등 본인만의 강점을 살릴 수 있는 <br/> 
                포트폴리오 작업을 진행합니다.
              </p>
            </div> 
            <div className="s2-img-area">
              <div className="img1"></div>
              <div className="img2"></div>
            </div>
          </div>
          <div className="ho-section ho-s3" ref={hoS3Ref}>
            <div className="s3-img-area">
              <div className="img img1"></div>
              <div className="img img2"></div>
              <div className="img img3"></div>
              <div className="circle"></div>
            </div>     
            <div className="cube" >              
              <div className="face front"></div>
              <div className="face back"></div>
              <div className="face left"></div>
              <div className="face right"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>       
          </div>
          <div className="ho-section ho-s4">            
            <div className="s4-text-area">
              <p className="big"><span>D</span>EVELOPMENT</p>
              <p className="big l-margin">CLASS</p>  
              <p className="middle">
                When reviewing devlopers' portfolios, we often find that, despite having strong skills, <br/>
                the portfolios fall short due to a lack of proper planning and desing. <br/>
                At FLEX, we promise high-quality portfolios, as a single <br/>
                instructor handles everything from planning and design and design to development.
              </p>
              <p >
                개발자들의 포트폴리오를 보면 본인의 역량을 잘 보여줄 수 있는 기획과 디자인이 <br/>
                있음에도 기획과 디자인이 안되어 포트폴리오가 아쉬운 경우가 많았습니다. <br/>
                플렉스는 기획, 디자인, 개발까지 다 가능한 한 명이 강의하기 때문에 <br/>
                좋은 퀼리티의 포트폴리오를 약속합니다.
              </p>
            </div> 
            <div className="s4-img-area">              
              <div className="img2"></div>
              <div className="img1"></div>
            </div>
          </div>
          <div className="ho-section ho-s5" ref={hoS5Ref}>
            <div className="s5-img-area">
              <div className="img img1"></div>
              <div className="img img2"></div>
              <div className="img img3"></div>
              <div className="circle"></div>
            </div>     
            <div className="cube" >              
              <div className="face front"></div>
              <div className="face back"></div>
              <div className="face left"></div>
              <div className="face right"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>       
          </div>
        </div>
      </div>   
      {/* 상태 값 사용 */}
      <div className="s5-null" style={{ height: `${horizontalScrollHeight}px` }}></div>
    </>
  );
}

export default Section5;
