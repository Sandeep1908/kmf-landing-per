'use client';

import womenEmpwerImg from '@/images/women-empower/women-empower.png';
import { womenEmpowerment } from '@/configtext/womenEmpowerment';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import rightArrow from '@/images/women-empower/rightArrow.svg';
import Link from 'next/link';

function WomenEmpowerment() {
  const [womenEmpower, setWomenEmpower] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const locale = useParams()?.locale;
  const axios = useApi();

  const handleButton = (idx) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/women-empowerments');
      const womenEmpowerData = data?.data?.map((item, id) => {
        return {
          title: item?.attributes?.title,
          description: item?.attributes?.content
        };
      });
      setWomenEmpower(womenEmpowerData);
  
    })();
  }, []);
  return (
    <div className="w-full h-full absolute top-36 z-[-1] bg-[#F6F6F6] ">
      <section className={`w-full h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img
          src={womenEmpwerImg.src}
          className="w-full h-full object-cover absolute top-0 z-[-1]"
        />
      </section>


      <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
                      <Link className="  text-sm font-bold  " href={`/` || ''}>
              {locale==='kn'?'Home':'Home'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold " href={`${locale==='kn'?'/kn/animal-husbandery/procurement':'/en/animal-husbandery/procurement'}`}>
            {locale==='kn'?'ಹಾಲು ಶೇಖರಣೆ':'Procurement'}
              
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold  " href={`${locale==='kn'?'/kn/animal-husbandery/animal-health':'/en/animal-husbandery/animal-health'}`}>
            {locale==='kn'?'ಹಾಲು ಶೇಖರಣೆ':'Animal Health'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold   " href={`${locale==='kn'?'/kn/animal-husbandery/animal-breeding':'/en/animal-husbandery/animal-breeding'}`}>
            {locale==='kn'?'ಪಶು ಸಂತಾನಾಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮ':'Animal Breeding Program'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold  " href={`${locale==='kn'?'/kn/animal-husbandery/feed-and-fodder':'/en/animal-husbandery/feed-and-fodder'}`}>
            {locale==='kn'?'ಮೇವು ಚಟುವಟಿಕೆಗಳು':'Fodder Activities'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold   "  href={`${locale==='kn'?'/kn/animal-husbandery/scheme':'/en/animal-husbandery/scheme'}`}>
            {locale==='kn'?'ಯೋಜನೆಗಳು/ ಅನುದಾನಗಳು':'Schemes/Grants'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main  " href={`${locale==='kn'?'/kn/women-empowerment':'/en/women-empowerment'}`}>
            {locale==='kn'?'ಸ್ಟೆಪ್ ಯೋಜನೆ':'Step'}
            </Link>
            
      </div>
      <section className="w-full max-w-7xl m-auto h-auto p-10  flex justify-center items-center flex-col  space-y-6 bg-[#F6F6F6]">
      <div className="mb-32  mt-20  relative w-full  flex justify-center items-center ">
          
              <h1 className=" text-primary-main relative max-w-[300px] m-auto text-center z-10 font-heading text-xl font-extrabold uppercase">
              {locale === 'en' ? 'STEP' : 'ಸ್ಟೆಪ್ ಯೋಜನೆ'}
              </h1>
            </div>
         
        <p className="text-justify text-lg text-neutral-dark1">
          {locale === 'en'
            ? ` Support to Training and Employment Programme (STEP) for Women was launched by the Ministry
          of Women & Child Development, Government of India, as one of the measures to ensure well
          being of women in the traditional informal sector in the year 1986 and advocates the
          objective of extending training for upgradation of skills and sustainable employment for
          women through a variety of action oriented projects which employ women in large numbers.`
            : `ಮಹಿಳೆಯರಿಗಾಗಿ ವೃತ್ತಿ ತರಬೇತಿ ಮತ್ತು ಉದ್ಯೋಗ ಬೆಂಬಲಿತ ಯೋಜನೆಯನ್ನು(ಸ್ಟೆಪ್) ಭಾರತ ಸರ್ಕಾರದ ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯದ 1986ರಲ್ಲ್ಲಿ ಪ್ರಾರಂಭವಾಗಿರುತ್ತದೆ. ಅಸಂಘಟಿತ ವಲಯದಲ್ಲಿರುವ ಮಹಿಳೆಯರನ್ನು ಸಾಮಾಜಿಕವಾಗಿ ಮತ್ತು ಆರ್ಥಿಕವಾಗಿ ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದು  ಯೋಜನೆಯ ಮುಖ್ಯ ಉದ್ದೇಶವಾಗಿರುತ್ತದೆ. ಅಲ್ಲದೇ ಮಹಿಳೆಯರಲ್ಲಿ ವೃತ್ತಿ ಕೌಶಲ್ಯತೆ ಅಭಿವೃದ್ಧಿ ಪಡಿಸುವ ತರಬೇತಿಗಳನ್ನು ಹಾಗೂ ನಿರಂತರ ಆದಾಯ ತರುವಂತಹ ಉದ್ಯೋಗಗಳನ್ನು ಕಲ್ಪಿಸಿ ಹೆಚ್ಚಿನ ಮಹಿಳೆಯರನ್ನು ಉದ್ಯೋಗಗಳಲ್ಲಿ ತೊಡಗಿಸುವ ಉದ್ದೇಶ ಹೊಂದಿದೆ.`}
        </p>
      </section>

      <div className='w-full bg-[#F6F6F6]'>

     

      <section className=" max-w-7xl m-auto h-auto p-10 flex flex-col justify-center items-center    space-y-6  xl:flex-row xl:justify-evenly xl:items-start md:space-x-5">
        <div className="w-full xl:max-w-2xl flex flex-col justify-center items-start rounded-tl-3xl  rounded-br-3xl  bg-white space-y-6 p-5 ">
        <div className="mb-20  mt-20  relative w-full  flex justify-center items-center ">
              <img
                src="/images/heading/heading-color/group.png"
                className="absolute   w-[530px] top-[-70px]    object-contain"
              />
              <h1 className=" text-primary-main relative max-w-[300px] m-auto text-center z-10 font-heading text-xl font-extrabold uppercase">
              {womenEmpower[currentIndex]?.title}
              </h1>
            </div>
          
          {womenEmpower[currentIndex]?.description?.map((item, id) => {
            return (
              <p  key={id} className="text-xl text-neutral-dark1 text-justify">{item?.children?.[0]?.text}</p>
            );
          })}
        </div>

        <div className="flex flex-col justify-center items-start rounded-tl-3xl  rounded-br-3xl  bg-white p-5">
          <div>
            <h1 className="text-xl">{locale==='en'?`WOMEN EMPOWERTMENT`:`ಮಹಿಳಾ ಸಬಲೀಕರಣ`}</h1>
          </div>

          <div className="w-full h-ful pt-5">
            <ul className="w-full flex flex-col justify-center items-center space-y-3">
              {womenEmpower?.map((items, idx) => {
                return (
                  <li
                    key={idx}
                    className=" relative w-full h-full flex justify-start p-2 space-x-3 items-center text-sm before:absolute before:w-full  before:h-0.5 before:bg-neutral-dark4 before:bottom-0"
                    onClick={() => handleButton(idx)}>
                    <img src={rightArrow.src} />
                    <p
                      className={`${
                        idx === currentIndex ? 'text-primary-main font-bold' : 'text-neutral-dark1'
                      } uppercase`}>
                      {items.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}

export default WomenEmpowerment;
