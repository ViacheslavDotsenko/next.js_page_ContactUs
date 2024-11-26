"use client"
import React, { useState } from "react";
import ContactUsTitle from "../contactUsTitle/ContactUsTitle";
import IconPhone from "../socialIcon/IconPhone";
import IconMessage from "../socialIcon/IconMessage";
import IconLocation from "../socialIcon/IconLocation";
import Link from "next/link";

const ConactContent: React.FC = () => {
    const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);

  const handleCheckboxChange = (value: string) => {
    setSelectedCheckbox(value);
  };
    return (<div className="flex-grow">
        <ContactUsTitle /> 
        <div className="flex lg:flex-row  flex-col w-full items-center">
            <article className="flex justify-center min-h-[500px] w-full max-w-[700px] lg:w-1/3 bg-black text-white m-[5px] rounded-lg p-[5%] font-normal">
                <ul className="max-w-[350px]">
                    <li className="mb-[5rem] text-lg font-semibold"><h3>Contact Information</h3>
                        <h4 className="text-xs text-slate-700">Say something to start a live chat!</h4>
                    </li>
                    <li className="mb-[4rem]  text-[16px]"><ul>
                        <li className="flex mb-[1rem]"><IconPhone /><Link href='#'>+1012 3456 789</Link></li>
                        <li className="flex mb-[1rem]"><IconMessage /><Link href='#'>demo@gmail.com</Link></li>
                        <li className="flex mb-[1rem]"><IconLocation /><Link href='#'>132 Dartmouth Street Boston,<br/> Massachusetts 02156 United States</Link></li>
                    </ul></li>
                    <li> </li>
                </ul>
                
                
            </article>
            <article className="w-2/3 p-[2rem]">
            <form className="space-y-4 flex flex-col items-center">
  <div className="grid grid-cols-2 gap-4 w-full max-w-[600px] md:grid-cols-1">
    <div className="flex flex-col w-full">
      <label className="text-gray-600 text-sm mb-1">First Name</label>
      <input
        type="text"
        className="p-1 border-b border-gray-300 focus:outline-none focus:border-black"
      />
    </div>
    <div className="flex flex-col w-full">
      <label className="text-gray-600 text-sm mb-1">Last Name</label>
      <input
        type="text"
        className="p-1 border-b border-gray-300 focus:outline-none focus:border-black"
      />
    </div>
  </div>
  
  <div className="grid grid-cols-2 gap-4 w-full max-w-[600px] md:grid-cols-1">
    <div className="flex flex-col w-full">
      <label className="text-gray-600 text-sm mb-1">Email</label>
      <input
        type="email"
        className="p-1 border-b border-gray-300 focus:outline-none focus:border-black"
      />
    </div>
    <div className="flex flex-col w-full">
      <label className="text-gray-600 text-sm mb-1">Phone</label>
      <input
        type="tel"
        className="p-1 border-b border-gray-300 focus:outline-none focus:border-black"
      />
    </div>
  </div>

  <div className="flex flex-wrap justify-center space-x-4 max-w-[600px] w-full">
    {["Option 1", "Option 2", "Option 3", "Option 4"].map((option) => (
      <label key={option} className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedCheckbox === option}
          onChange={() => handleCheckboxChange(option)}
          className="form-checkbox text-blue-600 rounded"
        />
        <span>{option}</span>
      </label>
    ))}
  </div>

  <div className="flex flex-col w-full max-w-[600px]">
    <label className="text-gray-600 text-sm mb-1">Your Message</label>
    <textarea
      className="w-full p-1 border-b border-gray-300 focus:outline-none focus:border-black h-[100px]"
    />
  </div>

  <div className="flex lg:justify-end justify-center w-full max-w-[600px]">
    <button
      type="submit"
      className="bg-black text-white px-[3rem] py-[1rem] rounded-md hover:bg-[#323232]"
    >
      Send Message
    </button>
  </div>
</form>

</article>


        </div>
    </div>)
}

export default ConactContent;