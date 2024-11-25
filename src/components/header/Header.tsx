"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "../navigation/NavList";
import ActivIcon from "../socialIcon/ActivIcon";
import IconBurger from "../socialIcon/IconBurger";

const Header: React.FC = () => {
  
  const [isMobile, setIsMobile] = useState(false);

 
  useEffect(() => {
    const handleResize = () => {     
      setIsMobile(window.innerWidth < 1024);
    };   
    window.addEventListener("resize", handleResize);   
    handleResize();   
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full flex justify-center p-[1rem]">
      <div className="flex max-w-screen-xl w-full justify-between">
        <Link href="/">Logo Here</Link>
        {!isMobile && <Nav />}
        
        <div>
          
          {!isMobile && <ActivIcon isBlackLog={false} isBlackBask={false} />}
          {isMobile && <IconBurger isShow={true} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
