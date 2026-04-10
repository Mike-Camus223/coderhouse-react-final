import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { createOrder } from '../../services/orders.js';

function formatPrice(value) {
  const n = Number(value) || 0;
  return n.toLocaleString('es-AR');
}

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();

  const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const orderItems = useMemo(
    () =>
      items.map((i) => ({
        id: i.id,
        name: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
    [items]
  );

  const canSubmit =
    buyer.name.trim() &&
    buyer.phone.trim() &&
    buyer.email.trim() &&
    items.length > 0 &&
    !loading;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError(null);

    try {
      const { id } = await createOrder({
        buyer: {
          name: buyer.name.trim(),
          phone: buyer.phone.trim(),
          email: buyer.email.trim(),
        },
        items: orderItems,
        total: totalPrice,
      });

      clearCart();
      navigate(`/orden/${id}`, { replace: true });
    } catch (err) {
      setError(err?.message || 'No se pudo generar la orden');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-14">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Checkout</h1>
        <div className="rounded border p-6 bg-white">
          <p className="text-gray-700 mb-3">Carrito vacío.</p>
          <Link to="/productos" className="text-amber-700 underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="rounded border bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Datos del comprador</h2>

          <label className="block mb-3">
            <span className="text-sm text-gray-600">Nombre</span>
            <input
              value={buyer.name}
              onChange={(e) => setBuyer((b) => ({ ...b, name: e.target.value }))}
              className="mt-1 w-full border rounded px-3 py-2"
              type="text"
              autoComplete="name"
            />
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-600">Teléfono</span>
            <input
              value={buyer.phone}
              onChange={(e) => setBuyer((b) => ({ ...b, phone: e.target.value }))}
              className="mt-1 w-full border rounded px-3 py-2"
              type="tel"
              autoComplete="tel"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm text-gray-600">Email</span>
            <input
              value={buyer.email}
              onChange={(e) => setBuyer((b) => ({ ...b, email: e.target.value }))}
              className="mt-1 w-full border rounded px-3 py-2"
              type="email"
              autoComplete="email"
            />
          </label>

          {error ? <p className="text-red-600 mb-3">{error}</p> : null}

          <button
            type="submit"
            disabled={!canSubmit}
            className={`w-full rounded px-4 py-2 text-white ${
              canSubmit ? 'bg-amber-700 hover:bg-amber-600' : 'bg-gray-300'
            }`}
          >
            {loading ? 'Procesando...' : 'Confirmar compra'}
          </button>
        </form>

        <div className="rounded border bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Resumen</h2>
          <ul className="space-y-2 mb-6">
            {items.map((i) => (
              <li key={i.id} className="flex items-center justify-between text-gray-700">
                <span>
                  {i.name} x{i.quantity}
                </span>
                <span>${formatPrice(i.price * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t pt-4">
            <span className="text-gray-600">Total</span>
            <span className="text-xl font-semibold text-gray-900">${formatPrice(totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

