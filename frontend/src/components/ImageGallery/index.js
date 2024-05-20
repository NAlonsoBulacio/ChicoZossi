

const galleryImages = [
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714585661/Chico%20zossi/Galeria%20de%20imagenes/vinoCopa_fwjrm3.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1713983212/Chico%20zossi/Galeria%20de%20imagenes/leozaragoza_rafitagallucci_chz_otros_0_1_nrcpo5.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714586196/Chico%20zossi/Galeria%20de%20imagenes/leozaragoza_rafitagallucci_chz_otros_5_2_obndcp.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714585884/Chico%20zossi/Galeria%20de%20imagenes/leozaragoza_rafitagallucci_chz_perros_4_1_p1agrm.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714587185/Chico%20zossi/Galeria%20de%20imagenes/leozaragoza_rafitagallucci_chz_perros_2_1_x91qon.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714585660/Chico%20zossi/Galeria%20de%20imagenes/nocturno_ipmna2.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714586541/Chico%20zossi/Galeria%20de%20imagenes/barriles_wgwqxo.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714586550/Chico%20zossi/Galeria%20de%20imagenes/botellas3_za5gxg.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714586543/Chico%20zossi/Galeria%20de%20imagenes/botella_hzznrn.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714586540/Chico%20zossi/Galeria%20de%20imagenes/botellas_mzrdyq.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714586538/Chico%20zossi/Galeria%20de%20imagenes/botellas2_jqkp6s.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714587264/Chico%20zossi/Galeria%20de%20imagenes/leozaragoza_rafitagallucci_chz_situacionales_7_1_yl9fgy.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714587262/Chico%20zossi/Galeria%20de%20imagenes/leozaragoza_rafitagallucci_chz_situacionales_10_imivri.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714587498/Chico%20zossi/Galeria%20de%20imagenes/leozaragoza_rafitagallucci_chz_situacionales_1_1_j7rpu4.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714587569/Chico%20zossi/Galeria%20de%20imagenes/IMG_7568_xwqc1v.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714587571/Chico%20zossi/Galeria%20de%20imagenes/IMG_7447_nrslof.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714587573/Chico%20zossi/Galeria%20de%20imagenes/IMG_7530_asjavx.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714587575/Chico%20zossi/Galeria%20de%20imagenes/IMG_7565_nbda0r.png",
];
const galeria_historia = [
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245087/Chico%20zossi/Galeria%20de%20imagenes/Historia/_DSC3926_lqxvgi.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245085/Chico%20zossi/Galeria%20de%20imagenes/Historia/WhatsApp_Image_2024-05-20_at_4.06.29_PM_qdrlzq.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245085/Chico%20zossi/Galeria%20de%20imagenes/Historia/historia_trpsme.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245085/Chico%20zossi/Galeria%20de%20imagenes/Historia/historia_2_1_nojudy.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245085/Chico%20zossi/Galeria%20de%20imagenes/Historia/historia_1_lt1yoh.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245085/Chico%20zossi/Galeria%20de%20imagenes/Historia/766d28ab-95d5-459b-8bf1-7347361a4be0_1_lnnom1.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245085/Chico%20zossi/Galeria%20de%20imagenes/Historia/PHOTO-2022-06-13-17-47-55_c7xz8y.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245085/Chico%20zossi/Galeria%20de%20imagenes/Historia/PHOTO-2022-11-30-15-59-42_b2xr9t.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245085/Chico%20zossi/Galeria%20de%20imagenes/Historia/historia_4_babgxg.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245084/Chico%20zossi/Galeria%20de%20imagenes/Historia/foto_1_tslr5i.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716245083/Chico%20zossi/Galeria%20de%20imagenes/Historia/488a5ec5-671a-45f6-8ada-a3b775bfaf1d_xqr4ah.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1714585884/Chico%20zossi/Galeria%20de%20imagenes/Historia/leozaragoza_rafitagallucci_chz_perros_4_1_p1agrm.png",
];


const galeria_viñedo = [
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716244887/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/leozaragoza_rafitagalucci_chz_astrofoto_1_1_1_nfvv0n.png",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716246780/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/IMG_7442_cw0joz_yyjtzz.webp",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716246775/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/IMG_7403_nsoejg_qbupj6.webp",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716246774/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/IMG_7447_1_dmorsb_bdezd2.webp",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716246774/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/IMG_7568_1_olaabc_xpxw3w.webp",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716244686/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/c6dbf953-3f7a-4fb0-a827-4a3a27c8db30_ctdb5j.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716246774/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/IMG_7530_1_nb3zov_rv5qol.webp",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716244685/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/0dc33769-235a-4d9a-bf71-d2070d9e22d7_vtttwe.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716244685/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/cf2daeea-4c2b-42dd-bff7-91b228eea354_k8qqvm.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716244685/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/aa7226ef-04fc-4c13-a71a-64c2ec5c3917_ivinqz.jpg",
  "https://res.cloudinary.com/doczyujqf/image/upload/v1716244684/Chico%20zossi/Galeria%20de%20imagenes/Vi%C3%B1edo/bec97118-3efd-4b8a-acec-b1d9f6a6800f_vajqjs.jpg",
]

export { galleryImages, galeria_historia, galeria_viñedo };
