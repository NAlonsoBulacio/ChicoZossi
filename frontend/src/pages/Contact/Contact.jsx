import React from "react";
import Header from "../../components/Header/Header";
import DescriptionContact from "../../components/DescriptionContact/DescriptionContact";
import BannerContact from "../../components/Banners/BannerContact";
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contacto</title>
        <meta
          name="description"
          content="Descubre la primera bodega de Tucumán y nuestros vinos excepcionales."
        />
      </Helmet>
      <Header />
      <BannerContact />
      <div className="px-2 lg:px-10 xl:px-20">
        <DescriptionContact />
      </div>
      <GoogleMapEmbed />
      <Footer />
    </div>
  );
};

export default Contact;
