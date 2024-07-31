import Image from 'next/image';
import { useState } from 'react';
import { useCart } from './CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    setIsModalOpen(true);
    setTimeout(() => setIsModalOpen(false), 222000); // Automatically close the modal after 3 seconds
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 m-4 text-center bg-red-500 rounded-md flex flex-col justify-between h-full w-full">
      <div>
        <h3 className="font-bold mb-2"><strong>Rating:</strong> {product.rating.rate}</h3>
        <div className="flex justify-center mb-4">
          <Image src={product.image} alt={product.title} width={250} height={200} className="object-contain rounded-3xl" />
        </div>
        <div className="mb-4">
          <p><strong>Price:</strong> ${product.price}</p>
          <p className="text-sm"><strong>Description:</strong> {product.description}</p>
        </div>
      </div>
      <div>
        <button onClick={addToCart} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Add to Cart</button>
        </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-red-800 p-6 rounded-md text-center relative max-w-md mx-auto">
          <span className="absolute top-0  right-2 cursor-pointer text-white text-3xl" onClick={closeModal}>&times;</span>
          <p className='mt-7'>{product.title} has been added to the cart.</p>
        </div>
      </div>
      )}
    </div>
  );
}
