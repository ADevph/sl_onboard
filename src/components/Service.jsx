import React, { useEffect, useState } from "react";
import axios from "axios";

const AppMenuItemSection = () => {
  const [AppMenuItem, setAppMenuItem] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Update the screen size state when the window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/service.json");
        setAppMenuItem(response.data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ gap: "20px" }}>
      {AppMenuItem.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className="border-start border-danger border-1 rounded-2"
          style={{
            boxShadow: "4px -4px 6px rgba(0, 0, 0, 0.2)",
            width: isLargeScreen ? "190px" : "110px", // Width based on screen size
            height: isLargeScreen ? "140px" : "90px", // Height based on screen size
            marginTop: "15px",
            borderBottom: "1px solid red",
            borderLeft: "1px solid red",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={item.ImageUrl}
            alt={item.Name}
            height={isLargeScreen ? "80px" : "60px"} // Adjusted image height
            width={isLargeScreen ? "70px" : "50px"} // Adjusted image width
            className="mb-1 object-fit-contain"
          />
          <span className="text-center" style={{ fontSize: isLargeScreen ? "13px" : "12px", fontWeight: "bold" }}>
            {item.Name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AppMenuItemSection;
