import React from "react";
const ContactUs = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-4 my-8">
      {/* <div className="w-full flex justify-center items-center">
        <h1 className="text-[#47172d] text-center text-2xl lg:text-3xl font-lato-500 tracking-[0.2rem]">
          CONTÁCTANOS
        </h1>
      </div> */}
      <div className="w-full flex justify-center items-center py-2">
        <a href="/contacto">
          <button className="tracking-[0.2rem] text-2xl text-gray-200 px-4 py-2 font-lato-400 rounded-md bg-[#47172d] transform-transition hover:scale-110 duration-200">
          CONTÁCTANOS
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
