import React from "react";
import Header from "../../components/Header/Header";
import CarrouselProject from "../../components/CarrouselProject/CarrouselProject";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ContactAndLocation from "../../components/ContactAndLocation/ContactAndLocation";
import Footer from "../../components/Footer/Footer";
import ImgAndDescription from "../../components/ImgAndDescription/ImgAndDescription";
const Home = () => {
  return (
    <div>
      <Header />
      <CarrouselProject />
      <div className="px-2 lg:px-8 xl:px-20 py-12">
        <ProductSlider title={"Nuestros Vinos"} />
        <ImgAndDescription />
        <ContactAndLocation />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
