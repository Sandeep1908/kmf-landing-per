'use client';
import React from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
function Other() {
  const { isScroll } = useMyContext();
  const locale = useLocale().locale;
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
          className={`w-full  h-full    object-cover absolute top-0  ${
            isScroll ? 'h-[400px]' : ''
          } `}
        />
      </section>
      <h1 className="text-2xl w-full mt-5 p-3 uppercase bg-primary-main text-white  shadow-lg relative flex justify-center items-center before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-primary-main  ">
        Other Schemes
      </h1>
      <section className=" relative w-full flex flex-col space-y-5 mb-10 max-w-7xl m-auto h-auto pt-10  ">
        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main  uppercase "> Sri Kshetra Dharmasthala Rural Development Project(SKDRDP </h1>

        <p className='text-sm'>For construction of buildings, equipments, artificial insemination kit, milk testing machine and other office equipments of HSCs.</p>
         
        </div>

        



      </section>

      <Footer />
    </div>
  );
}

export default Other;








