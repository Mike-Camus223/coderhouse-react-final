import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../data/products';

// Componente contenedor: obtiene el producto según el id de la URL
const ItemDetailContainer = () => {
  const { id } = useParams(); // lee el segmento actual de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect depende de id para actualizar al navegar
  useEffect(() => {
    let isMounted = true;

    getProductById(id)
      .then((data) => {
        if (!isMounted) return;
        setError(null);
        setProduct(data);
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
  }, [id]);

  if (loading) return <p className="text-gray-600 px-4 py-8">Cargando detalle...</p>;
  if (error) return <p className="text-red-600 px-4 py-8">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
