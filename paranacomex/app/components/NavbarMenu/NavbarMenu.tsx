import Image from "next/image";
import { NavbarMenuProps } from "../../types/NavbarMenuProps";
import { log } from "console";

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className="hover:text-secondary  transition duration-1000 h-screen w-screen fixed top-0 left-0 bg-black/20"
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed top-12 right-0 w-[50%] h-screen bg-primary shadow-2xl  p-4 transition-transform duration-1000 ${
              isOpen ? "translate-x-0" : "translate-x-full text-slate-200"
            }`}
          >
            <ul className="flex flex-col">
              <li className="my-2 hover:bg-blue-700 hover:rounded-full focus:bg-blue-950 focus:rounded-full transition duration-500">
                <a href="#inicio">Home</a>
              </li>
              <li className="my-2 hover:bg-blue-700 hover:rounded-full focus:bg-blue-950 focus:rounded-full transition duration-500">
                <a href="#servicios">Nosotros</a>
              </li>
              <li className="my-2 hover:bg-blue-700 hover:rounded-full focus:bg-blue-950 focus:rounded-full transition duration-500">
                <a href="#servicios">Servicios</a>
              </li>
              <li className="my-2 hover:bg-blue-700 hover:rounded-full focus:bg-blue-950 focus:rounded-full transition duration-500">
                <a href="#servicios">Enlaces</a>
              </li>
              <li className="my-2 hover:text-secondary transition duration-500">
                <a href="#servicios">Contacto</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarMenu;
