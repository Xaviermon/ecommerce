export function ModalProduct({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      {/* Contenedor del modal */}
      <div className="bg-white p-8 rounded-lg w-full sm:max-w-md">
        {/* Botón para cerrar el modal */}
        <button className="absolute top-0 right-0 m-4" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Contenido del modal */}
        <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-700 font-bold mb-4">Price: ${product.price}</p>
        <img src={product.image} alt={product.name} className="w-full mb-4" />
        {/* Otro contenido del producto */}
      </div>
    </div>
  );
}
