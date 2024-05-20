import React, { useState, useEffect } from "react";
import { logo, logo_negro, menu, logo_dorado, logo_purple } from "../../assets";
import "./Header.css";
import MenuPhone from "../MenuPhone/MenuPhone";
import { useLocation } from "react-router-dom";
import { wines } from "../../constants";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
const Header = () => {
  const [category, setCategory] = useState(false);
  const [categoryPrimer, setCategoryPrimer] = useState(false);
  const [categoryJovenes, setCategoryJovenes] = useState(false);
  const [categoryEsp, setCategoryEsp] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    console.log("Realizar búsqueda con la consulta:");
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
    setCurrentPage(currentPath);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

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
                <img
                  src={navbar ? logo_negro : logo}
                  alt="Logo"
                  style={{ height: "87px", weight: "87px" }}
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
              <img
                src={navbar ? logo_purple : logo}
                alt="Logo"
                style={{
                  height: navbar ? "100px" : "90px",
                  weight: navbar ? "100px" : "90px",
                }}
              />
            </a>
            <nav className=" space-x-4"></nav>
          </div>

          <div className="flex-grow"></div>

          <nav className="text-lg space-x-10 ">
            <a
              href="/"
              onClick={() => handleNavClick("/")}
              className={`${currentPage === "/" ? "active" : "a-h"} `}
            >
              Inicio
            </a>
            <a
              href="/bodega"
              onClick={() => handleNavClick("/bodega")}
              className={currentPage === "/bodega" ? "active" : "a-h"}
            >
              Viñedo
            </a>
            <a
              onClick={() => handleNavClick("/vino/2")}
              className={`${
                currentPage === `/vino` ? "active" : "a-h"
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
                        <li className="w-[200px] text-left hover:underline cursor-pointer ">
                          <a href={`/vino/${wine.id}`}>{wine.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full flex flex-wrap items-start">
                    <p className="font-lato-600"> Primer</p>
                    <ul className="flex flex-wrap justify-start items-center space-y-2 text-sm">
                      {primer?.map((wine) => (
                        <li className="w-[200px] text-left hover:underline cursor-pointer ">
                          <a href={`/vino/${wine.id}`}>{wine.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full flex flex-wrap items-start">
                    <p className="font-lato-600"> Espumantes</p>
                    <ul className="flex flex-wrap justify-start items-center space-y-2 text-sm">
                      {espumantes?.map((wine) => (
                        <li className="w-[200px] text-left hover:underline cursor-pointer ">
                          <a href={`/vino/${wine.id}`}>{wine.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full flex flex-wrap items-start">
                  <p className="font-lato-600"> Varietales Jovenes</p>
                  <ul className="flex flex-wrap justify-start items-center space-y-2 text-sm">
                    {varietalesJovenes?.map((wine) => (
                      <li className="w-[200px] text-left hover:underline cursor-pointer ">
                        <a href={`/vino/${wine.id}`}>{wine.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
            <a
              href="/historia"
              onClick={() => handleNavClick("/historia")}
              className={currentPage === "/historia" ? "active" : "a-h"}
            >
              Historia
            </a>
            <a
              href="/contacto"
              onClick={() => handleNavClick("/contacto")}
              className={currentPage === "/contacto" ? "active" : "a-h"}
            >
              Contacto
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
              <img className="w-28 mb-6" src={logo_dorado} alt="logoLight" />
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
                      <a href="/vino/1">Gran Reserva</a>
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
                      <a href="/vino/2">Malbec Reserva</a>
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
                      <a href="/vino/3">Malbec</a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/4">Torrontés</a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/5">Torrontés Tardío</a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/6">Torrontés Dulce Natural</a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/9">Rosado Tardío</a>
                    </li>
                    <li className="headerSedenavLi">
                      <a href="/vino/7">Rosado Dulce Natural</a>
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
                      <a href="/vino/8">Torrontes Brut Nature</a>
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
