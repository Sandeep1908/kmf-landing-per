'use client';
import React, { useState, useEffect } from 'react';
import portfolioImg from '@/images/portfolio/portfolio.png';
// import founderOfMilkImg from '@/images/portfolio/founder-of-milk.jpeg';
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
import founderOfMilk2Img from '@/images/portfolio/founder-of-milk.png';
import KRISHNAPPA from '@/images/portfolio/KRISHNAPPA.png';
import achivement from '@/images/portfolio/achiv.jpg';
import hom from '@/images/portfolio/hom.jpg';
import titleBG from '@/images/portfolio/title-bg.png';
import flag from '@/images/portfolio/flag.jpg';
import band1 from '@/images/portfolio/brand-1.jpeg';
import band2 from '@/images/portfolio/brand-2.jpeg';
import band3 from '@/images/portfolio/brand-3.jpeg';
// import  from "'@/images/portfolio/flag.jpg"
import { Carousel as Carousels } from 'react-responsive-carousel';

// import homeVideo from "/video/video1.mp4"

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay, } from 'swiper/modules';
import spon1 from '@/images/sponsored/1.jpg';
import spon2 from '@/images/sponsored/2.jpg';
import spon3 from '@/images/sponsored/3.png';
import spon4 from '@/images/sponsored/4.jpg';
import spon5 from '@/images/sponsored/5.png';
import spon6 from '@/images/sponsored/6.jpg';
import spon7 from '@/images/sponsored/7.jpg';
import spon8 from '@/images/sponsored/8.jpg';
import spon9 from '@/images/sponsored/9.jpg';
import spon10 from '@/images/sponsored/10.png';

import './style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import { achievements as achievementItems } from '@/configtext/companyProfile';
import useApi from '@/hooks/useApi';

import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useMyContext } from '@/context/headerContext';

