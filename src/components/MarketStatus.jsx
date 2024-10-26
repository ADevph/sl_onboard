import React, { useState, useEffect } from 'react';
import moment from 'moment';
import union from '../assets/green.svg';

const MarketStatus = () => {
  const [time, setTime] = useState(moment());
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment());
    }, 1000); // Update time every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const marketOpen = time.isBefore(moment().set({ hour: 14, minute: 0 }));

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(197, 216, 255, 0.15)', // Blue with 15% opacity
    borderRadius: '8px',
    padding: '4px',
    fontFamily: "'K2D', sans-serif",
    fontSize: '12px',
    color: 'black',
  };

  const timeStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const statusStyle = {
    padding: '2px 8px',
    borderRadius: '5px',
    fontWeight: 'medium',
  };

  const openStyle = {
    backgroundColor: 'green',
    color: 'white',
  };

  const closedStyle = {
    backgroundColor: 'red',
    color: 'white',
  };

  const secondDivStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2px',
    width: '100%',
    fontWeight: 'bold',
  };

  const dsexStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      {/* Time and Market Status */}
      <div style={timeStyle}>
        <span>{time.format('h:mm:ss A')}</span>
        <span style={{ ...statusStyle, ...(marketOpen ? openStyle : closedStyle) }}>
          Market: <span style={marketOpen ? openStyle : closedStyle}>{marketOpen ? 'Open' : 'Closed'}</span>
        </span>
      </div>

      {/* Second Div: DSEX Value with SVG */}
      <div style={secondDivStyle}>
        <div style={dsexStyle}>
          <img src={union} alt="DSEX" style={{ width: '12px', height: '16px', marginBottom: '4px', marginRight: '5px' }} />
          <span>DSEX 5756.71</span>
          <span style={{ marginLeft: '5px' }}>75.90 1.70%</span>
        </div>
      </div>
    </div>
  );
};

export default MarketStatus;
