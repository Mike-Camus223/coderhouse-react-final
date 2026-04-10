import React from 'react';
import { useCart } from '../../context/CartContext.jsx';

const CartWidget = ({ onClick }) => {
  const { totalQuantity } = useCart();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onClick}
        className="bg-amber-700 hover:bg-amber-600 text-white p-2 rounded-full transition-colors"
        aria-label="Abrir carrito"
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      </button>
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CartWidget;