'use client';
import React, { useEffect, useState } from 'react';
import Logo from '@/images/logo/logo.png';
import HeroImg from '@/images/milk-union/milk-union-home.png';
import ProductCard from './ProductCard';
import { milkProducts } from '@/configtext/milk.js';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
function Milk() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products?.slice(indexOfFirstItem, indexOfLastItem);
  const [banner,setBanner]=useState()
  const axios = useApi();
  const param=useParams()
 
  useEffect(() => {
    (async () => {
 
      const { data } = await axios.get(`/api/products`);
      const {data:category}= await axios.get('/api/categories')
      console.log(category?.data?.map(item=>item?.attributes?.banner?.data?.attributes?.url))
      setBanner(category?.data?.map(item=>item?.attributes?.banner?.data?.attributes?.url))
      const product=data?.data?.filter((item)=>item?.attributes?.category?.data?.id === parseInt(param?.slug) )
    
      setProducts(product)

      
    })();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="w-full h-full absolute top-36 z-[-1]">
   <section className={`w-full h-72 pt-28 relative  grid place-items-center company-bg`}>
        <img src={banner?banner:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
     
      </section>
      <section className="w-full pt-10 pb-10">
        <div className="w-full flex flex-col gap-5 justify-center items-center flex-wrap lg:flex-row">
          {currentProducts.map((product, id) => {
            return (
              <ProductCard
                key={id}
                title={product?.attributes?.title}
                image={product?.attributes?.image?.data?.attributes?.url}
                description1={product?.attributes?.description}
                
              />
            );
          })}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: Math.ceil(products.length / itemsPerPage) })?.map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}>
              {index + 1}
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Milk;
