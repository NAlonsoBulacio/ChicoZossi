import React from "react";
import BannerAbout from "../../components/Banners/BannerAbout";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import {
  galeria_viñedo,
  galeria_historia,
} from "../../components/ImageGallery/index";
const Gallery = () => {
  return (
    <div>
      <Header />
      <BannerAbout />
      <p className="text-3xl py-6 font-lora-600">Galeria de Imagenes</p>
      <ImageGallery gallery={galeria_viñedo} galeria="galeria" />
      <ImageGallery gallery={galeria_historia} galeria="galeria" />
      <Footer />
    </div>
  );
};

export default Gallery;
