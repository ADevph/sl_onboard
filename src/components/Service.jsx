import React, { useEffect, useState } from "react";
import axios from "axios";

const AppMenuItemSection = () => {
  const [AppMenuItem, setAppMenuItem] = useState([]);

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
    <div className="d-flex justify-content-center align-items-center" style={{gap:'20px'}} >

        {AppMenuItem.slice(0, 3).map((item, index) => (
          <div
            className={`border-start border-danger border-1 rounded-2`}
            style={{
              boxShadow: "4px -4px 6px rgba(0, 0, 0, 0.2)",
              width: "110px",
              height: "90px",
              marginTop:"15px",
              // marginBottom:"15px",
              borderBottom: "1px solid red",
              borderLeft: "1px solid red",
              borderRadius: "5px", // Set border radius to 5px
              display: "flex", // Make this a flex container
              flexDirection: "column", // Arrange items in a column
              justifyContent: "center", // Center content vertically
              alignItems: "center", // Center content horizontally
            }}
          >
            <img
              src={item.ImageUrl}
              alt={item.Name}
              height="60px"
              width="50px"
              className="mb-1 object-fit-contain"
            />
            <span className="text-center" style={{ fontSize: "12px" }}>
              {item.Name}
            </span>
          </div>
        ))}
 
    </div>
  );
};

export default AppMenuItemSection;
