import React from "react";
import banner from "../../assets/images/banner2.png";
import { botellas2_banner, botellas_banner } from "../../assets";
const BannerWine = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-start lg:items-center relative h-auto lg:h-[60vh] overflow-hidden">
      <img className="" src={botellas2_banner} alt="banner-vinos" />
      <div className="z-10 w-full flex justify-center px-4 lg:px-10 xl:px-20 absolute bottom-14">
      </div>
    </div>
  );
};

export default BannerWine;
