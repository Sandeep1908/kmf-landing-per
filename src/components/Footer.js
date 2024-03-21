'use client';
import React, { useEffect, useState } from 'react';
import locationVectorIco from '../images/footer/locationVector.svg';
import callVectorIco from '../images/footer/callVector.svg';
import msgVectorIco from '../images/footer/msgVector.svg';

import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import Link from 'next/link';
function Footer() {
  const [footerItem, setFooterItem] = useState([]);
  const params = useParams();
  const axios = useApi();
  const locale = params.locale;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/footers');
      const footer = data?.data?.map((item) => {
        return {
          address: item?.attributes?.address,
          telephone: item?.attributes?.telephone,
          email: item?.attributes?.email,
          copyright: item?.attributes?.copyright
        };
      });
      setFooterItem(footer);
    })();
  }, [params?.locale]);
  return (
    <section className="w-full     relative bg-primary-subtle    ">
      <div className=" z-10 relative l max-w-[1282px]   m-auto flex flex-col justify-between items-center md:items-start">
        <div className="    w-full flex flex-col justify-center items-center   md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col justify-center items-center md:items-start p-1 max-w-96 space-y-5">
            <h1 className="text-lg mb-5 relative before:absolute before:-bottom-3 before:w-10 before:h-1 before:bg-primary-lighter hover:scale-125 transition-all duration-300">
           {locale==='en'?'Address':'ವಿಳಾಸ'}
            </h1>

            <div className="flex justify-center items-start space-x-3">
              <img src={locationVectorIco.src} className='hover:scale-125 transition-all duration-300' />

              <div className="flex flex-col justify-center items-center md:items-start space-y-5">
                <p className="text-neutral-dark1 text-left text-sm ">
                  {footerItem?.[0]?.address}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-full p-2 max-w-96 justify-center space-y-5 items-center md:items-start">
            <h1 className="text-lg mb-5 relative before:absolute before:-bottom-3 before:w-10 before:h-1 before:bg-primary-lighter hover:scale-125 transition-all duration-300">
            {locale==='en'?'Telephone':'ದೂರವಾಣಿ'}
            </h1>

            <div className="flex justify-center items-start space-x-3">
              <img src={callVectorIco.src} className='hover:scale-125 transition-all duration-300' />

              <div className="flex flex-col justify-center items-start space-y-5">
                <p className="text-neutral-dark1 text-left text-sm">
                  {footerItem?.[0]?.telephone}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full h-full flex-col p-2 max-w-96 space-y-5 justify-center items-center md:items-start">
            <h1 className="text-lg mb-5 relative before:absolute before:-bottom-3 before:w-28 before:h-1 before:bg-primary-lighter hover:scale-125 transition-all duration-300">
            {locale==='en'?'Email':'ಮಿಂಚಂಚೆ'}
            </h1>

            <div className="flex justify-center items-start space-x-3">
              <img src={msgVectorIco.src} className='hover:scale-125 transition-all duration-300' />

              <div className="flex flex-col justify-center items-start space-y-5">
                <p className="text-neutral-dark1 text-left text-sm"> {footerItem?.[0]?.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full justify-center items-center   space-y-6  flex-wrap md:flex-row">
          <div className="flex flex-col justify-start items-start">
            <p className="text-sm">© {footerItem?.[0]?.copyright}</p>
            <p className="text-sm">
              {' '}
              All rights reserved to{' '}
              <Link href={''} className="text-blue-500 font-bold">
                {' '}
                KMF-MIS (CENTRAL OFFICE).
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
