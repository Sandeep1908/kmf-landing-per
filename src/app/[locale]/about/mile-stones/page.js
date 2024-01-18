'use client';
import React, { useEffect, useState } from 'react';
import organizationHero from '@/images/about/organization-chart/organization-hero.png';
import mileStoneIco from '@/images/about/milestone/milestone.png';
import { mileStone } from '@/configtext/milestone';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
function OrganizationChart() {
  const [mileStones, setMileStone] = useState([]);
  const [selectedYear, setSelectedYear] = useState(1955);
  const [nextYear, setNextYear] = useState(1955);
  const [description, setDescription] = useState([]);

  const axios = useApi();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/milestones?sort[0]=year:asc');
      console.log("milestone",data.data)
      const milestones = data?.data?.map((item) => {
        return { year: item?.attributes?.year, description: item?.attributes?.description };
      });

      
      const filterdata = milestones?.filter(
        (item) => parseInt(item.year) >= selectedYear && parseInt(item.year) <= nextYear
      );
 
      
      setDescription(filterdata);
    })();

    setMileStone(mileStone);
  }, [selectedYear, nextYear]);

  const handleYear = (year,idx) => {
 
    setSelectedYear(nextYear)
    setNextYear(year);
    
     
  };

  const handleSlideChange = (idx) => {
    console.log(idx)
  };
  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img
          src={organizationHero.src}
          className="w-full h-full object-cover absolute top-0 z-[-1]"
        />
      </section>

      <section className="w-full h-full pt-10  ">
        <div className="  w-full  h-full lg:flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full h-full flex flex-col justify-center items-start ">
            <h1 className="text-2xl text-primary-main">Mile Stone</h1>

            <div className="w-full  pt-5 overflow-auto">
              <ul className="w-full h-full flex flex-col space-y-5 justify-start items-start">
                {description?.map((item, id) => {
                  return (
                    <li key={id} className="flex justify-start items-center space-x-4">
                      <div className='relative'>
                        <img src={mileStoneIco.src} />
                        <p className='absolute top-[17px] left-2 text-xs'>{item.year}</p>
                      </div>
                      <span>{item.description}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <ul className="flex  justify-between  items-center p-6 w-full mt-10  overflow-auto">
              {mileStones?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className=" flex items-center justify-center space-x-3 relative cursor-pointer     "
                    onClick={() => handleYear(item?.year,idx)}>
                    <p
                      className={` text-xl ${
                        nextYear === item.year ? 'text-primary-main' : 'text-neutral-light1'
                      }`}>
                      {item?.year}
                    </p>
                    {nextYear === item?.year && <img src={item?.image} />}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* <div className="  flex w-full  h-60 lg:hidden flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col justify-center items-start ">
            <h1 className="text-2xl text-primary-main uppercase">Mile Stone</h1>

            <div className="w-full pt-5">
              <ul className="w-full flex flex-col space-y-5 justify-start items-start">
                <li className="flex justify-start items-center space-x-4">
                  {' '}
                  <div>
                    <img src={mileStoneIco.src} />
                  </div>
                  <span>
                    8 Launching of New Products Jamoon Mix (March1998), Mysuru Pak (Dec.1998), Tetra
                    Fino Packaged Nandini “Goodlife”milk(1999)
                  </span>
                </li>

                <li className="flex justify-start items-center space-x-4">
                  {' '}
                  <div>
                    <img src={mileStoneIco.src} />
                  </div>
                  <span>
                    8 Launching of New Products Jamoon Mix (March1998), Mysuru Pak (Dec.1998), Tetra
                    Fino Packaged Nandini “Goodlife”milk(1999)
                  </span>
                </li>

                <li className="flex justify-start items-center space-x-4">
                  {' '}
                  <div>
                    <img src={mileStoneIco.src} />
                  </div>
                  <span>
                    8 Launching of New Products Jamoon Mix (March1998), Mysuru Pak (Dec.1998), Tetra
                    Fino Packaged Nandini “Goodlife”milk(1999)
                  </span>
                </li>
              </ul>
            </div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper flex justify-center items-center w-full pt-10"
              onSlideChange={(e) => handleSlideChange(e.realIndex)}>
              {mileStones?.map((item, idx) => {
                return (
                  <SwiperSlide key={idx} className="  w-full h-auto p-5 my-swiper ">
                    <p>{item.year}</p>
                    <img src={item.image} className="flex justify-center items-center" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div> */}
      </section>

      <Footer />
    </div>
  );
}

export default OrganizationChart;
