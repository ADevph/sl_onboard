import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SliderSection from "./components/carousel/Slider";
import ServiceSection from "./components/Service";
import AppMenuItemSection from "./components/Service";
import IconSection from "./components/Iconsection";
import BranchSection from "./components/Branch";
import QuickLinksSection from "./components/Link";
import StockMarquee from "./components/Marque";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const boxShadowStyle = {
    backgroundColor: "white",
    boxShadow: "0px -3px 3px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.15)",
    height: isMobile ? "450px" : "650px", // Conditional height
    // height: isTablet ? "50px" : "600px", // Conditional height
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
  };

  return (
    <>
      {/* <MarketStatus /> */}
      <Navbar />
      <StockMarquee />
      <div style={boxShadowStyle}>
        <SliderSection />
        <AppMenuItemSection />
        <IconSection />
        <BranchSection />
      </div>
      <QuickLinksSection />
    </>
  );
}

export default App;
