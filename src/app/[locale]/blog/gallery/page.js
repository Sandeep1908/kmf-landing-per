'use client';

import React, { useEffect, useState } from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';

 
import Footer from '@/components/Footer';
 
import BlogCard from './BlogCard';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import PressRelease from './PressRelease';
import brand from '@/images/portfolio/BrandAmbassador.png'
 
import Link from 'next/link';

function Gallery() {
 
  const [currentIndex, setCurrentIndex] = useState(0);
 
 
  const tabs=[
    {
      tabs:'News and Events',
      data:<BlogCard/>
      
    },
    { 
      tabs:'Press Release',
      data:<PressRelease/>

    },
    
  ]

 
  const locale=useParams().locale
  

  const handleClickItem = (idx) => {
    setCurrentIndex(idx);
 
  };

  return (
    <div className="w-full  absolute top-42 z-[-1]     ">
      <section className={`w-full  h-[750px] pt-28 relative  grid place-items-center company-bg`}>
        <img src={'/images/gallery.png'} className="w-full h-full object-fill absolute top-0 z-[-1]" />
      </section>
      <section className="max-w-7xl h-fit m-auto pt-10   ">
        <div className="w-full space-y-5 p-4 ">
        <div className="mb-20  mt-20  relative w-full  flex justify-center items-center ">
          
              <h1 className=" text-primary-main relative z-10 font-heading text-xl font-extrabold uppercase">
              {locale==='en'?`Gallery`:`
ಗ್ಯಾಲರಿ`}
              </h1>
            </div>
          

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

<Link href={`/${locale}/blog/tv-commercial`}>
<li
                    
                    className={` 
                      
                     text-sm   relative before:absolute  
                         
                  uppercase`}
                    >
                    Tv commercial
                  </li>

                  </Link>
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
