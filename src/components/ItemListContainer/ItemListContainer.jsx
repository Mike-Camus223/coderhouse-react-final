import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../data/products';
import Spinner from '../spinner/spinner';

const ItemListContainer = ({ greeting, categoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getProducts(categoryId)
      .then((data) => {
        if (!isMounted) return;
        setProducts(data);
        setError(null);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (!isMounted) return;
        setFadeOut(true);
        setTimeout(() => {
          setLoading(false);
        }, 400); 
      });

    return () => {
      isMounted = false;
    };
  }, [categoryId]);

  if (loading)
    return (
      <div className={`flex justify-center items-center min-h-screen ${fadeOut ? "animate-fadeDown" : ""}`}>
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-14 animate-fadeUp">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold leading-tight text-center text-gray-700 uppercase scale-x-90">{greeting}</h2>
        <div className="w-30 border-b-2 border-orange-700 mt-6 mx-auto"></div>
        <p className="text-lg text-gray-600 mt-12">
          Descubre nuestra selección de cafés premium y accesorios
        </p>
      </div>

      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
