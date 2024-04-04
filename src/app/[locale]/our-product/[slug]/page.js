'use client';
import React, { useEffect, useState } from 'react';
import Logo from '@/images/logo/logo.png';
import HeroImg from '@/images/milk-union/milk-union-home.png';
import ProductCard from './ProductCard';
import { milkProducts } from '@/configtext/milk.js';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import { useMyContext } from '@/context/headerContext';
import { Carousel } from 'react-responsive-carousel';

function Milk() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products?.slice(indexOfFirstItem, indexOfLastItem);
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState();
  const axios = useApi();
  const param = useParams();
  const pagesToShow = 4; // Number of pagination numbers to show
  const [title, setTitle] = useState('');
  const [expandedDescriptionIndex, setExpandedDescriptionIndex] = useState(null);
  const { isScroll, setIsScroll } = useMyContext();
  

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/subcategories`);
      const { data: subItems } = await axios.get('/api/product-sub-items');
      const product = subItems?.data?.filter(
        (item) => item?.attributes?.subcategory?.data?.id === parseInt(param?.slug)
      );
      const categoryName = data?.data?.filter((item) => item?.id === parseInt(param?.slug));
 
      setTitle(categoryName[0]);
      setBanner(subItems?.data?.map((item) => item?.attributes?.banner?.data?.attributes?.url));
      setProducts(product);
      setLoading(false);
    })();
  }, []);

  const handleSeeMoreClick = (index) => {
    setExpandedDescriptionIndex(index === expandedDescriptionIndex ? null : index);
  };

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
          }`}>
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      paginationNumbers.unshift(
        <button
          key="prev"
          onClick={() => paginate(currentPage - 1)}
          className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800">
          Previous
        </button>
      );
    }

    if (endPage < totalPages) {
      paginationNumbers.push(
        <button
          key="next"
          onClick={() => paginate(currentPage + 1)}
          className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800">
          Next
        </button>
      );
    }

    return paginationNumbers;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={`w-full h-full relative ${isScroll ? 'top-36' : ''}  `}>
      <section
        className={`w-full  pt-28 relative  grid place-items-center ${
          isScroll ? 'h-[400px]' : 'h-[80vh]'
        }`}>
        
        <video
            
                muted
                playsInline
                autoPlay
                loop
                src={title?.attributes?.video?.data?.attributes?.url || '/video/our-product.mp4'}
                className={`w-full h-full object-contain fixed top-0   z-[-1]`}
              />
      
      </section>

      <section className="w-full h-full     bg-[#FFFFFF] ">
        <div className="w-full  max-w-7xl m-auto pb-10">
          <div className="w-full flex flex-col justify-center items-center space-y-4 pt-10">
            <h1 className="text-5xl text-primary-main text-center font-subheading">
              {title?.attributes?.Heading}
            </h1>
            <p className="text-2xl ">{title?.attributes?.description}</p>
          </div>

          <div className={`w-full h-full   flex flex-col space-y-5 ${title?.attributes?.Heading?'mt-36':''} `}>
            <h1 className="text-5xl font-bold flex justify-center items-center relative font-heading text-primary-main before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-red-700">
              {title?.attributes?.title} Family
            </h1>
            <div className="w-full h-full pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {products?.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="w-96  bg-[#F7F7F7] flex flex-col justify-between items-start ">
                    <div className="w-full   justify-center items-center flex p-2  ">
                    <Carousel
            className="w-2xl h-96"
            autoPlay={true}
            interval={2000}
            showStatus={false}
            infiniteLoop
            showThumbs={false}
            showIndicators={false}>
                {item?.attributes?.image?.data?.map((item,id)=>{
                  return(
<img
                       key={id} src={item?.attributes?.url}
                        className="w-40 h-80  object-contain  transition-all duration-300 hover:scale-[1.1]"
                      />
                  )
                })}
              
           
          </Carousel>
                      
                    </div>

                    <div
                      className="w-full h-full  p-2 text-justify flex flex-col space-y-3 pb-3 justify-start items-start
                                  ">
                      <p className="text-2xl text-center w-full">{item?.attributes?.name}</p>
                      <p
                        className={`text-center w-[80%] m-auto  p-3 rounded-lg ${
                          item?.attributes?.quantity ? 'bg-yellow-300' : 'hidden'
                        }`}>
                        {item?.attributes?.quantity}
                      </p>
                      <p className={`text-md text-center w-full ${item?.attributes?.description ? '' : 'hidden'}`}>
                        {expandedDescriptionIndex === id ||
                        item?.attributes?.description?.length <= 50
                          ? item?.attributes?.description
                          : `${item?.attributes?.description?.substring(0, 100)}... `}

                        {item?.attributes?.description?.length > 100 && (
                          <button
                            className="text-primary-main"
                            onClick={() => handleSeeMoreClick(id)}>
                            {expandedDescriptionIndex === id ? 'See less' : 'See more'}
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Milk;
