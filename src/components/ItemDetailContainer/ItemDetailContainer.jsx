import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../data/products';
import Spinner from '../spinner/spinner';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getProductById(id)
      .then((data) => {
        if (!isMounted) return;
        setProduct(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) {
          setFadeOut(true);

          setTimeout(() => {
            setLoading(false);
          }, 350);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

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
    <div className="max-w-7xl mx-auto px-4 py-10 animate-fadeUp">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;