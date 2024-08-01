import Image from 'next/image';
import { useState } from 'react';
import { useCart } from './CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    setIsModalOpen(true);
    setTimeout(() => setIsModalOpen(false), 3000); // Automatically close the modal after 3 seconds
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-lg flex flex-col justify-between h-full w-full transition-transform transform hover:scale-105 duration-300 animate-fadeIn">
      <div>
        <h3 className="font-bold mb-2 text-gray-800 animate-slideUp"><strong>Rating:</strong> {product.rating.rate}</h3>
        <div className="flex justify-center mb-4 animate-slideUp delay-100">
          <Image src={product.image} alt={product.title} width={250} height={200} className="object-contain rounded-3xl" priority={true} />
        </div>
        <div className="mb-4 animate-slideUp delay-200">
          <p className="text-gray-800"><strong>Price:</strong> ${product.price}</p>
          <p className="text-sm text-gray-600"><strong>Description:</strong> {product.description}</p>
        </div>
      </div>
      <div className="animate-slideUp delay-300">
        <button onClick={addToCart} className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-md hover:bg-gradient-to-l transition duration-300">
          Add to Cart
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 animate-fadeIn">
          <div className="bg-white p-6 rounded-md text-center relative max-w-md mx-auto shadow-lg animate-slideUp">
            <span className="absolute top-0 right-2 cursor-pointer text-gray-800 text-3xl" onClick={closeModal}>&times;</span>
            <p className="mt-7 text-gray-800">{product.title} has been added to the cart.</p>
          </div>
        </div>
      )}
    </div>
  );
}
