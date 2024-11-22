import React from "react";
import Link from 'next/link';
import EmailForm from "../emailForm/EmailForm";


const Footer: React.FC = () => {
    return (<footer className="bg-black text-white w-full min-h-[450px] pt-[1rem] lg:pt-[4rem]">
        <div className="text-center relative after:content-[''] after:block after:w-[90%] after:h-[2px] after:bg-white after:mx-auto after:mt-2">
            <h2>Logo Here</h2></div>
            <div className="flex flex-col lg:flex-row w-full font-normal p-[2rem] lg:p-[6%] gap-[2rem] items-center justify-center">
            <div className="flex gap-[2rem]">
            <ul className="gap-[2rem]">
                <li className="mb-[1rem]"><Link href="#" className="font-semibold text-base">Reach us</Link></li>
                <li className="mb-[1rem]"><Link href="" className="flex"><svg className="mr-[1rem]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="white"/>
<path d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2298 13.2683 15.9773 13.1752 15.7178 13.1832C15.4582 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71198 14.287C8.51998 13.094 8.15898 11.933 8.05198 11.361L10.511 8.96699C10.6974 8.78612 10.8061 8.53982 10.8141 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85898 3.51299C6.68402 3.32035 6.44086 3.2035 6.18113 3.18725C5.9214 3.17101 5.66557 3.25665 5.46798 3.42599L3.29798 5.28699C3.12509 5.46051 3.0219 5.69145 3.00798 5.93599C2.99298 6.18599 2.70698 12.108 7.29898 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3085 20.9783 18.5393 20.8747 18.712 20.701L20.572 18.53C20.7414 18.3325 20.8273 18.0768 20.8112 17.817C20.7951 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z" fill="white"/>
</svg><span>+1012 3456 789</span></Link></li>
                <li className="mb-[1rem]"><Link href="" className="flex"><svg className="mr-[1rem]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
</svg><span>demo@gmail.com</span></Link></li>
                <li><Link href="" className="flex"><svg className="mr-[1rem]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z" fill="white"/>
</svg><span className="">132 Dartmouth Street Boston,<br/> Massachusetts 02156 United States</span></Link></li>
            </ul>
            <ul className="gap-[2rem]">
                <li className="mb-[1rem]"><Link href="" className="font-semibold text-base">Company</Link></li>
                <li className="mb-[1rem]"><Link href="" className="">About</Link></li>
                <li className="mb-[1rem]"><Link href="" className="">Contact</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Blogs</Link></li>
            </ul>
            </div>                
            <div className="flex gap-[2rem]">
            <ul className="gap-[2rem]">
                <li className="mb-[1rem]"><Link href="" className="font-semibold text-base mb-[1rem]">Legal</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Privacy Policy</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Terms & Services</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Terms of Use</Link></li>
                <li><Link href="">Refund Policy</Link></li>
            </ul>
            <ul className="">
                <li className="mb-[1rem]"><Link href="" className="font-semibold mb-[1rem]">Quick Links</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Techlabz Keybox</Link></li>
                <li className="mb-[1rem]"><Link href="" className="mb-[1rem]">Downloads</Link></li>
                <li><Link href="">Forum</Link></li>
            </ul>
            </div>
            <div>
                <ul className="flex flex-col bg-[#131313] p-[1rem] rounded-lg">
                  <li className="font-semibold mb-[1.5rem]">Join Our Newsletter</li>
                  <li><EmailForm /></li>
                  <li  className="text-[13px] font-medium">*  Will send you weekly updates for your better tool management.</li>
                </ul>
            </div>
        </div>

    </footer>)
}

export default Footer;