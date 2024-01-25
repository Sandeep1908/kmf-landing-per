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
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import AchienvmentCard from './AchienvmentCard';
import { achievements as achievementItems } from '@/configtext/companyProfile';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';

function Portfolio() {
  const [achievments, setAchievments] = useState([]);
  const [slideView, setSlideView] = useState(3);
  const axios = useApi();
  const locale = useParams().locale;
  const [portfilioData, setPortfolioData] = useState([]);
  const [md,setMd]=useState([])
  const [chairman,setChairman]=useState([])

   

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/kmf-acheivment');
      const {data:md}= await axios.get('/api/md')
      const {data:chairman}= await axios.get('/api/chairmain')
      setPortfolioData(data.data);
      setMd(md?.data)
      setChairman(chairman?.data)
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
      className="w-full h-full absolute top-36 z-[-1]  bg-white   "
       >
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={portfolioImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>

      <section className="max-w-7xl m-auto pt-10  bg-white">
        <div className="w-full space-y-5 p-4 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
          <h1 className="text-center text-xl text-primary-main uppercase">
            {locale === 'en'
              ? `KMF Portfolio`
              : `
KMF ಪೋರ್ಟ್‌ಫೋಲಿಯೋ`}
          </h1>

          <div className="w-full flex flex-col items-start justify-start space-y-5">
            <h1 className="text-lg font-bold">{portfilioData?.attributes?.bannertitle}</h1>

            <div className="w-full h-96">
              <img
                src={portfilioData?.attributes?.banner?.data?.attributes?.url}
                className="max-w-full h-full "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl m-auto h-auto pt-10  bg-white ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full   flex justify-center items-center">
            <img src={milkImg.src} className="  h-96" />
          </div>

          <div className="w-full flex flex-col justify-center items-start ">
            <h1 className="text-2xl text-primary-main uppercase">
              {locale === 'en'
                ? `History of milk`
                : `

ಹಾಲಿನ ಇತಿಹಾಸ`}{' '}
            </h1>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `The history of milk is a fascinating journey that intertwines with the evolution of human civilization and the domestication of animals. As early humans transitioned from a nomadic lifestyle to settled agricultural communities, the realization that certain animals could provide a steady supply of milk marked a pivotal moment.`
                : `

ಹಾಲಿನ ಇತಿಹಾಸವು ಮಾನವ ನಾಗರಿಕತೆಯ ವಿಕಾಸ ಮತ್ತು ಪ್ರಾಣಿಗಳ ಪಳಗಿಸುವಿಕೆಯೊಂದಿಗೆ ಹೆಣೆದುಕೊಂಡಿರುವ ಆಕರ್ಷಕ ಪ್ರಯಾಣವಾಗಿದೆ. ಆರಂಭಿಕ ಮಾನವರು ಅಲೆಮಾರಿ ಜೀವನಶೈಲಿಯಿಂದ ನೆಲೆಸಿದ ಕೃಷಿ ಸಮುದಾಯಗಳಿಗೆ ಪರಿವರ್ತನೆಯಾದಾಗ, ಕೆಲವು ಪ್ರಾಣಿಗಳು ಹಾಲಿನ ಸ್ಥಿರ ಪೂರೈಕೆಯನ್ನು ಒದಗಿಸಬಲ್ಲವು ಎಂಬ ಅರಿವು ಒಂದು ಪ್ರಮುಖ ಕ್ಷಣವಾಗಿದೆ.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `            The domestication of animals like cows, goats, and sheep was a transformative development. These animals not only provided meat and hides but also became a reliable source of milk. This discovery had profound implications for human nutrition, allowing communities to thrive on a more varied and sustainable diet.`
                : `

ಹಸುಗಳು, ಮೇಕೆಗಳು ಮತ್ತು ಕುರಿಗಳಂತಹ ಪ್ರಾಣಿಗಳ ಪಳಗಿಸುವಿಕೆಯು ಒಂದು ರೂಪಾಂತರದ ಬೆಳವಣಿಗೆಯಾಗಿದೆ. ಈ ಪ್ರಾಣಿಗಳು ಮಾಂಸ ಮತ್ತು ಚರ್ಮವನ್ನು ಒದಗಿಸುವುದು ಮಾತ್ರವಲ್ಲದೆ ಹಾಲಿನ ವಿಶ್ವಾಸಾರ್ಹ ಮೂಲವೂ ಆಯಿತು. ಈ ಆವಿಷ್ಕಾರವು ಮಾನವ ಪೋಷಣೆಗೆ ಆಳವಾದ ಪರಿಣಾಮಗಳನ್ನು ಹೊಂದಿದ್ದು, ಸಮುದಾಯಗಳು ಹೆಚ್ಚು ವೈವಿಧ್ಯಮಯ ಮತ್ತು ಸಮರ್ಥನೀಯ ಆಹಾರದಲ್ಲಿ ಅಭಿವೃದ್ಧಿ ಹೊಂದಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `            Ancient civilizations, from Mesopotamia to Egypt and the Indus Valley, embraced dairy farming. In Sumeria, the goddess Ninhursag was revered as the goddess of milk, emphasizing the cultural and symbolic importance attached to this nutritious substance. Similarly, Egyptian art depicted scenes of milking and dairy processing, showcasing the centrality of milk in their daily lives.`
                : `
ಮೆಸೊಪಟ್ಯಾಮಿಯಾದಿಂದ ಈಜಿಪ್ಟ್ ಮತ್ತು ಸಿಂಧೂ ಕಣಿವೆಯವರೆಗಿನ ಪ್ರಾಚೀನ ನಾಗರಿಕತೆಗಳು ಹೈನುಗಾರಿಕೆಯನ್ನು ಸ್ವೀಕರಿಸಿದವು. ಸುಮೇರಿಯಾದಲ್ಲಿ, ನಿನ್ಹುರ್ಸಾಗ್ ದೇವತೆಯನ್ನು ಹಾಲಿನ ದೇವತೆ ಎಂದು ಪೂಜಿಸಲಾಯಿತು, ಈ ಪೌಷ್ಟಿಕಾಂಶದ ವಸ್ತುವಿಗೆ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಸಾಂಕೇತಿಕ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಒತ್ತಿಹೇಳುತ್ತದೆ. ಅಂತೆಯೇ, ಈಜಿಪ್ಟಿನ ಕಲೆಯು ಹಾಲುಕರೆಯುವ ಮತ್ತು ಡೈರಿ ಸಂಸ್ಕರಣೆಯ ದೃಶ್ಯಗಳನ್ನು ಚಿತ್ರಿಸುತ್ತದೆ, ಅವರ ದೈನಂದಿನ ಜೀವನದಲ್ಲಿ ಹಾಲಿನ ಕೇಂದ್ರೀಯತೆಯನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.`}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl m-auto h-auto pt-10 bg-white ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col justify-center items-start ">
            <h1 className="text-2xl text-primary-main uppercase">
              {locale === 'en'
                ? `Founder of milk`
                : `

ಹಾಲಿನ ಸ್ಥಾಪಕ`}{' '}
            </h1>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `   Dr. Verghese Kurien, the Father of the White Revolution, passed away in the early hours of today, after a brief illness.  He was 91 years old.  He is survived by his wife, Molly Kurien,  daughter Nirmala and grandson, Siddharth.`
                : `

ಶ್ವೇತ ಕ್ರಾಂತಿಯ ಪಿತಾಮಹ ಡಾ. ವರ್ಗೀಸ್ ಕುರಿಯನ್ ಅವರು ಅಲ್ಪಕಾಲದ ಅನಾರೋಗ್ಯದ ನಂತರ ಇಂದು ಮುಂಜಾನೆ ನಿಧನರಾದರು. ಅವರಿಗೆ 91 ವರ್ಷ ವಯಸ್ಸಾಗಿತ್ತು. ಅವರು ಪತ್ನಿ ಮೊಲಿ ಕುರಿಯನ್, ಮಗಳು ನಿರ್ಮಲಾ ಮತ್ತು ಮೊಮ್ಮಗ ಸಿದ್ಧಾರ್ಥ್ ಅವರನ್ನು ಅಗಲಿದ್ದಾರೆ.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `           Dr. Kurien, was the architect of Indias White Revolution, which helped India emerge as the largest milk producer in the world.   Founder Chairman of the National Dairy Development Board (NDDB) from 1965 to 1998, the Gujarat Co-operative Milk Marketing Federation Ltd. (GCMMF), from 1973 to 2006 and the Institute of Rural Management (IRMA) from 1979 to 2006, his professional life has been dedicated to empowering the Indian farmers through co-operatives.  Dr. Kurien has helped to lay the foundation of democratic enterprises at the grass roots.   He believed that by placing technology and professional management in the hands of the farmers, the standard of living of millions of our poor people can be improved.`
                : `

ಡಾ. ಕುರಿಯನ್, ಭಾರತದ ಶ್ವೇತ ಕ್ರಾಂತಿಯ ವಾಸ್ತುಶಿಲ್ಪಿಯಾಗಿದ್ದರು, ಇದು ಭಾರತವು ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಹಾಲು ಉತ್ಪಾದಕರಾಗಿ ಹೊರಹೊಮ್ಮಲು ಸಹಾಯ ಮಾಡಿತು. 1965 ರಿಂದ 1998 ರವರೆಗೆ ರಾಷ್ಟ್ರೀಯ ಡೈರಿ ಅಭಿವೃದ್ಧಿ ಮಂಡಳಿಯ (NDDB) ಸಂಸ್ಥಾಪಕ ಅಧ್ಯಕ್ಷರು, ಗುಜರಾತ್ ಕೋ-ಆಪರೇಟಿವ್ ಮಿಲ್ಕ್ ಮಾರ್ಕೆಟಿಂಗ್ ಫೆಡರೇಶನ್ ಲಿಮಿಟೆಡ್ (GCMMF), 1973 ರಿಂದ 2006 ರವರೆಗೆ ಮತ್ತು ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ರೂರಲ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ (IRMA) 1979 ರಿಂದ 2006 ರವರೆಗೆ, ಅವರ ವೃತ್ತಿಪರ ಸಹಕಾರಿ ಸಂಘಗಳ ಮೂಲಕ ಭಾರತೀಯ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸಲು ಜೀವನವನ್ನು ಸಮರ್ಪಿಸಲಾಗಿದೆ. ಡಾ. ಕುರಿಯನ್ ಅವರು ತಳಮಟ್ಟದಲ್ಲಿ ಪ್ರಜಾಪ್ರಭುತ್ವದ ಉದ್ಯಮಗಳ ಅಡಿಪಾಯವನ್ನು ಹಾಕಲು ಸಹಾಯ ಮಾಡಿದ್ದಾರೆ. ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ವೃತ್ತಿಪರ ನಿರ್ವಹಣೆಯನ್ನು ರೈತರ ಕೈಯಲ್ಲಿ ಇರಿಸುವ ಮೂಲಕ ನಮ್ಮ ಲಕ್ಷಾಂತರ ಬಡ ಜನರ ಜೀವನಮಟ್ಟವನ್ನು ಸುಧಾರಿಸಬಹುದು ಎಂದು ಅವರು ನಂಬಿದ್ದರು.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `                      The cooperative movement, he helped to create became a model not only for India, but for developing countries throughout the world.  The Operation Flood Programme, of which Milk Producers; Cooperatives were the central plank, emerged as Indias largest rural employment programme and unleashed the larger dimension of dairy development. Dr. Kurien was the undisputed Milkman of India.  Born on November 26, 1921 at Kozhikode, Kerala, he graduated in Science from the Loyola College in 1940 and obtained hisdegree in Engineering from the Guindy College of Engineering in Chennai. After a stint at TISCO, Jamshedpur, he obtained the Govt. of Indias scholarship to study Dairy Engineering.  After some specialized training at the Imperial Institute of Animal Husbandry & Dairying, Bangalore, he left for the United States where he completed his Masters degree in Mechanical Engineering with Dairy Engineering as a minor subject from the Michigan State University in 1948.`
                : `

ಅವರು ರಚಿಸಲು ಸಹಾಯ ಮಾಡಿದ ಸಹಕಾರ ಚಳುವಳಿ ಭಾರತಕ್ಕೆ ಮಾತ್ರವಲ್ಲ, ಪ್ರಪಂಚದಾದ್ಯಂತ ಅಭಿವೃದ್ಧಿಶೀಲ ರಾಷ್ಟ್ರಗಳಿಗೆ ಮಾದರಿಯಾಗಿದೆ. ಆಪರೇಷನ್ ಫ್ಲಡ್ ಪ್ರೋಗ್ರಾಂ, ಇದರಲ್ಲಿ ಹಾಲು ಉತ್ಪಾದಕರು; ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳು ಕೇಂದ್ರ ಪ್ಲಾಂಕ್ ಆಗಿದ್ದು, ಭಾರತದ ಅತಿದೊಡ್ಡ ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ ಕಾರ್ಯಕ್ರಮವಾಗಿ ಹೊರಹೊಮ್ಮಿತು ಮತ್ತು ಡೈರಿ ಅಭಿವೃದ್ಧಿಯ ದೊಡ್ಡ ಆಯಾಮವನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿತು. ಡಾ. ಕುರಿಯನ್ ಭಾರತದ ನಿರ್ವಿವಾದ ಹಾಲುಮತದವರಾಗಿದ್ದರು. ನವೆಂಬರ್ 26, 1921 ರಂದು ಕೇರಳದ ಕೋಯಿಕ್ಕೋಡ್‌ನಲ್ಲಿ ಜನಿಸಿದ ಅವರು 1940 ರಲ್ಲಿ ಲೊಯೋಲಾ ಕಾಲೇಜಿನಲ್ಲಿ ವಿಜ್ಞಾನದಲ್ಲಿ ಪದವಿ ಪಡೆದರು ಮತ್ತು ಚೆನ್ನೈನ ಗಿಂಡಿ ಕಾಲೇಜ್ ಆಫ್ ಇಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ ಎಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ ಪದವಿ ಪಡೆದರು. ಜೆಮ್‌ಶೆಡ್‌ಪುರದ TISCO ನಲ್ಲಿ ಕೆಲಸ ಮಾಡಿದ ನಂತರ, ಅವರು ಸರ್ಕಾರವನ್ನು ಪಡೆದರು. ಡೈರಿ ಎಂಜಿನಿಯರಿಂಗ್ ಅಧ್ಯಯನ ಮಾಡಲು ಭಾರತದ ವಿದ್ಯಾರ್ಥಿವೇತನ. ಬೆಂಗಳೂರಿನ ಇಂಪೀರಿಯಲ್ ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಅನಿಮಲ್ ಹಸ್ಬೆಂಡರಿ ಮತ್ತು ಡೈರಿಯಿಂಗ್‌ನಲ್ಲಿ ಕೆಲವು ವಿಶೇಷ ತರಬೇತಿಯ ನಂತರ, ಅವರು ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್‌ಗೆ ತೆರಳಿದರು, ಅಲ್ಲಿ ಅವರು 1948 ರಲ್ಲಿ ಮಿಚಿಗನ್ ಸ್ಟೇಟ್ ಯೂನಿವರ್ಸಿಟಿಯಿಂದ ಡೈರಿ ಎಂಜಿನಿಯರಿಂಗ್‌ನೊಂದಿಗೆ ಮೆಕ್ಯಾನಿಕಲ್ ಎಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ ತಮ್ಮ ಸ್ನಾತಕೋತ್ತರ ಪದವಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದರು.`}
            </p>
          </div>

          <div className="w-full   flex justify-center items-center">
            <img src={founderOfMilkImg.src} className=" h-96" />
          </div>
        </div>
      </section>

      {/* <section className="max-w-7xl m-auto relative pb-10 pt-36     company-bg">
        <div className="w-full flex pr-10 pl-10 flex-col    justify-center items-center space-y-10 lg:flex-row lg:justify-between lg:space-x-10">
          <div className="grid place-content-center w-1/4">
            <h1 className="text-[40px] text-primary-main uppercase">
              KMF <br /> Achievements
            </h1>
          </div>

          <div className="w-3/4 flex justify-center items-center gap-5">
            <Swiper
              slidesPerView={slideView}
              freeMode={true}
              centeredSlides={true}
              spaceBetween={slideView === 1 ? 5 : 0}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[FreeMode, Autoplay]}
              className="mySwiper">
              {achievments?.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <AchienvmentCard img={item.image} title={item.title} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section> */}
 


