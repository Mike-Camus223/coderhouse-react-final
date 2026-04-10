import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';

function formatPrice(value) {
  const n = Number(value) || 0;
  return n.toLocaleString('es-AR');
}

export default function CartSidebar({ open, onClose }) {
  const { items, totalPrice, totalQuantity, removeItem, clearCart, setItemQuantity } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Cerrar carrito"
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Carrito</h2>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded hover:bg-gray-100 text-gray-700"
          >
            Cerrar
          </button>
        </header>

        <div className="p-4 flex-1 overflow-auto">
          {items.length === 0 ? (
            <div className="text-gray-600">
              <p className="font-medium mb-2">Tu carrito está vacío.</p>
              <Link to="/productos" className="text-amber-700 underline" onClick={onClose}>
                Ver productos
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 border rounded p-3">
                  <div className="w-16 h-16 flex items-center justify-center shrink-0">
                    {item.img ? (
                      <img src={item.img} alt={item.name} className="max-h-16 object-contain" />
                    ) : null}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">${formatPrice(item.price)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Quitar
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 border rounded hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="min-w-8 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setItemQuantity(item.id, Math.min(item.stock || item.quantity + 1, item.quantity + 1))
                          }
                          className="w-8 h-8 border rounded hover:bg-gray-50"
                          disabled={item.stock ? item.quantity >= item.stock : false}
                        >
                          +
                        </button>
                      </div>
                      <p className="font-semibold text-gray-800">
                        ${formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600">Items</p>
            <p className="font-medium text-gray-800">{totalQuantity}</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-600">Total</p>
            <p className="text-lg font-semibold text-gray-900">${formatPrice(totalPrice)}</p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={clearCart}
              className="flex-1 border border-gray-300 rounded px-3 py-2 hover:bg-gray-50"
              disabled={items.length === 0}
            >
              Vaciar
            </button>
            <Link
              to="/checkout"
              onClick={onClose}
              className={`flex-1 rounded px-3 py-2 text-center text-white ${
                items.length === 0 ? 'bg-gray-300 pointer-events-none' : 'bg-amber-700 hover:bg-amber-600'
              }`}
            >
              Finalizar compra
            </Link>
          </div>
        </footer>
      </aside>
    </div>
  );
}

