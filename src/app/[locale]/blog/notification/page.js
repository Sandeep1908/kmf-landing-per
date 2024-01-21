'use client';

import React, { useEffect, useState } from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';

import { tenders } from '@/configtext/tenders';
import Tenders from './Tenders';
import { previousTenders } from '@/configtext/previousTender';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import documentIco from '@/images/notification/Document.svg';
function Notification() {
  const [tenderItems, setTenderItems] = useState([]);
  const [pastTenders, setPastTenders] = useState([]);
  const [liveTenders, setLiveTenders] = useState([]);
  const listItems = ['Live Tender', 'Past Tender','All Tenders'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = tenderItems?.slice(indexOfFirstItem, indexOfLastItem);
  const axios = useApi();

  const handleClickItem = (idx) => {
    setCurrentIndex(idx);
    const tenderItemsData = idx === 0 ? liveTenders : pastTenders;
    setTenderItems(tenderItemsData);
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/tender-notifications?locale=all');
      const liveTenders = data?.data?.filter((item) => item.attributes?.status === 'live tender');
      const pastTenders = data?.data?.filter((item) => item.attributes?.status === 'past tender');
      setTenderItems(liveTenders);
      setLiveTenders(liveTenders);
      setPastTenders(pastTenders);
    })();
  }, []);

  return (
    <div className="w-full h-full absolute top-36 z-[-1]  bg-[#F6F6F6]  ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>
      <section className="max-w-7xl m-auto pt-10 bg-[#F6F6F6] ">
        <div className="w-full space-y-5 p-4 ">
          <h1 className="text-center text-xl text-primary-main uppercase">Tender Notification</h1>

          <div className="w-full flex justify-center items-center pt-10 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
            <ul className="flex gap-5">
              {listItems?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      currentIndex === idx
                        ? 'text-secondary-main relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-secondary-main'
                        : ''
                    } uppercase`}
                    onClick={() => handleClickItem(idx)}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full h-full pt-10 p-4 space-y-4 bg-[#F6F6F6]">
          {currentProducts?.map((item, idx) => {
 
         
            
            return (
              <Tenders
                key={idx}
                title={item?.attributes?.title}
                description={item?.attributes?.description}
                image={documentIco.src}
                tenderNo={item?.attributes?.c_no}
                date={item?.attributes?.last_date}
                link={item?.attributes?.pdf_file?.data?.attributes?.url}
              />
            );
          })}
        </div>
      </section>
      <div className="flex justify-center mt-10 mb-10">
          {Array.from({ length: Math.ceil(tenderItems.length / itemsPerPage) })?.map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}>
              {index + 1}
            </button>
          ))}
        </div>
      <Footer />
    </div>
  );
}

export default Notification;
