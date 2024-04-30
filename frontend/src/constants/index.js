const wines = [
  {
    id: 1,
    name: "Continuación - Gran Reserva",
    title: "Gran Reserva",
    type: "malbec",
    img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714329192/Chico%20zossi/vinos/continuacion_ypqrnr.png",
    img2: "https://res.cloudinary.com/doczyujqf/image/upload/v1713967338/Chico%20zossi/vinos/rosado-tardio.png",
    lead: "ES PASADO, PRESENTE Y FUTURO...UN HOMENAJE A NUESTROS ANCESTROS Y LA REALIZACIÓN DE LOS SUEÑOS. ESPECIAL Y DIVINO. ES EL FRUTO DEL TERROIR DEL QUE VENIMOS",
    description: [
      "Nuestro Malbec Gran Reserva reposa en barricas nuevas de roble francés por 14 meses.",
      "Exhibe sabores complejos y una elegancia notable, la fusión perfecta entre la fruta madura y los sutiles matices tostados de la madera, que culminan en un final suave y persistente.",
    ],
    volume: "750ml",
    aclaration: "-Edición Limitada",
    variety: 1,
  },
  {
    id: 2,
    name: "Primer - Malbec Reserva",
    title: "Malbec Reserva",
    type: "malbec",
    img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714328838/Chico%20zossi/vinos/primer_emwcho.png",
    img2: "https://res.cloudinary.com/doczyujqf/image/upload/v1713971290/Chico%20zossi/vinos/rosado-tardio2_1_mxpg0j.png",
    description: [
      `"Primer" es el homenaje a nuestros antepasados, pioneros de la vitivinicultura en Tucuman. `,
      "Bajo la práctica de agricultura orgánica continuamos con la tradición familiar, obteniendo este varietal de altura que expresa el espíritu de su incomparable origen. A la vista se presenta de color rubí intenso con reflejos que denotan su contacto con el roble. ",
      "Aroma de frutos rojos maduros donde exalta la ciruela con toque especiado de pimienta negra. En boca es estructurado de taninos maduros que refuerzan el carácter varietal.",
    ],
    volume: "750ml",
    variety: 2,
  },
  {
    id: 3,
    name: "Malbec",
    type: "malbec",
    img2: "https://res.cloudinary.com/doczyujqf/image/upload/v1714330988/Chico%20zossi/vinos/cz_leozaragoza_rafitagallucci_00_1_frcpmq.png",
    description: [
      `Un Malbec clásico de cepa joven, se distingue por su intenso color rubí con destellos granates, así como por sus fragantes notas florales y de frutos rojos.  `,
      "En boca, se muestra fiel a su anticipada potencia aromática con una persistencia prolongada, revelando un sabor intenso y complejo que armoniza perfectamente con sus aromas.",
      "Esta fusión de sensaciones encapsula lo mejor de la uva Malbec, enriquecida por la fuerza del terroir de Calchaquí.",
    ],
    volume: "750ml",
    variety: 3,
  },
  {
    id: 4,
    name: "Torrontés",
    type: "torrontes",
    img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714329070/Chico%20zossi/vinos/torrontes_dxlcba.png",
    img2: "https://res.cloudinary.com/doczyujqf/image/upload/v1713971290/Chico%20zossi/vinos/rosado-tardio2_1_mxpg0j.png",
    description: [
      `Un varietal joven caracterizado por combinar la fuerza de su terruño con las cualidades típicas de la uva torrontés: posee un color amarillo con reflejos verdosos, con una intensa carga aromática a rosas y fruta , y un sabor fresco y cítrico; marcas registradas de una región privilegiada que se manifiesta dándole a cada variedad una personalidad inigualable.`,
    ],
    volume: "750ml",
    variety: 3,

  },
  {
    id: 5,
    name: "Torrontés Tardío",
    type: "torrontes",
    img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714328416/Chico%20zossi/vinos/torrontesTardio_zktkpv.png",
    img2: "https://res.cloudinary.com/doczyujqf/image/upload/v1713971290/Chico%20zossi/vinos/rosado-tardio2_1_mxpg0j.png",
    description: [
      `Este vino se destaca por su color amarillo limpio, aroma a miel y flores, sabor fresco y untuoso; cualidades que se equilibran gracias a su excelente terrior y su cuidada elaboración. `,
    ],
    volume: "500ml",
    variety: 3,

  },
  {
    id: 6,
    name: "Torrontés Dulce Natural",
    type: "torrontes",
    img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714328416/Chico%20zossi/vinos/torrontesDulce_u1k5mu.png",
    img2: "https://res.cloudinary.com/doczyujqf/image/upload/v1713971290/Chico%20zossi/vinos/rosado-tardio2_1_mxpg0j.png",
    description: [
      `Este vino se destaca por su color amarillo limpio, aroma a miel y flores, sabor fresco y untuoso; cualidades que se equilibran gracias a su excelente terrior y su cuidada elaboración. `,
    ],
    volume: "750ml",
    variety: 3,

  },
  {
    id: 7,
    name: "Rosado Dulce Natural",
    type: "rosado",
    img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714328839/Chico%20zossi/vinos/rosado_ufwltz.png",
    img2: "https://res.cloudinary.com/doczyujqf/image/upload/v1713971290/Chico%20zossi/vinos/rosado-tardio2_1_mxpg0j.png",
    description: [` `],
    volume: "750ml",
    variety: 3,

  },
  {
    id: 8,
    name: "Torrontes Brut Nature",
    type: "espumante",
    img: "https://res.cloudinary.com/doczyujqf/image/upload/v1714328416/Chico%20zossi/vinos/epumante_vaytox.png",
    img2: "https://res.cloudinary.com/doczyujqf/image/upload/v1713971290/Chico%20zossi/vinos/rosado-tardio2_1_mxpg0j.png",
    description: [
      `Primer espumante elaborado en Tucuman, con uvas de nuestra propia finca ¨La Perseverancia¨ - Brut Nature 
    `,
    ],
    volume: "750ml",
    variety: 4,

  },
  {
    id: 9,
    name: "Rosado Tardío",
    type: "rosado",
    img: "https://res.cloudinary.com/doczyujqf/image/upload/v1713987112/Chico%20zossi/vinos/rosado-tardio-removebg-preview_zxeicm.png",
    img2: "https://res.cloudinary.com/doczyujqf/image/upload/v1713971290/Chico%20zossi/vinos/rosado-tardio2_1_mxpg0j.png",
    description: [
      `Vino rosado elaborado a partir de dos cepas emblemas, Torrontés y Malbec, de sabor dulce otorgado de forma natural por su vendimia tardía.  
    `,
    ],
    volume: "500ml",
    variety: 3,

  },
];
export { wines };
