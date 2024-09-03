import React from "react";
import Header from "@/components/Header/Header";
import CarrouselProject from "@/components/CarrouselProject/CarrouselProject";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import ContactAndLocation from "@/components/ContactAndLocation/ContactAndLocation";
import Footer from "@/components/Footer/Footer";
import ImgAndDescription from "@/components/ImgAndDescription/ImgAndDescription";
import Head from "next/head";

export const metadata = {
  title: "Bodega Chico Zossi",
  description: "Descubre la primera bodega de Tucumán y nuestros vinos excepcionales.",
  keywords: "bodega, vino, viñedos, Tucumán, Colalao del Valle, Bodega Chico Zossi, vinos de altura, chico zossi, espumante, primer, malbec, zossi, chico",
  openGraph: {
    title: "Bodega Chico Zossi",
    description: "Descubre la primera bodega de Tucumán y nuestros vinos excepcionales.",
    url: "https://www.chicozossi.com.ar",
    images: [
      {
        url: "https://www.chicozossi.com.ar/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Bodega Chico Zossi",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metadata.openGraph.url} />
        <link rel="me" href="https://www.instagram.com/bodegachicozossi/" type="text/html" />
        <link rel="me" href="https://www.facebook.com/ChicoZossi/?locale=es_LA" type="text/html" />
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
}
