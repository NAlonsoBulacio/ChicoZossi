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
      <section>
        <CarrouselProject />
      </section>
      <section className="px-2 lg:px-8 xl:px-20 space-y-10 pt-0 lg:py-20">
        <article>
          <ImgAndDescription />
        </article>
        <article>
          <ProductSlider title={"Nuestros Vinos"} />
        </article>
        <article>
          <ContactAndLocation />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
