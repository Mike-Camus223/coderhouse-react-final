export const PRODUCTS = [
  { 
    id: 1,
    name: 'Café Colombiano',
    price: 12500,
    category: 'cafe',
    stock: 15,
    description: 'Café de origen único con notas de chocolate y caramelo',
    img: 'https://http2.mlstatic.com/D_NQ_NP_979847-MLU70657045808_072023-O.webp'
  },
  { 
    id: 2,
    name: 'Café Espresso',
    price: 14800,
    category: 'cafe',
    stock: 10,
    description: 'Mezcla intensa y aromática perfecta para espresso',
    img: 'https://bonafidecafe.com.ar/wp-content/uploads/2025/02/CAFE-TOSTADO-ESPRESSO-1.jpeg'
  },
  { 
    id: 3,
    name: 'Café Descafeinado',
    price: 13200,
    category: 'cafe',
    stock: 8,
    description: 'Todo el sabor sin cafeína, proceso natural',
    img:'https://www.pymesvending.com/wp-content/uploads/2019/01/12283276-NESCAF%C3%89-Classic-Decaf-2020-scaled.jpg'
  },
  { 
    id: 4,
    name: 'Máquina Espresso Pro',
    price: 850000,
    category: 'maquinas',
    stock: 5,
    description: 'Máquina profesional para espresso en casa',
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_610125-MLA104698664682_012026-F.webp'
  },
  { 
    id: 5,
    name: 'Molino de Café',
    price: 210000,
    category: 'maquinas',
    stock: 7,
    description: 'Molino cónico de acero para una molienda precisa',
    img: 'https://d2eebw31vcx88p.cloudfront.net/foschiads/uploads-r/p/379cc7817876aa1f19a2683e14df1894a6fb407f.jpg'
  },
  { 
    id: 6,
    name: 'Vaso Térmico',
    price: 18000,
    category: 'accesorios',
    stock: 20,
    description: 'Mantiene tu café caliente por más tiempo',
    img: 'https://http2.mlstatic.com/D_NQ_NP_933170-MLA86100172310_062025-O.webp'
  },
  { 
    id: 7,
    name: 'Prensa Francesa',
    price: 42000,
    category: 'accesorios',
    stock: 12,
    description: 'Clásica prensa para preparar café filtrado',
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_965991-MLA99989947567_112025-F.webp'
  },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getProducts(categoryId) {
  // simulador fetch
  await delay(600);
  if (!categoryId) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export async function getProductById(id) {
  // simulador fetch
  await delay(500);
  const product = PRODUCTS.find((p) => String(p.id) === String(id));
  if (!product) throw new Error('Producto no encontrado');
  return product;
}