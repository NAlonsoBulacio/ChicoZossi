import React, { useState, useEffect } from "react";
import { logo, logo_negro, menu, logo_dorado, logo_purple } from "../../assets";
import "./Header.css";
import MenuPhone from "../MenuPhone/MenuPhone";
import { useLocation } from "react-router-dom";
import { wines } from "../../constants";
const Header = () => {
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
        <div
          className="mx-auto flex items-center justify-between lg:hidden "
          style={{ maxWidth: "1150px", height: "70px" }}
        >
          <div className="logo flex items-center space-x-4">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "87px", weight: "87px" }}
              />
            </a>
            <nav className=" space-x-4"></nav>
          </div>
          <button className="hamburguer" onClick={handleMenuToggle}>
            <img src={menu} alt="MI-MENU" width={40} height={40} />
          </button>
        </div>
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
              Bodega
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
      <div>{menuOpen ? <MenuPhone /> : ""}</div>
    </div>
  );
};

export default Header;