<section className="max-w-7xl h-full m-auto pt-10 relative z-[-10]   "  >
      <img src='/images/footerbg.png' className='fixed w-full h-full inset-0 object-contain'/>
    </section>

      <section className="max-w-7xl m-auto pt-10  bg-white">
        <h1 className="text-center text-xl text-primary-main uppercase">
          {locale === 'en'
            ? `KMF Acheivments`
            : `
KMF ಸಾಧನೆಗಳು`}{' '}
        </h1>
        <div className="w-full space-y-5 p-4 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
          <div className="w-full flex flex-col items-start justify-start space-y-5">
            <h1 className="text-lg font-bold">{portfilioData?.attributes?.title}</h1>

            <div className="w-full h-auto md:h-96 flex-wrap md:flex-nowrap flex justify-center gap-2 items-center">
              {portfilioData?.attributes?.image?.data?.map((item, id) => {
                return <img key={id} src={item?.attributes?.url} className="w-full h-full " />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl m-auto h-auto pt-10  bg-white ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col justify-center items-start ">
            <h1 className="text-2xl text-primary-main uppercase">
              {locale === 'en'
                ? `Brand AMBASSADOR`
                : `
ಬ್ರಾಂಡ್ ರಾಯಭಾರಿ`}{' '}
            </h1>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `  Kannada film actor Shivarajkumar has been named the new brand ambassador of Nandini milk products. He was on Tuesday honoured by Karnataka Milk Federation (KMF) Chairman Bheema Naik and MD Jagadish in Bengaluru, as he took over as the ambassador of the State-run milk co-operative which produces the Nandini brand.`
                : `

ನಂದಿನಿ ಹಾಲಿನ ಉತ್ಪನ್ನಗಳ ಹೊಸ ಬ್ರಾಂಡ್ ಅಂಬಾಸಿಡರ್ ಆಗಿ ಕನ್ನಡ ಚಿತ್ರರಂಗದ ನಟ ಶಿವರಾಜಕುಮಾರ್ ಅವರನ್ನು ನೇಮಿಸಲಾಗಿದೆ. ಮಂಗಳವಾರ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಕರ್ನಾಟಕ ಹಾಲು ಮಹಾಮಂಡಳದ (ಕೆಎಂಎಫ್) ಅಧ್ಯಕ್ಷ ಭೀಮಾ ನಾಯ್ಕ್ ಮತ್ತು ಎಂಡಿ ಜಗದೀಶ್ ಅವರು ನಂದಿನಿ ಬ್ರಾಂಡ್ ಉತ್ಪಾದಿಸುವ ರಾಜ್ಯ-ಹಾಲು ಸಹಕಾರಿ ಸಂಘದ ರಾಯಭಾರಿಯಾಗಿ ಅಧಿಕಾರ ಸ್ವೀಕರಿಸಿದರು.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `           Shivarajkumar’s father and matinee idol Rajkumar and subsequently his late brother Puneeth Rajkumar were ambassadors of the Nandini milk products for several years. `
                : `


ಶಿವರಾಜಕುಮಾರ್ ಅವರ ತಂದೆ ಮತ್ತು ಮ್ಯಾಟಿನಿ ಆರಾಧ್ಯ ರಾಜಕುಮಾರ ರಾಜ್ಕುಮಾರ್ ಮತ್ತು ನಂತರ ಅವರ ದಿವಂಗತ ಸಹೋದರ ಪುನೀತ್ ರಾಜ್ಕುಮಾರ್ ಹಲವಾರು ವರ್ಷಗಳಿಂದ ನಂದಿನಿ ಹಾಲಿನ ಉತ್ಪನ್ನಗಳ ರಾಯಭಾರಿಗಳಾಗಿದ್ದರು.`}
            </p>
          </div>

          <div className="w-full   flex justify-center items-center">
          <iframe width="560" height="315" src={"https://www.youtube.com/embed/CHII1bdx5Sg?si=Z4aAkimBAHviYXmo"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section className="max-w-7xl m-auto h-auto pt-10  bg-white ">
        <div className="w-full  h-full flex flex-col items-start justify-around p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">


        <div className="max-w-80 h-[500px] relative rounded-tl-3xl rounded-br-3xl  shadow-md  overflow-hidden  group  transition-all duration-400 ease-in-out ">
      <div className="max-h-[80%] overflow-hidden ">
        <img
          src={chairman?.attributes?.image?.data?.attributes?.url}
          alt="featured-img"
          className="w-full h-full group-hover:scale-[1.1]"
          style={{ transition: '.4s all' }}
        />
      </div>

      <div className="mt-5  flex justify-center items-center flex-col p-4 space-y-3 ">
        <p className="text-md font-bold text-neutral-dark1">{chairman?.attributes?.name}</p>
        <h1 className="text-sm text-center ">{chairman?.attributes?.description}</h1>
      </div>
    </div>




    <div className="max-w-80  h-[500px] relative rounded-tl-3xl rounded-br-3xl  shadow-md  overflow-hidden  group  transition-all duration-400 ease-in-out ">
      <div className="max-h-[80%] overflow-hidden ">
        <img
          src={md?.attributes?.image?.data?.attributes?.url}
          alt="featured-img"
          className="w-full h-full group-hover:scale-[1.1]"
          style={{ transition: '.4s all' }}
        />
      </div>

      <div className="mt-5  flex justify-center items-center flex-col p-4 space-y-3 ">
        <p className="text-md font-bold text-neutral-dark1">{md?.attributes?.name}</p>
        <h1 className="text-sm text-center ">{md?.attributes?.description}</h1>
      </div>
    </div>

 
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;
