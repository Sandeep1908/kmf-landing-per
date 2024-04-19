'use client';
import React from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
function AnimalHealth() {
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
      <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
                      <Link className="  text-sm font-bold  " href={`/` || ''}>
              Home
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold    " href={` `}>
              Animal Husbandery
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main  " href={` `}>
              Animal Health
            </Link>
            
      </div>
      <section className=" relative w-full   h-auto pt-10  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-3 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col space-y-2 justify-center items-start    p-1   ">
            <h1 className="text-4xl font-heading text-center w-full relative flex justify-center items-center   text-primary-main before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-primary-main  ">
              Animal Health
            </h1>

            

            <div className="w-full h-full flex justify-center items-center flex-wrap">

            {
  Array.from({ length: 6 }).map((_, id) => (
    <div key={id} className="max-w-3xl w-full m-10 rounded-3xl h-[400px] shadow-2xl bg-slate-50 p-16">
      <div className="m-auto">
        <h1 className="text-primary-main text-2xl md:text-3xl text-center "> Disease control and prevention </h1>
        <div className="mt-10">
          {/* Your content here */}
        </div>
      </div>
    </div>
  ))
}
           
              
              
            


            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AnimalHealth;
