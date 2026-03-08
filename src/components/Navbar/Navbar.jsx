import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartwidget/CartWidget';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg sticky top-0 z-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Cafecito
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/category/cafe" className="text-white tracking-widest scale-y-120 hover:text-amber-100 px-3 py-2 rounded-md text-sm font-medium">
                Café
              </Link>
              <Link to="/category/maquinas" className="text-white tracking-widest scale-y-120 hover:text-amber-100 px-3 py-2 rounded-md text-sm font-medium">
                Máquinas
              </Link>
              <Link to="/category/accesorios" className="text-white tracking-widest scale-y-120 hover:text-amber-100 px-3 py-2 rounded-md text-sm font-medium">
                Accesorios
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;