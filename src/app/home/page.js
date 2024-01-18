'use client';

import React, { useEffect, useState } from 'react';
import CarouselImage from '@/components/CarouselImage';

import feturedImg from '../../images/homeImages/featured.png';
import portfolioImg from '../../images/homeImages/portfolio.png';
import galleryImg from '../../images/homeImages/gallery.png';
import image12 from '../../images/homeImages/image12.png';
import image2 from '../../images/homeImages/image2.png';
import image3 from '../../images/homeImages/image3.png';
import aboutSecImg from '../../images/homeImages/about-sec.png';
import notificationImg1 from '../../images/homeImages/notification/cow-grass.png';
import { LinkCard } from './Card.js';
import { CarouselNotification } from '@/components/CarouselImage';
import cartIco from '../../images/homeImages/quikLink/cart.tif.svg';
import locationIco from '../../images/homeImages/quikLink/location.tif.svg';
import newsIco from '../../images/homeImages/quikLink/news.tif.svg';
import commercialIco from '../../images/homeImages/quikLink/commercial.svg';
import milkglassImg from '../../images/homeImages/milkglass.png';
import kymIco1 from '../../images/homeImages/kym/importance.tif.svg';
import kymIco2 from '../../images/homeImages/kym/type.tif.svg';
import kymIco3 from '../../images/homeImages/kym/nutrition.svg';
import kymIco4 from '../../images/homeImages/kym/age.tif.svg';
import cowBlogImg from '../../images/homeImages/cowBlog.png';
import { v4 as uuidv4 } from 'uuid';
import Fade from 'react-reveal/Fade';
import Footer from '@/components/Footer';
// import {Swiper, SwiperSlide} from 'swiper/react'
// import { EffectCoverflow, Pagination } from 'swiper/components';
import TypeWriter from '../../components/TypeWriter';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card.js';

