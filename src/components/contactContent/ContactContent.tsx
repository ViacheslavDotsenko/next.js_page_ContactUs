"use client";
import React, { useState } from "react";
import ContactUsTitle from "../contactUsTitle/ContactUsTitle";
import IconPhone from "../socialIcon/IconPhone";
import IconMessage from "../socialIcon/IconMessage";
import IconLocation from "../socialIcon/IconLocation";
import IconDiscort from "../socialIcon/IconDiscort";
import IconInsta from "../socialIcon/IconInsta";
import IconTwitter from "../socialIcon/IconTwitter";
import Link from "next/link";

const checkboxes = [
  { id: 1, label: "General" },
  { id: 2, label: "General" },
  { id: 3, label: "General" },
  { id: 4, label: "General" },
];

const ContactContent: React.FC = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    checkboxes: [] as number[],
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      checkboxes: prev.checkboxes.includes(id)
        ? prev.checkboxes.filter((checkboxId) => checkboxId !== id)
        : [...prev.checkboxes, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);    
    alert("Form submitted successfully!");  
    setFormData(initialFormData);
  };

  return (
    <div className="flex-grow">
      <ContactUsTitle />
      <div className="flex lg:flex-row flex-col w-full items-center">
        <article className="flex justify-center min-h-[500px] w-full max-w-[700px] lg:w-1/3 bg-black text-white m-[5px] rounded-lg p-[5%] font-normal">
          <ul className="max-w-[350px]">
            <li className="mb-[5rem] text-lg font-semibold">
              <h3>Contact Information</h3>
              <h4 className="text-xs text-slate-700">
                Say something to start a live chat!
              </h4>
            </li>
            <li className="mb-[4rem] text-[16px]">
              <ul>
                <li className="flex mb-[1rem]">
                  <IconPhone />
                  <Link href="#">+1012 3456 789</Link>
                </li>
                <li className="flex mb-[1rem]">
                  <IconMessage />
                  <Link href="#">demo@gmail.com</Link>
                </li>
                <li className="flex mb-[1rem]">
                  <IconLocation />
                  <Link href="#">
                    132 Dartmouth Street Boston,
                    <br /> Massachusetts 02156 United States
                  </Link>
                </li>
              </ul>
            </li>
            <li className="flex gap-[1rem]">
              <IconTwitter />
              <IconInsta />
              <IconDiscort />
            </li>
          </ul>
        </article>

        <article className="w-2/3 p-[2rem]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col items-center"
          >
            <div className="grid grid-cols-1 gap-4 w-full max-w-[600px] lg:grid-cols-2">
              <div className="flex flex-col w-full">
                <label className="text-gray-600 text-sm mb-1">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="p-1 border-b border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-gray-600 text-sm mb-1">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="p-1 border-b border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 w-full max-w-[600px] lg:grid-cols-2">
              <div className="flex flex-col w-full">
                <label className="text-gray-600 text-sm mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-1 border-b border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-gray-600 text-sm mb-1">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="p-1 border-b border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="grid gap-4 w-full max-w-[600px] sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between">
              {checkboxes.map(({ id, label }) => (
                <label
                  key={id}
                  className="flex items-center space-x-3 w-full sm:w-auto lg:w-auto"
                >
                  <input
                    type="checkbox"
                    checked={formData.checkboxes.includes(id)}
                    onChange={() => handleCheckboxChange(id)}
                    className="form-checkbox w-4 h-4 rounded-[50%] text-blue-600 border-gray-300 focus:ring-3 focus:ring-blue-400"
                  />
                  <span className="text-sm text-gray-700">{label}</span>
                </label>
              ))}
            </div>

            <div className="flex flex-col w-full max-w-[600px]">
              <label className="text-gray-600 text-sm mb-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-1 border-b border-gray-300 focus:outline-none focus:border-black h-[100px]"
                placeholder="Write your message.."
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
    </div>
  );
};

export default ContactContent;
