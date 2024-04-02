'use client';
import React, { useEffect, useState } from 'react';
import organizationHero from '@/images/about/organization-chart/organization-hero.png';
import milkRight from '@/images/about/organization-chart/milk-right.png';
import { mileStone } from '@/configtext/milestone';
import qualityImg from '@/images/about/organization-chart/quality.jpg';
import MilkBottomImg from '@/images/about/mission/milk-bottom.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import useApi from '@/hooks/useApi';
function OrganizationChart() {
  const locale = useParams().locale;
  const axios= useApi()
  const [banner,setBanner]=useState([])
  useEffect(()=>{
    (
      async()=>{
        const {data:banner}=await axios.get('/api/food-safety')
        setBanner(banner?.data)
      }
    )()
  },[])
  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img
          src={banner? banner?.attributes?.banner?.data?.attributes?.url:  organizationHero.src}
          className="w-full h-full object-cover absolute top-0 z-[-1]"
        />
      </section>

      <section className=" relative w-full max-w-7xl m-auto h-auto pt-10  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          

          {locale === 'en' ? (
            <div className="w-full flex flex-col justify-center items-start shadow-md p-2 ">
              <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white  ">Quality And Food Safety</h1>

              <p className="text-lg text-justify p-2">
                During the last ten years, the Federation is giving greater emphasis on procuring
                quality milk from DCSs under the concept of “Quality Excellence from Cow to
                Consumer.” Many Clean Milk Production (CMP) initiatives have been implemented at all
                the stages of procurement, processing and marketing. Among these CMP initiatives,
                noteworthy initiative is the setting up of Community Milking Parlours in villages.
              </p>

              <p className="text-lg text-justify p-2">
                The KMF is forerunner to introduce this innovative technological initiative for
                bringing about revolutionary improvement in quality of milk collected in DCSs. This
                system has several advantages such as elimination of mastitis in milch animals and
                improvement of productivity. The milk from milking machines, collected through
                Automatic Computerized Milk Collection Units is chilled directly in Bulk Milk
                Coolers. This chilled raw milk, untouched and unadulterated by human hands, has very
                high microbiological quality, comparable to international standards. This high
                quality milk is being utilized for manufacturing high quality value added milk
                products, for both domestic as well as international markets.
              </p>

              <ul className="flex flex-col space-y-3 p-6 w-full h-full justify-center items-center list-disc text-justify text-lg  md:justify-normal md:items-start">
                <li>Other Clean Milk Production (CMP) Initiatives include: -</li>

                <li>
                  Training of milk producers on modern dairy husbandry practices and Clean Milk
                  Production (CMP).
                </li>

                <li>
                  Providing Stainless Steel utensils, antiseptic solutions for udder cleaning on pre
                  and post milking, etc. to producers.
                </li>

                <li>
                  Training to DCS staff and officers of the Unions on Clean Milk Production (CMP).
                </li>

                <li>
                  Replacing Aluminium milk cans and collection vessels with Stainless Steel –304.
                </li>

                <li>Posters, documentary films and booklets on Clean Milk Production (CMP).</li>
              </ul>
            </div>
          ) : 
          
          
          (
            <div className="w-full flex flex-col justify-center shadow-md items-start ">
              <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white">
ಗುಣಮಟ್ಟ ಮತ್ತು ಆಹಾರ ಸುರಕ್ಷತೆ</h1>

              <p className="text-lg text-justify p-2">
              ಕಳೆದ ಹತ್ತು ವರ್ಷಗಳಲ್ಲಿ ಒಕ್ಕೂಟವು ಸಂಗ್ರಹಣೆಗೆ ಹೆಚ್ಚಿನ ಒತ್ತು ನೀಡುತ್ತಿದೆ
                ಕ್ವಾಲಿಟಿ ಎಕ್ಸಲೆನ್ಸ್ ಫ್ರಂ ಹಸು ಎಂಬ ಪರಿಕಲ್ಪನೆಯಡಿಯಲ್ಲಿ ಡಿಸಿಎಸ್‌ಗಳಿಂದ ಗುಣಮಟ್ಟದ ಹಾಲು
                ಗ್ರಾಹಕ. ಅನೇಕ ಶುದ್ಧ ಹಾಲು ಉತ್ಪಾದನೆ (CMP) ಉಪಕ್ರಮಗಳನ್ನು ಎಲ್ಲಾ ಕಾರ್ಯಗತಗೊಳಿಸಲಾಗಿದೆ
                ಸಂಗ್ರಹಣೆ, ಸಂಸ್ಕರಣೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆಯ ಹಂತಗಳು. ಈ CMP ಉಪಕ್ರಮಗಳಲ್ಲಿ,
                ಗಮನಾರ್ಹ ಉಪಕ್ರಮವೆಂದರೆ ಹಳ್ಳಿಗಳಲ್ಲಿ ಸಮುದಾಯ ಮಿಲ್ಕಿಂಗ್ ಪಾರ್ಲರ್‌ಗಳನ್ನು ಸ್ಥಾಪಿಸುವುದು.
              </p>

              <p className="text-lg text-justify p-2">
              KMF ಈ ನವೀನ ತಾಂತ್ರಿಕ ಉಪಕ್ರಮವನ್ನು ಪರಿಚಯಿಸಲು ಮುಂದಾಗಿದೆ
                DCS ಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ಹಾಲಿನ ಗುಣಮಟ್ಟದಲ್ಲಿ ಕ್ರಾಂತಿಕಾರಿ ಸುಧಾರಣೆಯನ್ನು ತರುವುದು. ಈ
                ಈ ವ್ಯವಸ್ಥೆಯು ಹಾಲುಣಿಸುವ ಪ್ರಾಣಿಗಳಲ್ಲಿ ಮಾಸ್ಟಿಟಿಸ್ ಅನ್ನು ತೊಡೆದುಹಾಕುವಂತಹ ಹಲವಾರು ಪ್ರಯೋಜನಗಳನ್ನು ಹೊಂದಿದೆ
                ಉತ್ಪಾದಕತೆಯ ಸುಧಾರಣೆ. ಹಾಲುಕರೆಯುವ ಯಂತ್ರಗಳಿಂದ ಹಾಲನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ
                ಸ್ವಯಂಚಾಲಿತ ಗಣಕೀಕೃತ ಹಾಲು ಸಂಗ್ರಹಣಾ ಘಟಕಗಳನ್ನು ನೇರವಾಗಿ ಬೃಹತ್ ಹಾಲಿನಲ್ಲಿ ತಂಪಾಗಿಸಲಾಗುತ್ತದೆ
                ಕೂಲರ್ಗಳು. ಈ ಶೀತಲವಾಗಿರುವ ಹಸಿ ಹಾಲು, ಮಾನವ ಕೈಗಳಿಂದ ಮುಟ್ಟದ ಮತ್ತು ಕಲಬೆರಕೆ ಮಾಡದೆ, ತುಂಬಾ ಹೊಂದಿದೆ
                ಹೆಚ್ಚಿನ ಸೂಕ್ಷ್ಮ ಜೀವವಿಜ್ಞಾನದ ಗುಣಮಟ್ಟ, ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಾನದಂಡಗಳಿಗೆ ಹೋಲಿಸಬಹುದು. ಈ ಹೆಚ್ಚಿನ
                ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಮೌಲ್ಯವರ್ಧಿತ ಹಾಲು ಉತ್ಪಾದನೆಗೆ ಗುಣಮಟ್ಟದ ಹಾಲನ್ನು ಬಳಸಲಾಗುತ್ತಿದೆ
                ಉತ್ಪನ್ನಗಳು, ದೇಶೀಯ ಹಾಗೂ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ.
              </p>

              <ul className="flex flex-col space-y-3 p-6 w-full h-full justify-center items-center list-disc text-justify text-lg  md:justify-normal md:items-start">
                <li>
ಇತರ ಶುದ್ಧ ಹಾಲು ಉತ್ಪಾದನೆ (CMP) ಉಪಕ್ರಮಗಳು ಸೇರಿವೆ: -</li>

                <li>
               
ಆಧುನಿಕ ಡೇರಿ ಸಾಕಣೆ ಪದ್ಧತಿಗಳು ಮತ್ತು ಶುದ್ಧ ಹಾಲಿನ ಬಗ್ಗೆ ಹಾಲು ಉತ್ಪಾದಕರಿಗೆ ತರಬೇತಿ
                  ಉತ್ಪಾದನೆ (CMP).
                </li>

                <li>
                ಸ್ಟೇನ್ಲೆಸ್ ಸ್ಟೀಲ್ ಪಾತ್ರೆಗಳನ್ನು ಒದಗಿಸುವುದು, ಕೆಚ್ಚಲು ಮುಂಚಿತವಾಗಿ ಸ್ವಚ್ಛಗೊಳಿಸಲು ನಂಜುನಿರೋಧಕ ಪರಿಹಾರಗಳು
                  ಮತ್ತು ನಂತರ ಹಾಲುಕರೆಯುವುದು, ಇತ್ಯಾದಿಗಳನ್ನು ಉತ್ಪಾದಕರಿಗೆ.
                </li>

                <li>
               
ಶುದ್ಧ ಹಾಲು ಉತ್ಪಾದನೆ (CMP) ಕುರಿತು ಒಕ್ಕೂಟಗಳ DCS ಸಿಬ್ಬಂದಿ ಮತ್ತು ಅಧಿಕಾರಿಗಳಿಗೆ ತರಬೇತಿ.
                </li>

                <li>
                ಅಲ್ಯೂಮಿನಿಯಂ ಹಾಲಿನ ಕ್ಯಾನ್‌ಗಳು ಮತ್ತು ಸಂಗ್ರಹಣಾ ಪಾತ್ರೆಗಳನ್ನು ಸ್ಟೇನ್‌ಲೆಸ್ ಸ್ಟೀಲ್ -304 ನೊಂದಿಗೆ ಬದಲಾಯಿಸುವುದು.
                </li>

                <li>
ಕ್ಲೀನ್ ಮಿಲ್ಕ್ ಪ್ರೊಡಕ್ಷನ್ (CMP) ಕುರಿತ ಪೋಸ್ಟರ್‌ಗಳು, ಸಾಕ್ಷ್ಯಚಿತ್ರಗಳು ಮತ್ತು ಕಿರುಪುಸ್ತಕಗಳು.304.</li>
              </ul>
            </div>
          )}
        </div>

        <img src={MilkBottomImg.src} className="w-full h-full" />
      </section>

      <Footer />
    </div>
  );
}

export default OrganizationChart;
