import React, { useState, useEffect } from "react";
import './index.scss';
import './intro.scss';

function Intro() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // 로딩이 완료되면 2초 후에 상태 변경
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
      return () => clearTimeout(timer);
    }, []);
  return (
    <> 
      <div className={`intro ${isLoaded ? "end" : ""}`}>
        HOME
      </div>
    </>
  );
}

export default Intro;
