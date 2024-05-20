import React, { useState, useEffect } from "react";
import "./CarrouselProject.css";
import { logo_dorado, wave8, botellas, logo_noname, banner_vida } from "../../assets";
const CarrouselProject = () => {
  const images = [
    "https://res.cloudinary.com/doczyujqf/image/upload/v1716245438/Chico%20zossi/banner1_1_3_1_boqszu_2_mpbvge.png",
    banner_vida
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, [images]);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      next();
    }, 8000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [selectedIndex]);

  // const previous = () => {
  //   const condition = selectedIndex > 0;
  //   const nextIndex = condition ? selectedIndex - 1 : images.length -1;
  //   setSelectedImage(images[nextIndex]);
  //   setSelectedIndex(nextIndex);
  // };
  const next = () => {
    const condition = selectedIndex < images.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };
  return (
    <div className="carousel-div w-full">
      <div className="carousel-slider overflow-hidden">
        <img
          key={selectedIndex}
          src={selectedImage}
          alt="Imagen carrusel"
          className="carousel-img image-fade-in-zoom"
        />
        {/* <h2 className="title-over font-lora-400 text-xl">Bodega Chico Zossi </h2> */}
        <div className="w-full flex justify-center py-2 absolute top-[26%] lg:top-[34%] z-10">
          <div className="w-1/4 lg:w-1/5 flex flex-wrap justify-center ">
            <div className="w-full lg:w-[40%] flex justify-center py-3">
              <img className="w-full px-4" src={logo_noname} alt="" />
            </div>
            <div className="w-[100%] flex justify-center items-center space-x-3">
              <div className="flex-1 border-t border-gray-400 border-[1px]"></div>
              <img className="w-8 lg:w-10" src={wave8} alt="" />
              <div className="flex-1 border-t border-gray-400 border-[1px]"></div>
            </div>
          </div>
        </div>
        <div className="max-w-[1300px]">
          <h1 className="title-over-image w-full font-lora-400 text-xl md:text-xl md:w-2/3 text-gray-400">
            PRIMERA BODEGA DE TUCUMÁN
          </h1>
        </div>
        <button>Ver todas las propiedades</button>
      </div>
    </div>
  );
};

export default CarrouselProject;
