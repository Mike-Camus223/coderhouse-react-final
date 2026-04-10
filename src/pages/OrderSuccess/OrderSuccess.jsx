import { Link, useParams } from 'react-router-dom';

export default function OrderSuccess() {
  const { orderId } = useParams();

  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <div className="rounded border bg-white p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-3">Compra confirmada</h1>
        <p className="text-gray-700 mb-2">Tu orden fue generada correctamente.</p>
        <p className="text-gray-700 mb-6">
          ID de orden: <span className="font-mono">{orderId}</span>
        </p>

        <div className="flex gap-3">
          <Link to="/productos" className="bg-amber-700 hover:bg-amber-600 text-white rounded px-4 py-2">
            Volver al catálogo
          </Link>
          <Link to="/" className="border border-gray-300 hover:bg-gray-50 rounded px-4 py-2">
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

