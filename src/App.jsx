import { BrowserRouter } from "react-router-dom";
import { isMobile } from "react-device-detect";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {!isMobile &&   <Hero />}
        </div>
        {!isMobile && <StarsCanvas />}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
