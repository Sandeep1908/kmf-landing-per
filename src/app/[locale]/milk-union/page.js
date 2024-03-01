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

function MilkUnion() {
  const [milkUnion, setMilkUnions] = useState([]);
  const Api = useApi();
  const params=useParams()
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    (async () => {
      const { data } = await Api.get('/api/milk-unions');
      
      setMilkUnions(data.data);
      setLoading(false)
    })();
  }, []);
  return (
    <div className="w-full h-full absolute top-36 z-[-1] bg-[#F6F6F6]">
      <section className={`w-full h-72 pt-28 relative  grid place-items-center company-bg`}>
        <img src={HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
        <img src={Logo.src} alt="milk-union-logo" className="w-[200px] " />
      </section>

      <section className="w-full p-2 bg-[#F6F6F6]">
        <div
          className="max-w-7xl  m-auto p-3  rounded-tl-3xl  rounded-br-3xl  bg-white md:h-[674px] "
          style={{ boxShadow: '0px 11px 49px 0px rgba(0, 0, 0, 0.15)' }}>
          <iframe
            align="middle"
            allowfullscreen=""
            frameborder="0"
            height="100%"
           scrolling={true}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.518745456276!2d77.60279164133709!3d12.938623223603017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ef1a5c4365%3A0xf0eb81ef4c8cd455!2sKMF!5e0!3m2!1sen!2sin!4v1456068635330"
            width="100%"></iframe>
        </div>
      </section>

      <section className="w-full bg-[#F6F6F6]  pt-10 ">
      <h1 className='text-primary-gradient text-center pt-5  pb-5 text-3xl '>MILK UNIONS</h1>
        <div className="max-w-7xl m-auto p-2 shadow-lg  border border-black shadow-white bg-white grid place-content-center md:grid-cols-3 gap-5">
          {milkUnion.map((union, id) => {
            console.log(union)
            return (
            <Link href={`/${params.locale}/milk-union/${union?.id}`} key={id}>
              <UnionCard
                key={union?.id}
                name={union?.attributes?.name}
                image={union?.attributes?.image?.data?.[0]?.attributes?.url}
            
              />
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MilkUnion;
