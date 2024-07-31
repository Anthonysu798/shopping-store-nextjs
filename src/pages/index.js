import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Head>
        <title>My Product App</title>
      </Head>
      <header className="header bg-red-600">
        <Navbar />
        
        <div className="container mx-auto pt-5 pb-5 px-10">
        <h2 className="text-3xl font-bold pb-5 text-white">We sell everything your heart desires. If you can think it, we sell it.</h2>
        <h2 className="text-3xl font-bold text-white">Our Favourites</h2>
        </div>
        
      </header>
      <main className="bg-red-400 py-4">
        
        <div className="product-gallery container mx-auto px-10 "> 
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div className="my-2 rounded-lg p-3 text-white" key={product.id}> 
              <ProductCard product={product} />
            </div>
          ))}
          </div>
          
        </div>
      </main>
      
    </div>
  );
}
