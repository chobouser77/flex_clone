import React , {useEffect , useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.scss';
import './section.scss'
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (!swiperRef.current) return; 
  
    const swiper = swiperRef.current;
  
    swiper.slideTo(0);

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".mySwiper", 
      start: "top 50%", 
      end: "bottom 50%", 
      scrub: true, 
      onUpdate: (self) => {
        if (swiper.slides && swiper.slides.length) {
          const progress = self.progress;
          const slideIndex = Math.round(progress * (swiper.slides.length - 1));
          if (swiper.activeIndex !== slideIndex) {
            swiper.slideTo(slideIndex);
          }
        }
      },
      
    });
  
    return () => scrollTrigger.kill(); // 컴포넌트 언마운트 시 ScrollTrigger 제거
  }, [swiperRef.current]); // swiperRef.current가 변경될 때 실행
  

  return (
    <>
      <div className="section3 section">
        <Swiper
          slidesPerView='auto'
          spaceBetween={70}
          centeredSlides={true}          
          className="mySwiper s3sw"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide className='ss'>
            <div className="ss-img-area">
              <div className="img"></div>
              <div className="circle"></div>
              <div className="font">
                <p className='f-t'><span>B</span>ello.U</p>
                <p className='f-b'>벨로유</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='ss'>
            <div className="ss-img-area">
              <div className="img"></div>
              <div className="circle"></div>
              <div className="font">
                <p className='f-t'><span>K</span>LALAB</p>
                <p className='f-b'>클라랩</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='ss'>
            <div className="ss-img-area">
              <div className="img"></div>
              <div className="circle"></div>
              <div className="font">
                <p className='f-t'><span>M</span>eerkat</p>
                <p className='f-b'>미어캣랜드</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='ss'>
            <div className="ss-img-area">
              <div className="img"></div>
              <div className="circle"></div>
              <div className="font">
                <p className='f-t'><span>D</span>K</p>
                <p className='f-b'>DK</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='ss'>
            <div className="ss-img-area">
              <div className="img"></div>
              <div className="circle"></div>
              <div className="font">
                <p className='f-t'><span>F</span>LO</p>
                <p className='f-b'>플로</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='ss'>
            <div className="ss-img-area">
              <div className="img"></div>
              <div className="circle"></div>
              <div className="font">
                <p className='f-t'><span>B</span>LUE</p>
                <p className='f-b'>블루</p>
              </div>
            </div>
          </SwiperSlide>         
        </Swiper>
      </div>      
    </>
  );
}

export default Section3;
