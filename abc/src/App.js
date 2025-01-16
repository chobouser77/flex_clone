import { reportWebVitals } from 'web-vitals'
import './index.scss';
import './App.css';
import Header from './fixed';
import Footer from './footer';
import Section1 from './section1';
import Section2 from './section2';
import Intro from './intro';

function App() {
  return (
    <> 
      {/* <Intro /> */}
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
    </>
  );
}

export default App;
