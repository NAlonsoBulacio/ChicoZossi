"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logo_negro, logo_dorado, logo_purple } from "../../assets";

import { wines } from "../../constants";
const Header = () => {
  const [category, setCategory] = useState(false);
  const [categoryPrimer, setCategoryPrimer] = useState(false);
  const [categoryJovenes, setCategoryJovenes] = useState(false);
  const [categoryEsp, setCategoryEsp] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname(); // Usar usePathname para obtener la ruta actual
  const router = useRouter(); // Usar useRouter de next/navigation para la navegación

  const handleNavClick = (page) => {
    router.push(page); // Cambia la ruta utilizando router.push()
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleWinesHover = () => {
    setShowDropdown(!showDropdown);
  };

  const continuacion = wines.filter((wine) => wine.variety === 1);
  const primer = wines.filter((wine) => wine.variety === 2);
  const varietalesJovenes = wines.filter((wine) => wine.variety === 3);
  const espumantes = wines.filter((wine) => wine.variety === 4);

  return (
    <div>
      <header
        className={
          navbar
            ? "header-l header-bg text-gray-600 p-4 z-20 font-lato-300"
            : "header transparent text-gray-300 p-4 z-20 font-lato-300"
        }
        style={{ height: navbar ? "110px" : "125px" }}
      >
        {!menuOpen ? (
          <div
            className="mx-auto flex items-center justify-between lg:hidden py-10"
            style={{ maxWidth: "1150px", height: "70px" }}
          >
            <div className="logo flex items-center space-x-4">
              <a href="/">
                <Image
                  src={navbar ? logo_negro : logo}
                  alt="Logo"
                  className="w-[87px]"
                />
              </a>
              <nav className=" space-x-4"></nav>
            </div>

            <HiMenuAlt2
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-4xl inline-block md:hidden cursor-pointer w-10 h-10 absolute top-8 right-10"
            />
          </div>
        ) : (
          ""
        )}
        <div
          className="mx-auto flex items-center justify-between hidden lg:flex font-lato-400"
          style={{ maxWidth: "1150px", height: navbar ? "75px" : "97px" }}
        >
          <div className="logo flex items-center space-x-4 font-sedal-300">
            <a href="/">
              <Image
                src={navbar ? logo_purple : logo}
                alt="Logo"
                className="w-[110px]"
              />
            </a>
            <nav className=" space-x-4"></nav>
          </div>

          <div className="flex-grow"></div>

          <nav className="text-lg space-x-10 ">
            <a
              href="/"
              onClick={() => handleNavClick("/")}
              className={`${pathname === "/" ? "active" : "a-h"} `}
            >
              Inicio
            </a>
            <a
              href="/bodega"
              onClick={() => handleNavClick("/bodega")}
              className={pathname === "/bodega" ? "active" : "a-h"}
            >
              Viñedo
            </a>
            <a
              onClick={() => handleNavClick("/vino/2")}
              className={`${
                pathname === `/vino` ? "active" : "a-h"
              } relative cursor-pointer`}
              onMouseEnter={handleWinesHover}
              onMouseLeave={handleWinesHover}
            >
              Vinos
              <div
                className={` ${
                  showDropdown ? "" : "hidden"
                } absolute flex  w-auto h-auto top-[23px] left-[-220px] text-gray-700 bg-gray-100 p-3 pb-2 rounded-md`}
              >
                <div className="w-full flex flex-wrap items-start">
                  <div className="flex flex-wrap justify-start items-start">
                    <p className="font-lato-600">Continuación</p>

                    <ul className="flex flex-wrap justify-start items-center space-y-2 text-sm">
                      {continuacion?.map((wine) => (
                        <li
                          key={wine.id}
                          className="w-[200px] text-left hover:underline cursor-pointer "
                        >
                          <a href={`/vino/${wine.slug}`}>{wine.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full flex flex-wrap items-start">
                    <p className="font-lato-600"> Primer</p>
                    <ul className="flex flex-wrap justify-start items-center space-y-2 text-sm">
                      {primer?.map((wine) => (
                        <li
                          key={wine.id}
                          className="w-[200px] text-left hover:underline cursor-pointer "
                        >
                          <a href={`/vino/${wine.slug}`}>{wine.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full flex flex-wrap items-start">
                    <p className="font-lato-600"> Espumantes</p>
                    <ul className="flex flex-wrap justify-start items-center space-y-2 text-sm">
                      {espumantes?.map((wine) => (
                        <li
                          key={wine.id}
                          className="w-[200px] text-left hover:underline cursor-pointer "
                        >
                          <a href={`/vino/${wine.slug}`}>{wine.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full flex flex-wrap items-start">
                  <p className="font-lato-600"> Varietales Jovenes</p>
                  <ul className="flex flex-wrap justify-start items-center space-y-2 text-sm">
                    {varietalesJovenes?.map((wine) => (
                      <li
                        key={wine.id}
                        className="w-[200px] text-left hover:underline cursor-pointer "
                      >
                        <a href={`/vino/${wine.slug}`}>{wine.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
            <a
              href="/historia"
              onClick={() => handleNavClick("/historia")}
              className={pathname === "/historia" ? "active" : "a-h"}
            >
              Historia
            </a>
            <a
              href="/contacto"
              onClick={() => handleNavClick("/contacto")}
              className={pathname === "/contacto" ? "active" : "a-h"}
            >
              Contacto
            </a>
            <a
              href="/galeria"
              onClick={() => handleNavClick("/galeria")}
              className={pathname === "/galeria" ? "active" : "a-h"}
            >
              Galeria de fotos
            </a>
          </nav>
          {/* <div className="flex items-center ml-6">
            <button
              onClick={handleSearch}
              className=" text-white px-4 py-1 rounded-r"
            >
              <FaSearch />
            </button>
          </div> */}
        </div>
      </header>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[80%] bg-[#47172d] h-auto relative"
          >
            <div className="w-full h-full bg-primeColor py-3 px-6">
              <Image className="w-28 mb-6" src={logo_dorado} alt="logoLight" />
              <ul className="text-gray-200 flex flex-col gap-2 text-left">
                <li className="font-normal hover:font-bold items-center text-2xl text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  <a href="/">Inicio</a>
                </li>
                <li className="font-normal hover:font-bold items-center text-2xl text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  <a href="/Bodega">Viñedo</a>
                </li>
                <li className="font-normal hover:font-bold items-center text-2xl text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  Nuestros Vinos:
                </li>
              </ul>
              <div className="my-2">
                <h1
                  onClick={() => setCategory(!category)}
                  className="flex justify-between font-lato-300 text-xl cursor-pointer items-center font-titleFont mb-2"
                >
                  Continuación
                  <span className="text-lg">{category ? "-" : "+"}</span>
                </h1>
                {category ? (
                  <motion.ul
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`text-lg flex flex-col gap-1 text-left`}
                  >
                    <li className="headerSedenavLi">
                      <a href="/vino/continuacion-gran-reserva">Gran Reserva</a>
                    </li>
                  </motion.ul>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-4">
                <h1
                  onClick={() => setCategoryPrimer(!categoryPrimer)}
                  className="flex justify-between font-lato-300 text-xl cursor-pointer items-center font-titleFont mb-2"
                >
                  Primer
                  <span className="text-xl">{categoryPrimer ? "-" : "+"}</span>
                </h1>
                {categoryPrimer && (
                  <motion.ul
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg flex flex-col gap-1 text-left"
                  >
                    <li className="headerSedenavLi">
                      <a href="/vino/primer-malbec-reserva">Malbec Reserva</a>
                    </li>
                  </motion.ul>
                )}
              </div>
              <div className="mt-4">
                <h1
                  onClick={() => setCategoryJovenes(!categoryJovenes)}
                  className="flex justify-between text-xl cursor-pointer items-center font-titleFont mb-2"
                >
                  Varietales Jovenes
                  <span className="text-lg">{categoryJovenes ? "-" : "+"}</span>
                </h1>
                {categoryJovenes && (
                  <motion.ul
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg flex flex-col gap-1 text-left"
                  >
                    <li className="headerSedenavLi">
                      <a href="/vino/malbec">Malbec</a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/torrontes">Torrontés</a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/torrontes-tardio">Torrontés Tardío</a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/torrontes-dulce-natural">
                        Torrontés Dulce Natural
                      </a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/rosado-tardio">Rosado Tardío</a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/rosado-dulce-natural">
                        Rosado Dulce Natural
                      </a>
                    </li>
                  </motion.ul>
                )}
              </div>
              <div className="mt-4">
                <h1
                  onClick={() => setCategoryEsp(!categoryEsp)}
                  className="flex justify-between font-lato-300 text-xl cursor-pointer items-center font-titleFont mb-2"
                >
                  Espumantes
                  <span className="text-lg">{categoryEsp ? "-" : "+"}</span>
                </h1>
                {categoryEsp && (
                  <motion.ul
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm flex flex-col gap-1 text-left"
                  >
                    <li className="headerSedenavLi">
                      <a href="/vino/torrontes-brut-nature">
                        Torrontes Brut Nature
                      </a>
                    </li>
                  </motion.ul>
                )}
              </div>

              <ul className="text-gray-200 flex flex-col gap-2 text-left my-2">
                <li className="font-normal hover:font-bold items-center text-2xl text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  <a href="/historia">Historia</a>
                </li>
                <li className="font-normal hover:font-bold items-center text-2xl text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  <a href="/contacto">Contacto</a>
                </li>
              </ul>
            </div>
            <span
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 border-[1px] border-gray-300 absolute top-6 right-6 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
            >
              <MdClose />
            </span>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Header;
