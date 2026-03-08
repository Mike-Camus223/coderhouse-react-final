import { useState, useEffect } from "react";

const slides = [
  {
    img: "https://tiendadecafe.com.ar/wp-content/uploads/2021/03/sidebar_cafe01.jpg",
    subtitle: "Tu café preferido",
    title: "SIEMPRE CERCA",
    text: "Blends, varietales y cafés del mundo. Encontrá tu tienda más cercana."
  },
  {
    img: "https://tiendadecafe.com.ar/wp-content/uploads/2021/03/sidebar_capsulas04_v2.jpg",
    subtitle: "Proba nuestras",
    title: "CAPSULAS",
    text: "100% aluminio compatibles con máquinas Nespresso"
  },
  {
    img: "https://tiendadecafe.com.ar/wp-content/uploads/2021/03/sidebar_tostadores02.jpg",
    subtitle: "Desde 2007",
    title: "TOSTANDO TU CAFÉ",
    text: "Años de experiencia cuidando cada paso del proceso."
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[760px] overflow-hidden bg-black">

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.img}
            alt=""
            className="w-full h-full object-cover block"
          />
          <div className="absolute left-45 top-1/2 -translate-y-1/2 text-white max-w-2xl">

            {/* fade up */}
            <div
              className={`transition-all duration-700 ease-out ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-4xl tracking-wide scale-y-130 opacity-90">
                {slide.subtitle}
              </p>

              <h1 className="text-6xl mt-2 tracking-wide scale-y-115 font-bold leading-tight">
                {slide.title}
              </h1>

              <p className="mt-3 text-md opacity-90">
                {slide.text}
              </p>
            </div>

          </div>
        </div>
      ))}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2
        text-white text-4xl cursor-pointer px-3 py-1 rounded z-20"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2
        text-white text-4xl cursor-pointer px-3 py-1 rounded z-20"
      >
        ❯
      </button>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}