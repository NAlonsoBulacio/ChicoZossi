"use client"; 
import Image from "next/image";
import React from "react";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { wave4, wave5, img_about3, vinia, historia4 } from "@/assets";
import BannerAbout from "@/components/Banners/BannerAbout";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { galeria_viñedo } from "@/components/ImageGallery/index";
import { Helmet } from "react-helmet"; 
const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Nuestra Bodega</title>
        <meta
          name="description"
          content="Descubre la primera bodega de Tucumán y nuestros vinos excepcionales."
        />
      </Helmet>
      <Header />
      <BannerAbout />
      <div className="flex flex-wrap justify-center items-center px-2 lg:px-10 xl:px-32 space-y-20 py-10">
        <div className="w-full flex flex-wrap justify-center items-center  space-y-6">
          <div className="w-[50%] flex justify-center items-center ">
            <Image src={wave5} className="w-24 " alt="detalle-wave" />
            <div className="text-3xl font-lato-400 mx-4 text-gray-600">
              Nuestro Viñedo
            </div>
            <Image src={wave4} className="w-24 " alt="detalle-wave" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[30%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3 lg:space-y-2">
            <Image
              className="lg:hidden w-full object-cover object-center"
              src={img_about3}
              alt="sobre-nosotros"
            />
            <p className="text-left text-lg text-gray-800">
              En nuestra finca ¨La Perseverancia¨ se destacan dos varietales: el
              Torrontés, cultivado en un sistema de conducción parral de 46 años
              de antigüedad, y el Malbec, en espaldera con 20 años de vida.
              Ambas cepas se cultivan a una altitud de 1800 metros sobre el
              nivel del mar, enriquecidas por las cristalinas aguas de
              vertientes provenientes de las cumbres calchaquíes.
            </p>
          </div>
          <div className="w-full lg:w-[60%] hidden lg:flex justify-end items-start overflow-hidden rounded-lg">
            <Image
              className="w-full object-cover object-center"
              src={img_about3}
              alt="sobre-nosotros"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-start">
          <div className="w-full  lg:w-[40%] hidden lg:flex justify-center items-start overflow-hidden rounded-lg">
            <Image
              className="w-[70%] object-cover object-center rounded-3xl"
              src={historia4}
              alt="sobre-nosotros"
            />
          </div>
          <div className="w-full lg:w-[30%] flex flex-wrap justify-start px-0 lg:pr-16 items-start space-y-3 lg:space-y-2">
            <h1 className="text-2xl font-lato-500 tracking-[0.2rem] text-[#47172d]">
              La Vendimia
            </h1>
            <Image
              className="lg:hidden w-full object-cover object-center"
              src={historia4}
              alt="sobre-nosotros"
            />
            <p className="text-left text-lg text-gray-800">
              En Chico Zossi, la cosecha es un momento crucial en el año.
              Nuestra decisión de cuándo iniciar este proceso, generalmente
              durante el mes de marzo, se basa en una evaluación meticulosa de
              las condiciones del viñedo. Comenzamos temprano en la mañana para
              aprovechar las condiciones óptimas, permitiendo que los racimos
              alcancen su madurez ideal. Para aquellos tardíos, optamos por
              dejar que sobre maduren, lo que aumenta la concentración de
              azúcares para una calidad excepcional.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[30%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3 lg:space-y-0">
            {/* <h1 className="text-2xl font-glacial-bold tracking-[0.2rem] text-[#0c6464]">
              DIRECCIÓN TÉCNICA
            </h1> */}
            <Image
              className="lg:hidden w-full object-cover object-center"
              src={vinia}
              alt="sobre-nosotros"
            />
            <p className="text-left text-lg text-gray-800">
              Nuestra cosecha se realiza de forma manual, con la selección
              cuidadosa de racimos completos para preservar la integridad de los
              granos. Utilizamos gamelas de 18 kg para recolectar cantidades
              limitadas de uva, evitando la presión que podría dañar los granos
              y causar fermentación prematura. Coordinamos estrechamente la
              cosecha con el procesamiento en la bodega para mantener un flujo
              de trabajo constante y evitar retrasos que puedan afectar la
              calidad de la uva, asegurando así que cada cosecha alcance su
              máximo potencial en la elaboración de nuestros vinos
            </p>
          </div>
          <div className="w-full  lg:w-[60%] hidden lg:flex items-start overflow-hidden rounded-lg">
            <Image
              className="w-full object-cover object-center"
              src={vinia}
              alt="sobre-nosotros"
            />
          </div>
        </div>
        <div>
          <p className="w-full px-0 lg:px-16 text-xl lg:text-3xl text-center text-gray-800">
            Si tienes alguna consulta o necesitas más información, contáctanos.
          </p>
          <p className="my-2 lg:my-8 w-full px-0 lg:px-16 text-xl lg:text-3xl text-center text-gray-800">
            ¡Tu opinión es fundamental para nosotros!
          </p>
        </div>
       <ContactUs /> 
      </div>
     <ImageGallery gallery={galeria_viñedo} />
      <Footer />
    </div>
  );
};

export default AboutUs;
