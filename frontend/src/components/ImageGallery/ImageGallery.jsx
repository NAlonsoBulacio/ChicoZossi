import React, { useState } from "react";
import Slider from "react-slick";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { galleryImages } from "./index";
import { wines } from "../../constants";

const ImageGallery = ({gallery}) => {
  const [fullscreen, setFullscreen] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: fullscreen ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  //   const handleFullScreen = () => {
  //     setFullscreen(!fullscreen);
  //   };

  return (
    <div className="px-10 lg:px-20 relative">
      {fullscreen && (
        <div className="absolute w-[100vh] h-[100vh] inset-0 bg-[#61616138] opacity-75 z-10"></div>
      )}
      <p className="text-3xl py-6 font-lora-500">Galeria de Imagenes
      </p>
      <div className="">
        <Slider {...settings} className="">
          {gallery?.map((img, index) => (
            <div key={index} className="px-2 overflow-hidden">
              <div
                className={`rounded-md w-max-screen h-max-screen flex flex-wrap justify-center items-start overflow-hidden relative`}
              >
                <img
                  src={img}
                  alt="img_before"
                  className={`rounded-md hover:scale-110 duration-300 cursor-pointer z-20 ${
                    fullscreen ? " w-[30%] h-[20%]" : ""
                  }`}
                  //   onClick={() => handleFullScreen()}
                />

                {fullscreen && (
                  <button
                    className="absolute top-4 right-4 text-white z-20"
                    // onClick={() => handleFullScreen()}
                  >
                    X
                  </button>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageGallery;
