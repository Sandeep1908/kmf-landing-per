'use client';
import React, { useEffect, useState } from 'react';
import organizationHero from '@/images/about/organization-chart/organization-hero.png';
import milkRight from '@/images/about/organization-chart/milk-right.png';
import MilkBottomImg from '@/images/about/mission/milk-bottom.png';
 
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
 
import useApi from '@/hooks/useApi';
 
import { achievements as achievementItems } from '@/configtext/companyProfile';
import Counter from '@/components/Counter';
import { ParallaxBanner } from "react-scroll-parallax";

function OrganizationChart() {
  const locale = useParams().locale;
  const [banner,setBanner]=useState([])
  const [slideView, setSlideView] = useState(3);
  const [achievments, setAchievments] = useState([]);
  

  const axios=useApi()
  useEffect(()=>{
    (
      async()=>{
        const {data:banner}=await axios.get('/api/organization-chart')
        const { data } = await axios.get('/api/kmf-acheivment');
        setBanner(banner?.data)
        setAchievments(achievementItems);
      }
    )()
  },[])

  useEffect(() => {
   

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
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center `}>
        <img
          src={banner? banner?.attributes?.banner?.data?.attributes?.url:organizationHero.src}
          className="w-full h-full object-conatain absolute top-0 z-[-1]"
        />
      </section>

      <ParallaxBanner
        layers={[
          { image: "/images/home-about.png", speed: -20 },
          {
            speed: -15,
            children: (
<h></h>
            ),
          },
           
        ]}
        className="  w-full   mt-10   object-contain "
      >
           
           <div className='w-full h-fit max-w-[1400px]  pt-10 m-auto flex flex-col space-y-5 mb-5 relative bg-organization '>
          <div className='w-full flex justify-center items-center'>
                  <h1 className='text-5xl text-white relative before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-white flex justify-center items-center  '>About Organization</h1>
          </div>
          <div className=' w-full pt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 relative organization-bg'>
          <Counter  title={"Villages"} endNumber={24000}/>
          <Counter  title={"Lakh Milk Producer Members"} endNumber={26}/>

          <Counter  title={"Functioning Dairy co-coperatives societies"} endNumber={15500}/>

          <Counter  title={"Lakh KGs of Milk Procurement Per day"} endNumber={84}/>

          <Counter  title={"Milk and Milk Products"} endNumber={148}/>
          <Counter  title={"  Milk Unions"} endNumber={15}/>
          <Counter  title={"Kmf Units"} endNumber={15}/>
          <Counter  title={"Crores Payment Per day to farmers"} endNumber={24}/>



          </div>
         
          

        </div>
       
      </ParallaxBanner>

  

      <section className="w-full max-w-7xl m-auto h-auto    ">
        <div className="   w-full  h-full flex flex-col p-3 space-y-2 lg:flex-row lg:p-5 lg:space-x-10">
          {locale === 'en' ? (
            <div className="w-full flex flex-col justify-center items-start shadow-md ">
              <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white">Organisation Chart</h1>

              <p className="text-lg text-justify p-2">
                The organization is three tiered on Co-operative principles.
              </p>

              <ul className="flex flex-col space-y-5 p-6 w-full  justify-center items-start list-disc text-justify text-lg  md:justify-normal md:items-start">
                <li>Dairy Co-operative Societies at grass root level.</li>

                <li>District Co-operative Milk Unions at single / multi district level.</li>

                <li>Milk Federation at State level.</li>
              </ul>
              <p className="text-lg text-justify p-2">
                All above three are governed by democratically elected board from among the milk
                producers. Under the direction of elected boards, KMF, various functional Units &
                Unions are performing the assigned tasks to ensure fulfilment of organisation
                objectives.
              </p>
            </div>



          ) :
          
          (
            <div className="w-full flex flex-col justify-center items-start ">
              <h1 className="text-2xl text-primary-main uppercase">ಸಂಸ್ಥೆಯ ಚಾರ್ಟ್</h1>

              <p className="text-sm text-justify p-2">
              
ಸಂಸ್ಥೆಯು ಸಹಕಾರ ತತ್ವಗಳ ಮೇಲೆ ಮೂರು ಹಂತಗಳನ್ನು ಹೊಂದಿದೆ.
              </p>

              <ul className="flex flex-col space-y-5 p-6 w-full  justify-center items-start list-disc text-justify text-sm  md:justify-normal md:items-start">
                <li>
ತಳಮಟ್ಟದಲ್ಲಿ ಡೇರಿ ಸಹಕಾರ ಸಂಘಗಳು.</li>

                <li>
ಏಕ / ಬಹು ಜಿಲ್ಲಾ ಮಟ್ಟದಲ್ಲಿ ಜಿಲ್ಲಾ ಸಹಕಾರ ಹಾಲು ಒಕ್ಕೂಟಗಳು.</li>

                <li>
ರಾಜ್ಯ ಮಟ್ಟದಲ್ಲಿ ಹಾಲು ಒಕ್ಕೂಟ.</li>
              </ul>
              <p className="text-sm text-justify p-2">
              ಮೇಲಿನ ಮೂರೂ ಹಾಲಿನಿಂದ ಪ್ರಜಾಸತ್ತಾತ್ಮಕವಾಗಿ ಚುನಾಯಿತ ಮಂಡಳಿಯಿಂದ ಆಡಳಿತ ನಡೆಸಲ್ಪಡುತ್ತದೆ
                ನಿರ್ಮಾಪಕರು. ಚುನಾಯಿತ ಮಂಡಳಿಗಳ ನಿರ್ದೇಶನದಲ್ಲಿ, KMF, ವಿವಿಧ ಕ್ರಿಯಾತ್ಮಕ ಘಟಕಗಳು &
                ಸಂಘಟನೆಯ ನೆರವೇರಿಕೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಸಂಘಗಳು ನಿಯೋಜಿಸಲಾದ ಕಾರ್ಯಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತಿವೆ
                ಉದ್ದೇಶಗಳು.
              </p>
            </div>
          )}

          <div className="w-full   flex justify-center items-center">
            <img src={milkRight.src} />
          </div>
        </div>
      </section>


    

      <Footer />
    </div>
  );
}

export default OrganizationChart;
