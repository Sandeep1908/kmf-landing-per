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
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import ProductAccordion from '@/components/ProductAccordion';
import downarrowIco from '@/images/icons/downarrow.svg';
import uparrowIco from '@/images/icons/uparrow.svg';
import { Fade } from 'react-reveal';
 


function Milk() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [openAccordion, SetOpenAccordion] = useState(null);
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
  const locale = useLocale().locale;
  const [categoryName, setCategoryName] = useState('');
  const [allSubCategories, setAllSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const {setId}=useMyContext()
  const [showMore,setShowMore]=useState(false)
  const arrows = {
    down: downarrowIco.src,
    up: uparrowIco.src
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/subcategories?sort[0]=createdAt:asc`);
      const { data: categories } = await axios.get('/api/categories?sort[0]=order:asc');
      const { data: subItems } = await axios.get('/api/product-sub-items?sort[0]=createdAt:asc');

      const product = subItems?.data?.filter(
        (item) => item?.attributes?.subcategory?.data?.id === parseInt(param?.slug)
      );

      const categoryName = data?.data?.filter((item) => item?.id === parseInt(param?.slug));
      const categoryTitle = categories?.data?.filter((item) => item?.id === parseInt(param?.slug));

      setCategories(categories.data);
      setAllSubCategories(data.data);
      setTitle(categoryName[0]);
      setBanner(subItems?.data?.map((item) => item?.attributes?.banner?.data?.attributes?.url));
      setProducts(product);
      setLoading(false);
    })();
  }, []);

  const handleSeeMoreClick = (index) => {
    setExpandedDescriptionIndex(index === expandedDescriptionIndex ? null : index);
  };
  const handleAccordionClick = (accordionId) => {
    SetOpenAccordion(openAccordion === accordionId ? null : accordionId);
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
    <div className={`w-full h-full relative ${isScroll ? 'top-0' : 'top-36'}  `}>
      <section
        className={`w-full    pt-28 relative  grid place-items-center ${
          isScroll ? 'h-[600px]' : 'h-[85vh]'
        }`}>
        <video
          muted
          playsInline
          autoPlay
          loop
          controls
          src={title?.attributes?.video?.data?.attributes?.url || '/video/our-product.mp4'}
          className={`w-full h-full  object-fill absolute top-0    `}
        />
      </section>

      <section className="w-full h-full     bg-[#FFFFFF] ">
        <div className="w-full     pb-10">
          <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
            <Link className="  text-sm font-bold  " href={`/${locale}/our-product/` || ''}>
              {locale==='kn'?'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು':'Our Products'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold  " href={`/${locale}/our-product/`}>
              {title?.attributes?.title}
            </Link>
            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main" href={''}>
              {title?.attributes?.title} 
            </Link>
          </div>
          <div className="w-full max-w-7xl m-auto flex flex-col justify-center items-center space-y-4 pt-10 ">
            <h1 className="text-4xl text-primary-main text-center font-subheading">
              {title?.attributes?.Heading} 
            </h1>
        
            {/* <p className="text-2xl ">{title?.attributes?.description}</p> */}
          </div>

          <div
            className={`w-full h-full mt-10 max-w-[1600px] m-auto  flex flex-col space-y-5 ${
              title?.attributes?.Heading ? 'mt-' : ''
            } `}>

<div className="mb-20    relative w-full  flex justify-center items-center ">
            
              <h1 className=" text-primary-main relative  m-auto text-center z-10 font-heading text-4xl font-extrabold uppercase">
              {title?.attributes?.title}     {locale==='kn'?' ':'Family'}
              </h1>
            </div>
             

            <div className="flex w-full justify-evenly items-start space-x-5">
              <div className="w-full max-w-7xl m-auto h-full pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {products?.map((item, id) => {
                  return (
                    <div
                      key={id}
                      className={`w-96  bg-[#F7F7F7] relative flex flex-col justify-between items-start ${item?.attributes?.isLatest?'our-product-latest':''} `}>
                        {
                          item?.attributes?.isLatest &&
                          <img src='/images/product-new/new.gif' className='w-20 absolute right-5  z-[10]'/>
                        }
                    
                    <Fade top>
                      <div className="w-full   justify-center items-center flex p-2  ">
                        <Carousel
                          className="w-2xl h-96"
                          autoPlay={false}
                          interval={2000}
                          showStatus={false}
                          infiniteLoop
                          showThumbs={false}
                          showIndicators={false}>
                          {item?.attributes?.image?.data?.map((item, id) => {
                             
                            const validExtensions = ['.png', '.jpg', '.jpeg','.JPG','.JPEG','.PNG'];
                            if (validExtensions.includes(item?.attributes?.ext)) {
                              return (
                                <img
                                  key={id}
                                  src={item?.attributes?.url}
                                  className="w-40 h-80  object-contain  transition-all duration-300 hover:scale-[1.1]"
                                />
                              );
                            } else {
                              return (
                                <video
                                  autoPlay
                                  controls
                                  loop
                                  muted
                                  key={id}
                                  src={item?.attributes?.url}
                                  className="w-full h-80   object-contain  transition-all duration-300 hover:scale-[1.1]"
                                />
                              );
                            }
                          })}
                        </Carousel>
                      </div>
                      </Fade>
<Fade bottom>
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
                        <p
                          className={`text-md text-center w-full ${
                            item?.attributes?.description ? '' : 'hidden'
                          }`}>
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
                      </Fade>
                    </div>
                  );
                })}
              </div>

              <div className="w-60 pt-10 transition-all duration-300">
                <div className="w-full h-fit transition-all duration-300 flex flex-col  shadow-lg    justify-start   items-start rounded-lg border-b-2 border-primary-main  ">
                  <div className="w-full mb-2    shadow-md bg-primary-main  ">
                    <h1 className="p-5 text-lg uppercase   text-white text-center w-full">  {locale==='kn'?'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು':'Our Products'}</h1>
                  </div>


                  {showMore ? 
                      allSubCategories?.map((items, idx) => {
                     
                         
                          return(
                            <ProductAccordion
                            title={items?.attributes?.title}
                            id={idx}
                            open={openAccordion == idx}
                            arrow={arrows}
                            onToggle={handleAccordionClick}
                            key={idx}>
                            <ul className="">
                              {items?.attributes?.product_sub_items?.data?.map((item, index) => {
                                return (
                                  <Link
                                  
                                    href={`/${locale}/our-product/${items?.id}` || ''}
                                    key={index}
                                    onClick={() => setOpenNav((prev) => !prev)}>
                                      <Fade right>
                                    <li
                                      key={index}
                                      className="flex items-center  relative  text-light-light4 border-b-2 border-b-light-light4 pb-2 space-x-3 ">
                                      <span>{item?.attributes?.name}</span>
                                    </li>
                                    </Fade>
                                  </Link>
                                );
                              })}
                            </ul>
                          </ProductAccordion>
                          )
                       
                   
                       
                      
                      
    
                         
                      })
                  :

                  categories?.map((items, idx) => {
                    
                     
                    if(idx<=10){
                      return(
                        <ProductAccordion
                        title={items?.attributes?.title}
                        id={idx}
                        open={openAccordion == idx}
                        arrow={arrows}
                        onToggle={handleAccordionClick}
                        key={idx}>
                        <ul className="">
                          {items?.attributes?.subcategories?.data?.map((item, index) => {
                         
                            return (
                              <Link
                              
                                href={`/${locale}/our-product/${item?.id}` || ''}
                                key={index}
                                onClick={() => setOpenNav((prev) => !prev)}>
                                  <Fade right>
                                <li
                                  key={index}
                                  className="flex items-center  relative  text-light-light4 border-b-2 border-b-light-light4 pb-2 space-x-3 ">
                                  <span>{item?.attributes?.title}</span>
                                </li>
                                </Fade>
                              </Link>
                            );
                          })}
                        </ul>
                      </ProductAccordion>
                      )
                    }
               
                   
                  
                  

                     
                  })}
                  
                  
                  
                  

              

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Milk;
