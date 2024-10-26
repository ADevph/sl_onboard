// import React from 'react';
// import callIcon from "../assets/call.svg"
// import webIcon from '../assets/web.svg';
// import emailIcon from '../assets/email.svg';
// import fbIcon from '../assets/fb.svg';
// import lnIcon from '../assets/ln.svg';

// const IconSection = () => {
//     const icons = [webIcon, emailIcon, fbIcon, lnIcon, callIcon]; // List of imported SVG files

//     return (
//         <div style={{
//             width: '375px',
//             height: '60px',
//             marginLeft: '25px',
//             borderRadius: '6px',
//             marginTop: '20px',
//             border: '2px solid rgba(0, 0, 0, 0.12)', // Border with 25% opacity
//             display: 'flex', // Flexbox for arranging SVGs side by side
//             justifyContent: 'center', // Spacing between icons
//             gap:"50px",
//             alignItems: 'center' // Center icons vertically
//         }}>
//             {icons.map((icon, index) => (
//                 <img
//                     key={index}
//                     src={icon}
//                     alt={`icon-${index}`} // Unique alt text for each icon
//                     style={{ width: '25px', height: '22px' }} // Icon size
//                     className='justify-content-center align-items-center'
//                 />
//             ))}
//         </div>
//     );
// };

// export default IconSection;

import React from 'react';
import callIcon from "../assets/call.svg";
import webIcon from '../assets/web.svg';
import emailIcon from '../assets/email.svg';
import fbIcon from '../assets/fb.svg';
import lnIcon from '../assets/ln.svg';

const IconSection = () => {
  const icons = [webIcon, emailIcon, fbIcon, lnIcon, callIcon];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{
        width: '100%',
        maxWidth: '375px',  // Limits width to maintain centered alignment
        height: '60px',
        borderRadius: '6px',
        marginTop: '20px',
        border: '2px solid rgba(0, 0, 0, 0.12)',
        display: 'flex',
        justifyContent: 'space-evenly',  // Equal spacing between icons
        alignItems: 'center'
      }}>
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            style={{ width: '25px', height: '22px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default IconSection;
