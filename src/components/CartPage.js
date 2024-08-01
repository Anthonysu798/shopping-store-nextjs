import { useCart } from "./CartContext";
import Image from "next/image";
import Navbar from "./Navbar";

const CartPage = () => {
  const { state } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Navbar />
      <div className="container mx-auto p-4 pt-20 animate-fadeIn">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800 animate-bounceIn">
          Shopping Cart
        </h1>
        {state.items.length === 0 ? (
          <p className="text-center text-lg text-gray-700 animate-fadeIn delay-200">
            Your cart is empty.
          </p>
        ) : (
          <div className="bg-white rounded-lg p-6 shadow-lg animate-fadeInUp delay-200">
            <ul className="space-y-6 mb-6">
              {state.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300 animate-fadeInUp delay-300"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-contain mr-4 rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <p className="text-lg font-bold text-gray-800">
                    ${item.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="text-right text-2xl font-bold text-gray-800 animate-fadeIn delay-400">
              Total: ${state.total.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
