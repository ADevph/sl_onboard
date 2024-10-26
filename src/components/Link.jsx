import React from 'react';

const QuickLinksSection = () => {
    const links = [
        { name: 'BSEC (Bangladesh Securities and Exchange Commission)', url: '#' },
        { name: 'DSE (Dhaka Stock Exchange)', url: '#' },
        { name: 'CSE (Chittagong Stock Exchange)', url: '#' },
        { name: 'CDBL (Central Depository Bangladesh Limited)', url: '#' },
    ];

    return (
        <div style={{
            padding: '0px',
            width: '360px',
            margin: '0 auto',
            marginTop: '20px',
marginLeft:"25px"
        }}>
            {/* Quick Links Header */}
            <h4 style={{ fontWeight: 'bold', textAlign: 'left' }}>Quick Links</h4>

            {/* Red Divider */}
            <div style={{
                width: '140px',
                height: '2px',
                borderRadius:"50px",
                backgroundColor: 'red',
                opacity:'0.70',
                margin: '10px 0', // Spacing between header and divider
                textAlign: 'left',
            }}></div>

            {/* Links */}
            <ul style={{ listStyleType: 'none', padding: '0', margin: '10px 0', textAlign: 'left' }}>
                {links.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <a href={link.url} style={{
                            color: 'blue',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuickLinksSection;
