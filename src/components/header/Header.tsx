"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Nav from "../navigation/NavList";
import ActivIcon from "../socialIcon/ActivIcon";
import IconBurger from "../socialIcon/IconBurger";

const Header: React.FC = () => {
  
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowBurger, setIsShowBurger] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);  // Реф для меню

  useEffect(() => {
    const handleResize = () => {     
      setIsMobile(window.innerWidth < 1024);
    };   
    window.addEventListener("resize", handleResize);   
    handleResize();   
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(true);    
    setIsShowBurger(false);    
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsShowBurger(true);
  };

  return (
    <header className="w-full flex justify-center p-[1rem]">
      <div className="flex max-w-screen-xl w-full justify-between">
        <Link href="/">Logo Here</Link>
        {!isMobile && <Nav />}        
        <div className="cursor-pointer" onClick={openMenu}>          
          {!isMobile && <ActivIcon isBlackLog={false} isBlackBask={false} />}
          {isMobile && <IconBurger isShow={isShowBurger} />}
        </div>
      </div>
      {isMenuOpen && (
        <div
          
          className="w-[100vw] h-[100vh] backdrop-blur-sm  text-white p-[1rem] fixed top-0 left-0 z-50"
        >
          <div ref={menuRef} className="h-[300px] bg-[black] p-[1rem] pl-[2rem]">
            <div className="flex w-full justify-between mb-[1rem]">
            <Link href="/">Logo Here</Link>
            <span
              onClick={closeMenu}
              className="w-[24px] h-[24px] relative before:content-[''] after:content-[''] before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-1/2 after:left-1/2 before:w-full after:w-full before:h-[2px] after:h-[2px] before:bg-white after:bg-white before:-translate-x-1/2 after:-translate-x-1/2 before:-translate-y-1/2 after:-translate-y-1/2 before:rotate-45 after:-rotate-45 cursor-pointer"
            ></span>
          </div> 
          <Nav horizontal={false} />
          <div className="mt-[1rem] flex w-full justify-center">
            <ActivIcon isBlackLog={true} isBlackBask={true} />
          </div></div>
          
        </div>
      )}
    </header>
  );
};

export default Header;
