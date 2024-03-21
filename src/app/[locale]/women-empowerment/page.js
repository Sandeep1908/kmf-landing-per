'use client';

import womenEmpwerImg from '@/images/women-empower/women-empower.png';
import { womenEmpowerment } from '@/configtext/womenEmpowerment';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import rightArrow from '@/images/women-empower/rightArrow.svg';

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

      <section className="w-full h-auto p-10  flex justify-center items-center flex-col  space-y-6 bg-[#F6F6F6]">
        <h1 className="text-xl uppercase font-heading">{locale === 'en' ? 'STEP' : 'ಹಂತ'}</h1>
        <p className="text-justify text-sm text-neutral-dark1">
          {locale === 'en'
            ? ` Support to Training and Employment Programme (STEP) for Women was launched by the Ministry
          of Women & Child Development, Government of India, as one of the measures to ensure well
          being of women in the traditional informal sector in the year 1986 and advocates the
          objective of extending training for upgradation of skills and sustainable employment for
          women through a variety of action oriented projects which employ women in large numbers.`
            : `ಮಹಿಳೆಯರಿಗಾಗಿ ತರಬೇತಿ ಮತ್ತು ಉದ್ಯೋಗ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ (STEP) ಬೆಂಬಲವನ್ನು ಸಚಿವಾಲಯವು ಪ್ರಾರಂಭಿಸಿದೆ
          ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ, ಭಾರತ ಸರ್ಕಾರ, ಉತ್ತಮವಾಗಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಕ್ರಮಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ
          1986 ರಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ಅನೌಪಚಾರಿಕ ವಲಯದಲ್ಲಿ ಮಹಿಳೆಯರಾಗಿರುವುದು ಮತ್ತು ಪ್ರತಿಪಾದಿಸುತ್ತದೆ
          ಕೌಶಲ್ಯಗಳ ಉನ್ನತೀಕರಣ ಮತ್ತು ಸುಸ್ಥಿರ ಉದ್ಯೋಗಕ್ಕಾಗಿ ತರಬೇತಿಯನ್ನು ವಿಸ್ತರಿಸುವ ಉದ್ದೇಶ
          ಮಹಿಳೆಯರು ಹೆಚ್ಚಿನ ಸಂಖ್ಯೆಯಲ್ಲಿ ಮಹಿಳೆಯರನ್ನು ಬಳಸಿಕೊಳ್ಳುವ ವಿವಿಧ ಕ್ರಿಯಾ ಆಧಾರಿತ ಯೋಜನೆಗಳ ಮೂಲಕ.`}
        </p>
      </section>

      <section className="w-full h-auto p-10 flex flex-col justify-center items-center    space-y-6 bg-[#F6F6F6] xl:flex-row xl:justify-evenly xl:items-start md:space-x-5">
        <div className="w-full xl:max-w-2xl flex flex-col justify-center items-start rounded-tl-3xl  rounded-br-3xl  bg-white space-y-6 p-5 ">
          <h1 className="text-xl uppercase font-heading">{womenEmpower[currentIndex]?.title}</h1>
          {womenEmpower[currentIndex]?.description?.map((item, id) => {
            return (
              <p  key={id} className="text-sm text-neutral-dark1 text-justify">{item?.children?.[0]?.text}</p>
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
      <Footer />
    </div>
  );
}

export default WomenEmpowerment;
