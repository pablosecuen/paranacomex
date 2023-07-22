import React from "react";
import logo from "../../assets/Logo.svg";
import Image from "next/image";

function NavnarMenuDesktop() {
  return (
    <div>
      {" "}
      <ul className="flex w-screen justify-evenly gap-10 hover:text-secondary transition duration-500 text-slate-200">
        <li className="my-2 px-4 rounded-full hover:bg-blue-700 hover:rounded-full focus:bg-blue-950 focus:rounded-full hover:px-4  transition duration-500">
          <a href="#inicio">Home</a>
        </li>
        <li className="my-2 px-4  hover:bg-blue-900 hover:rounded-full focus:bg-blue-950 focus:rounded-full hover:px-4  transition duration-500">
          <a href="#servicios">Nosotros</a>
        </li>
        <li>
          <a href="http://www.paranacomex.com.ar/">
            {" "}
            <Image src={logo} alt="logo" className=" ml-4 sm:ml-10 pt-1" width={130} height={100} />
          </a>
        </li>
        <li className="my-2 px-4 rounded-full hover:bg-blue-900 hover:rounded-full focus:bg-blue-950 focus:rounded-full hover:px-4  transition duration-500">
          <a href="#servicios">Servicios</a>
        </li>

        <li className="my-2 px-4 rounded-full hover:bg-blue-900 hover:rounded-full focus:bg-blue-950 focus:rounded-full hover:px-4 transition duration-500">
          <a href="#servicios">Contacto</a>
        </li>
      </ul>
    </div>
  );
}

export default NavnarMenuDesktop;
