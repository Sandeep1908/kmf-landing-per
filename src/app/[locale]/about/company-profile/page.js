'use client';
import React, { useEffect, useState } from 'react';

import AchienvmentCard from '../../portfolio/AchienvmentCard';
import { achievements as achievementItems } from '@/configtext/companyProfile';
import GrowthProcess from './GrowthProcess';
import About from './About';
import UnitOfKMF from './UnitOfKMF';
import OngoingAndFuture from './OngoingAndFuture';
import { useParams } from 'next/navigation';
import Footer from '@/components/Footer';


function CompanyProfile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading,setLoading]=useState(true)
  const locale=useParams().locale

   
  const tabs = [
    {
      tabName: locale==='en'?'About us':'ನಮ್ಮ ಬಗ್ಗೆ',
      data:  <About setLoading={setLoading}/>
    },
    {
      tabName: locale==='en'?'The Growth Process':'ಬೆಳವಣಿಗೆಯ ಪ್ರಕ್ರಿಯೆ',
      data: <GrowthProcess setLoading={setLoading} />
    },
    {
      tabName:  locale==='en'?'UNITS OF KMF':'KMF ನ ಘಟಕಗಳು',
      data: <UnitOfKMF setLoading={setLoading}/>
    },
    {
      tabName: locale==='en'?'Ongoing and Future Projects':'ನಡೆಯುತ್ತಿರುವ ಮತ್ತು ಭವಿಷ್ಯದ ಯೋಜನೆಗಳು',
      data: <OngoingAndFuture setLoading={setLoading}  />
    }
  ];
  const handleTabs = (idx) => {
 
    setCurrentIndex(idx);
  };
   

  

  return (
    <div className="w-full absolute top-36 z-[-1]    ">
 

      <section className="w-full h-auto p-10 pt-36  relative flex justify-center items-center flex-col  space-y-6  ">
        <div className="w-full flex flex-col justify-center items-center space-y-5">
          <div>
            <h1 className="text-xl text-primary-main uppercase">{locale==='en'?'Company Profile':'ಕಂಪನಿ ಪ್ರೊಫೈಲ್'}</h1>
          </div>

          <div className="relative w-full flex justify-center items-center    before:absolute before:w-full before:h-0.5 before:bg-neutral-dark4 before:-bottom-3  ">
            <ul className="flex justify-center items-center  space-x-7">
              {tabs?.map((tab, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => handleTabs(idx)}
                    className={`${currentIndex===idx?'text-secondary-main relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-secondary-main':''} text-xs md:text-sm uppercase cursor-pointer`}>
                    {tab.tabName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
 

 

      {tabs?.map((tab, id) => {
        if (currentIndex === id) {
          return tab.data;
        }
      })} 


      <Footer/>

      
    </div>
  );
}

export default CompanyProfile;
