'use client';

import React, { useEffect, useState } from 'react';

import directorImg from '@/images/directors/bod.jpg';
import personImg from '@/images/directors/person.png';
import headImg from '@/images/directors/1-1.png';
import headengImg from '@/images/directors/headeng.png';
import Footer from '@/components/Footer';
import TeamCard from './TeamCard';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import Loader from '@/components/Loader';


function Directors() {
  const [directors, setDirectors] = useState([]);
  const axios = useApi();
  const locale = useParams().locale;
  const [chairmain, setChairman] = useState([]);
  const [loading,setLoading]=useState(true)

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

  if(loading)return <Loader/>

  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={directorImg.src} className="w-full h-full object-cover absolute top-10 z-[-1]" />
      </section>


      <section className="w-full   pt-10  shadow-lg ">
        <h1 className="text-center text-primary-main text-xl">
          {locale === 'en' ? 'Board of Directors' : 'ನಿರ್ದೇಶಕರ ಮಂಡಳಿ'}
        </h1>
        <div className="p-12 h-full  ">
          <div className="w-full max-w-7xl m-auto min-h-42 shadow-md md:h-2/4 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl flex flex-col md:flex-row p-3">
            <div className="md:w-1/2 flex justify-center items-center mt-6 lg:pt-3 lg:pb-3 md:mt-0 ">
              <img
                className="w-full max-w-[300px]"
                src={chairmain?.attributes?.image?.data?.attributes?.url}
                alt=""
              />
            </div>
            <div className=" md:w-1/2 flex flex-col justify-center items-center mt-3 md:p-3 md:items-start lg:mt-0 ">
              <div>
                <p className="text-2xl text-center font-bold text-neutral-dark1">
                  {chairmain?.attributes?.name}
                </p>
                <p className="text-base text-center font-normal text-neutral-dark2">
                  {chairmain?.attributes?.description}
                </p>
              </div>
              <div className="mt-3 lg:mt-12 p-3 md:p-0">
                <p className="text-base font-normal text-justify">
                  {chairmain?.attributes?.message}
                </p>
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