'use client';
import React from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
function Subsidies() {
  const { isScroll } = useMyContext();
  const locale = useLocale().locale;
  
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
      <section className=" relative w-full   h-auto pt-10  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-3 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col space-y-2 justify-center items-start    p-1   ">
            <h1 className="text-4xl font-heading text-center w-full relative flex justify-center items-center   text-primary-main before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-primary-main  ">
              Subsidies/Grants
            </h1>

            

            <div className="w-full h-full flex justify-center items-center flex-wrap">

      
              
              
            <div className="w-full  min-h-96 m-auto shadow-md shadow-black rounded-lg bg-[#FDF9F7]   mb-10 mt-10  flex-col items-start justify-start p-10 space-y-5">
       
         
    </div>


            </div>
          </div>
        </div>

        

      </section>

    
      <Footer />
    </div>
  );
}

export default Subsidies;
