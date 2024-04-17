'use client';
import React from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
function FeedAndFodder() {
  const { isScroll } = useMyContext();
  const locale = useLocale().locale;
  const animalBreeding=[
    {
      title:'N.L.M Scheme',
      description:'The focus of the scheme is on entrepreneurship development and breed improvement in poultry, sheep, goat and piggery including feed and fodder development.'
    },
    {
      title:'SSG',
      description:''
    },
    {
      title:'South Arican Tall',
      description:''
    },
    {
      title:'Cowpea',
      description:''
    },
    {
      title:'Fodder Plus FPO',
      description:''
    }
  ]
  return (
    <div className={`w-full h-full absolute   z-[-1] ${isScroll ? 'top-36' : ''}  `}>
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
              Feed & Fodder
            </h1>

            

            <div className="w-full h-full flex justify-center items-center flex-wrap">

            {
  animalBreeding.map((_, id) => (
    <div key={id} className="max-w-3xl w-full m-10 rounded-3xl h-[400px] shadow-2xl bg-slate-50 p-16">
      <div className="m-auto">
        <h1 className="text-primary-main text-2xl md:text-3xl text-center "> {_.title} </h1>
        <div className="mt-10">
          <p className='text-lg'>{_.description}</p>
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

export default FeedAndFodder;
