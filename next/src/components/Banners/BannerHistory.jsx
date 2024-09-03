"use client"; 
import Image from "next/image";
import React from "react";
import {  historia } from "../../assets";
const BannerHistory = () => {
  return (
    <div className="w-full flex flex-wrap justify-startitems-start lg:items-center relative h-auto lg:h-[60vh] overflow-hidden">
      <Image className="w-full" src={historia} alt="bannner-historia" />
      <div className="z-10 w-full flex justify-center px-4 lg:px-10 xl:px-20 absolute bottom-14">
        <div className="w-[60%] flex justify-center items-center my-10">
        </div>
      </div>
    </div>
  );
};

export default BannerHistory;
