import ItemCount from '../ItemCount/ItemCount';

// Componente de presentación: recibe el producto por props
const ItemDetail = ({ product }) => {
  if (!product) return null; // Evita render mientras carga
  
  const handleAddToCart = (quantity) => {
    console.log(`Agregando ${quantity} unidades de ${product.name} al carrito`);
    alert(`Se agregaron ${quantity} unidades al carrito`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="h-96 bg-amber-100 flex items-center justify-center">
              <span className="text-amber-600 text-8xl">☕</span>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-amber-600">${product.price}</span>
            </div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Stock disponible: {product.stock} unidades</p>
            </div>
            <div className="mb-6">
              <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
            </div>
            <div className="flex space-x-4">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors">
                Agregar a favoritos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
