import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../data/products';

// Componente contenedor //
const ItemListContainer = ({ greeting, categoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getProducts(categoryId)
      .then((data) => {
        if (!isMounted) return;
        setError(null);
        setProducts(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [categoryId]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-4">
          {greeting}
        </h1>
        <p className="text-lg text-gray-600">
          Descubre nuestra selección de cafés premium y accesorios
        </p>
      </div>
      {loading && <p className="text-gray-600">Cargando productos...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {!loading && !error && <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
