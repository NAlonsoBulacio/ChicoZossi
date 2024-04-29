import React from "react";
import banner from "../../assets/images/banner2.png";
// import { banner, banner2 } from "../../assets";
const BannerHistory = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center relative h-[60vh] overflow-hidden">
      <img className="" src={banner} alt="" />
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `https://res.cloudinary.com/doczyujqf/image/upload/v1713979157/Chico%20zossi/banner1_1_3_1_boqszu.png`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="absolute block lg:hidden inset-0 z-0"
        style={{
          backgroundImage: `https://res.cloudinary.com/doczyujqf/image/upload/v1713979157/Chico%20zossi/banner1_1_3_1_boqszu.png`,
          backgroundSize: "100% 100%",
          backgroundSize: "cover",
        }}
      ></div> */}
      {/* <div className="w-full flex justify-start items-center z-10">
        <img src={logo} alt="logo" className="max-w-[200px]" />
      </div> */}
      <div className="z-10 w-full flex justify-center px-4 lg:px-10 xl:px-20 absolute bottom-14">
        <div className="w-[60%] flex justify-center items-center my-10">
          <div className="flex-1 border-t border-[#47172d] border-[1px]"></div>
          <div className="text-3xl font-lato-400 mx-4 text-gray-300">
            Nuestros Vinos
          </div>
          <div className="flex-1 border-t border-[#47172d] border-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerHistory;
