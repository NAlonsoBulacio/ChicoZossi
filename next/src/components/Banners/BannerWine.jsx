"use client"; 
import Image from "next/image";
import React from "react";
import { botellas2_banner} from "../../assets";
const BannerWine = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-start lg:items-center relative h-auto lg:h-[60vh] overflow-hidden">
      <Image className="" src={botellas2_banner} alt="banner-vinos" />
      <div className="z-10 w-full flex justify-center px-4 lg:px-10 xl:px-20 absolute bottom-14">
      </div>
    </div>
  );
};

export default BannerWine;
