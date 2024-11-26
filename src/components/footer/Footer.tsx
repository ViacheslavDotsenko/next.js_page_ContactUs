import React from "react";
import Link from 'next/link';
import EmailForm from "../emailForm/EmailForm";
import IconLocation from "../socialIcon/IconLocation";
import IconMessage from "../socialIcon/IconMessage";
import IconPhone from "../socialIcon/IconPhone";


const Footer: React.FC = () => {
    return (<footer className="bg-black text-white w-full min-h-[450px]">
        <div className="text-center relative pt-[1rem] lg:pt-[4rem] after:content-[''] after:block after:w-[90%] after:h-[2px] after:bg-white after:mx-auto after:mt-2">
            <h2 className="text-[36px] pb-[1rem] lg:pb-[3.5rem]">Logo Here</h2></div>
            <div className="flex flex-col lg:flex-row w-full font-normal p-[2rem] lg:p-[6%] gap-[2rem] items-start justify-between max-w-[1450px] mx-auto">
            <div className="flex justify-around lg:w-1/3 w-full">
            <ul className="gap-[2rem] px-[0.5rem] ">
                <li className="flex items-start mb-[1rem]"><Link href="#" className="font-semibold text-base">Reach us</Link></li>
                <li className="mb-[1rem]"><Link href="" className="flex md:flex-row flex-col"><IconPhone /><span>+1012 3456 789</span></Link></li>
                <li className="mb-[1rem]"><Link href="" className="flex md:flex-row flex-col"><IconMessage /><span>demo@gmail.com</span></Link></li>
                <li><Link href="" className="flex md:flex-row flex-col"><IconLocation /><span className="">132 Dartmouth Street Boston,<br/> Massachusetts 02156 United States</span></Link></li>
            </ul>
            <ul className="gap-[2rem] px-[0.5rem] ">
                <li className="mb-[1rem]"><Link href="" className="font-semibold text-base">Company</Link></li>
                <li className="mb-[1rem]"><Link href="" className="">About</Link></li>
                <li className="mb-[1rem]"><Link href="" className="">Contact</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Blogs</Link></li>
            </ul>
            </div>                
            <div className="flex justify-around lg:w-1/3 w-full">
            <ul className="gap-[2rem] px-[0.5rem] whitespace-nowrap mr-[15%] sm:mr-[16%] md:mr-[18%] lg:mr-0">
                <li className="mb-[1rem]"><Link href="" className="font-semibold text-base mb-[1rem]">Legal</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Privacy Policy</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Terms & Services</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Terms of Use</Link></li>
                <li><Link href="">Refund Policy</Link></li>
            </ul>
            <ul className="pl-[1rem]">
                <li className="mb-[1rem]"><Link href="" className="font-semibold mb-[1rem]">Quick Links</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Techlabz Keybox</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Downloads</Link></li>
                <li><Link href="">Forum</Link></li>
            </ul>
            </div>
            <div className="flex flex-col items-center lg:items-start  w-full lg:w-auto">
                <ul className="text-center lg:text-left p-[1rem] bg-[#131313]  rounded-lg">
                  <li className="font-semibold mb-[1.5rem]">Join Our Newsletter</li>
                  <li><EmailForm /></li>
                  <li  className="text-[13px] font-medium">*  Will send you weekly updates for your better tool management.</li>
                </ul>
            </div>
        </div>

    </footer>)
}

export default Footer;