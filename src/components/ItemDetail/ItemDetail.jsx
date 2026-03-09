import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  if (!product) return null;

  const handleAddToCart = (quantity) => {
    console.log(`Agregando ${quantity} unidades de ${product.name}`);
    alert(`Se agregaron ${quantity} unidades al carrito`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <div className="grid md:grid-cols-2 gap-20 items-start">

        {/* IMAGEN */}
        <div className="flex items-center justify-center h-[520px]">
          <img
            src={product.img}
            alt={product.name}
            className="max-h-[460px] object-contain"
          />
        </div>

        {/* INFO */}
        <div className="flex flex-col">

          {/* titulo */}
          <h1 className="text-4xl font-light text-gray-900 mb-6">
            {product.name}
          </h1>

          {/* precio */}
          <p className="text-4xl mb-6 text-gray-900">
            ${product.price}
          </p>

          {/* descripcion */}
          <p className="text-gray-500 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* stock */}
          <p className="text-sm text-gray-400 mb-8">
            Stock disponible: {product.stock}
          </p>

          {/* divider */}
          <div className="border-b mb-4"></div>

          {/* ACCORDION */}
          <div className="border-b mb-6">

            <button
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="flex cursor-pointer justify-between items-center w-full py-4 text-left"
            >
              <span className="text-gray-700">
                Información de compra
              </span>

              <span
                className={`transition-transform text-orange-500 duration-300 ${
                  accordionOpen ? "rotate-180" : ""
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                accordionOpen ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-500 text-sm leading-relaxed">
                Envíos disponibles a todo el país.  
                El tiempo de entrega depende de la ubicación y disponibilidad del producto.
              </p>
            </div>

          </div>

          {/* CONTADOR */}
          <div className="mb-8">
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={handleAddToCart}
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default ItemDetail;