const Home = () => {

  const [previewCount, setPreviewCount]=useState(1)
  const images = [image12.src, image2.src, image3.src];
  const notificationImg = [notificationImg1.src];
  const aboutVideo = '/video/video1.mp4';
  const aboutVideo2 = '/video/video2.mp4';

  let cards = [
    {
      key: uuidv4(),
      content: <Card imgUrl={feturedImg.src} title="
      ರಂದು ವೈಶಿಷ್ಟ್ಯಗೊಳಿಸಲಾಗಿದೆ" />
    },
    {
      key: uuidv4(),
      content: <Card imgUrl={galleryImg.src} title="ಗ್ಯಾಲರಿ" />
    },
    {
      key: uuidv4(),
      content: <Card imgUrl={portfolioImg.src} title="ಪೋರ್ಟ್ಫೋಲಿಯೋ KMF" />
    },
 
  ];

  useEffect(()=>{
    const updateScreensize =()=>{
      const screenWidth=window.innerWidth;
      if(screenWidth>768){
        setPreviewCount(3)
      }
      else{
        setPreviewCount(1)
      }
    }

    updateScreensize()
    window.addEventListener('resize',updateScreensize)
    return ()=>window.removeEventListener('resize',updateScreensize)
  })


  return (
    <div className="w-full h-full absolute top-[151px] z-[-1]">
      {/* HOME CARAOUSAL IMAGE */}
      <CarouselImage images={images} />

      <section className="w-full   pt-20  relative z-[1] before:absolute before:inset-0 before:bg-secondary-main before:z-[-1] before:md:h-[600px] ">
        <div>
          <div className="flex justify-center items-center flex-col p-10">
            <h1 className="text-[40px] text-[#242424] text-center font-lato font-[400] tracking-wide md:text-4xl">
            ಕೆಎಂಎಫ್ ನಂದಿನಿಗೆ ಸ್ವಾಗತ
            </h1>
            <p className="text-[#595959] text-center ">
              
ಡೈರಿ ಉತ್ಪನ್ನಗಳು ಹಾಲಿನಿಂದ ಪಡೆದ ಪೌಷ್ಟಿಕ ಆಹಾರಗಳಾಗಿವೆ, ಕ್ಯಾಲ್ಸಿಯಂ ಮತ್ತು ಪ್ರೋಟೀನ್‌ನಂತಹ ಅಗತ್ಯ ಪೋಷಕಾಂಶಗಳನ್ನು ನೀಡುತ್ತವೆ, ಒಟ್ಟಾರೆ ಆರೋಗ್ಯ ಮತ್ತು ಯೋಗಕ್ಷೇಮವನ್ನು ಬೆಂಬಲಿಸುತ್ತವೆ.
            </p>
          </div>

          <div className="w-full relative z-10   ">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              
              }}
          
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
              spaceBetween={40}
              slidesPerView={previewCount}
              navigation={true}
              controller={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              initialSlide={1}
              slide
              loop={true}
              className={`max-w-[1400px]  `}>
              {cards.map((card) => {
                return (
                  <SwiperSlide className="swiper-sldier-card lg:p-10" key={card.key}>
                    {card.content}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="w-full p-2  bg-primary-subtle  mt-[50px]">
        <div>
          <div className=" mt-10  lg:space-x-10  flex flex-col justify-center items-center m-auto max-w-[1300px]">
            <div
              className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-center lg:max-w-[60rem]     lg:pr-10 bg-img`}>
              <h1 className="text-[40px]">ಕೆಎಂಎಫ್ ಬಗ್ಗೆ</h1>

              <div className="space-y-6">
                <TypeWriter
                  text={`KMF ಎಂದರೆ KARNATAKA MILK FEDRATION'S LTD., KMF 4 ದಶಕಗಳ ಸಂಸ್ಥೆಯಾಗಿದೆ.
                  ಸುಮಾರು 24,000 ಹಳ್ಳಿಗಳು ದಿನಕ್ಕೆ ಸುಮಾರು 85 ಲಕ್ಷ ಕೆಜಿ ಹಾಲು ಸಂಗ್ರಹಿಸುತ್ತವೆ.
                  "ಗೋವಿನಿಂದ ಗ್ರಾಹಕನಿಗೆ ಗುಣಮಟ್ಟದ ಉತ್ಕೃಷ್ಟತೆ"ಗೆ ಒತ್ತು ನೀಡುವುದು. KMF ಹೆರಾಲ್ಡಿಂಗ್ ಆರ್ಥಿಕ,
                  ನಮ್ಮ ಹಾಲು ಉತ್ಪಾದಕ ಸದಸ್ಯರ ಜೀವನದಲ್ಲಿ ಸಾಮಾಜಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಸಮೃದ್ಧಿ
                  ರೋಮಾಂಚಕ, ಸ್ವಾವಲಂಬಿ ಮತ್ತು ಸಮಗ್ರ ಸಹಕಾರಿ ಡೈರಿ ಅಭಿವೃದ್ಧಿಯನ್ನು ಉತ್ತೇಜಿಸುವುದು
                  ಕರ್ನಾಟಕ ರಾಜ್ಯ.`}
                  delay={70}
                />
              </div>

              <button className="bg-primary-main w-[200px] h-[56px]  text-neutral-light4 font-semibold rounded-md">
              ಮತ್ತಷ್ಟು ಓದು
              </button>
            </div>

            <Fade right>
              <div className="p-4 flex justify-center items-center w-full h-96    ">
                <video
                  src={aboutVideo}
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-full h-96 object-cover"
                />
              </div>
            </Fade>
          </div>

          <div className=" mt-10 mb-10 lg:space-x-10  flex flex-col-reverse  justify-center items-center   m-auto max-w-[1300px]">
            <Fade left>
              <div className="p-4 flex justify-center items-center w-full h-96    ">
                <video
                  src={aboutVideo2}
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-full h-96 object-cover"
                />
              </div>
            </Fade>
            <div
              className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-center  lg: max-w-[60rem] lg:pr-10 bg-img-2`}>
              <h1 className="text-[40px]">ನಮ್ಮ ಬ್ರಾಂಡ್ ನಂದಿನಿ ಬಗ್ಗೆ</h1>

              <div className="space-y-6 h-[">
                <TypeWriter
                  text={`ನಂದಿನಿ ಹಾಲು ಕೆಎಂಎಫ್ ಒಡೆತನದ ಬ್ರಾಂಡ್ ಆಗಿದೆ. ನಂದಿನಿಯನ್ನು 1974 ರಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾಯಿತು
                  ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ಕರ್ನಾಟಕ ಡೈರಿ ಅಭಿವೃದ್ಧಿ ನಿಗಮ (ಕೆಡಿಡಿಸಿ). ನಂದಿನಿ
                  ಬ್ರ್ಯಾಂಡ್ ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಮನೆಮಾತಾಗಿದೆ. 1955 ರಲ್ಲಿ ಮೊದಲ ಡೈರಿ ಆಗಿತ್ತು
                  ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಕೊಡಗು ಜಿಲ್ಲೆಗೆ ಸೇರಿದ ಕೂಡಿಗೆಯಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾಗಿದೆ
                  ಗ್ರಾಮ, ನಂತರ 1965 ರಲ್ಲಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅತಿದೊಡ್ಡ ಡೈರಿಯನ್ನು ನಿರ್ಮಿಸಲಾಯಿತು. ನಂದಿನಿ
                  ಬ್ರ್ಯಾಂಡ್ ಹಾಲು ಮತ್ತು ಹಾಲಿನ ಉತ್ಪನ್ನಗಳ ನೈಜತೆಯನ್ನು ಒಳಗೊಂಡಿದೆ.`}
                  delay={70}
                />
              </div>

              <button className="bg-primary-main w-[200px] h-[56px]  text-neutral-light4 font-semibold rounded-md">
              ಮತ್ತಷ್ಟು ಓದು
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      {/* <section className="h-auto w-full bg-secondary-subtle  mt-[-220px] flex justify-center   ">
        <div className="  pt-[350px]  lg:flex justify-center items-center m-auto max-w-[1700px]">
          <div className="flex  w-full justify-center items-center flex-col space-y-7 p-4 lg:items-start  lg: max-w-[60rem] lg:pr-10  ">
            <h1 className="text-[40px]">About KMF</h1>

            <div className="space-y-6">
              <p className="text-justify font-[100] text-neutral-dark1">
                Karnataka Cooperative Milk Producers' Federation Limited (KMF) is the Apex Body for
                the dairy co-operative movement in Karnataka. It is the second largest dairy
                co-operative amongst the dairy cooperatives in the country. In South India it stands
                first in terms of procurement as well as sales. One of the core functions of the
                Federation is marketing of Milk and Milk Products. The Brand "Nandini" is the
                household name for Pure and Fresh milk and milk products. KMF has 16 Milk Unions
                covering all the districts of the State which procure milk from Primary Dairy
                Cooperative Societies(DCS) and distribute milk to the consumers in various
                Towns/Cities/Rural markets in Karnataka.
              </p>

              <p className="text-justify font-[100] text-neutral-dark1">
                Karnataka Dairy Development Cooperation(KDDC), the first ever World Bank/
                International Development Agency funded Dairy Development Program in the country
                started in Karnataka on co-operative lines with the organisation of Village Level
                Dairy Co-operatives in 1974. The AMUL pattern of dairy co-operatives started
                functioning in Karnataka from 1974-75 with the financial assistance from World
                Bank/IDA, Operation Flood II & III.....
              </p>
            </div>

            <button className="bg-primary-main w-[200px] h-[56px]  text-neutral-light4 font-semibold rounded-md">
              Read More
            </button>
          </div>

          <div className="p-4 flex justify-center items-center w-full lg:max-w-[32rem]">
            <img src={aboutSecImg.src} className=" lg:max-w-lg" />
          </div>
        </div>
      </section> */}

      {/* NOTIFICATION SECTION  */}

      <section className="w-full h-80   ">
        <CarouselNotification
          images={notificationImg}
          title="ಅಧಿಸೂಚನೆ"
          description="
          11 OCT ಟೆಂಡರ್ ಅಧಿಸೂಚನೆ"
        />
      </section>

      {/* QUICK LINK  */}

      <section className="w-full h-auto pt-[180px]    ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[40px] ">
ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು</h1>
            <p className="text-center text-sm text-[#595959]">
            ಕೆಲವು ಲಿಂಕ್‌ಗಳು ಇಲ್ಲಿವೆ
            </p>
          </div>

          <div className='mt-20 w-full h-auto  relative  before:absolute before:top-0   before:lg:top-1/3 before:w-full before:h-full before:z-[-1] before:bg-[url("/images/quickLinkbg.png")] before:bg-no-repeat before:bg-cover'>
            <Fade bottom>
              <div className="max-w-[1600px] m-auto p-3 flex flex-col justify-center items-center gap-10  sm:flex-row sm:justify-around sm:items-center sm:flex-wrap">
                <LinkCard title="ಬೇಡಿಕೆಯನ್ನು ಸಲ್ಲಿಸಿ" imgUrl={cartIco.src} />
                <LinkCard title="ಇತ್ತೀಚಿನ ಸುದ್ದಿ" imgUrl={newsIco.src} />
                <LinkCard title="ದೈನಂದಿನ ಪ್ರವಾಸ" imgUrl={locationIco.src} />
                <LinkCard title="ನಂದಿನಿ ಕಮರ್ಷಿಯಲ್ಸ್" imgUrl={commercialIco.src} />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="w-full   bg-secondary-subtle h-auto ">
        <div>
          <div className=" pt-10 pb-10 lg:space-x-10  flex flex-col-reverse  justify-center items-center lg:flex-row lg:justify-center lg:items-center m-auto max-w-[1300px]">
            <Fade left>
              <div className="p-4 flex justify-center items-center w-full h-[500px]   lg:max-w-[32rem]">
                <img src={milkglassImg.src} className="w-full h-full" />
              </div>
            </Fade>
            <div className="flex flex-col justify-center space-y-10 items-center">
              <div
                className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-start  lg: max-w-[60rem] lg:pr-10  `}>
                <h1 className="text-[40px]">ನಿಮ್ಮ ಹಾಲನ್ನು ತಿಳಿಯಿರಿ</h1>

                <div className="space-y-6">
                  <p className="text-justify font-[100] text-neutral-dark1">
                  ನಿಮ್ಮ ಹಾಲನ್ನು ತಿಳಿಯಿರಿ: ವೈವಿಧ್ಯಮಯ ಪ್ರಧಾನ ಆಹಾರ, ಹಾಲು ಹಸು, ಮೇಕೆ ಮತ್ತು ಕುರಿಗಳಂತಹ ವಿಧಗಳಲ್ಲಿ ಬದಲಾಗುತ್ತದೆ, ಪ್ರತಿಯೊಂದೂ ವಿಶಿಷ್ಟವಾದ ಸುವಾಸನೆ ಮತ್ತು ಪೌಷ್ಟಿಕಾಂಶದ ಪ್ರೊಫೈಲ್ಗಳನ್ನು ನೀಡುತ್ತದೆ. ಕ್ಯಾಲ್ಸಿಯಂ, ಪ್ರೋಟೀನ್ ಮತ್ತು ವಿಟಮಿನ್ಗಳಲ್ಲಿ ಸಮೃದ್ಧವಾಗಿರುವ ಹಾಲು ಮೂಳೆಯ ಆರೋಗ್ಯವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ. ಸಂಪೂರ್ಣ ಹಾಲು ನೈಸರ್ಗಿಕವಾಗಿ ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಕೊಬ್ಬುಗಳು, ಆದರೆ ಕೆನೆರಹಿತ ಆಯ್ಕೆಗಳು ಕೊಬ್ಬಿನಂಶವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. ಲ್ಯಾಕ್ಟೋಸ್-ಮುಕ್ತ ಮತ್ತು ಸಸ್ಯ-ಆಧಾರಿತ ಪರ್ಯಾಯಗಳು ಆಹಾರದ ಆದ್ಯತೆಗಳನ್ನು ಪೂರೈಸುತ್ತವೆ. ನಿಮ್ಮ ಹಾಲಿನ ಆಯ್ಕೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಉತ್ತಮವಾದ, ರುಚಿಕರವಾದ ಮತ್ತು ಆರೋಗ್ಯ-ಪ್ರಜ್ಞೆಯ ಜೀವನಶೈಲಿಗಾಗಿ ವೈಯಕ್ತಿಕ ಅಗತ್ಯಗಳಿಗೆ ಪೋಷಣೆಯನ್ನು ಹೊಂದಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
                  </p>
                </div>
              </div>

              <div className=" w-full flex flex-wrap  justify-center  p-2 gap-5 items-center md:justify-between">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco1.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                  ನ ಪ್ರಾಮುಖ್ಯತೆ <br /> ಹಾಲು
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco2.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                  ವರ್ಗ ಮತ್ತು ಪ್ರಕಾರ <br />
                  ಹಾಲಿನ
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco3.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                  ಅಗತ್ಯ ಪೋಷಣೆ<br />
                  ಹಾಲಿನಲ್ಲಿ
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco4.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                  ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹಾಲು <br />
                  ವಯಸ್ಸಿನ ಗುಂಪು
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto  bg-primary-lighter  ">
        <div className=" p-10 flex flex-col items-center space-y-10 justify-center max-w-[1600px] md:items-start m-auto">
          <div className="flex  flex-col justify-center items-center  space-y-3 md:items-start">
            <div className="flex justify-center flex-wrap   items-end  ">
              <h1 className="text-[40px]">ಇತ್ತೀಚಿನ ಸುದ್ದಿ</h1>
              <div className="w-[100px] h-[5px] bg-black"></div>
            </div>
            <p className="text-neutral-dark1">ವೈವಿಧ್ಯಮಯ ಹಾಲಿನ ಆಯ್ಕೆಗಳು, ಪೋಷಕಾಂಶಗಳಲ್ಲಿ ಸಮೃದ್ಧವಾಗಿವೆ, ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಆರೋಗ್ಯ ಮತ್ತು ರುಚಿಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ</p>
          </div>

          <div className=" relative w-full flex flex-col justify-center items-center gap-5 flex-wrap space-y-10 sm:space-y-0 sm:flex-row sm:justify-evenly ">
            <div className="relative">
              <div className="max-w-[500px] overflow-hidden">
                <img
                  src={cowBlogImg.src}
                  className="w-full hover:scale-[1.2]  "
                  style={{ transition: '1s all' }}
                />
              </div>
              <div className="absolute bottom-9 left-7">
                <p className="text-light-light4 text-[12px]">ಡಿಸೆಂಬರ್ 13, 2023</p>
                <p className="text-light-light4 text-[24px]">ಇತ್ತೀಚಿನ ಸುದ್ದಿ....</p>
              </div>
            </div>

            <div className="relative">
              <div className="max-w-[500px] overflow-hidden">
                <img
                  src={cowBlogImg.src}
                  className="w-full hover:scale-[1.2]  "
                  style={{ transition: '1s all' }}
                />
              </div>
              <div className="absolute bottom-9 left-7">
                <p className="text-light-light4 text-[12px]">ಡಿಸೆಂಬರ್ 13, 2023</p>
                <p className="text-light-light4 text-[24px]">ಇತ್ತೀಚಿನ ಸುದ್ದಿ....</p>
              </div>
            </div>

            <div className="relative">
              <div className="max-w-[500px] overflow-hidden">
                <img
                  src={cowBlogImg.src}
                  className="w-full hover:scale-[1.2]  "
                  style={{ transition: '1s all' }}
                />
              </div>
              <div className="absolute bottom-9 left-7">
                <p className="text-light-light4 text-[12px]">ಡಿಸೆಂಬರ್ 13, 2023</p>
                <p className="text-light-light4 text-[24px]">ಇತ್ತೀಚಿನ ಸುದ್ದಿ....</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION  */}
      <Footer />
    </div>
  );
};

export default Home;
