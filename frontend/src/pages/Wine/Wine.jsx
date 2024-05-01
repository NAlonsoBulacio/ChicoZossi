import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { wines } from "../../constants/index";
import BannerWine from "../../components/Banners/BannerWine";
import ContactUs from "../../components/ContactUs/ContactUs";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import { wave4, wave5 } from "../../assets";
const Wine = ({ match }) => {
  const [wine, setWine] = useState("");
  const wineId = parseInt(match.params.id);

  useEffect(() => {
    if (wines) {
      const foundWine = wines.find((wine) => wine.id === wineId);
      if (foundWine) {
        setWine(foundWine);
      }
    }
  }, [match.params.id]);
  console.log(wine);
  return (
    <div>
      <Header />
      <BannerWine />
      <div className="w-full flex justify-center items-center pt-8 pb-8 lg:pb-10 lg:pt-20">
        <img src={wave5} className="w-20 lg:w-24 " alt="" />
        <div className="text-2xl lg:text-3xl font-lato-400 mx-2 lg:mx-4 text-gray-600">
          Nuestros Vinos
        </div>
        <img src={wave4} className="w-20 lg:w-24 " alt="" />
      </div>
      <div className="pb-4 lg:pb-14 lg:px-8 xl:px-20 space-y-6 lg:space-y-14">
        {wine ? (
          <div className="px-2 lg:px-8 xl:px-20 flex flex-wrap justify-center">
            <div className="w-full flex flex-wrap ">
              <div className="w-full lg:w-[50%] space-y-4">
                <p className="text-left text-xl ">{wine.type}</p>
                <h1 className="text-[#47172d] text-left text-3xl lg:text-5xl font-lora-500 ">
                  {wine.name}
                </h1>
                <div className="flex lg:hidden w-full justify-center ">
                  <div className="w-[70%] border-b-[#47172d] border-b-[1px] border-l-[#47172d] border-l-[1px] rounded-full">
                    <img
                      className="w-full rounded-lg"
                      src={wine.img}
                      alt="wine"
                    />
                  </div>
                </div>
                <div>
                  {wine.main_description ? (
                    <div className="w-[80%] flex flex-wrap gap-y-6 justify-start ">
                      <p className="w-full text-gray-700 text-md font-lato-500 text-left py-2">
                        {wine.main_description}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {wine.description?.map((des) => (
                    <div className="w-[80%] flex flex-wrap gap-y-6 justify-start ">
                      <p className="w-full text-gray-500 text-md font-lato-300 text-left py-2">
                        {des}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-start space-y-1 text-[#47172d]">
                  <p className="font-bold">
                    Altura del viñedo:{" "}
                    <span className="font-normal">1800 MSNM</span>
                  </p>
                  <p className="font-bold">Cosecha manual </p>
                  {wine.limited_edition ? (
                    <p className="font-bold">{wine.limited_edition} </p>
                  ) : (
                    ""
                  )}
                  <p className="font-bold">
                    Finca <span>¨La Perseverancia¨</span> Colalao del Valle -
                    Tucumán
                  </p>
                  <p className="font-bold ">{wine.volume}</p>
                </div>
              </div>
              <div className="hidden lg:flex w-full lg:w-[50%] px-10  justify-start ">
                <div
                  className={`${
                    wine.img
                      ? "border-b-[#47172d] border-b-[1px] border-l-[#47172d] border-l-[1px]"
                      : ""
                  } w-[70%]  rounded-full`}
                >
                  <img
                    className="w-full rounded-lg"
                    src={wine.img ? wine.img : wine.img2}
                    alt="wine"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <ProductSlider title={"Otras Selecciones"} />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Wine;
