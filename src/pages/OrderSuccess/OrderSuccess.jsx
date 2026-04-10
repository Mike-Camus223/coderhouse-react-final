import { Link, useParams } from 'react-router-dom';

export default function OrderSuccess() {
  const { orderId } = useParams();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl w-full text-center">

        {/* ICONO */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* TITULO */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Compra confirmada
        </h1>

        <p className="text-gray-500 mb-6">
          Tu pedido fue procesado correctamente
        </p>

        {/* ID */}
        <div className="bg-gray-50 border rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500 mb-1">ID de orden</p>
          <p className="font-mono text-lg text-gray-800 break-all">
            {orderId}
          </p>
        </div>

        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          <Link
            to="/productos"
            className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Seguir comprando
          </Link>

          <Link
            to="/"
            className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-full font-semibold transition"
          >
            Ir al inicio
          </Link>

        </div>
      </div>
    </div>
  );
}