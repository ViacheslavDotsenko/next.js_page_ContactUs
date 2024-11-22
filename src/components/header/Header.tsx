import Link from "next/link";
import React from "react";



const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-center">
  <div className="max-w-screen-xl w-full flex justify-between">
    <Link href="/">Logo Here</Link>
    <nav>
        <ul className="flex gap-[1rem]">
            <li>Home</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    <div>

    </div>
    
  </div>
</header>
    )
};

export default Header;