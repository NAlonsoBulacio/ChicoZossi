"use client"; 
import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Location from "../Location/Location";
const ContactAndLocation = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-start py-20">
        <div className="w-full lg:w-[47%] ">
        <ContactForm />
        </div>
        
        <Location />
      </div>
    </div>
  );
};

export default ContactAndLocation;
