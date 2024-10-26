import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";

function StockMarquee() {
  const [data, setData] = useState([]);

  // Fetch data from JSON
  useEffect(() => {
    axios.get("/data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ 
      width: "100%", 
      height: "70px", 
      backgroundColor: "rgba(197, 216, 255, 0.15)", 
      overflow: "hidden",
      marginTop:"15px"
    }}>
      <Marquee gradient={false} speed={50}>
        {data.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", 
              margin: "10px" 
                
            }}
          >
            {/* Trading Code and Last Trading Price */}
            <div style={{ display: "flex", gap: "5px" }}>
              <span style={{ fontSize:"14px", fontWeight:"bold" }}>{item.trading_code}</span>
              <span style={{ fontSize:"15px" }}>{item.last_trading_price}</span>
            </div>

            {/* Change and Change Percent */}
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <img
                src={item.indicator === "Up" ? "../src/assets/green.svg" : "../src/assets/red.svg"}
                alt={item.indicator === "Up" ? "Up Indicator" : "Down Indicator"}
                style={{ width: "16px", height: "16px" }}
              />
              <div style={{ display: "flex", gap: "10px" }}>
                <span>{item.change}</span>
                <span>{item.change_percent}</span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default StockMarquee;
