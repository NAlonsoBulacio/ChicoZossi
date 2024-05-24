import React from "react";
import { AiTwotonePhone, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { logo } from "../../assets";
const Footer = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center bg-[#47172d] py-12">
      <div className="w-full flex flex-wrap lg:flex-nowrap justify-center items-center px-4 lg:px-28 py-4 space-x-0 lg:space-x-14">
        <div className="w-full lg:w-1/3 hidden lg:flex flex-wrap justify-center items-center space-y-3">
          <div className="w-full ">
            <a href="/" className="text-gray-300 text-left ">
              {`Home >`}
            </a>
          </div>
          <div className="w-full ">
            <a href="/bodega" className="text-gray-300 text-left ">
              {`Bodega >`}
            </a>
          </div>
          <div className="w-full ">
            <a href="/historia" className="text-gray-300 text-left ">
              {`Historia >`}
            </a>
          </div>
          <div className="w-full ">
            <a href="/contacto" className="text-gray-300 text-left ">
              {`Contacto >`}
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-wrap justify-center items-center space-y-2">
          <img src={logo} alt="logo" className="w-1/2" />
          <div className="w-full flex justify-center items-center text-left text-xl text-gray-300">
            <h1>Nuestros Vinos</h1>
          </div>
          <div className="w-full flex flex-wrap justify-start items-center space-y-[4px]">
            <div className="w-full ">
              <a
                href="/vino/1"
                className="w-full text-left text-md text-gray-500 hover:text-gray-300  duration-200"
              >
                Continuación - Gran Reserva
              </a>
            </div>
            <div className="w-full ">
              <a
                href="/vinos/2"
                className="w-full text-left text-md text-gray-500 hover:text-gray-300  duration-200"
              >
                Primer - Malbec Reserva
              </a>
            </div>
            <div className="w-full ">
              <a
                href="/vinos/3"
                className="w-full text-left text-md text-gray-500 hover:text-gray-300  duration-200"
              >
                Malbec
              </a>
            </div>
            <div className="w-full ">
              <a
                href="/vino/4"
                className="w-full text-left text-md text-gray-500 hover:text-gray-300  duration-200"
              >
                Torrontés
              </a>
            </div>
            <div className="w-full ">
              <a
                href="/vino/5"
                className="w-full text-left text-md text-gray-500 hover:text-gray-300  duration-200"
              >
                Torrontés tardío
              </a>
            </div>
            <div className="w-full ">
              <a
                href="/vino/6"
                className="w-full text-left text-md text-gray-500 hover:text-gray-300  duration-200"
              >
                Torrontés Dulce Natural
              </a>
            </div>
            <div className="w-full ">
              <a
                href="/vino/9"
                className="w-full text-left text-md text-gray-500 hover:text-gray-300  duration-200"
              >
                Rosado Tardio
              </a>
            </div>
            <div className="w-full ">
              <a
                href="/vino/7"
                className="w-full text-left text-md text-gray-500 hover:text-gray-300  duration-200"
              >
                Rosado Dulce Natural
              </a>
            </div>
            <div className="w-full ">
              <a
                href="/vino/9"
                className="w-full text-left text-md text-gray-500 hover:text-gray-300  duration-200"
              >
                Torrontes Brut Nature
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center items-center space-x-4">
            <BiLogoLinkedin className=" text-white text-2xl" />
            <BiLogoFacebook className=" text-white text-2xl" />
            <AiOutlineInstagram className=" text-white text-2xl" />
          </div>
          <div className="w-full flex justify-center items-center">
            <h1 className="text-gray-300">
              {" "}
              ® Chico Zossi 2024, todos los derechos reservados.
          
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-wrap justify-center items-center space-y-2">
          <div className="w-full flex justify-center items-center text-left text-xl text-gray-300">
            <h1>Contacto</h1>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center text-left text-lg text-gray-500 space-y-[4px]">
            <div className="w-full">
              <a
                href="https://wa.me/+5493814780386"
                target="_blank"
                className=" flex justify-center items-start"
              >
                <FaWhatsapp className="w-8" style={{ marginTop: "0.3rem" }} />
                <h1>+54 9 381 4780386</h1>
              </a>
            </div>
            <div className="w-full">
              <a
                  href="mailto:infobodegachicozossi@gmail.com"
                target="_blank"
                className="flex justify-center items-start"
              >
                <IoMailOutline
                  className="w-8"
                  style={{ marginTop: "0.3rem" }}
                />
                <h1>info@chicozossi.com</h1>
              </a>
            </div>
            <p className="w-full text-center ">RN40 Km 4308, T4141</p>
            <p className="w-full text-center">Colalao. Tucumán</p>
            <p className="w-full text-center">Argentina</p>
          </div>
        </div>
      </div>
      <div className="text-gray-300 ">
      BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS 
      </div>
    </div>
  );
};

export default Footer;
