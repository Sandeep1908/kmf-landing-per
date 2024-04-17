'use client';
import React from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
function Scheme() {
  const { isScroll } = useMyContext();
  const locale = useLocale().locale;
  const schemes = [
    {
      title: 'Government of India Schemes',
      link: '/en/animal-husbandery/scheme/goi',
      image:'https://ehealth.eletsonline.com/wp-content/uploads/2023/08/Government-of-India-logo.jpg'
    },
    {
      title: 'Government of Karnataka Schemes',
      link: '/en/animal-husbandery/scheme/gok',
      image:'https://cdn.telanganatoday.com/wp-content/uploads/2021/04/Karnataka-govt-announces-state-wide-close-down-for-14-days.jpg'
    },
    {
      title: ' Other Schemes',
      link: '/en/animal-husbandery/scheme/other-scheme',
      image:'https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_326/post_20395626/full.jpg'
    }
  ];
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
          className={`w-full  h-full    object-cover absolute top-0   ${
            isScroll ? 'h-[400px]' : ''
          } `}
        />
      </section>
      <section className=" relative w-full h-auto   max-w-7xl m-auto pt-10  ">
        <h1 className="text-2xl w-full uppercase p-3 bg-primary-main text-white  shadow-lg relative flex justify-center items-center before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-primary-main  ">
          Schemes
        </h1>

        <div className="w-full  flex flex-wrap  pt-10 pb-10 justify-between items-center     ">
          {schemes?.map((item, id) => {
            if(id%2==0){
                return (
                    <div key={id} className="relative w-96  h-96   bg-[#f99457] group ">
                             <div className='absolute w-full h-full top-0 left-0 z-20'>
                     <img className='w-full h-full opacity-0  object-fill transition duration-0 group-hover:opacity-30 group-hover:duration-1000 ' src={item?.image} alt="" />
                </div>

                      <div className="full w-full h-full flex flex-col justify-between p-6 md:p-20 ">
                        <div className="w-full h-full z-50">
                          <h1 className="text-white text-xl md:text-4xl "> {item?.title}</h1>
                        </div>
      
                        <div className="w-28 h-7 md:w-40 md:h-14 border-[1px] border-white z-50 group  ">
                          <Link href= {item?.link || ''}>
                           
                            <div className="w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]">
                              <p className="text-sm md:text-lg text-white">Know More</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
            }
            else{
                return (
                    <div key={id} className="relative w-96  h-96  shadow-lg group  bg-[#06427C] ">
                          <div className='absolute w-full h-full top-0 left-0 z-20'>
                     <img className='w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 ' src={item?.image} alt="" />
                </div>
                      <div className="full w-full h-full flex flex-col justify-between p-6 md:p-20 ">
                        <div className="w-full h-full z-50">
                          <h1 className="text-white text-xl md:text-4xl "> {item?.title}</h1>
                        </div>
      
                        <div className="w-28 h-7 md:w-40 md:h-14 border-[1px] group border-white z-50 ">
                          <Link href={item?.link || ''}>
                            {' '}
                            <div className="w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]">
                              <p className="text-sm md:text-lg text-white">Know More</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
            }
            
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Scheme;
