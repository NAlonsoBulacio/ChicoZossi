"use client"; 
import React from "react";
import BannerAbout from "@/components/Banners/BannerAbout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import {
  galeria_viñedo,
  galeria_historia,
} from "@/components/ImageGallery/index";
const Gallery = () => {
  return (
    <div>
      <Header />
      <BannerAbout />
      <p className="text-3xl py-14 font-lora-600 px-2">Galeria de Imagenes</p>
      <div className="pb-6"><ImageGallery gallery={galeria_viñedo} galeria="galeria" /></div>
      <ImageGallery gallery={galeria_historia} galeria="galeria" />
      <Footer />
    </div>
  );
};

export default Gallery;
