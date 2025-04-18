import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle background */}
      <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
      
      {/* P and B letters interlocked */}
      <path
        d="M14 12V28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 12H20L26 16L20 20H14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M24 12C24 12 28 12 28 16C28 20 24 20 24 20C24 20 28 20 28 24C28 28 24 28 24 28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo; 