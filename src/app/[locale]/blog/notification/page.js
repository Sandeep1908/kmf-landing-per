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
  const [alltenderItems, setAllTenderItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [year, setYear] = useState([]);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = tenderItems?.slice(indexOfFirstItem, indexOfLastItem);
  const axios = useApi();
  const pagesToShow = 4; // Number of pagination numbers to show
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(0);



  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchTenders = async () => {
    const { data } = await axios.get('/api/tender-notifications?sort[0]=last_date:desc');
    const allData = data?.data?.map((item) => {
      return {
        last_date: item?.attributes?.last_date,
        year: new Date(item?.attributes?.last_date).getFullYear(),
        title: item?.attributes?.title,
        description: item?.attributes?.description,
        tenderNo: item?.attributes?.c_no,
        link: item?.attributes?.pdf_file?.data?.attributes?.url,
        month: monthNames[new Date(item?.attributes?.last_date).getMonth()]
      };
    });

    let years = allData?.map((item) => item.year);
    setYear(new Set(years));
    setTenderItems(allData);
    setAllTenderItems(allData);
    setLoading(false);
  };
  useEffect(() => {
    fetchTenders();
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
          }`}>
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

  const handleFilter = () => {
    if (!selectedMonth) {
      const filterData = alltenderItems?.filter((item) => item.year == selectedYear);
      setTenderItems(filterData);
    } else {
      const filterData = alltenderItems?.filter(
        (item) => item.year == selectedYear && item.month === selectedMonth
      );
      setTenderItems(filterData);
    }
  };

  const handleReset = () => {
    setSelectedMonth('');
    setSelectedYear('');
    fetchTenders();
  };
  return (
    <div className="w-full h-full absolute top-36 z-[-1]     ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>


      <section className="w-full relative tender-bg  ">

        <div className=' h-auto m-auto pt-10  max-w-7xl'>

    
        <div className="w-full space-y-5 p-4 ">
          <h1 className="text-center text-xl text-primary-main uppercase">Tender Notification</h1>

          <div className="w-full  flex justify-center items-center pt-10 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
            <ul className="flex gap-5">
              <li>
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-main sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => setSelectedYear(e.target.value)}>
                  <option>Year</option>
                  {Array.from(year)?.map((item, idx) => {
                    return (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </li>

              <li>
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-main sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => setSelectedMonth(e.target.value)}>
                  <option>Month</option>
                  {monthNames?.map((item, idx) => {
                    return (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </li>

              <li>
                {' '}
                <button
                  onClick={() => handleFilter()}
                  className="rounded-md mr-4 bg-primary-main px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-primary-gradient focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main">
                  Save
                </button>
                <button
                  onClick={() => handleReset()}
                  className="rounded-md bg-primary-main px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-primary-gradient focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main">
                  Reset
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-evenly items-center flex-wrap pt-10 p-4 space-y-4   ">
          {currentProducts?.map((item, idx) => {
            return (
              
               
              <Tenders
                key={idx}
                title={item?.title}
                description={item?.description}
                tenderNo={item?.tenderNo}
                date={item?.last_date}
                link={item?.link}
                
              />
               
            );
          })}
        </div>

        </div>
      </section>

      <div className="flex justify-center items-center mt-10 space-x-2 mb-10">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800">
          Previous
        </button>

        {renderPaginationNumbers()}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(tenderItems.length / itemsPerPage)}
          className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800">
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Notification;