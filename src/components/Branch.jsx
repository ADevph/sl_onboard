import React from 'react';
import branchIcon from '../assets/branch.svg'; // Import the branch icon

const BranchSection = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div style={{
                width: '100%',
                maxWidth: '375px',  // Limits width for responsive design
                height: '60px',
                marginTop: '15px',
                marginBottom: '15px',
                borderRadius: '5px',
                border: '2px solid rgba(0, 0, 0, 0.12)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px'
            }}>
                {/* Icon and text side by side */}
                <img
                    src={branchIcon}
                    alt="Branch Icon"
                    style={{ width: '32px', height: '32px', marginRight: '10px' }}
                />
                <span style={{ fontSize: '16px', fontWeight: '600' }}>Visit Our Branches</span>
            </div>
        </div>
    );
};

export default BranchSection;
