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

function MilkUnion() {
  const [milkUnion, setMilkUnions] = useState([]);
  const Api = useApi();
  const params=useParams()
  const [loading,setLoading]=useState(true)
const locale=useLocale().locale
  useEffect(() => {
    (async () => {
      const { data } = await Api.get('/api/milk-unions?sort[0]=createdAt:asc');
      
      setMilkUnions(data.data);
      setLoading(false)
    })();
  }, []);
  return (
    <div className="w-full h-full absolute top-36 z-[-1]  ">
      <section className={`w-full h-72 pt-28 relative  grid place-items-center company-bg`}>
        <img src={HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
        <img src={Logo.src} alt="milk-union-logo" className="w-[200px] " />
      </section>

      <section className="w-full p-2  ">
        <div
          className="max-w-7xl  m-auto p-3  rounded-tl-3xl  rounded-br-3xl  bg-white md:h-[674px] "
          style={{ boxShadow: '0px 11px 49px 0px rgba(0, 0, 0, 0.15)' }}>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=14_yIj9s5_1n5VOPDac5zG7F_0hRgLFo&ehbc=2E312F&noprof=1" width="100%" height="100%"></iframe>
        </div>
      </section>

      <section className="w-full    pt-10 ">
      <h1 className='text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white '>MILK UNIONS</h1>
      <div className='flex justify-center space-x-3 items-center mt-10 border-b w-fit m-auto'>
        <Link className='font-bold' href={`${locale==='kn'?'/kn':'/'}`}>Home</Link>
        <Link className='text-primary-main font-bold' href={`/${locale}/milk-union`}>/ Milk Unions</Link>
      </div>
        <div className="max-w-7xl m-auto p-2 shadow-lg mt-10    shadow-white bg-white flex flex-col justify-center items-center space-y-5">
          {milkUnion.map((union, id) => {
           console.log(union)
            return (
            
              <UnionCard
                key={union?.id}
                name={union?.attributes?.name}
                image={union?.attributes?.image?.data?.[0]?.attributes?.url}
                description={union?.attributes?.about}
                link={`/${params.locale}/milk-union/${union?.id}`}
            
              />
            
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MilkUnion;
