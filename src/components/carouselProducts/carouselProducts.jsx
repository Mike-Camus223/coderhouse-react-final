import { useState, useEffect } from "react";
import { getProducts } from "../../data/products";
import ItemCard from "../ItemCard/ItemCard";

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  const itemsPerSlide = 4;

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const slides = [];
  for (let i = 0; i < products.length; i += itemsPerSlide) {
    slides.push(products.slice(i, i + itemsPerSlide));
  }

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative max-w-7xl mx-auto my-12">

      {slides.map((group, i) => (
        <div
          key={i}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-500 ${
            i === index
              ? "opacity-100"
              : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          {group.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </div>
      ))}

      {/* flecha izquierda */}
      <button
        onClick={prev}
        className="absolute cursor-pointer -left-14 top-1/2 -translate-y-1/2 text-4xl z-20"
      >
        ❮
      </button>

      {/* flecha derecha */}
      <button
        onClick={next}
        className="absolute cursor-pointer -right-14 top-1/2 -translate-y-1/2 text-4xl z-20"
      >
        ❯
      </button>

      {/* indicadores */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}