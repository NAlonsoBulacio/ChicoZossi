import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bodega Chico Zossi",
  description: "Nuestra finca familiar guarda los viñedos más antiguos de Colalao del Valle. Somos la primera bodega de Tucumán.",
  keywords: "bodega, vino, viñedos, Tucumán, Colalao del Valle, Bodega Chico Zossi, vinos de altura",
  openGraph: {
    title: "Bodega Chico Zossi",
    description: "Nuestra finca familiar guarda los viñedos más antiguos de Colalao del Valle. Somos la primera bodega de Tucumán.",
    url: "https://www.chicozossi.com.ar",
    siteName: "Bodega Chico Zossi",
    images: [
      {
        url: "https://www.chicozossi.com.ar/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Bodega Chico Zossi",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  social: {
    instagram: "https://www.instagram.com/bodegachicozossi/",
    facebook: "https://www.facebook.com/ChicoZossi/?locale=es_LA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        
        <link rel="canonical" href={metadata.openGraph.url} />
        <link rel="me" href={metadata.social.instagram} />
        <link rel="me" href={metadata.social.facebook} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
