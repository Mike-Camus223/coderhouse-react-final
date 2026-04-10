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
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Carrito vacío</h1>
        <p className="text-gray-500 mb-6">No hay productos en tu carrito</p>
        <Link
          to="/productos"
          className="bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition"
        >
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-170 py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          Finalizar compra
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-semibold mb-6">
              Datos del comprador
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Nombre completo"
                required
                value={buyer.name}
                onChange={(e) =>
                  setBuyer((b) => ({ ...b, name: e.target.value }))
                }
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                required
                value={buyer.phone}
                onChange={(e) =>
                  setBuyer((b) => ({ ...b, phone: e.target.value }))
                }
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="email"
                placeholder="Email"
                required
                value={buyer.email}
                onChange={(e) =>
                  setBuyer((b) => ({ ...b, email: e.target.value }))
                }
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

            </div>

            {error && (
              <p className="text-red-500 mt-4">{error}</p>
            )}

            <button
              type="submit"
              disabled={!canSubmit}
              className={`mt-6 w-full py-3 rounded-full font-semibold transition ${
                canSubmit
                  ? 'bg-amber-700 text-white hover:bg-amber-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {loading ? 'Procesando...' : 'Confirmar compra'}
            </button>
          </form>

          {/* RESUMEN */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">
              Resumen del pedido
            </h2>

            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {items.map((i) => (
                <div
                  key={i.id}
                  className="flex justify-between text-gray-700"
                >
                  <span>
                    {i.name} x{i.quantity}
                  </span>
                  <span className="font-medium">
                    ${formatPrice(i.price * i.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t mt-6 pt-4 flex justify-between items-center">
              <span className="text-gray-500">Total</span>
              <span className="text-2xl font-bold text-gray-900">
                ${formatPrice(totalPrice)}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}