function Portfolio() {
  const [achievments, setAchievments] = useState([]);
  const [slideView, setSlideView] = useState(3);
  const axios = useApi();
  const [currentIndex, setCurrentIndex] = useState(0);
  const locale = useLocale().locale;
  const [banners,setBanners]=useState([])
 
  const [sponsore, setSponsore] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const {isScroll}=useMyContext()
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const tabs = [
    {
      tabName: 'KMF Sanjeevini',
      link: `/${locale}/women-empowerment`
    },
    {
      tabName: 'KsheeraBhagya',
      link: `/${locale}/portfolio/ksheerabhagaya`
    },
    {
      tabName: 'KsheeraDhare',
      link: `/${locale}/portfolio/ksheeradhare`
    },

    {
      tabName: 'Schemes',
      link: `/${locale}/animal-husbandery/scheme`
    },
    {
      tabName: 'Awards',
      link: `/${locale}/portfolio/awards`
    },
    {
      tabName: 'Sex Sorted Semen',
      link: `/${locale}/animal-husbandery/animal-breeding`
    },
    {
      tabName: 'Cattle Feed To Farmers ',
      link: `/${locale}/animal-husbandery/cattle-insurance`
    },
    {
      tabName: 'Defence',
      link: `/${locale}/portfolio/defence`
    },
    {
      tabName: 'Ghee Supply',
      link: `/${locale}/portfolio/gheesupply`
    }
  ];
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/kmf-achievements');
      const { data: sponsor } = await axios.get('/api/sponsoreds');
      const {data:banner} =await axios.get('/api/banners')

      setBanners(banner.data)
      setSponsore(sponsor.data);
      setAchievments(data.data);
    })();
  }, []);

  const handleTabs = (idx) => {
    setCurrentIndex(idx);
  };

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
      className={`w-full h-full absolute   z-[-1]  ${isScroll?'top-48':''}`}>
      <section className={`w-full  h-[700px] relative  `}>
      <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay,FreeMode]}
        className="h-full"
      >

        {banners?.map((item,id)=>{
         
          return(
            <SwiperSlide key={id}>
          
            <img src={item?.attributes?.banner?.data?.attributes?.url} alt="" className='w-full h-[700px]' />
         
            </SwiperSlide>
          )
         
        })}
      


      </Swiper>

        {/* <video
          autoPlay
          muted
          loop
          controls
          className="w-full h-full"
          src="/video/portfolio.mp4"></video> */}
      </section>

      <section className="w-full h-auto mt-10">
        <div className=" w-full flex flex-col items-center justify-center lg:mt-20 p-3">
          <h1 className="text-primary-main text-2xl md:text-5xl " style={{ fontFamily: 'cursive' }}>
            {' '}
            <i> HISTORY OF MILK </i>
          </h1>
          <div className="mt-0 md:mt-4 text-center mr-auto ml-auto">
            <p className="text-3xl md:text-6xl font-bold">
              LETS BEGIN THE <br />
              JOURNEY OF MILK
            </p>

            <p className="text-lg md:text-2xl  mt-6 md:mt-16 max-w-[850px] text-justify">
              The history of milk is a fascinating journey that intertwines with the evolution of
              human civilization and the domestication of animals. As early humans transitioned from
              a nomadic lifestyle to settled agricultural communities, the realization that certain
              animals could provide a steady supply of milk marked a pivotal moment.
            </p>
          </div>
        </div>
      </section>
      <section id="krisna" className="w-full h-[100vh] lg:h-[80vh] mt-10 md:mt-20">
        <div className="w-full h-full">
          <div className="relative max-w-7xl  h-full bg-[#f99457] m-auto flex flex-col lg:flex-row justify-center ">
            <div className="w-full lg:w-[50%]  lg:p-10 h-full flex justify-center items-center">
              <img className="w-[70%] lg:w-full" src={founderOfMilk2Img.src} alt="" />
            </div>

            <div className="w-full lg:w-[50%] h-full flex flex-col justify-center text-justify items-center p-3 lg:p-10">
              <h1 className="text-white text-lg md:text-4xl font-bold text-center ">
              KSHEERA PITHAMHA - DR. VERGHESE KURIEN

              </h1>
              <p className="text-sm md:text-lg  lg:mt-10 text-white text-justify">
              Dr. Verghese Kurien, the Father of the White Revolution, passed away in the early
                hours of today, after a brief illness. He was 91 years old. He is survived by his
                wife, Molly Kurien, daughter Nirmala and grandson, Siddharth. Dr. Kurien, was the
                architect of Indias White Revolution, which helped India emerge as the largest milk
                producer in the world. Founder Chairman of the National Dairy Development Board
                (NDDB) from 1965 to 1998, the Gujarat Co-operative Milk Marketing Federation Ltd.
                (GCMMF), from 1973 to 2006 and the Institute of Rural Management (IRMA) from 1979 to
                2006, his professional life has been dedicated to empowering the Indian farmers
                through co-operatives. Dr. Kurien has helped to lay the foundation of democratic
                enterprises at the grass roots.
                {/* Not only that, he had imported HF breed heifers from Holland and distributed them to the farmers here. With the aim of developing the countrys native breed heifers through artificial insemination, he got help from the central government and succeeded in importing 8 to 10 foreign breed bulls to Karnataka. He worked hard to increase milk production through breeding activities in Mysore, Bangalore, Mangalore and some areas of the hill country. Perhaps about dairy farming Mr. M.V.K. It is a fact that due to the influence of the foresight of Mr. R., the situation is now created that wherever you go in the entire state, you are driven by crossbred horses. */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="verghese" className="w-full h-[100vh] lg:h-[80vh] mt-5">
        <div className="w-full h-full">
          <div className="relative max-w-7xl  h-full bg-[#4f7ffc] m-auto flex flex-col lg:flex-row justify-center ">
            <div className="order-last lg:order-1 w-full lg:w-[50%] h-full flex flex-col justify-center text-justify items-center p-3 lg:p-10">
              <h1 className="text-white text-lg md:text-4xl font-bold text-center ">
                KARNATAKA KSHEERA BRAHMA - MR. MV KRISHNAPPA

              </h1>
              <p className="text-sm md:text-lg  lg:mt-10 text-white text-justify">
               
                He was originally from Kolar district who was very concerned about the farmers. He
                was born in a village called Motakapalli in Mulbagilu taluk. Date 01.06.1918 is his
                birthday. He entered politics at one stage and was elected to the Lok Sabha for the
                first time in 1952. Central government led by Jawaharlal Nehru M.V.K. He was given
                the opportunity to serve as Agriculture and Food Minister. It was a time when the
                dairy farmers of the state relied on indigenous breeds of cattle for dairying. Mr.
                M.V.K said that if dairy farming continues like this, it will be difficult to meet
                the demand for milk from cities/towns. He had thought in those days. When he was a
                minister in the Union Cabinet, he had visited many foreign countries and was amazed
                to see the milk production capacity of the breeds there.
                {/* He believed that by placing technology and professional management in the hands of the farmers, the standard of living of millions of our poor people can be improved.
             The cooperative movement, he helped to create became a model not only for India, but for developing countries throughout the world. The Operation Flood Programme, of which Milk Producers; Cooperatives were the central plank, emerged as Indias largest rural employment programme and unleashed the larger dimension of dairy development. Dr. Kurien was the undisputed Milkman of India. Born on November 26, 1921 at Kozhikode, Kerala, he graduated in Science from the Loyola College in 1940 and obtained hisdegree in Engineering from the Guindy College of Engineering in Chennai. After a stint at TISCO, Jamshedpur, he obtained the Govt. of Indias scholarship to study Dairy Engineering. After some specialized training at the Imperial Institute of Animal Husbandry & Dairying, Bangalore, he left for the United States where he completed his Masters degree in Mechanical Engineering with Dairy Engineering as a minor subject from the Michigan State University in 1948. */}
              </p>
            </div>
            <div className="order-1 lg:order-last w-full lg:w-[50%] lg:p-10 h-full flex justify-center items-center">
              <img className="w-[70%] lg:w-full" src={KRISHNAPPA.src} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto">
        <div className=" h-[480px] flex flex-col lg:flex-row items-center mt-10 md:mt-20">
          <Swiper
            slidesPerView={slideView}
            freeMode={true}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[FreeMode, Autoplay]}
            className="w-full h-full">
            <SwiperSlide className="">
              <div className="relative max-w-xl w-[100%]  h-full bg-[#f99457] group ">
                <div className="absolute w-full h-full top-0 left-0 z-20">
                  <img
                    className="w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 "
                    src={hom.src}
                    alt=""
                  />
                </div>
                <div className="full h-full flex flex-col justify-between p-6 md:p-16 ">
                  <div className="w-full h-full z-50">
                    <h1 className="text-white text-3xl md:text-5xl text-center">
                      {' '}
                      HISTORY OF MILK
                    </h1>
                    <p className="mt-6 md:mt-12 text-2xl text-white">
                      The history of milk is a fascinating journey that intertwines with the
                      evolution of human..
                    </p>
                  </div>

                  <div className="w-40 h-14 border-[1px] border-white z-50 ">
                    <a href="#krisna">
                      {' '}
                      <div className="w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]">
                        <p className="text-lg text-white">Know More</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="">
              <div className="relative max-w-xl w-[100%]  h-full bg-[#4f7ffc] group">
                <div className="absolute w-full h-full top-0 left-0 z-20">
                  <Swiper
                    slidesPerView={1}
                    freeMode={true}
                    centeredSlides={false}
                    autoplay={{
                      delay: 1000,
                      disableOnInteraction: false
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="w-full h-full">
                    <SwiperSlide>
                      <img
                        className="w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 "
                        src={band1.src}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 "
                        src={band2.src}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 "
                        src={band3.src}
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="full h-full flex flex-col justify-between p-6 md:p-16 ">
                  <div className="w-full h-full z-50">
                    <h1 className="text-white text-3xl md:text-5xl text-center">
                      {' '}
                      BRAND AMBASSADOR
                    </h1>
                    <p className="mt-6 md:mt-12 text-2xl text-white">
                      He was originally from Kolar district who was very concerned about the
                      farmers...
                    </p>
                  </div>

                  <div className="w-40 h-14 border-[1px] border-white z-50 ">
                    <Link href={`/${locale}/portfolio/brandambassador`}>
                      {' '}
                      <div className="w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]">
                        <p className="text-lg text-white">Know More</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="relative max-w-xl w-[100%]  h-full bg-[#f99457] group">
                <div className="absolute w-full h-full top-0 left-0 z-20">
                  <img
                    className="w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 "
                    src={achivement.src}
                    alt=""
                  />
                </div>
                <div className="full h-full flex flex-col justify-between p-6 md:p-16 ">
                  <div className="w-full h-full z-50">
                    <h1 className="text-white text-3xl md:text-5xl text-center ">
                      {' '}
                      KMF ACHIEVEMENTS
                    </h1>
                    <p className="mt-6 md:mt-12 text-lg md:text-2xl text-white">
                      He was originally from Kolar district who was very concerned about the
                      farmers...
                    </p>
                  </div>

                  <div className="w-40 h-14 border-[1px] border-white z-50 ">
                    <a href="#ACHIEVEMENTS">
                      {' '}
                      <div className="w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]">
                        <p className="text-lg text-white">Know More</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="relative max-w-xl w-[100%]  h-full bg-[#4f7ffc]  group">
                <div className="absolute w-full h-full top-0 left-0 z-20">
                  <Swiper
                    slidesPerView={1}
                    freeMode={true}
                    centeredSlides={false}
                    autoplay={{
                      delay: 1000,
                      disableOnInteraction: false
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="w-full h-full">
                    <SwiperSlide>
                      <img
                        className="w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 "
                        src={spon2.src}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 "
                        src={spon3.src}
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="full h-full flex flex-col justify-center md:justify-between p-6 md:p-16 ">
                  <div className="w-full h-full z-50">
                    <h1 className="text-white text-3xl md:text-5xl text-center "> SPONSORED</h1>
                    <p className="mt-6 md:mt-12 text-2xl text-white">
                      He was originally from Kolar district who was very concerned about the
                      farmers...
                    </p>
                  </div>

                  <div className="w-40 h-14 border-[1px] border-white z-50 ">
                    <a href="#SPONSORED">
                      {' '}
                      <div className="w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]">
                        <p className="text-lg text-white">Know More</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="ACHIEVEMENTS" className="w-full h-auto mt-10 md:mt-20">
        <div className="w-full text-center">
          <h1 className="text-primary-main text-2xl md:text-6xl "> KMF ACHIEVEMENTS </h1>
          <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center mt-10 gap-5">
            {tabs?.map((tab, idx) => {
              return (
                <div key={idx} onClick={() => handleTabs(idx)} className="flex gap-3">
                  <Link href={tab.link}>
                    {' '}
                    <p
                      className={`${
                        currentIndex === idx ? 'text-black' : 'text-[#7c7a7a]'
                      } text-lg`}>
                      {' '}
                      {tab.tabName}
                    </p>
                  </Link>
                  <p className="text-2xl font-bold">/</p>
                </div>
              );
            })}
          </div>

          <div className="w-full h-auto mt-10 mb-20">
            {tabs?.map((tab, id) => {
              if (currentIndex === id) {
                return tab.data;
              }
            })}
          </div>

          <div className="w-full h-auto">
            <div className=" relative w-full">
              <h1 className="text-primary-main text-2xl md:text-4xl "> KMF ACHIEVEMENTS </h1>
              <img
                className="absolute top-[-35px] md:top-[-50px] left-[49%] md:left-[51%] w-32 md:w-40 "
                src={titleBG.src}
                alt=""
              />
            </div>

            <div className="  lg:block lg:max-w-none lg:shadow-none lg:p-0   p-6 md:p-16  relative max-w-xl m-auto w-full     rounded-3xl  shadow-2xl     max-h-[500px] h-full z-[-1]">
              <img className="w-full h-full hidden  lg:block " src={flag.src} alt="" />
              <div className=" lg:absolute top-[60px] lg:top-0 xl:top-[60px] w-full h-full">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="max-w-xl lg:max-w-lg xl:max-w-xl w-full m-auto">
                    <h1 className="uppercase text-primary-main lg:mt-10 text-2xl md:text-3xl ">
                      {' '}
                      KMF Achievement{' '}
                    </h1>
                    <div className="mt-6">
                      {achievments?.filter(
                        (item) => item?.attributes?.title === 'KMF Achievements' || item?.attributes?.title=== 'ಕಹಾಮ ಸಾಧನೆಗಳು'
                      )[0]?.attributes?.content && (
                        <BlocksRenderer
                          content={
                            achievments?.filter(
                              (item) => item?.attributes?.title === 'KMF Achievements'|| item?.attributes?.title=== 'ಕಹಾಮ ಸಾಧನೆಗಳು'
                            )[0]?.attributes?.content
                          }
                          blocks={{
                            paragraph: ({ children }) => {
                              return (
                                <ul className="list-disc text-left">
                                  <li>{children}</li>
                                </ul>
                              );
                            }
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-auto flex flex-wrap justify-center">
              {achievments?.map((item, id) => {
                
                  return (
                    <div
                      key={id}
                      className="max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16">
                      <div className="m-auto">
                        <div className=' w-[450px] relative'>
            <img src='/images/heading/heading-color/group.png' className='absolute z-[1] w-fit top-[-56px]   object-contain'/>


                        <h1 className="w-full relative max-w-[300px] m-auto  text-primary-main text-xl   z-[100] ">
                          {' '}
                          {item?.attributes?.title}
                        </h1>
                        </div>
                        <div className=" mt-20">
                          <ul className="list-disc text-left">
                            {item?.attributes?.content && (
                              <BlocksRenderer
                                content={readMore ? item?.attributes?.content: item?.attributes?.content.slice(0,3)}
                                blocks={{
                                  paragraph: ({children}) => {
                                     
                                    return (
                                    <li>{children}</li>
                                    )
                                  }
                                }}
                              />
                            )}

<button onClick={toggleReadMore} className='w-full flex justify-end text-primary-main'>
                  {readMore ? 'Read less' : 'Read more'}
                </button>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                
              })}
            </div>
          </div>
        </div>
      </section>

    

  

      <section id="SPONSORED" className="w-full h-auto pt-10 md:pt-20 pb-10 md:pb-20  ">
        <div className="w-full text-center">
          <h1 className="text-primary-main text-2xl md:text-6xl "> SPONSORED </h1>
          <div className="w-full flex justify-center items-center flex-wrap mt-10">
            <Swiper
              slidesPerView={slideView}
              freeMode={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[FreeMode, Autoplay]}
              className="max-w-7xl m-auto">
              {sponsore[0]?.attributes?.image?.data?.map((item, idx) => {
                return (
                  <SwiperSlide key={idx} className="">
                    <div className="flex justify-center items-center   w-52 h-52 ">
                      <img className="m-auto w-44 h-44" src={item?.attributes?.url} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;
