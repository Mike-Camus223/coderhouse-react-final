import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amber-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link 
          to="/" 
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Error404;