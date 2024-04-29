import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import BannerAbout from "../../components/Banners/BannerAbout";
import Header from "../../components/Header/Header";
import { wave4, wave5, botella, wave } from "../../assets";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
const History = () => {
  return (
    <div>
      <Header />
      <BannerAbout />
      <div className="flex flex-wrap justify-center items-center px-2 lg:px-10 xl:px-32 space-y-10 py-10">
        <div className="w-full flex flex-wrap justify-center items-center">
          <div className="w-[50%] flex justify-center items-center ">
            <img src={wave5} className="w-24 " alt="" />
            <div className="text-3xl font-lato-400 mx-4 text-gray-600">
              Nuestra Historia
            </div>
            <img src={wave4} className="w-24 " alt="" />
          </div>
          <p className="w-full px-0 lg:px-16 text-xl lg:text-xl text-center  text-gray-700"></p>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[40%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3 lg:space-y-4">
            <img
              className="lg:hidden w-full object-cover object-center"
              src="https://res.cloudinary.com/doczyujqf/image/upload/v1713979157/Chico%20zossi/banner1_1_3_1_boqszu.png"
              alt=""
            />
            <div className="flex justify-start items-start space-x-2">
              <img className="w-6 mt-1" src={wave} alt="" />
              <p className="text-left text-lg font-lora-400 text-gray-700">
                En 1900, Baltazar Chico se radicó en Colalao del Valle y dió
                origen a la primera Bodega de Tucumán y una ilustre tradición
                vitivinícola familiar. Tras dos generaciones dedicadas a esta
                labor, Francisco B. Chico Zossi en el año 1980, marcado por el
                esfuerzo y la perseverancia, registra y pone en funcionamiento
                lo que fuera, otra vez y aún entonces, la primera bodega de
                Tucumán.
              </p>
            </div>
            <div className="flex justify-start items-start space-x-2">
              <img className="w-6 mt-1" src={wave} alt="" />
              <p className="text-left text-lg font-lora-400 text-gray-700">
                La tradición del trabajo del equipo familiar ha logrado en esta
                última década un progreso notable de la mano de su hijo
                Baltazar, formando la cuarta generación quien partiendo de
                modelos tradicionales introduce nueva tecnología en busca de la
                calidad y la innovación, creando así también la primera fábrica
                de espumantes.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[35%] hidden lg:flex justify-end items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src={botella}
              alt=""
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
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default History;
