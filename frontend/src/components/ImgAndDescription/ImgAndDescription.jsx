import React from "react";
import { imageDescription2, description, paisaje_cartel } from "../../assets";

const ImgAndDescription = () => {
  return (
    <div className="relative w-full h-auto  overflow-hidden">
      <img
        className="hidden lg:block w-full h-full object-cover"
        src={imageDescription2}
        alt="entrada-chico-zossi"
      />
      <div className="hidden lg:flex flex-col w-[50%] absolute justify-center items-center right-0 top-[13%] lg:px-14 xl:px-24 space-y-2">
        <p className="text-center text-xl  font-lora-600">
          Bienvenidos a Bodega Chico Zossi
        </p>
        <p className="text-center text-md  font-lora-400">
          Bodega Chico Zossi se erige como un legado familiar de excelencia
          vitivinícola. Fundada en Colalao del Valle, nuestra bodega se dedica a
          la producción de vinos de altura que celebran la riqueza del terroir
          del Valle Calchaquí.
        </p>
        <p className="text-center text-md  font-lora-400">
          Nuestra historia comienza con Baltazar Chico, un visionario que vio el
          potencial de estas tierras únicas. Hoy, bajo la dirección de Baltazar
          Chico Zossi, cuarta generación de la familia, continuamos su legado
          con una pasión profunda por la viticultura.
        </p>
        <p className="text-center text-md  font-lora-400">
          Cada botella de vino que elaboramos es un homenaje a nuestros
          antepasados y entorno natural, caracterizado por altitudes elevadas y
          un clima singular. Estos elementos, combinados con la experiencia de
          generaciones y la integración de innovaciones modernas, nos permiten
          crear vinos con una identidad auténtica de aromas y sabores
          inconfundibles
        </p>
      </div>
      <div
        className="flex flex-col space-y-2 lg:hidden justify-center items-center px-2 py-8 "
        style={{
          backgroundImage: `url(${description})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-center text-xl  font-lora-600">
          Bienvenidos a Bodega Chico Zossi
        </p>
        <p className="text-center text-md  font-lora-400">
          Bodega Chico Zossi se erige como un legado familiar de excelencia
          vitivinícola. Fundada en Colalao del Valle, nuestra bodega se dedica a
          la producción de vinos de altura que celebran la riqueza del terroir
          del Valle Calchaquí.
        </p>
        <p className="text-center text-md  font-lora-400">
          Nuestra historia comienza con Baltazar Chico, un visionario que vio el
          potencial de estas tierras únicas. Hoy, bajo la dirección de Baltazar
          Chico Zossi, cuarta generación de la familia, continuamos su legado
          con una pasión profunda por la viticultura.
        </p>
        <p className="text-center text-md  font-lora-400">
          Cada botella de vino que elaboramos es un homenaje a nuestros
          antepasados y entorno natural, caracterizado por altitudes elevadas y
          un clima singular. Estos elementos, combinados con la experiencia de
          generaciones y la integración de innovaciones modernas, nos permiten
          crear vinos con una identidad auténtica de aromas y sabores
          inconfundibles
        </p>
      </div>
      <div className="flex lg:hidden">
        <img className="object-contain w-full" src={paisaje_cartel} alt="cartel-paisaje" />
      </div>
    </div>
  );
};

export default ImgAndDescription;
