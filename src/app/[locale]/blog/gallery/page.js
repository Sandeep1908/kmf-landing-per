'use client';

import React, { useEffect, useState } from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';

// import { gallery } from '@/configtext/gallery';
import ImgaeCard from './ImageCard';
import Footer from '@/components/Footer';
import VideCard from './VideoCard';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';

function Gallery() {
 
  const [currentIndex, setCurrentIndex] = useState(0);
 
 
  const tabs=[
    {
      tabs:'Video',
      data:<VideCard/>
    },
    {
      tabs:'Images',
      data:<ImgaeCard/>
    }
  ]

 
  const locale=useParams().locale
  

  const handleClickItem = (idx) => {
    setCurrentIndex(idx);
 
  };

  return (
    <div className="w-full h-full absolute top-36 z-[-1]  bg-[#F6F6F6]  ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>
      <section className="max-w-7xl m-auto pt-10 bg-[#F6F6F6] ">
        <div className="w-full space-y-5 p-4 ">
          <h1 className="text-center text-xl text-primary-main">{locale==='en'?`Gallery`:`
ಗ್ಯಾಲರಿ`}</h1>

          <div className="w-full flex justify-center items-center pt-10 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
            <ul className="flex gap-5">
              {tabs?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      currentIndex === idx
                        ? 'text-secondary-main relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-secondary-main'
                        : ''
                    } uppercase`}
                    onClick={() => handleClickItem(idx)}>
                    {item?.tabs}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>


        {tabs?.map((tab, id) => {
        if (currentIndex === id) {
          return tab.data;
        }
      })} 

       
      </section>

      <Footer />
    </div>
  );
}

export default Gallery;
