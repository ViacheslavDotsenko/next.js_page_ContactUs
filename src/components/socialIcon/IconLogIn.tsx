import React from 'react';

interface IconLogInProps {
  isBlack: boolean;
}

const IconLogIn: React.FC<IconLogInProps> = ({ isBlack }) => { 
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 32 32" 
      width="32" 
      height="32"
      className="transition-all duration-300 hover:invert" 
      style={{ transition: 'all 0.3s ease' }}
    >      
      <circle
        cx="16" 
        cy="16" 
        r="15" 
        fill={isBlack ? 'black' : 'white'}
        stroke={isBlack ? 'white' : 'black'}
        strokeWidth="1"
      />      
      <circle
        cx="16"
        cy="13"
        r="4.5"
        fill={isBlack ? 'black' : 'white'}
        stroke={isBlack ? 'white' : 'black'}
        strokeWidth="1"
      />     
      <path
        d="M10,24a6,6,0,0,1,12,0"
        fill="none"
        stroke={isBlack ? 'white' : 'black'}
        strokeWidth="1"
      />
    </svg>
  );
};

export default IconLogIn;
