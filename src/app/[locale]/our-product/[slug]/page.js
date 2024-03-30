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
    <div className="w-full h-full relative   ">
      
      <section className={`w-full h-[50vh] pt-28 relative  grid place-items-center`}>
        <img src={'https://kmf-public.s3.ap-south-1.amazonaws.com/products_fb68460da6.jpg'} className="w-full h-full object-fill fixed top-0   z-[-1]" />
     
      </section>
     

      <section className='w-full h-full     bg-[#FFFFFF] '>
        
                  <div className='w-full  max-w-7xl m-auto pb-10'>
                      
                      <div className='w-full flex flex-col space-y-4 pt-10'>
                            <h1 className='text-5xl text-primary-main font-subheading'>A twisty snacking sensation, Fulltoss brings a little flavour and fun to everyone.</h1>
                            <p className='text-2xl '>Available in exciting flavours: Masala Masti, Tangy Tomato, Thai Sriracha and Noodle Masala</p>
                      </div>

                      <div className='w-full h-full mt-32 flex flex-col space-y-5 '>
                          <h1 className='text-4xl'>Milk Family</h1>
                          <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>

                              <div className='w-80 h-96 bg-[#F7F7F7] flex flex-col justify-between items-center overflow-hidden'>
                                    <div className='w-full h-[80%] '>
                                      <img src='https://kmf-public.s3.ap-south-1.amazonaws.com/Family_Pack_Fresh_Milk_Ice_Cream_Anjir_b_bea5279bfa.png'
                                      className='w-full h-full transition-all duration-300 hover:scale-[1.1]'
                                      />  

                                    </div>

                                    <div className='w-full h-[10%] flex justify-center items-center
                                    '>
                                      <p className='text-lg'>Fulltoss Masala Masti</p>
                                    </div>
                              </div>
                           


                          </div>
                      </div>
                  </div>
      </section>

  <Footer/>
    </div>
  );
}

export default Milk;
