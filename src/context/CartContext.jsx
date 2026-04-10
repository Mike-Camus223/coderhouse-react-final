import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

function normalizeItem(product, quantity) {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    price: Number(product.price) || 0,
    img: product.img,
    stock: Number(product.stock) || 0,
    quantity: Number(quantity) || 0,
  };
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    const qty = Number(quantity) || 0;
    if (!product || qty <= 0) return;

    setItems((prev) => {
      const existing = prev.find((i) => String(i.id) === String(product.id));
      const nextQty = Math.min((existing?.quantity || 0) + qty, Number(product.stock) || qty);

      if (existing) {
        return prev.map((i) =>
          String(i.id) === String(product.id) ? { ...i, quantity: nextQty } : i
        );
      }

      return [...prev, normalizeItem(product, Math.min(qty, Number(product.stock) || qty))];
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => String(i.id) !== String(id)));
  };

  const clearCart = () => setItems([]);

  const setItemQuantity = (id, quantity) => {
    const qty = Number(quantity) || 0;
    setItems((prev) =>
      prev
        .map((i) => (String(i.id) === String(id) ? { ...i, quantity: qty } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const totalQuantity = useMemo(
    () => items.reduce((acc, i) => acc + (Number(i.quantity) || 0), 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((acc, i) => acc + (Number(i.quantity) || 0) * (Number(i.price) || 0), 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      clearCart,
      setItemQuantity,
      totalQuantity,
      totalPrice,
    }),
    [items, totalQuantity, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider');
  return ctx;
}

