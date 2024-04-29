import React from "react";
import banner from "../../assets/images/banner2.png";
import { banner_about } from "../../assets";
const BannerAbout = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center relative h-[60vh] overflow-hidden">
      <img className="" src={banner_about} alt="" />
      <div className="z-10 w-full flex justify-center px-4 lg:px-10 xl:px-20 absolute bottom-14">
        <div className="w-[60%] flex justify-center items-center my-10">
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
