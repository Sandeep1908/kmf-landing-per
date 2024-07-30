'use client';
import React, { useState,useEffect } from 'react';
import Follow from '@/components/Follow.js';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { IoHomeOutline } from 'react-icons/io5';

import useApi from '@/hooks/useApi';
import { Fade } from 'react-reveal';
function Offers() {
  const { isScroll } = useMyContext();
  const locale = useLocale().locale;
  const [offers,setOffers]=useState([])

  const axios = useApi();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/latestproducts')
       console.log(data.data)
      setOffers(data.data);
     
    })();
  }, []);
  return (
    <div className={`w-full h-full absolute company-bg   z-[-1] ${isScroll ? ' md:top-48' : ''}  `}>
  
      
      <section className=" relative w-full   h-auto pt-10  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-3 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col space-y-2 justify-center items-start    p-1   ">

          <div className="mb-10    relative w-full  flex justify-center items-center ">
             
              <h1 className=" text-primary-main relative z-10 font-heading text-4xl font-extrabold uppercase">
              <img src='/images/product-new/new.gif' className='w-20 absolute right-5 top-[-70px]  z-[-10]'/>

              {locale==='kn'?'':'Offers'}
              </h1>
            </div>
           

            

            <div className="w-full h-full flex justify-center items-center flex-wrap">
            
              
              
                <div className='w-full h-auto grid gap-5 place-content-center  md:grid-cols-2 lg:grid-cols-3  max-w-7xl  p-5 shadow-lg'>
            {offers?.map((item,id)=>{
              return(
<div key={id}
                      
                      className={`max-w-96  bg-[#F7F7F7] gap-5 relative flex flex-col justify-between items-start  `}>
                        
                    
                    
                      <div className="w-full   justify-center items-center flex p-2  ">
                      <img
                                  
                                  src={item?.attributes?.image?.data?.[0]?.attributes?.url}
                                  className="w-80 h-80  object-contain  transition-all duration-300 hover:scale-[1.1]"
                                />
                      </div>
                     
<Fade bottom>
                      <div
                        className="w-full h-full  p-2 text-justify flex flex-col space-y-3 pb-3 justify-start items-start
                                  ">
                        <p className="text-2xl text-center w-full">{item?.attributes?.title}</p>
                        <p
                          className={`text-center w-[80%] m-auto  p-3 rounded-lg  `}>
                      {item?.attributes?.validity}
                        </p>

                        <p className='w-full text-sm text-justify'>
                        {item?.attributes?.description}
                        </p>
                      </div>
                      </Fade>
                    </div>
              )
            })}
                


                </div>


            </div>
          </div>
        </div>
      </section>

       
<Footer />
    </div>
  );
}

export default Offers;
