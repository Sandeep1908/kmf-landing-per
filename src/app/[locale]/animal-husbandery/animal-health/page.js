'use client';
import React, { useState,useEffect } from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useApi from '@/hooks/useApi';
function AnimalHealth() {
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

          <div className="mb-20    relative w-full  flex justify-center items-center ">
              <img
                src="/images/heading/heading-primary.svg"
                className="absolute   w-[530px] top-[-60px]    object-contain"
              />
              <h1 className=" text-primary-main relative z-10 font-heading text-2xl font-extrabold uppercase">
              {locale==='kn'?'':'Animal Health'}
              </h1>
            </div>
           

            

            <div className="w-full h-full flex justify-center items-center flex-wrap">
            {animalHealth?.map((_, id) => {
                return (
                  <div
                    key={id}
                    className="max-w-3xl w-full m-10 rounded-3xl min-h-[500px] overflow-auto shadow-2xl bg-slate-50 p-16">
                    <div className="m-auto">

                    <div className=' w-full relative flex justify-center items-center'>
            <img src='/images/heading/heading-color/group.png' className='absolute z-[1] w-[450px] top-[-56px]   object-contain'/>


                        <h1 className="w-full relative max-w-[300px] m-auto text-center  text-primary-main text-xl   z-[100] ">
                        {_?.attributes?.title}
                        </h1>
                        </div>
                      
                     
                      <div className="mt-20">
                        {_?.attributes?.content && (
                          <BlocksRenderer
                            content={_?.attributes?.content}
                            blocks={{
                              paragraph: ({ children }) => <p className="text-md">{children}</p>,
                              heading: ({ children, level }) => {
                                switch (level) {
                                  case 1:
                                    return (
                                      <h1 className="text-2xl text-primary-main">{children}</h1>
                                    );
                                  case 2:
                                    return <h2 className="text-lg">{children}</h2>;
                                  case 3:
                                    return <h3>{children}</h3>;
                                  case 4:
                                    return <h4>{children}</h4>;
                                  case 5:
                                    return <h5>{children}</h5>;
                                  case 6:
                                    return <h6>{children}</h6>;
                                  default:
                                    return <h1>{children}</h1>;
                                }
                              },
                              list: ({ children }) => {
                                return <li>{children}</li>;
                              },
                              code: ({ children }) => (
                                <h1 className="text-2xl bg-primary-main text-white p-2 shadow-lg">
                                  {children}
                                </h1>
                              )
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              
              
            


            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AnimalHealth;
