import React from "react";
import { imageDescription, description, paisaje_cartel } from "../../assets";

const ImgAndDescription = () => {
  return (
    <div className="relative w-full h-auto my-20 overflow-hidden">
      <img
        className="hidden lg:block w-full h-full object-cover"
        src={imageDescription}
        alt=""
      />
      <div className="hidden lg:flex w-[50%] absolute justify-center items-center right-0 top-[23%] lg:px-14 xl:px-24">
        <p className="text-center text-lg xl:text-xl font-lora-400">
          Somos una bodega familiar pionera en Tucumán, especializada en vinos
          de altura que destacan el terroir de las tierras tucumanas. Fundada
          por Baltazar Chico en Colalao del Valle, nuestra misión es elaborar
          vinos y espumantes que capturen la esencia única del Valle Calchaquí,
          caracterizado por su altitud y clima distintivo. Bajo la dirección de
          Baltazar Chico Zossi, la cuarta generación de nuestra familia,
          continuamos esta tradición con pasión y dedicación.
        </p>
      </div>
      <div
        className="flex lg:hidden justify-center items-center px-2 py-12"
        style={{
          backgroundImage: `url(${description})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-xl font-lora-500">
          {" "}
          Somos una bodega familiar pionera en Tucumán, especializada en vinos
          de altura que destacan el terroir de las tierras tucumanas. Fundada
          por Baltazar Chico en Colalao del Valle, nuestra misión es elaborar
          vinos y espumantes que capturen la esencia única del Valle Calchaquí,
          caracterizado por su altitud y clima distintivo. Bajo la dirección de
          Baltazar Chico Zossi, la cuarta generación de nuestra familia,
          continuamos esta tradición con pasión y dedicación.
        </p>
      </div>
      <div className="flex lg:hidden">
        <img className="object-contain w-full" src={paisaje_cartel} alt="" />
      </div>
    </div>
  );
};

export default ImgAndDescription;
