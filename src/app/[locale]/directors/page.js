'use client';

import React, { useEffect, useState } from 'react';

import directorImg from '@/images/directors/bod.jpg';
import Footer from '@/components/Footer';
import TeamCard from './TeamCard';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import Zoom from 'react-reveal/Zoom';


function Directors() {
  const [directors, setDirectors] = useState([]);
  const axios = useApi();
  const locale = useParams().locale;
  const [chairmain, setChairman] = useState([]);
   

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/directors?sort[0]=createdAt:asc');

      const { data: chairman } = await axios.get('/api/chairmain');

      const directorsData = data?.data?.map((item, id) => {
        return {
          title: item?.attributes?.name,
          image: item?.attributes?.image?.data?.map((item) => item?.attributes?.url),
          description: item?.attributes?.description
        };
      });
      setDirectors(directorsData);
      setChairman(chairman?.data);
      setLoading(false)
    })();
  }, []);

 

  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={directorImg.src} className="w-full h-full object-cover absolute   z-[-1]" />
      </section>


      <section className="w-full   pt-10  shadow-lg bg-primary-subtle ">
      <div className="mb-20  mt-20  relative w-full  flex justify-center items-center ">
              <img
                src="/images/heading/heading-primary.svg"
                className="absolute   w-[530px] top-[-60px]    object-contain"
              />
              <h1 className=" text-primary-main relative z-10 font-heading text-xl font-extrabold uppercase">
              
          {locale === 'en' ? 'Board of Directors' : 'ನಿರ್ದೇಶಕರ ಮಂಡಳಿ'}
              </h1>
            </div>
         
        <div className="p-12 h-full  ">
        <div className='p-10 h-full flex justify-center items-center   '>
        <div className='w-full max-w-7xl mt-auto min-h-44  md:h-2/4   justify-center items-center  rounded-tl-3xl rounded-br-3xl flex flex-col   p-3'>
            <div className='md:w-1/2 flex   justify-center  items-center mt-6 lg:pt-3 lg:pb-3 md:mt-0 rounded-full transition-all duration-300 hover:scale-[1.1]  '  >
              <Zoom>
              <img className='w-[200px] h-[200px]   object-contain  sm:w-[350px] sm:h-[290px] transition-all duration-300   ' src={chairmain?.attributes?.image?.data?.attributes?.url} alt="" />
              </Zoom>
            </div>
            <div className=' md:w-2/3 flex flex-col justify-center items-center mt-3 md:p-3 md:items-center lg:mt-0 '>
              <div>
                <p className='text-3xl md:text-4xl font-lato font-bold text-start text-black'>{chairmain?.attributes?.name}</p>
                <p className=' text-lg flex justify-center items-center  w-full  font-lato md:text-start text-black '>{chairmain?.attributes?.description}</p>
              </div>
           
            </div>
        </div>
    
      </div>
          <div className="grid md:grid-cols-4  sm:grid-cols-3 grid-cols-1 place-items-center gap-5 md:flex-row mt-10 justify-center">

    
            {directors?.map((item, id) => {
              return (
                <TeamCard
                  key={id}
                  imgUrl={item?.image?.[0]}
                  fullName={item?.title}
                  desc={item?.description}
                /> 
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Directors;
