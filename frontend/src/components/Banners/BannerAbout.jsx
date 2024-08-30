import React from "react";
import { banner_about } from "../../assets";
const BannerAbout = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-start lg:items-center relative h-auto lg:h-[60vh] overflow-hidden">
      <img className="" src={banner_about} alt="banner-sobre-nosotros" />
      <div className="z-10 w-full flex justify-center px-4 lg:px-10 xl:px-20 absolute bottom-14">
        <div className="w-[60%] flex justify-center items-center my-10">
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
