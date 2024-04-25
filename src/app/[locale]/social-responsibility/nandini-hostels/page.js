'use client';
import React, { useState,useEffect } from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useApi from '@/hooks/useApi';
function NandiniHostels() {
  const { isScroll } = useMyContext();
  const locale = useLocale().locale;
  const [animalHealth,setAnimalHealth]=useState([])

  const axios = useApi();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/animal-healths')
      setAnimalHealth(data.data);
     
    })();
  }, []);
  return (
    <div className={`w-full h-full absolute   z-[-1] ${isScroll ? 'top-48' : ''}  `}>
      <section className={`w-full h-[700px] pt-28 relative  grid place-items-center `}>
        {/* <img src={banner?banner[0]:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
         */}
        <video
          src="/video/precrument.mp4"
          muted
          autoPlay
          loop
          controls
          playsInline
          className={`w-full  h-full    object-cover absolute top-0 z-[-1] ${
            isScroll ? 'h-[400px]' : ''
          } `}
        />
      </section>
      <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
                      <Link className="  text-sm font-bold  " href={`/` || ''}>
              Home
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold    " href={` `}>
              Social Responsiblites
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main  " href={` `}>
              Nandini Hostels
            </Link>
            
      </div>
      <section className=" relative w-full   h-auto pt-10  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-3 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col space-y-2 justify-center items-start    p-1   ">

          <div className="mb-20    relative w-full  flex justify-center items-center ">
              <img
                src="/images/heading/heading-primary.svg"
                className="absolute   w-[530px] top-[-60px]    object-contain"
              />
              <h1 className=" text-primary-main relative z-10 font-heading text-2xl font-extrabold uppercase">
              {locale==='kn'?'':'Nandini Hostels'}
              </h1>
            </div>
           

            

            <div className="w-full h-full flex justify-center items-center flex-wrap">
            
              
              
                <div className='w-full h-[600px] max-w-7xl bg-slate-400 shadow-lg'>

                </div>


            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NandiniHostels;
