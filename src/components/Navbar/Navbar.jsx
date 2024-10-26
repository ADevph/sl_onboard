// import React from "react";
// import { Button } from "react-bootstrap";
// import MarketStatus from "../MarketStatus.jsx"; // Assuming you've created this component
// import idlcLogo from "../../assets/IDLC.png"; // Update this with the actual path to your logo
// import loginicon from "../../assets/login.svg"; // Update this with the actual path to your login icon
// import logo from "../../assets/idlc.svg";
// const Navbar = () => {
//   const navbarStyle = {
//     width: "100%",
//     height: "80px",
//     backgroundColor: "white",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center", // Adjust this to control the padding within the navbar
//     boxSizing: "border-box",
//     boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.15)",
//   };

//   const logoStyle = {
//     // height: "50px",
//     width: "25%", // This ensures the logo keeps its aspect ratio
//     objectFit: "cover",
//     marginRight: "20px",
//     // marginleft: "10px",

//   };

//   const loginButtonStyle = {
//     display: "flex",
//     alignItems: "center",
//     marginLeft: "20px",
//     backgroundColor: "#FFFFFF", 
//     border: "1px solid #000",
//     borderRadius: "6px",
//     color: "black",
//     padding: "10px 8px", // Added padding to make it look consistent
//     cursor: "pointer",
//     fontSize: "14px",
//     fontWeight: '600', // Changed from 'medium' to a numeric value for consistency
//   };

//   const loginIconStyle = {
//     marginRight: "8px", // Spacing between icon and text
//   };

//   return (
//     <div style={navbarStyle}>
//       {/* IDLC Logo */}
//       <img src={logo} alt="IDLC Logo" style={logoStyle} />

//       {/* Market Status Component */}
//       <MarketStatus />

//       {/* Login Button with SVG */}
//       <Button style={loginButtonStyle}>
//         <img
//           src={loginicon}
//           alt="DSEX"
//           style={{ width: "15px", height: "15px", marginRight: "6px" }}
//         />
//         Login
//       </Button>
//     </div>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import MarketStatus from "../MarketStatus.jsx";
import logo from "../../assets/idlc.svg";
import loginicon from "../../assets/login.svg";

const Navbar = () => {
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

  const navbarStyle = {
    width: "100%",
    height: "80px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: isMobile ? "space-between" : "space-between",
    alignItems: "center",
    padding: isMobile ? "0 10px" : "0 40px",
    boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.15)",
    boxSizing: "border-box",
  };

  const logoStyle = {
    width: isMobile ? "30%" : isTablet ? "15%" : "10%",
    padding: "8px 8px",
    objectFit: "contain",
  };

  const marketStatusContainer = {
    flexGrow: 1,
    display: "flex",
    justifyContent: isMobile ? "center" : "center",
    width: isMobile ? "auto" : "50%",
    margin: isMobile ? "0 auto" : "0",
  };

  const loginButtonStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFFFFF", 
    border: "1px solid #000",
    borderRadius: "6px",
    color: "black",
    padding: "10px 8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: '600',
  };

  return (
    <div style={navbarStyle}>
      {/* Logo on the left */}
      <img src={logo} alt="IDLC Logo" style={logoStyle} />

      {/* Market Status centered */}
      <div style={marketStatusContainer}>
        <MarketStatus />
      </div>

      {/* Login button aligned right for tablets and larger devices, visible on all screen sizes */}
      <Button style={loginButtonStyle}>
        <img src={loginicon} alt="Login Icon" style={{ width: "15px", height: "15px", marginRight: "6px" }} />
        Login
      </Button>
    </div>
  );
};

export default Navbar;
