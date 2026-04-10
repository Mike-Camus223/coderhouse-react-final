import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartwidget/CartWidget';
import CartSidebar from '../CartSidebar/CartSidebar.jsx';

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="bg-black shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Cafecito
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/productos" className="text-white tracking-widest scale-y-120 hover:text-amber-100 px-3 py-2 rounded-md text-sm font-medium">
                Productos
              </Link>
              <Link to="/categoria/cafe" className="text-white tracking-widest scale-y-120 hover:text-amber-100 px-3 py-2 rounded-md text-sm font-medium">
                Café
              </Link>
              <Link to="/categoria/maquinas" className="text-white tracking-widest scale-y-120 hover:text-amber-100 px-3 py-2 rounded-md text-sm font-medium">
                Máquinas
              </Link>
              <Link to="/categoria/accesorios" className="text-white tracking-widest scale-y-120 hover:text-amber-100 px-3 py-2 rounded-md text-sm font-medium">
                Accesorios
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <CartWidget onClick={() => setCartOpen(true)} />
          </div>
        </div>
      </div>
      </nav>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
