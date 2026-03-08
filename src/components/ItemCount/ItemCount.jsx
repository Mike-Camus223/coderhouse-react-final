import React, { useState } from 'react';

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd(count);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center border border-gray-300 rounded-lg">
        <button 
          onClick={decrement}
          className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg"
          disabled={count <= 1}
        >
          -
        </button>
        <span className="px-4 py-2 border-x border-gray-300">{count}</span>
        <button 
          onClick={increment}
          className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg"
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button 
        onClick={handleAdd}
        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;