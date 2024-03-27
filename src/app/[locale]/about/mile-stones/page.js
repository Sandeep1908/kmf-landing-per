'use client';
import React, { useEffect, useState } from 'react';
import organizationHero from '@/images/about/organization-chart/organization-hero.png';
import mileStoneIco from '@/images/about/milestone/milestone.png';
import { mileStone } from '@/configtext/milestone';

 
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
function OrganizationChart() {
  const [mileStones, setMileStone] = useState([]);
  const [selectedYear, setSelectedYear] = useState(1955);
  const [nextYear, setNextYear] = useState(1955);
  const [description, setDescription] = useState([]);
  const pagesToShow = 4; // Number of pagination numbers to show
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = description?.slice(indexOfFirstItem, indexOfLastItem);
  const [banner,setBanner]=useState([])
  const [loading,setLoading]=useState(true)
  const axios = useApi();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/milestones?sort[0]=year:asc');
      const {data:banner}=await axios.get('/api/milestone-banner')
      const milestones = data?.data?.map((item) => {
        return { year: item?.attributes?.year, description: item?.attributes?.description };
      });
console.log("milestones",data.data)
      
      const filterdata = milestones?.filter(
        (item) => parseInt(item.year) >= selectedYear && parseInt(item.year) <= nextYear
      );
 
      setBanner(banner?.data)
      setDescription(filterdata);
      setLoading(false)
    })();

    setMileStone(mileStone);
  }, [selectedYear, nextYear]);

  
  const handleYear = (year, idx) => {
    if (year === selectedYear) {
      // If the clicked year is the same as the selected year, reset the range
      setNextYear(selectedYear);
      setSelectedYear(selectedYear);
    } else {
      // Update the range with the clicked year
      setNextYear(year);
      setSelectedYear(selectedYear);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationNumbers = () => {
    const totalPages = Math.ceil(description.length / itemsPerPage);
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
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img
          src={banner? banner?.attributes?.banner?.data?.attributes?.url:organizationHero.src}
          className="w-full h-full object-cover absolute top-0 z-[-1]"
        />
      </section>

      <section className="w-full  pt-10  ">
        <div className="  w-full    lg:flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full  flex flex-col justify-center items-start ">
            <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white">Mile Stone</h1>

            <div className="w-full  pt-5 overflow-auto">
              <ul className="w-full h-full flex flex-col space-y-5 justify-start items-start">
                {currentProducts?.map((item, id) => {
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

            <div className={`flex justify-center items-center mt-10 space-x-2 mb-10 ${description?.length>8?'block':'hidden'}`}>
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
            disabled={currentPage === Math.ceil(description.length / itemsPerPage)}
            className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800"
          >
            Next
          </button>
        </div>

            <ul className="flex  justify-between  items-center  p-3 w-full mt-10  overflow-auto relative before:absolute before:w-full before:h-2 before:bg-primary-main before:top-3   ">

              {mileStones?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={` flex items-center justify-center space-x-3 relative cursor-pointer ${nextYear===item.year?'border-t-8 border-secondary-main':''}       `}
                    onClick={() => handleYear(item?.year,idx)}>
                    <p
                      className={` text-xl ${
                        nextYear === item.year ? 'text-secondary-main font-heading' : 'text-primary-main'
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
