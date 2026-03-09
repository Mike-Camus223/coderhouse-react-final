import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
  return (
    <Link
      to={`/producto/${product.slug}`}
      className="block group"
    >
      <div>

        <img
          src={product.img}
          alt={product.name}
          className="w-full h-48 object-contain"
        />

        <div className="p-2 text-center">
          <h3 className="font-semibold text-gray-800">
            {product.name}
          </h3>
        </div>

      </div>
    </Link>
  );
};

export default ItemCard;
