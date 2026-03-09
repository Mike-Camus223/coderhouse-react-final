import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-[500px] bg-[#f7f6f4] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute text-[300px] md:text-[420px] font-bold scale-y-120 text-gray-200 select-none leading-none">
        404
      </div>
      <div className="text-center flex items-center flex-col relative z-10 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#b89163] mb-6 tracking-wide">
          Error
        </h1>

        <h2 className="text-lg md:text-2xl font-bold text-gray-800tracking-wider">
          No Encontrado
        </h2>

        <p className="text-gray-500 text-md font-semibold mb-8">
          Parece que no se encontró nada en esta ubicación.
        </p>

        <Link
          to="/"
          className="bg-[#b89163] hover:bg-[#a27c50] text-white px-6 py-3 rounded-md transition-colors inline-block font-medium"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Error404;