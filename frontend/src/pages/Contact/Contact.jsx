import React from "react";
import Header from "../../components/Header/Header";
import DescriptionContact from "../../components/DescriptionContact/DescriptionContact";
import BannerContact from "../../components/Banners/BannerContact";
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
  return (
    <div>
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
