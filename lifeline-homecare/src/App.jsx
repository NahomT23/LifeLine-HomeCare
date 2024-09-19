import React, { useState } from "react";
import NavBar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import Footer from "./components/Footer";
import OurTeam from "./pages/OurTeam"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Initial screen size

  const handleScreenSizeChange = (isMobile) => {
    setIsMobile(isMobile);
  }

  return (
    <>
      <div>
        <NavBar onScreenSizeChange={handleScreenSizeChange} />
        <HomePage isMobile={isMobile} />
        <AboutPage />
        <ServicesPage />
        <TestimonialsPage />
        <OurTeam/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
