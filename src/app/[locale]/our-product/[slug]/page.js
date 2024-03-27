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
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products?.slice(indexOfFirstItem, indexOfLastItem);
  const [loading,setLoading]=useState(true)
  const [banner,setBanner]=useState()
  const axios = useApi();
  const param=useParams()
  const pagesToShow = 4; // Number of pagination numbers to show
  
  const [title,setTitle]=useState('')
 
  useEffect(() => {
    (async () => {
 
      const { data } = await axios.get(`/api/products`);
      const {data:category}= await axios.get('/api/categories')
 

      const product=data?.data?.filter((item)=>item?.attributes?.category?.data?.id === parseInt(param?.slug) ) 
      const categoryName=category?.data?.filter(item=>item?.id===parseInt(param?.slug))
       
      setTitle(categoryName[0])
      setBanner(category?.data?.map(item=>item?.attributes?.banner?.data?.attributes?.url))
      setProducts(product)
      setLoading(false)

      
    })();
  }, []);



  const renderPaginationNumbers = () => {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
  
    const paginationNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      paginationNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
          }`}
        >
          {i}
        </button>
      );
    }
  
    if (startPage > 1) {
      paginationNumbers.unshift(<button key="prev" onClick={() => paginate(currentPage - 1)} className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800">Previous</button>);
    }
  
    if (endPage < totalPages) {
      paginationNumbers.push(<button key="next" onClick={() => paginate(currentPage + 1)} className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800">Next</button>);
    }
  
    return paginationNumbers;
  };
  




  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="w-full h-full absolute top-36 z-[-1]">
   <section className={`w-full h-72 pt-28 relative  grid place-items-center company-bg`}>
        <img src={banner?banner[0]:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
     
      </section>
      
      <section className="w-full pt-10 pb-10">
      <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white">{title?.attributes?.title}</h1>
        <div className="w-full p-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
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

        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800"
          >
            Previous
          </button>

          {renderPaginationNumbers()}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
            className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800"
          >
            Next
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Milk;
