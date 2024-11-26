import React from "react";
import Link from "next/link";

interface NavListProps {
  horizontal?: boolean;
}

const navItems = [
  { label: "Home", url: "/" },
  { label: "Features", url: "/features" },
  { label: "Blog", url: "/blog" },
  { label: "Shop", url: "/shop" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" }
];

const NavList: React.FC<NavListProps> = ({ horizontal = true }) => {
  return (
    <nav className="flex">
      <ul className={`flex ${horizontal ? 'flex-row' : 'flex-col'}`}>
        {navItems.map((item, index) => (          
          <li key={index} className={index === navItems.length - 1 ? "" : "mr-[6%]"}>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;

