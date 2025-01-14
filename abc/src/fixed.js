import React , {useState , useEffect} from 'react';
import './index.scss';
import './fixed.scss';

function Header() {
  const [scrolledDown, setScrolledDown] = useState(false);  
  const [isActive, setIsActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
  };
  useEffect(() => {
    const maouse = document.querySelector('.mouse');
    if (maouse) {
      window.addEventListener('wheel', handleWheel);

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  const toggleOpen = () => {
    setIsActive(!isActive);
  };
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <div className="header">
        <svg className={`path mouse ${scrolledDown ? 'scrolled-down' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435.7 119.5" width="94">
          <path
            className="path-animation p1"
            style={{ strokeMiterlimit: 10, transition: 'none', opacity: 1 }}
            d="M232.7,17.9c-18.5,22-7.7,49.6,17.9,49.3c33.1-0.4,89.4-40.3,76.7-56.4c-12.7-16.2-90.7,30.1-88.6,77.8 c1.3,29.4,50,24.5,74.6-1.5c15.6-16.4,12.2-29.2,1.1-26.2c-13.2,3.7-42.3,30.8-19.2,45.2c21.2,13.2,45.2-13.6,45.2-29.8"
          ></path>
          <polygon className="fill-white" points="0,112 29.5,112 29.5,74.3 67,74.3 67,49.8 29.5,49.8 29.5,28.6 67,28.6 67,5 0,5 "></polygon>
          <polygon
            className="fill-white move-left"
            points="435.7,5.8 404,5.8 393.1,41.2 382.3,5.8 350.6,5.8 373.3,58.7 350.6,111.7 382.3,111.7 393.1,76.3 404,111.7 435.7,111.7 413,58.7"
            transformOrigin="393.15000915527344px 58.74999713897705px"
            style={{ transform: 'translateX(-85.4354px)', transformOrigin: '393.15px 58.75px' }}
          ></polygon>
          <path
            className="path-animation p2"
            style={{ strokeMiterlimit: 10, transition: 'none', opacity: 1 }}
            d="M116.2,10c0,0-69,87.2-29.4,100c39.2,12.7,147.1-37.4,147.1-37.4"
          ></path>
        </svg>
        <div className="middle-p">
          <div className="move">
            <p>FLEX is FLEXIBLE !</p>
            <p>COPYRIGHT c 2024 FLEX</p>
          </div>
        </div>
        <button className={`open-side mouse ${isActive ? 'active' : '' , scrolledDown ? 'scrolled-down' : '' }`} onClick={toggleOpen}>
          <img className="os1 os" src="./image/vector1.png" alt="-" />
          <img className="os2 os" src="./image/vector2.png" alt="x" />
        </button>
      </div>
      <div className={`side-menu ${isActive ? 'active' : ''}`}>
        <button className='home nav 1'>Home</button>
        <button className='nav 2'>ABOUT</button>
        <button className='nav 3'>PROJECTS</button>
        <button className='nav 4'>CONTACT</button>
        <button className='nav 5 '>CLASS</button>
        <button className='bottom nav 6'>DEVELOPER</button>
        <button className='bottom nav 7'>DESIGNER</button>
        <div className="login">
          <button>LOGIN</button>
          <button>JOIN</button>
        </div>
      </div>
      <button className='left-fixed'>
        <p className='w'>W.</p>
        <p className='home'>Home</p>
      </button>
      <button
        className={`rignt-fixed mouse ${scrolledDown ? 'scrolled-down' : ''}`}        
        onMouseMove={handleMouseMove}
      >
        <div className="circle"></div>
        
          <div
            className="custom-cursor"
            style={{
              top: cursorPosition.y,
              left: cursorPosition.x,
            }}
          >
            <p>이번달 작업가능 건수</p>
            <p>
              <span>001건</span> (01/05)
            </p>
          </div>
        
      </button>
    </>    
  );
}

export default Header;
