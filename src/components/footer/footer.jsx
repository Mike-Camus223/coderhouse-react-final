import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* LOGO */}
        <div>
          <h2 className="text-4xl font-bold tracking-widest scale-y-125">
            CAFECITO
          </h2>
        </div>

        {/* CONTENIDO */}
        <div>
          <h3 className="text-amber-500 tracking-widest text-sm mb-6">
            CONTENIDO
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <Link to="/category/cafe" className="hover:text-white">
                Café
              </Link>
            </li>

            <li>
              <Link to="/category/maquinas" className="hover:text-white">
                Máquinas
              </Link>
            </li>

            <li>
              <Link to="/category/accesorios" className="hover:text-white">
                Accesorios
              </Link>
            </li>
          </ul>
        </div>

        {/* AYUDA */}
        <div>
          <h3 className="text-amber-500 tracking-widest text-sm mb-6">
            NECESITÁS AYUDA
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Tutoriales
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Trabajá con nosotros
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* SUSCRIPCION */}
        <div>
          <h3 className="text-amber-500 text-sm tracking-widest mb-6">
            ¡SUSCRIBITE PARA RECIBIR DESCUENTOS Y NOVEDADES!
          </h3>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full bg-black border border-gray-600 px-4 py-2 text-sm outline-none"
            />

            <input
              type="email"
              placeholder="Tu email"
              className="w-full bg-black border border-gray-600 px-4 py-2 text-sm outline-none"
            />

            <label className="flex items-center text-xs text-gray-300 gap-2">
              <input type="checkbox" />
              Sí, quiero recibir descuentos y novedades.
            </label>

            <button className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-6 py-2 text-sm mt-2">
              SUSCRIBIRME
            </button>
          </div>

          {/* REDES */}
          <div className="mt-8">
            <p className="text-amber-500 text-sm tracking-widest mb-4">
              CONECTATE CON NOSOTROS
            </p>

            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center">
                f
              </div>

              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center">
                ig
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;