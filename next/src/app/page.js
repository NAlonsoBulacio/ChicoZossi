import React from "react";
import Header from "@/components/Header/Header";
import CarrouselProject from "@/components/CarrouselProject/CarrouselProject";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import ContactAndLocation from "@/components/ContactAndLocation/ContactAndLocation";
import Footer from "@/components/Footer/Footer";
import ImgAndDescription from "@/components/ImgAndDescription/ImgAndDescription";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Bodega Chico Zossi</title>
        <meta
          name="description"
          content="Descubre la primera bodega de Tucumán y nuestros vinos excepcionales."
        />
        <meta
          name="keywords"
          content="bodega, vino, viñedos, Tucumán, Colalao del Valle, Bodega Chico Zossi, vinos de altura"
        />
        <meta property="og:title" content="Bodega Chico Zossi" />
        <meta
          property="og:description"
          content="Descubre la primera bodega de Tucumán y nuestros vinos excepcionales."
        />
        <meta property="og:url" content="https://www.chicozossi.com.ar" />
        <meta
          property="og:image"
          content="https://www.chicozossi.com.ar/images/og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.chicozossi.com.ar" />
        <link
          rel="me"
          href="https://www.instagram.com/bodegachicozossi/"
          type="text/html"
        />
        <link
          rel="me"
          href="https://www.facebook.com/ChicoZossi/?locale=es_LA"
          type="text/html"
        />
      </Head>
      <Header />
      <CarrouselProject />
      <div className="px-2 lg:px-8 xl:px-20 space-y-10 pt-0 lg:py-20">
        <ImgAndDescription />
        <ProductSlider title={"Nuestros Vinos"} />
        <ContactAndLocation />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
