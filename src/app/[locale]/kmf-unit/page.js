'use client';

import React, { useEffect, useState } from 'react';
import Logo from '@/images/logo/logo.png';
import HeroImg from '@/images/milk-union/milk-union-home.png';
import unionMapImg from '@/images/milk-union/union-map.png';
import UnionCard from './UnionCard';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import useLocale from '@/hooks/useLocale';

function KmfUnit() {
  const [kmfUnits, setKmfUnits] = useState([]);
  const Api = useApi();
  const params=useParams()
  const [loading,setLoading]=useState(true)
const locale=useLocale().locale
  useEffect(() => {
    (async () => {
      const { data } = await Api.get('/api/units-of-kmfs?sort[0]=createdAt:asc');
      
      setKmfUnits(data.data);
   
    })();
  }, []);
  return (
    <div className="w-full h-full absolute top-36 z-[-1]  ">
      <section className={`w-full h-72 pt-28 relative  grid place-items-center company-bg`}>
        <img src={HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
        <img src={Logo.src} alt="milk-union-logo" className="w-[200px] " />
      </section>

   

      <section className="w-full    pt-10 ">
      <div className="mb-32  mt-20  relative w-full  flex justify-center items-center ">
          
              <h1 className=" text-primary-main relative max-w-[300px] m-auto text-center z-10 font-heading text-xl font-extrabold uppercase">
             {locale==='kn'?'':'KMF UNITS'}
              </h1>
            </div>
      <div className='flex justify-center space-x-3 items-center mt-10 border-b w-fit m-auto'>
        <Link className='font-bold' href={`${locale==='kn'?'/kn':'/'}`}>Home</Link>
        <Link className='text-primary-main font-bold' href={`/${locale}/milk-union`}>/ KMF UNITS</Link>
      </div>

    
        <div className="max-w-7xl m-auto p-2 shadow-lg mt-10    shadow-white bg-white flex flex-col justify-center items-center space-y-5">
          {kmfUnits.map((unit, id) => {
            console.log("units",unit)
         
            return (
            
              <UnionCard
                key={unit?.id}
                name={unit?.attributes?.title}
                image={unit?.attributes?.image?.data?.[0]?.attributes?.url}
                description={unit?.attributes?.description}
                link={`/${params.locale}/kmf-unit/${unit?.id}`}
            
              />
            
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default KmfUnit;
