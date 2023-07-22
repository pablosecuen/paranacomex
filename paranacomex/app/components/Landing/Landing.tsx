"use client";
import React from "react";
import map from "./assets/worldmap/world.png";
import { useEffect, useState } from "react";
import Image from "next/image";
function Landing() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const paragraphs = ["Comercio exterior", "Despachante de aduana", "Logística"];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 3000); // Cambia el párrafo cada 3 segundos (3000 ms)

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-1/2 h-1/2 flex flex-col justify-center items-start align-middle pt-96">
      <h1 className="text-6xl font-bold text-start text-white">
        <span>Parana</span>
        <span className="text-slate-300">Comex</span>
      </h1>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`${
            index === visibleIndex ? "opacity-100" : "opacity-0"
          }  text-2xl font-thin text-white transition-opacity duration-500 ease-in-out ${
            index === visibleIndex ? "delay-1000" : "delay-2400"
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default Landing;
