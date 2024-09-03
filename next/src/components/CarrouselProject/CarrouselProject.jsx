"use client"; 
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from 'next/image';
import { wave8, banner, logo_noname, banner_vida } from "@/assets";
import "./CarrouselProject.css"
const CarrouselProject = () => {
  // Memorizar el array de imágenes para evitar que cambie en cada render
  const images = useMemo(() => [banner, banner_vida], []);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]); 

  // Función para cambiar a la siguiente imagen, memorizada para evitar redefinición
  const next = useCallback(() => {
    const condition = selectedIndex < images.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  }, [selectedIndex, images]);

  // Autoplay del carrusel
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      next();
    }, 8000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [next]);

  return (
    <div className="carousel-div w-full">
      <div className="carousel-slider overflow-hidden">
        <Image
          key={selectedIndex}
          src={selectedImage}
          alt="Imagen carrusel"
          className="carousel-img image-fade-in-zoom"
         
        
        />
        <div className="w-full flex justify-center py-2 absolute top-[26%] lg:top-[34%] z-10">
          <div className="w-1/4 lg:w-1/5 flex flex-wrap justify-center">
            <div className="w-full lg:w-[40%] flex justify-center py-3">
              <Image className="w-full px-4" src={logo_noname} alt="logo-name" width={150} height={50} />
            </div>
            <div className="w-[100%] flex justify-center items-center space-x-3">
              <div className="flex-1 border-t border-gray-400 border-[1px]"></div>
              <Image className="w-8 lg:w-10" src={wave8} alt="detalle-wave" width={40} height={40} />
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
