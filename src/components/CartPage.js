import { useCart } from "./CartContext";
import Image from "next/image";
import Navbar from "./Navbar";
const CartPage = () => {
	const { state } = useCart();

	return (
		<div className="bg-red-400 min-h-screen">
			<Navbar />
			<div className="container mx-auto p-4 pt-20">
				<h1 className="text-5xl font-bold mb-8 text-center text-white-900 ">
					Shopping Cart
				</h1>
				{state.items.length === 0 ? (
					<p className="text-center text-lg text-gray-700">Your cart is empty.</p>
				) : (
					<div className="bg-red-500 rounded-lg p-6">
						<ul className="space-y-6 mb-6">
							{state.items.map((item, index) => (
								<li
									key={index}
									className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm"
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
										<p className="text-gray-600">
											{item.description}
										</p>
									</div>
									<p className="text-lg font-bold text-gray-800">
										${item.price.toFixed(2)}
									</p>
								</li>
							))}
						</ul>
						<div className="text-right text-2xl font-bold text-white-600">
							Total: ${state.total.toFixed(2)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartPage;