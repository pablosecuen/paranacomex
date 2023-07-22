import React from "react";

function Us() {
  return (
    <div className=" text-white h-screen flex justify-center items-center align-middle">
      <div className="h-1/2 w-1/2 flex flex-col gap-10">
        <h2>Quienes Somos</h2>
        <article>
          En el año 2012, Fernando Pfleiderer y Eduardo Rizzuto deciden asociarse para crear Parana
          Comex, una empresa joven, innovadora y con gran competitividad en el mercado del Comercio
          Exterior, la cual se encuentra estratégicamente ubicada en la ciudad de Rosario. En sus
          inicios la empresa estaba conformada por los socios, los cuales cuentan con más de 15 años
          de experiencia en el rubro y con el tiempo la estructura fue ampliándose. Actualmente está
          integrada por un grupo de trabajo altamente capacitado.
        </article>
        <div className="flex justify-between align-middle items-center pt-20">
          <article className="w-64 h-80 border-2 flex flex-col justify-between align-middle items-center p-4 py-8">
            <h3 className="text-xl">Nuestra Misión</h3>
            <span className="h-3/5   text-sm">
              Nuestro objetivo es brindar un servicio eficiente, personalizado, confiable.
              Consideramos que la clave de los grandes resultados es la sumatoria y coordinación de
              esfuerzos para lograr un mismo objetivo.
            </span>
          </article>
          <article className="w-64 h-80 border-2 flex flex-col justify-between align-middle items-center p-4 py-8">
            <h3 className="text-xl">Nuestra Visión</h3>
            <span className="h-3/5  text-sm">
              Afianzar las relaciones con nuestros clientes proporcionándoles un servicio de calidad
              y superando sus expectativas. Lograr posicionarnos como una de las primeras opciones
              cuando se piense en comercio exterior.
            </span>
          </article>
          <article className="w-64 h-80 border-2 flex flex-col justify-between align-middle items-center p-4 py-8">
            <h3 className="text-xl">Nuestros Valores</h3>
            <span className="h-3/5  text-sm">
              <ul className="flex flex-col gap-4 text-sm">
                <li>Responsabilidad</li>
                <li>Trabajo en equipo</li>
                <li>Honestidad y transparencia</li>
                <li>Compromiso</li>{" "}
              </ul>
            </span>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Us;
