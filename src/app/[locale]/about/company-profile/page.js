'use client';
import React, { useEffect, useState } from 'react';

import AchienvmentCard from '../organization-chart/AchienvmentCard';
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
      data:  <About setLoading={setLoading} name={"About us"}/>
    },
    {
      tabName: locale==='en'?'The Growth Process':'ಬೆಳವಣಿಗೆಯ ಪ್ರಕ್ರಿಯೆ',
      data: <GrowthProcess setLoading={setLoading} name={"The Growth Process"} />
    },
    // {
    //   tabName:  locale==='en'?'UNITS OF KMF':'ಕಹಾಮ ಘಟಕಗಳು',
    //   data: <UnitOfKMF setLoading={setLoading}/>
    // },
    {
      tabName: locale==='en'?'Ongoing and Future Projects':'ಭವಿಷ್ಯದ ಯೋಜನೆಗಳು',
      data: <OngoingAndFuture setLoading={setLoading} name={"Ongoing and Future Projects"}  />
    }
  ];
  const handleTabs = (idx) => {
    
   localStorage.setItem('idx',idx)
    setCurrentIndex(idx);
  };
   
useEffect(()=>{
  if(parseInt(localStorage.getItem('idx'))===currentIndex){
    setCurrentIndex(localStorage.getItem('idx'))
  }
},[currentIndex])
  

  return (
    <div className="w-full  h-auto    about-bg relative    ">
 

      <section className="w-full h-auto p-10 pt-36  relative flex justify-center items-center flex-col  space-y-6  ">
        <div className="w-full flex flex-col justify-center items-center space-y-5">
          <div className='mb-20'>
            <h1 className=" text-primary-main font-heading text-5xl font-extrabold uppercase">{locale==='en'?'Company Profile':'ಕಹಾಮ ಪರಿಚಯ'}</h1>
          </div>

          <div className="relative w-full   flex justify-center items-center    before:absolute before:w-full before:h-0.5 before:bg-neutral-dark4 before:-bottom-3  ">
            <ul className="flex justify-center items-center  space-x-7">
              {tabs?.map((tab, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => handleTabs(idx)}
                    className={`${parseInt(localStorage.getItem('idx'))===idx?'text-secondary-main relative  ':''} font-extrabold text-xs font-subheading md:text-xl transition-all duration-100  uppercase cursor-pointer hover:scale-[1.1]`}>
                    {tab.tabName}
                  </li>
                );
              })}
            </ul>
            
       

          </div>
          <h1 className=' w-fit text-secondary-darker text-7xl flex justify-center items-center  font-heading relative before:absolute before:w-40 before:m-auto before:h-1 before:bg-secondary-darker before:top-20 '>{tabs[currentIndex].tabName}</h1>
        </div>
      </section>
 

 <div>

  <h1 className='w-full text-center'>{}</h1>
 {tabs?.map((tab, id) => {
        if (parseInt(localStorage.getItem('idx')) === id) {
          return tab.data;
        }
      })} 
 </div>

     


      <Footer/>

      
    </div>
  );
}

export default CompanyProfile;
