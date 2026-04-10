import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { Trash2 } from 'lucide-react';

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
        <header className="flex items-center bg-black justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-white">Carrito</h2>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 rounded hover:bg-gray-100 text-white rounded-full transition-all duration-300 ease-in-out cursor-pointer"
          >
            X
          </button>
        </header>

        <div className="p-4 flex-1 overflow-auto">
          {items.length === 0 ? (
            <div className="text-white">
              <p className="font-medium text-black mb-2">Tu carrito está vacío.</p>
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
                        className="text-red-600 hover:text-red-800 rounded-full p-2 cursor-pointer rounded hover:bg-red-100 transition-all duration-300 ease-in-out"
                        aria-label="Quitar producto"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 transition-all text-white duration-300 ease-in-out rounded bg-amber-700 hover:bg-amber-600 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="min-w-8 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setItemQuantity(item.id, Math.min(item.stock || item.quantity + 1, item.quantity + 1))
                          }
                          className="w-8 h-8 transition-all text-white duration-300 ease-in-out rounded bg-amber-700 hover:bg-amber-600 cursor-pointer"
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

        <footer className="p-4 border-t bg-black">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white">Items</p>
            <p className="font-medium text-white">{totalQuantity}</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-white">Total</p>
            <p className="text-lg  font-semibold text-white">${formatPrice(totalPrice)}</p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={clearCart}
              className="flex-1 border text-white cursor-pointer transition-colors ease-in-out duration-300 border-gray-300 rounded px-3 py-2 hover:bg-gray-50 hover:text-black"
              disabled={items.length === 0}
            >
              Vaciar
            </button>
            <Link
              to="/checkout"
              onClick={onClose}
              className={`flex-1 rounded px-3 py-2  transition-colors ease-in-out duration-300 text-center text-white ${items.length === 0 ? 'bg-gray-300 pointer-events-none' : 'bg-amber-700 hover:bg-amber-600'
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

