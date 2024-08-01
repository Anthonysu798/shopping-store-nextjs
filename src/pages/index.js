import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching images from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 4))); // Limit to 4 products
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Timble Store</title>
        <meta name="description" content="Welcome to Timble Store, your go-to destination for amazing products." />
      </Head>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md py-4 animate-slideDown">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-white">Timble Store</a>
          </Link>
          <div>
            <Link href="/" legacyBehavior>
              <a className="text-white mx-4 hover:text-gray-200 transition-colors">Home</a>
            </Link>
            <Link href="/login" legacyBehavior>
              <a className="text-white mx-4 hover:text-gray-200 transition-colors">Login</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <header className="bg-gradient-to-br from-purple-100 to-pink-100 py-20">
        <div className="container mx-auto px-10 text-center">
          <h1 className="text-5xl font-bold text-purple-700 mb-5 animate-fadeIn">Welcome to Timble Store</h1>
          <p className="text-xl text-purple-600 mb-8 animate-fadeIn delay-100">
            Discover our amazing products and services. Start your journey with us today!
          </p>
          <div className="mt-10 animate-fadeIn delay-200">
            <Link href="/store" legacyBehavior>
              <a className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:bg-gradient-to-l transition duration-300 animate-pulse">
                Start Shopping
              </a>
            </Link>
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="container mx-auto px-10">
          <h2 className="text-3xl font-bold text-pink-600 mb-5 animate-fadeInUp">About Us</h2>
          <p className="mt-4 text-gray-700 mb-8 animate-fadeInUp delay-100">
            Our application provides a seamless shopping experience with a wide range of products.
            Whether you&rsquo;re looking for electronics, fashion, or home goods, we&rsquo;ve got you covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp delay-200">
            {products.map(product => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400} 
                  height={400} 
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
