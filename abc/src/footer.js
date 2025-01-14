import React from 'react';
import './index.scss';
import './footer.scss';

function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 맨 위로 부드럽게 스크롤
  };

  return (
    <> 
      <div className="footer">
        <div className="f-t">
          <div className="f-t1">
            <p>Project Contact</p>
            <p>00000000@naver.com</p>
          </div>
          <div className="f-t2">
            <p>B000, 0000-00 Bangbee-dong, </p>
            <p>Seocho-gu, Republic of Korea </p>
          </div>
          <div className="f-t3">
            <p>Phone Number</p>
            <p>+82. 10. 0000. 0000</p>
          </div>
        </div>
        <div className="f-b">
          <p className='f-b-32'>F<span>LE</span>X</p>
          <p>000000000 @ 2024 FLEX ALL RIGHT RESERVED.</p>
        </div>
        <button className="up-bt" 
        onClick={scrollToTop}
        >
          <img src="./image/vector3.png" alt="" />
        </button>
      </div>

    </>
  );
}

export default Footer;
