import React from "react";
import banner from "../../assets/images/banner2.png";
import { abuela_nieta_banner } from "../../assets";
const BannerContact = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center relative h-[60vh] overflow-hidden">
      <img className="object-contain w-full" src={abuela_nieta_banner} alt="" />
      <div className="z-10 w-full flex justify-center px-4 lg:px-10 xl:px-20 absolute bottom-14">
        <div className="w-[60%] flex justify-center items-center my-10">
          {/* <div className="flex-1 border-t border-[#47172d] border-[1px]"></div> */}
          {/* <div className="text-3xl font-lato-400 mx-4 text-gray-300">
            Nuestros Vinos
          </div> */}
          {/* <div className="flex-1 border-t border-[#47172d] border-[1px]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
