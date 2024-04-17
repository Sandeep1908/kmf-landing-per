'use client';

import React, { useEffect, useState } from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';

// import { gallery } from '@/configtext/gallery';
import ImgaeCard from './ImageCard';
import Footer from '@/components/Footer';
import VideCard from './VideoCard';
import BlogCard from './BlogCard';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';

function Gallery() {
 
  const [currentIndex, setCurrentIndex] = useState(0);
 
 
  const tabs=[
    {
      tabs:'News and Events',
      data:<BlogCard/>
      
    },
    { 
      tabs:'Press Release'

    },
    {
      tabs:'Tv Commercials'
    }
    // {
    //   tabs:'Video',
    //   data:<VideCard/>
    // },
    // {
    //   tabs:'Images',
    //   data:<ImgaeCard/>
    // }
  ]

 
  const locale=useParams().locale
  

  const handleClickItem = (idx) => {
    setCurrentIndex(idx);
 
  };

  return (
    <div className="w-full h-full absolute top-36 z-[-1]     ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>
      <section className="max-w-7xl m-auto pt-10   ">
        <div className="w-full space-y-5 p-4 ">
          <h1 className="text-center text-5xl text-primary-main">{locale==='en'?`Gallery`:`
ಗ್ಯಾಲರಿ`}</h1>

          <div className="w-full flex justify-center items-center pt-10 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
            <ul className="flex gap-5">
              {tabs?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      currentIndex === idx
                        ? 'text-primary-main text-xl font-bold relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-primary-main'
                        : 'text-sm'
                    } uppercase`}
                    onClick={() => handleClickItem(idx)}>
                    {item?.tabs}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>


<div className='w-full mt-10'>


        {tabs?.map((tab, id) => {
        if (currentIndex === id) {
          return tab.data;
        }
      })} 
      </div>

       
      </section>

      <Footer />
    </div>
  );
}

export default Gallery;
