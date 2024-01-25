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
  const [allTenders,setAllTenders]=useState([])
  const listItems = ['Live Tender', 'Past Tender','All Tenders'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = tenderItems?.slice(indexOfFirstItem, indexOfLastItem);
  const axios = useApi();
  const pagesToShow = 4; // Number of pagination numbers to show

  const handleClickItem = (idx) => {
    setCurrentIndex(idx);
    if(listItems[idx]==='Live Tender'){
      setTenderItems(liveTenders)
    }
    else if(listItems[idx]==='Past Tender'){
      setTenderItems(pastTenders)
    }
    else{
      setTenderItems(allTenders)
    }
  
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/tender-notifications?sort[0]=last_date:desc');
      const liveTenders = data?.data?.filter((item) => item.attributes?.status === 'live tender');
      const pastTenders = data?.data?.filter((item) => item.attributes?.status === 'past tender');
      console.log("all tender length",data.data.length)
      console.log("all past length",pastTenders.length)
       
      setAllTenders(data?.data)
      setTenderItems(liveTenders.sort((a,b)=>b.last_date - a.last_date));
      setLiveTenders(liveTenders.sort((a,b)=>b.last_date - a.last_date));
      setPastTenders(pastTenders.sort((a,b)=>b.last_date - a.last_date));
    })();
  }, []);

  const renderPaginationNumbers = () => {
    const totalPages = Math.ceil(tenderItems.length / itemsPerPage);
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    const paginationNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      paginationNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
          }`}
        >
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      paginationNumbers.unshift(<span key="ellipsis-start">...</span>);
    }

    if (endPage < totalPages) {
      paginationNumbers.push(<span key="ellipsis-end">...</span>);
    }

    return paginationNumbers;
  };


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


     <div className="flex justify-center items-center mt-10 space-x-2 mb-10">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800"
          >
            Previous
          </button>

          {renderPaginationNumbers()}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(tenderItems.length / itemsPerPage)}
            className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800"
          >
            Next
          </button>
        </div>
      <Footer />
    </div>
  );
}

export default Notification;
