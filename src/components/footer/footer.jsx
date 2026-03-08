import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* LOGO */}
        <div>
          <h2 className="text-3xl font-bold tracking-widest">
            Cafecito
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

            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 text-sm mt-2">
              SUSCRIBIRME
            </button>
          </div>

          {/* REDES */}
          <div className="mt-8">
            <p className="text-amber-500 text-sm text-center tracking-widest mb-4">
              CONECTATE CON NOSOTROS
            </p>

            <div className="flex justify-center gap-4">
              <Link to="https://www.facebook.com/" className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>

              <Link to="https://www.instagram.com/" className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;