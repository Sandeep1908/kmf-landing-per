'use client';
import React, { useState, useEffect } from 'react';
import useApi from '@/hooks/useApi';
import Footer from '@/components/Footer';
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useMyContext } from '@/context/headerContext';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
function FeedFodder() {
  const [feedFodder, setFeedFodder] = useState([]);
  const { isScroll } = useMyContext();
  const axios = useApi();
  const locale=useLocale().locale
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/feed-and-fooders');
      
      setFeedFodder(data.data);
       
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
            Feed and Fooder
          </Link>
          
        </div>

        <section className=" relative w-full   h-auto mt-20  ">
        <div className="mb-20     relative w-full  flex justify-center items-center ">
              <img
                src="/images/heading/heading-primary.svg"
                className="absolute   w-[530px] top-[-60px]    object-contain"
              />
              <h1 className=" text-primary-main relative z-10 font-heading text-2xl font-extrabold uppercase">
              {locale==='kn'?'':' Feed and Fodder'}
              </h1>
            </div>
       
        <div className="w-full  h-full flex flex-col p-3 space-y-3 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col space-y-2 justify-center items-start    p-1   ">
            <div className="w-full h-full flex justify-center items-center flex-wrap">
              {feedFodder?.map((_, id) => {
                return (
                  <div
                    key={id}
                    className="max-w-3xl w-full m-10 rounded-3xl h-[400px] shadow-2xl bg-slate-50 p-16">
                    <div className="m-auto">
                      <h1 className="text-primary-main text-2xl md:text-3xl text-center ">
                        {' '}
                        {_?.attributes?.title}{' '}
                      </h1>
                      <div className="mt-10">
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

export default FeedFodder;