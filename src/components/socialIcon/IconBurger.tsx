import React from "react";

interface IconBurgerProps {
  isShow: boolean;
}

const IconBurger: React.FC<IconBurgerProps> = ({ isShow }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: isShow ? 'block' : 'none' }}
    >
      <path
        d="M21 18H13C12.4477 18 12 17.5523 12 17C12 16.4477 12.4477 16 13 16H21V18ZM21 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H21V13ZM21 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H21V8Z"
        fill="black"
      />
    </svg>
  );
};

export default IconBurger;
