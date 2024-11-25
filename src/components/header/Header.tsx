import Link from "next/link";
import React from "react";
import IconLogIn from "../socialIcon/IconLogIn";
import IconBasket from "../socialIcon/IconBasket";



const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-center p-[1rem]">
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
        <ul className="flex ">
            <li className="mr-[2rem]"><Link href="/"><IconLogIn isBlack={false}/></Link></li>
            <li className="mr-[2rem]"><Link href="/"><IconBasket isBlack={false} /> </Link></li>
        </ul>

    </div>
    
  </div>
</header>
    )
};

export default Header;