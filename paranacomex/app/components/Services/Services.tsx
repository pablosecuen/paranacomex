import React from "react";

function Services() {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex flex-col   h-full border w-1/2">
        <h3 className="">Servicios que ofrecemos</h3>
        <span>
          Brindamos servicios relacionados al Comercio Internacional, ya sea en el área operativa
          como administrativa. Tenemos amplia experiencia en:
        </span>
        <ul>
          <li>Operaciones en Depósitos Fiscales, Plantas y Terminales Portuarias.</li>
          <li>Corresponsalías en aduanas de Buenos Aires, Ezeiza, Campana y Santa Fe.</li>
          <li>
            Gestión y tramitación de Permisos de Exportación y Despachos de Importación, Temporales,
            Tránsitos.
          </li>
          <li>Inscripción en AFIP como Exportador / Importador.</li>
          <li>Tramitación de DJVE.</li>
          <li>Tramitación de SIMI y Licencias No Automáticas.</li>
          <li>Operaciones en Depósitos Fiscales, Plantas y Terminales Portuarias.</li>
          <li>Corresponsalías en aduanas de Buenos Aires, Ezeiza, Campana y Santa Fe.</li>
          <li>Cancelación de Permisos de Embarque en consignación.</li>
          <li>Envío e ingreso de muestras.</li>
          <li>Conexión con Depósitos Fiscales, Plantas, Terminales</li>
          <li>Portuarias y Aeroportuarias.</li>
        </ul>
      </div>
      <div className="flex flex-col  h-full border w-1/2">
        <h3>Servicios adicionales</h3>

        <ul>
          <li>
            Gestión y tramitación de documentación ante Organismos Oficiales y Cámaras de Comercio.
          </li>
          <li>Coordinación con empresas de control y fumigación.</li>
          <li>
            Contacto con forwarders, líneas marítimas. Contratación de fletes nacionales e
            internacionales.
          </li>
          <li>
            Asesoramiento sobre documentación y aspectos generales de la operación a proveedores y
            compradores del exterior.
          </li>
          <li>Seguros para todo tipo de cargas.</li>
          <li>Asesoramiento sobre pequeños envíos.</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
