
import React from "react";



const content = [
    { title: "Contact Us", subTitle: "Any question or remarks? Just write us a message!"}        
    ];


    const ContactUsTitle: React.FC = () => {

        const { title, subTitle } = content[0];
      
        return (
          <article className="w-full flex justify-center items-center">
            <div className="text-center p-[2rem] mt-[1rem]">
              <h2 className="text-4xl">{title}</h2>
              <h4 className="color-[#717171] text-[18px]">{subTitle}</h4>
            </div>
          </article>
        );
      }

export default ContactUsTitle;