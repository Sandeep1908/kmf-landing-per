'use client';
import React, { useState, useEffect } from 'react';
import portfolioImg from '@/images/portfolio/portfolio.png';
import founderOfMilkImg from '@/images/portfolio/founder-of-milk.jpeg';
import brandAmbasImg from '@/images/portfolio/brand.jpeg';
import mdkn from '@/images/portfolio/md-kn.png';
import mden from '@/images/portfolio/md-en.png';
import md from '@/images/portfolio/md.jpeg';
import milkImg from '@/images/portfolio/milkImg.png';
import Footer from '@/components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import headImg from '@/images/directors/1-1.png';
import headengImg from '@/images/directors/headeng.png';
import './style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import AchienvmentCard from '../about/organization-chart/AchienvmentCard';
import { achievements as achievementItems } from '@/configtext/companyProfile';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import { ParallaxBanner } from "react-scroll-parallax";
import HistoryOfMilk from './HistoryOfMilk';
import BrandAmbassador from './BrandAmbassador';
import KmfAchivements from './KmfAchivements';
import DepartmentUnderGovt from './DepartmentUnderGovt';
import Sponsored from './Sponsored';

function Portfolio() {
  const [achievments, setAchievments] = useState([]);
  const [slideView, setSlideView] = useState(3);
  const axios = useApi();
  const locale = useParams().locale;
  const [portfilioData, setPortfolioData] = useState([]);
  const [md,setMd]=useState([])
  const [chairman,setChairman]=useState([])
  const [loading,setLoading]=useState(true)
  const [sponsers,setSponsor]=useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
   

  const tabs = [
    {
      tabName: "HISTORY OF MILK",
      data:  <HistoryOfMilk setLoading={setLoading} name={"History Of Milk"}/>
    },
    {
      tabName: 'BRAND AMBASSADOR',
      data: <BrandAmbassador setLoading={setLoading} name={"Brand Ambassador"} />
    },
    {
      tabName:  'KMF ACHIEVEMENTS',
      data: <KmfAchivements setLoading={setLoading} name={"Kmf Achivements"}/>
    },
    {
      tabName: 'DEPARTMENT UNDER GOVT.',
      data: <DepartmentUnderGovt setLoading={setLoading} name={"Department Under Govt."}  />
    },
    {
      tabName: 'SPONSORED',
      data: <Sponsored setLoading={setLoading} name={"Sponsored"}  />
    }
  ];
  const handleTabs = (idx) => {
    
   
    setCurrentIndex(idx);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/kmf-acheivment');
      const {data:sponsor}= await axios.get('/api/Sponsoreds')
      const {data:md}= await axios.get('/api/md')
      const {data:chairman}= await axios.get('/api/chairmain')
      
      setPortfolioData(data.data);
      setMd(md?.data)
      setChairman(chairman?.data)
      setLoading(false)
      setSponsor(sponsor.data?.[0]?.attributes?.image?.data)
    })();
  }, []);

  useEffect(() => {
    setAchievments(achievementItems);

    const handleSlideView = () => {
      const screen = window.innerWidth;
      if (screen < 1113) {
        setSlideView(2);
      }
      if (screen < 779) {
        setSlideView(1);
      }
    };
    handleSlideView();

    window.addEventListener('resize', handleSlideView);
    return () => window.removeEventListener('resize', handleSlideView);
  }, []);
  return (
    <div
      className="w-full h-full absolute top-36 z-[-1]   
           "
       >
      {/* <section className={`w-full  h-96 pt-28 relative  grid place-items-center company-bg`}>
        <img src={portfolioImg.src} className="w-full h-full object-fill absolute top-0 z-[-1]" />
      </section> */}
   

     <section className='w-full h-auto mt-10 mb-10 pt-10  '>
     <h1 className="text-5xl mb-20 font-bold flex justify-center items-center relative font-heading text-primary-main before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-primary-main">
            {locale === 'en'
              ? `KMF Portfolio`
              : `
KMF ಪೋರ್ಟ್‌ಫೋಲಿಯೋ`}
          </h1>
          <div className='max-w-7xl m-auto bg-slate-300 shadow-lg'>
              <div className='w-full'>
                <div className='flex flex-col md:flex-row justify-between m-0 p-0'>
                {tabs?.map((tab, idx) => {
  
                return (
                  <>
                  <div
                    key={idx}
                    onClick={() => handleTabs(idx)}
                    className={`${currentIndex===idx?'bg-sky-500 w-fit  ':''} p-5 hover:bg-sky-500 text-center w-full relative`}>
                    {tab.tabName}
                  <div className= {`${currentIndex===idx?'bg-sky-500  ':''}  absolute bottom-[-6px] md:bottom-[-10px] left-[48%]  md:left-[43%]  w-3 h-3 md:w-5 md:h-5 rotate-45`} ></div>
                  </div>
                  </>
                );
              })}
                  
                </div>
              </div>
              <div className='w-full p-7 bg-slate-200'>
              {tabs?.map((tab, id) => {
        if (currentIndex === id) {
          return tab.data;
        }
      })} 
          </div>
          </div>
         
     </section>



       

      <Footer />
    </div>
  );
}

export default Portfolio;
