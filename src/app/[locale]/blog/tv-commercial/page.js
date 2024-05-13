'use client';

import React, { useEffect, useState } from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';
import Link from 'next/link';
import useApi from '@/hooks/useApi';

import Footer from '@/components/Footer';
import downarrowIco from '@/images/icons/downarrow.svg';
import uparrowIco from '@/images/icons/uparrow.svg';

import { useParams } from 'next/navigation';
import TvcommercialAccordion from '@/components/TvcommercialAccordion';

function Tvcommercial() {
  const [brandAmbassador, setBrandAmbassador] = useState([]);

  const [commercialItems, setCommercialItems] = useState(null);
  const [openAccordion, SetOpenAccordion] = useState(null);
  const [brandAsset, setBrandAsset] = useState([]);

  const axios = useApi();
  const arrows = {
    down: downarrowIco.src,
    up: uparrowIco.src
  };
  const locale = useParams().locale;
  const handleAccordionClick = (accordionId) => {
    SetOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  useEffect(() => {
    (async () => {
      const { data: brandAmbassador } = await axios.get('/api/brand-ambassadors');
      const { data: commercialItems } = await axios.get('/api/tv-commercial-items');

      
    
      
      setBrandAmbassador(brandAmbassador.data);
      setCommercialItems(commercialItems.data);
    })();
  }, []);

  return (
    <div className="w-full  absolute top-36 z-[-1]     ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>
      <section className="max-w-7xl h-fit m-auto pt-10   ">
        <div className="w-full space-y-5 p-4 ">
          <div className="mb-20  mt-20  relative w-full  flex justify-center items-center ">
            <h1 className=" text-primary-main relative z-10 font-heading text-xl font-extrabold uppercase">
              {locale === 'en'
                ? `Gallery`
                : `
ಗ್ಯಾಲರಿ`}
            </h1>
          </div>

          <div className="w-full flex justify-center items-center pt-10 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
            <ul className="flex gap-5">
              <Link href={`/${locale}/blog/gallery`}>
                <li
                  className={` 
                   text-sm relative  
                       
                  uppercase`}>
                  NEWS AND EVENTS
                </li>
              </Link>

              <Link href={`/${locale}/blog/gallery`}>
                <li
                  className={` 
                 text-sm relative  
                       
                  uppercase`}>
                  Press Release
                </li>
              </Link>
              <li
                className={` 
                   text-primary-main text-xl font-bold relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-primary-main
                         
                    uppercase`}>
                Tv Commercials
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-auto bg-[#F6F6F6] ">
          <section className="max-w-[1282px] w-full h-full bg-white   ">
            <div className="w-full h-full flex flex-col space-x-5 justify-between items-start lg:flex-row lg:justify-start">
              <div className="w-full h-full flex flex-col space-y-28   ">
                <div className="w-full h-full">
                  <h1 className="text-2xl text-primary-main  ">Images</h1>
                  <div className="w-full h-full  grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3     gap-5 lg:flex-row lg:items-start">
                    {brandAmbassador?.map((items) => {
                      return items.attributes.assets?.data?.map((item, id) => {
                        const validExtensions = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG'];
                        if (validExtensions.includes(item?.attributes?.ext)) {
                          return (
                            <img
                              key={id}
                              src={item?.attributes?.url}
                              className="w-96 h-80    transition-all duration-300 hover:scale-[1.1]"
                            />
                          );
                        }
                      });
                    })}
                  </div>
                </div>

                <div className="w-full h-full">
                  <h1 className="text-2xl text-primary-main ">Videos</h1>
                  <div className="w-full h-full  grid grid-cols-1 place-items-center sm:grid-cols-2 place-item-center     gap-5 lg:flex-row lg:items-start">
                    {brandAmbassador?.map((items) => {
                      return items.attributes.assets?.data?.map((item, id) => {
                        const validExtensions = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG'];
                        if (!validExtensions.includes(item?.attributes?.ext)) {
                          return (
                            <video
                              autoPlay
                              controls
                              loop
                              muted
                              key={id}
                              src={item?.attributes?.url}
                              className="w-100   h-96  object-fill     transition-all duration-300 hover:scale-[1.1]"
                            />
                          );
                        }
                      });
                    })}
                  </div>
                </div>
              </div>

              <div className=" w-full max-w-80 h-full transition-all duration-300  ">
                <TvcommercialAccordion
                  title={'Brand Ambassador'}
                  id={100}
                  open={openAccordion == 100}
                  arrow={arrows}
                  onToggle={handleAccordionClick}>
                  <ul className="">
                    {brandAmbassador?.map((item, index) => {
                      return (
                        <Link
                          href={`/${locale}/blog/tv-commercial/${item?.id}/?subid=${item?.id}` || ''}
                          key={index}
                          onClick={() => setOpenNav((prev) => !prev)}>
                          <li
                            key={index}
                            className="flex items-center  relative  text-light-light4 border-b-2 border-b-light-light4 pb-2 space-x-3 ">
                            <span>{item?.attributes?.name}</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </TvcommercialAccordion>

                {commercialItems?.map((item, id) => {
                  return (
                    
                    <Link    key={id}  href={`/${locale}/blog/tv-commercial/${item?.id}` || ''}>
                    <li
                   
                   
                      className="w-full list-none transition-all duration-300 bg-primary-main ">
                      <button className="flex items-center justify-between relative  text-light-light4 border-b-2 border-b-light4 p-4 w-full ">
                        <div className="w-full flex space-x-2 ">
                          <span className=" text-sm text-white">{item?.attributes?.name}</span>
                        </div>
                      </button>
                    </li>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Tvcommercial;
