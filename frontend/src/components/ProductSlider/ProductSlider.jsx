import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wines } from "../../constants";
import { wave4 } from "../../assets";
const ProductSlider = ({ title }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <div className="gap-y-10">
      <div className="w-full flex flex-wrap justify-center items-center gap-2">
        <div className="w-full flex flex-wrap justify-start items-center my-6 px-">
          {/* <div className="flex-1 border-t border-[#47172d] border-[1px]"></div> */}
          <div className="text-left text-3xl font-lora-500 mx-8 text-gray-800">
            {title}
          </div>
          <img src={wave4} className="w-24 " alt="" />
          {/* <div className="w-full flex-1 border-t border-[#47172d] border-[1px]"></div> */}
        </div>
      </div>
      <div className="">
        <Slider {...settings} className="">
          {wines?.map((product, index) => (
            <div  key={index} className="px-2 overflow-hidden">
              <div className="w-auto flex flex-wrap justify-center items-start overflow-hidden">
                <a className="rounded-3xl overflow-hidden" href={`/vino/${product.id}`}>
                <img
                  src={product.img ? product.img : product.img2}
                  alt="img_before"
                  className=" hover:scale-110 duration-300"
                />
                </a>
                <a  href={`/vino/${product.id}`} className="w-full">
                  <p
                    className="font-lato-500 text-lg hover:scale-110 duration-300"
                    dangerouslySetInnerHTML={{ __html: product.name }}
                  />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
