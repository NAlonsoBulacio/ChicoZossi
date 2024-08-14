import {
  continuacion,
  espumante,
  primer,
  rosado,
  torrontes,
  torrontesDulce,
  torrontesTardio,
  rosadoTardio,
  malbec
} from "../assets/index";

const wines = [
  {
    id: 1,
    name: "Continuación - Gran Reserva",
    title: "Gran Reserva",
    type: "malbec",
    img:continuacion,
    img2: continuacion,
    lead: "ES PASADO, PRESENTE Y FUTURO...UN HOMENAJE A NUESTROS ANCESTROS Y LA REALIZACIÓN DE LOS SUEÑOS. ESPECIAL Y DIVINO. ES EL FRUTO DEL TERROIR DEL QUE VENIMOS",
    main_description:
      "¨ES PASADO, PRESENTE Y FUTURO... UN HOMENAJE A NUESTROS ANCESTROS Y LA REALIZACIÓN DE LOS SUEÑOS. ESPECIAL Y DIVINO. ES EL FRUTO DEL TERROIR DEL QUE VENIMOS¨",
    description: [
      "Nuestro Malbec Gran Reserva reposa en barricas nuevas de roble francés por 14 meses.",
      "Exhibe sabores complejos y una elegancia notable, la fusión perfecta entre la fruta madura y los sutiles matices tostados de la madera, que culminan en un final suave y persistente.",
    ],
    volume: "750ml",
    aclaration: "-Edición Limitada",
    variety: 1,
    limited_edition: "Edicion Limitada - Botella Numerada",
  },
  {
    id: 2,
    name: "Primer - Malbec Reserva",
    title: "Malbec Reserva",
    type: "malbec",
    img: primer,
    img2: primer,
    main_description: `"Primer" es el homenaje a nuestros antepasados, pioneros de la vitivinicultura en Tucuman. `,
    description: [
      "Bajo la práctica de agricultura orgánica continuamos con la tradición familiar, obteniendo este varietal de altura que expresa el espíritu de su incomparable origen. A la vista se presenta de color rubí intenso con reflejos que denotan su contacto con el roble. ",
      "Aroma de frutos rojos maduros donde exalta la ciruela con toque especiado de pimienta negra. En boca es estructurado de taninos maduros que refuerzan el carácter varietal.",
    ],
    volume: "750ml",
    variety: 2,
    limited_edition: "Edicion Limitada - Botella Numerada",
  },
  {
    id: 3,
    name: "Malbec",
    type: "malbec",
    img2: malbec,
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
    img: torrontes,
    img2: torrontes,
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
    img: torrontesTardio,
    img2: torrontesTardio,
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
    img: torrontesDulce,
    img2: torrontesDulce,
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
    img: rosado,
    img2: rosado,
    description: [` `],
    volume: "750ml",
    variety: 3,
  },
  {
    id: 8,
    name: "Torrontes Brut Nature",
    type: "espumante",
    img: espumante,
    img2: espumante,
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
    img: rosadoTardio,
    img2: rosadoTardio,
    description: [
      `Vino rosado elaborado a partir de dos cepas emblemas, Torrontés y Malbec, de sabor dulce otorgado de forma natural por su vendimia tardía.  
    `,
    ],
    volume: "500ml",
    variety: 3,
  },
];
export { wines };
