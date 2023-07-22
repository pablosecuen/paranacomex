"use client";
import { useEffect, useState } from "react";
import hamburger from "../../assets/hamburguerLogosvg/hamburger-svgrepo-com.svg";
import Image from "next/image";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import NavnarMenuDesktop from "../NavbarMenu/NavnarMenuDesktop";
import useScroll from "@component/app/customHook/useScroll";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const scrollY = useScroll(); // Usa el hook useScroll

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint para el menu mobile
    };

    // Verificamos el ancho de la ventana en el montaje inicial y cada vez que se redimensione
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiamos el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`h-full  w-screen flex items-center justify-between align-middle lg:pr-8 transition duration-1000 ${
          scrollY > 100 ? "bg-black" : "bg-transparent"
        }`}
      >
        {isMobile ? ( // Renderizar NavbarMenu solo en móvil
          <button onClick={toggleMenu}>
            <Image src={hamburger} alt="hamburger" className="h-12 w-12 mr-4 " />
          </button>
        ) : (
          // Renderizar lista de elementos <a> fuera de móvil
          <>
            <NavnarMenuDesktop />
          </>
        )}
      </div>
      {isMobile && <NavbarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
