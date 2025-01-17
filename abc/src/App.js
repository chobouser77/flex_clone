import React, { useEffect, useRef, useState } from 'react';
import { reportWebVitals } from 'web-vitals';
import './index.scss';
import './App.css';
import Header from './fixed';
import Footer from './footer';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5'; 
import Section6 from './section6';  

function App() {
  

  return (
    <> 
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5  />
      <Section6  />
      <Footer />
    </>
  );
}

export default App;
