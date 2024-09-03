"use client"; 
import React from "react";
import GoogleMapEmbed from "../GoogleMapEmbed/GoogleMapEmbed";
const Location = () => {
  return (
    <div className="w-full lg:w-[47%] text-center space-y-4">
      <div className="w-full flex justify-center py-2">
        {/* <div className="w-3/5">
          <hr className="border-[1.5px] border-[#47172d]" />
        </div> */}
      </div>
      <div className="w-full flex flex-wrap ">
        <h1 className="w-full font-lato-500 text-2xl">
          ¡Visítanos en Colalao del Valle, Tucumán!
        </h1>
        <h1 className=" w-full font-lato-400 text-[#47172d]">
          Bodega Chico Zossi - RN40 Km 4308, T4141
        </h1>
      </div>
      <GoogleMapEmbed />
      
    </div>
  );
};

export default Location;
