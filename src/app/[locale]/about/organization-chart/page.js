'use client';
import React, { useEffect, useState } from 'react';
import organizationHero from '@/images/about/organization-chart/organization-hero.png';
import milkRight from '@/images/about/organization-chart/milk-right.png';
import { mileStone } from '@/configtext/milestone';
import bottleImg from '@/images/about/organization-chart/bottle.png';
import MilkBottomImg from '@/images/about/mission/milk-bottom.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
function OrganizationChart() {
  const locale = useParams().locale;
  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img
          src={organizationHero.src}
          className="w-full h-full object-cover absolute top-0 z-[-1]"
        />
      </section>

      <section className="w-full h-auto pt-10  ">
        <div className="   w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          {locale === 'en' ? (
            <div className="w-full flex flex-col justify-center items-start ">
              <h1 className="text-2xl text-primary-main uppercase">Organisation Chart</h1>

              <p className="text-sm text-justify p-2">
                The organization is three tiered on Co-operative principles.
              </p>

              <ul className="flex flex-col space-y-5 p-6 w-full  justify-center items-start list-disc text-justify text-sm  md:justify-normal md:items-start">
                <li>Dairy Co-operative Societies at grass root level.</li>

                <li>District Co-operative Milk Unions at single / multi district level.</li>

                <li>Milk Federation at State level.</li>
              </ul>
              <p className="text-sm text-justify p-2">
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
ತಳಮಟ್ಟದಲ್ಲಿ ಡೈರಿ ಸಹಕಾರ ಸಂಘಗಳು.</li>

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
