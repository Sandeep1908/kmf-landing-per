'use client';

import React, { useEffect, useState } from 'react';
import CarouselImage from '@/components/CarouselImage';

import feturedImg from '../../../images/homeImages/featured.png';
import portfolioImg from '../../../images/homeImages/portfolio.png';
import galleryImg from '../../../images/homeImages/gallery.png';
import image12 from '../../../images/homeImages/image12.png';
import image2 from '../../../images/homeImages/image2.png';
import image3 from '../../../images/homeImages/image3.png';
import aboutSecImg from '../../../images/homeImages/about-sec.png';
import notificationImg1 from '../../../images/homeImages/notification/cow-grass.png';
import { LinkCard } from '../Card.js';
import { CarouselNotification } from '@/components/CarouselImage';
import cartIco from '../../../images/homeImages/quikLink/cart.tif.svg';
import locationIco from '../../../images/homeImages/quikLink/location.tif.svg';
import newsIco from '../../../images/homeImages/quikLink/news.tif.svg';
import commercialIco from '../../../images/homeImages/quikLink/commercial.svg';
import milkglassImg from '../../../images/homeImages/milkglass.png';
import kymIco1 from '../../../images/homeImages/kym/importance.tif.svg';
import kymIco2 from '../../../images/homeImages/kym/type.tif.svg';
import kymIco3 from '../../../images/homeImages/kym/nutrition.svg';
import kymIco4 from '../../../images/homeImages/kym/age.tif.svg';
import cowBlogImg from '../../../images/homeImages/cowBlog.png';
import { v4 as uuidv4 } from 'uuid';
import Fade from 'react-reveal/Fade';
import Footer from '@/components/Footer';
// import {Swiper, SwiperSlide} from 'swiper/react'
// import { EffectCoverflow, Pagination } from 'swiper/components';
import TypeWriter from '../../../components/TypeWriter';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card.js';

import useLocale from '@/hooks/useLocale';

const Home = () => {
  const [previewCount, setPreviewCount] = useState(1);
  const images = [image12.src, image2.src, image3.src];
  const notificationImg = [notificationImg1.src];
  const aboutVideo = '/video/video1.mp4';
  const aboutVideo2 = '/video/video2.mp4';

 

  let cards = [
    {
      key: uuidv4(),
      content: <Card imgUrl={feturedImg.src} title="Featured On" />
    },
    {
      key: uuidv4(),
      content: <Card imgUrl={galleryImg.src} title="Gallery" />
    },
    {
      key: uuidv4(),
      content: <Card imgUrl={portfolioImg.src} title="Portfolio KMF" />
    }
  ];

  useEffect(() => {
    const updateScreensize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 768) {
        setPreviewCount(3);
      } else {
        setPreviewCount(1);
      }
    };

    updateScreensize();
    window.addEventListener('resize', updateScreensize);
    return () => window.removeEventListener('resize', updateScreensize);
  });

  return (
    <div className="w-full h-full absolute top-[151px] z-[-1]">
      {/* HOME CARAOUSAL IMAGE */}
      <CarouselImage images={images} />

      <section className="w-full   pt-20  relative z-[1] before:absolute before:inset-0 before:bg-secondary-main before:z-[-1] before:md:h-[600px] ">
        <div>
          <div className="flex justify-center items-center flex-col p-10">
            <h1 className="text-[40px] text-[#242424] text-center font-lato font-[400] tracking-wide md:text-4xl">
              Welcome to KMF Nandini
            </h1>
            <p className="text-[#595959] text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
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
                slideShadows: false
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
              <h1 className="text-[40px]">About KMF</h1>

              <div className="space-y-6">
                <TypeWriter
                  text="   KMF stands for KARNATAKA MILK FEDRATION’S LTD., KMF is a 4Decade Organization
              covering around 24,000 Villages procuring about 85Lakh Kgs of milk per day.
              Emphasizing on “Quality Excellence from Cow to Consumer”. KMF Heralding economic,
              social and cultural prosperity in the lives of our milk producer members by
              promoting vibrant, self-sustaining and holistic cooperative dairy development in
              Karnataka State."
                  delay={70}
                />
              </div>

              <button className="bg-primary-main w-[200px] h-[56px]  text-neutral-light4 font-semibold rounded-md">
                Read More
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
              <h1 className="text-[40px]">About OUR BRAND NANDINI</h1>

              <div className="space-y-6 h-[">
                <TypeWriter
                  text="NANDINI MILK is a brand owned by KMF. Nandini was founded in 1974 by the
              government of Karnataka as Karnataka Dairy Development Corporation (KDDC). NANDINI
              brand became household name in state of Karnataka. In 1955 First Dairy was
              established in the State of Karnataka, belonging to KODAGU district at KUDIGE
              Village, later in the Year 1965 The Biggest Dairy was Built in Bengaluru. Nandini
              Brand Includes verities of Milk & Milk Products."
                  delay={70}
                />
              </div>

              <button className="bg-primary-main w-[200px] h-[56px]  text-neutral-light4 font-semibold rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NOTIFICATION SECTION  */}

      <section className="w-full h-80   ">
        <CarouselNotification
          images={notificationImg}
          title="Notification"
          description="11 OCT Tender Notification"
        />
      </section>

      {/* QUICK LINK  */}

      <section className="w-full h-auto pt-[180px]    ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[40px] ">Quick Links</h1>
            <p className="text-center text-sm text-[#595959]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </p>
          </div>

          <div className='mt-20 w-full h-auto  relative  before:absolute before:top-0   before:lg:top-1/3 before:w-full before:h-full before:z-[-1] before:bg-[url("/images/quickLinkbg.png")] before:bg-no-repeat before:bg-cover'>
            <Fade bottom>
              <div className="max-w-[1600px] m-auto p-3 flex flex-col justify-center items-center gap-10  sm:flex-row sm:justify-around sm:items-center sm:flex-wrap">
                <LinkCard title="Place Your Order" imgUrl={cartIco.src} />
                <LinkCard title="Latest News" imgUrl={newsIco.src} />
                <LinkCard title="Daily Tour" imgUrl={locationIco.src} />
                <LinkCard title="Nandhini Commercials" imgUrl={commercialIco.src} />
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
                <h1 className="text-[40px]">Know Your Milk</h1>

                <div className="space-y-6">
                  <p className="text-justify font-[100] text-neutral-dark1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </p>
                </div>
              </div>

              <div className=" w-full flex flex-wrap  justify-center  p-2 gap-5 items-center md:justify-between">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco1.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                    Importance of <br /> milk
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco2.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                    Class & type <br />
                    of milk
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco3.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                    Essential nutrition <br />
                    in milk
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco4.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                    Milk for every <br />
                    Age group
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
              <h1 className="text-[40px]">Latest News</h1>
              <div className="w-[100px] h-[5px] bg-black"></div>
            </div>
            <p className="text-neutral-dark1">Ut enim ad minim veniam, quik</p>
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
                <p className="text-light-light4 text-[12px]">Dec 13, 2023</p>
                <p className="text-light-light4 text-[24px]">Latest News....</p>
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
                <p className="text-light-light4 text-[12px]">Dec 13, 2023</p>
                <p className="text-light-light4 text-[24px]">Latest News....</p>
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
                <p className="text-light-light4 text-[12px]">Dec 13, 2023</p>
                <p className="text-light-light4 text-[24px]">Latest News....</p>
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
