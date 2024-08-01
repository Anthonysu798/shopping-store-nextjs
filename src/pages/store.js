import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
        <Head>
          <title>Product Store</title>
        </Head>
        <header className="bg-white shadow-md py-4">
          <Navbar />
          <div className="container pt-28 mx-auto pb-5 px-10 text-center">
            <h2 className="text-4xl font-bold pb-5 text-gray-800 animate-slideUp">
              Welcome to Our Store
            </h2>
            <h3 className="text-xl font-medium text-gray-600 animate-slideUp delay-100">
              We sell everything your heart desires. If you can think it, we sell it.
            </h3>
            <h2 className="text-2xl font-bold text-gray-700 mt-5 animate-slideUp delay-200">
              Our Favourites
            </h2>
          </div>
        </header>
        <main className="py-8">
          <div className="product-gallery container mx-auto px-10">
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-6 animate-fadeIn">
              {products.map((product) => (
                <div key={product.id} className="animate-slideUp delay-300">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
