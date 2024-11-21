import Link from "next/link";
import React from "react";



const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-center">
  <div className="max-w-screen-xl w-full">
    <Link href="/">Logo Here</Link>
    <nav>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </nav>
    
  </div>
</header>
    )
};

export default Header;