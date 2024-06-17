'use client';

import React, { useEffect, useState } from 'react';
import { LinkCard } from './[locale]/Card.js';
import cartIco from '@/images/homeImages/quikLink/cart.tif.svg';
import locationIco from '@/images/homeImages/quikLink/location.tif.svg';
import commercialIco from '@/images/homeImages/quikLink/commercial.svg';
import milkglassImg from '@/images/homeImages/milkglass.png';
import milkglassKnImg from '@/images/homeImages/milk-glass-kn.png';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
import Footer from '@/components/Footer';
import TypeWriter from '@/components/TypeWriter';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
  FreeMode
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './[locale]/Card.js';
import Link from 'next/link';
import useApi from '@/hooks/useApi.js';
import { ParallaxBanner } from 'react-scroll-parallax';
import ArrivalCard from '@/components/ArrivalCard.js';
import { useMyContext } from '@/context/headerContext.js';
import { FaRegHandPointRight } from 'react-icons/fa';
import KnmModel from '@/components/KymModel.js';
import useLocale from '@/hooks/useLocale.js';
import { useSwiper } from 'swiper/react';

const Home = () => {
  const [previewCount, setPreviewCount] = useState(2);
  const [certificatePrivew,setCertificatePreview]=useState(3)
  const [cardDetails, setCardDetails] = useState([]);
  const [homeAboutDetails, setHomeAboutDetails] = useState([]);
  const [allTenders, setAllTenders] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [certificateRunning, setCertificateRunning] = useState(false);
  const [knowMilk, setKnowMilk] = useState([]);
  const [knowMilkItem, setKnowMilkItem] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentYearData, setCurrentYearData] = useState([]);
  const [scrollY,setScrollY]=useState(null)
  const [isMoveTender,setIsMoveTender]=useState(true)

  const { isScroll, setIsScroll } = useMyContext();
  const axios = useApi();
  const locale = useLocale().locale;

  const handleKnowMilk = (item) => {
    setKnowMilkItem(item);
    setIsModalOpen(true);
  };

  const fetchData = async () => {
    const [
      { data: certificate },
      { data: tenders },
      { data: arrivals },
      { data: homecard },
      { data: homeabout },
      { data: knm },
      { data: allProduct }
    ] = await Promise.all([
      axios.get('/api/certificates'),
      axios.get('/api/tender-notifications?sort[0]=last_date:desc'),
      axios.get('/api/latestproducts'),
      axios.get('/api/homecards'),
      axios.get('/api/homeabouts'),
      axios.get('/api/knowyourmilks'),
      axios.get('/api/product-sub-items')
    ]);

    const groupedData = tenders.data.reduce((acc, item) => {
      const year = new Date(item?.attributes?.last_date).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(item);
      return acc;
    }, {});

    if (new Date().getFullYear() in groupedData) {
      setCurrentYearData(groupedData[new Date().getFullYear()]);
    }

    const latestProducts = allProduct.data.filter((item) => item?.attributes?.isLatest);
    const product = [...arrivals.data, ...latestProducts];

    const homedetails = homeabout.data.map((item) => ({
      about1: item?.attributes?.about1?.[0]?.children?.[0]?.text,
      about2: item?.attributes?.about2?.[0]?.children?.[0]?.text,
      video1: item?.attributes?.video1?.data?.attributes?.url,
      video2: item?.attributes?.video2?.data?.attributes?.url
    }));

    setNewArrivals(product);
    setAllTenders(tenders.data);
    setCardDetails(homecard.data);
    setHomeAboutDetails(homedetails);
    setCertificate(certificate.data?.[0]?.attributes?.image?.data);
    setKnowMilk(knm.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPreviewCount(window.innerWidth > 768 ? 2 : 1);
      setCertificatePreview(window.innerWidth> 1200?3:1)
    };  

    if(window.innerWidth < 700){
      setCertificatePreview(1)
      setPreviewCount(1)
    }
    else{
      setPreviewCount(2)
    }




    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NextSlider = () => {
  
    const swiper = useSwiper()
   
    useEffect(() => {
      if (swiper.activeIndex === 0) {
        
        setTimeout(() => {
            swiper.slideTo(1,1000)  
        }, 3000) 
      }
    }, [swiper])
  
    return <></>
  }

  return (
    <div className={`w-full h-full absolute    z-[-1] ${isScroll ? 'top-48' : ''}  `}>
      {/* HOME CARAOUSAL IMAGE */}
      <div className={`w-full relative   ${isScroll ? 'h-[700px]' : 'h-screen'}`}>

      <video
        className={`w-full object-fill ${isScroll ? 'h-[700px]' : 'h-screen'}`}
        src="/video/banner.mov"
         
        controls
        muted
        autoPlay
        loop
        playsInline
        >
      </video>


      <a className="ca3-scroll-down-link ca3-scroll-down-arrow " data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
      <a className="ca3-scroll-down-link1 ca3-scroll-down-arrow1 " data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
      <a className="ca3-scroll-down-link2 ca3-scroll-down-arrow2 " data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
 
      
      
      </div>




        
   

      {/* <CarouselImage images={banners || []}  /> */}

      <section className="w-full pt-20 pb-20 relative z-[1] bg-primary-subtle">
        <div className="w-full">
          <div className="w-full text-center">
            <h1 className="text-4xl text-[#242424] font-heading font-[400] tracking-wide md:text-4xl uppercase">
              Welcome to KMF Nandini
            </h1>
            <p className="text-[#595959]">A Milk Brand Trusted by millions</p>
          </div>
          <div className="w-full relative z-10">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              ref={r => r.s}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
              spaceBetween={40}
              slidesPerView={previewCount}
              navigation={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              loop={true}
              className="max-w-7xl">
              {cardDetails?.map((card, id) => {
                const {
                  attributes: {
                    image: {
                      data: {
                        attributes: { url: imgUrl }
                      }
                    },
                    title,
                    link
                  }
                } = card;

                return (
                  <SwiperSlide className="swiper-sldier-card lg:p-10" key={id}>
                    <Card imgUrl={imgUrl} title={title} link={link} />
                  </SwiperSlide>
                );
              })}
                  <NextSlider />
            </Swiper>
          </div>
        </div>
      </section>

      <ParallaxBanner
        layers={[
          { image: '/images/home-about.png', speed: -20 },
          { speed: -15, children: <div></div> } // Adjust if a specific element is needed
        ]}
        className="w-full h-fit object-contain">
        <section className="w-full h-auto p-5 pt-12">
          <div className="mt-10 w-full space-y-5 flex flex-col justify-center items-center m-auto max-w-7xl">
            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
              <Fade left>
                <div className="flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-center lg:max-w-5xl lg:pr-10 bg-img">
                  <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient text-white">
                    About KMF
                  </h1>
                  <div className="space-y-6">
                    <TypeWriter text={homeAboutDetails?.[0]?.about1 || ''} delay={70} />
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="flex relative h-full w-full justify-center items-center flex-col space-y-7 p-6 z-10 lg:items-center lg:max-w-5xl lg:pr-10 bg-img-2">
                  <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient text-white">
                    OUR BRAND NANDINI
                  </h1>
                  <div className="space-y-6">
                    <TypeWriter text={homeAboutDetails?.[0]?.about2 || ''} delay={70} />
                  </div>
                </div>
              </Fade>
            </div>
            <Fade bottom>
              <Link
                href="/en/about/company-profile"
                className="bg-primary-main flex justify-center items-center w-48 h-12 z-30 text-neutral-light4 font-semibold rounded-md">
                Read More
              </Link>
            </Fade>
          </div>
        </section>
      </ParallaxBanner>

      <section className="w-full h-fit relative">
        <Fade bottom>
          <img
            src="/images/Curve.svg"
            className="absolute inset-0 w-full h-full object-contain hidden md:block"
            alt="Decorative Curve"
          />
        </Fade>

        <img
          src="/images/footer-top.png"
          className="absolute top-[87px] w-full h-full object-cover z-[-1]"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          alt="Footer Top"
        />

        <div className="relative bg-[#30ABDC] md:bg-transparent p-5">
          <div className="pb-10 lg:space-x-10 flex flex-col-reverse justify-center items-center lg:flex-row m-auto max-w-7xl">
            <Fade left>
              <div className="p-4 flex justify-center items-center w-full h-[500px] lg:max-w-xl">
                <img
                  src={locale === 'kn' ? milkglassKnImg.src : milkglassImg.src}
                  className="w-full h-full"
                  alt="Milk Glass"
                />
              </div>
            </Fade>

            <div className="flex flex-col justify-center space-y-10 items-center">
              <Fade right>
                <div className="flex relative w-full justify-center items-center flex-col space-y-3 pt-20 lg:items-start lg:max-w-[60rem] lg:pr-10">
                  <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient text-white">
                    Know Your Milk
                  </h1>

                  <div className="space-y-6">
                    <p className="text-justify text-lg text-white">
                      {locale === 'en'
                        ? "Milk is a nutrient-rich beverage, widely consumed for its high calcium content essential for bone health. It is a source of protein, vitamins, and minerals, contributing to overall well-being. Varieties include cow's milk, known for its widespread availability, and alternatives like almond or soy milk for those with dietary preferences or lactose intolerance. Milk's versatility extends to culinary uses, featuring prominently in recipes from creamy desserts to savory dishes, showcasing its cultural and nutritional significance in various global cuisines."
                        : 'ಹಾಲು ಪೌಷ್ಟಿಕಾಂಶ-ಭರಿತ ಪಾನೀಯವಾಗಿದ್ದು, ಮಾನವನ ಮೂಳೆಗಳ ಆರೋಗ್ಯಕ್ಕೆ ಅಗತ್ಯವಾದ ಹೆಚ್ಚಿನ ಕ್ಯಾಲ್ಸಿಯಂ ಅನ್ನು ಒದಗಿಸುತ್ತಿದೆ. ಇದು ಪ್ರೋಟೀನ್, ಜೀವಸತ್ವಗಳು ಮತ್ತು ಖನಿಜಗಳ ಮೂಲವಾಗಿದ್ದು, ಒಟ್ಟಾರೆ ಮನುಷ್ಯನ ಸರ್ವಾಂಗಿಣ ಬೆಳವಣಿಗೆಗೆ ತುಂಬಾ ಅಗತ್ಯವಾಗಿದೆ. ಹಾಲಿನ ವಿಧಗಳಲ್ಲಿ ಹಸುವಿನ ಹಾಲು ತುಂಬಾ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದು, ವ್ಯಾಪಕವಾಗಿ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಇದಲ್ಲದೇ, ಲ್ಯಾಕ್ಟೋಸ್ ಅಂಶಗಳ ಅಲರ್ಜಿ ಹೊಂದಿದವರಿಗೆ ಹಾಗೂ ಬಾದಾಮಿ ಅಥವಾ ಸೋಯಾ ಹಾಲಿನಂತಹ ಪರ್ಯಾಯ ಸುಹಾಸಿತ ಹಾಲುಗಳು ಲಭ್ಯವಿರುತ್ತದೆ. ಹಾಲಿನಿಂದ ವಿವಿಧ ತೆರನಾದ ಭಕ್ಷಗಳನ್ನು ಮತ್ತು ಸಿಹಿಪಾಕವನ್ನು ತಯಾರಿಸಲಾಗುತ್ತದೆ, ಕೆನೆ ಸಿಹಿತಿಂಡಿಗಳಿಂದ ಖಾರದ ಭಕ್ಷ್ಯಗಳ ತಯಾರಿಕೆಯಲ್ಲಿ ಹಾಲನ್ನು ಪ್ರಮುಖವಾಗಿ ಉಪಯೋಗಿತ್ತಿದ್ದು, ವಿವಿಧ ಜಾಗತಿಕ ಪಾಕಪದ್ಧತಿಗಳಲ್ಲಿ ಹಾಲು ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಪೌಷ್ಟಿಕಾಂಶದ ಮಹತ್ವವನ್ನು ಒತ್ತಿ ಹೇಳುತ್ತಿದೆ'}
                    </p>
                  </div>
                </div>
              </Fade>

              <KnmModel closeModal={isModalOpen} kymMilk={knowMilkItem} close={setIsModalOpen} />

              <div className="w-full flex flex-wrap justify-center p-2 gap-3 items-center md:justify-around">
                {knowMilk?.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleKnowMilk(item)}
                    className="flex w-40 flex-col justify-center items-center space-y-4 cursor-pointer">
                    <img
                      src={item?.attributes?.image?.data[0].attributes?.url}
                      alt={item?.attributes?.title}
                      className="transition-all duration-200 hover:scale-110"
                    />
                    <p className="text-white text-center font-heading">{item?.attributes?.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto relative">
        <div className="p-2 flex flex-col items-center space-y-10 justify-center max-w-[1600px] md:items-start m-auto">
          <Fade top>
            <div className="flex w-full flex-col justify-center items-center space-y-3">
              <h1 className="text-2xl font-heading uppercase text-center w-full max-w-96 shadow-md p-3 shadow-black bg-primary-gradient text-white">
                Notification
              </h1>
            </div>
          </Fade>

          <div className="w-full flex flex-col space-y-4 items-center lg:space-y-0 lg:flex-row lg:space-x-2 lg:items-start">
            <div className="relative w-full overflow-hidden flex flex-col max-w-[400px]">
              <div className="w-full flex flex-col shadow-2xl shadow-blue-300 justify-center h-[425px] items-center rounded-lg border-2 border-primary-main">
                <Fade left>
                  <div className="w-full h-[90px] shadow-black shadow-md bg-white z-30">
                    <h1 className="p-5 bg-primary-gradient text-white uppercase text-center">
                      Tender Notifications
                    </h1>
                  </div>
                </Fade>
                <div className={`w-full h-[335px] p-4 overflow-y-scroll ${isMoveTender?'marquee':''} `}>
                  {currentYearData
                    ?.sort(
                      (a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
                    )
                    ?.map((item, id) => (
                      
                      <Link
                        key={id}
                        href={item?.attributes?.pdf_file?.data?.attributes?.url || ''}
                        target='blank'
                        onMouseEnter={()=>setIsMoveTender(false)}
                        onMouseLeave={()=>setIsMoveTender(true)}
                        className="bg-white border m-2 p-2 text-xs flex justify-center items-center space-x-2 rounded w-full">
                        <FaRegHandPointRight size={20} color="red" />
                        <p className="w-full"> {item?.attributes?.title}</p>
                      </Link>
                    ))}
                </div>
              </div>
              <div className="w-full flex justify-end mt-3 rounded-md">
                <Link href="/en/blog/notification" className="p-2 bg-primary-main text-white">
                  Read more
                </Link>
              </div>
            </div>

            <div className="relative w-full overflow-hidden flex flex-col justify-center items-start space-y-5">
              <div className="w-full flex flex-col shadow-md overflow-hidden space-y-4 justify-center items-center h-[430px] rounded-lg">
                <Fade right>
                  <h1 className="p-5 bg-primary-gradient text-white uppercase text-center">
                    {locale === 'kn' ? 'ಹೊಸ ನಂದಿನಿ ಉತ್ಪನ್ನಗಳು' : 'New Arrivals & Best Selling'}
                  </h1>
                </Fade>
                <div className="marquee-notification h-full flex justify-evenly space-x-3 overflow-x-scroll">
                  {newArrivals?.map((item, id) => (
                    <ArrivalCard
                      key={id}
                      title={item?.attributes?.name}
                      imgUrl={item?.attributes?.image?.data?.[0]?.attributes?.url}
                      link={`/en/our-product/${item?.attributes?.subcategory?.data?.id}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINK  */}

      <section className=" relative w-full h-auto pt-5 pb-5  z-[10]      ">
        <video
          src="/video/vid.webm"
          autoPlay
          muted
          loop
          className="absolute w-full h-full inset-0 object-contain   z-[-10] opacity-[.3]"
        />
        <div className="w-full flex flex-col justify-center items-center">
          <Fade bottom>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white">
                Quick Links
              </h1>
            </div>
          </Fade>

          <div className="  w-full h-auto  relative   ">
            <Fade bottom>
              <div className="max-w-max m-auto p-3 flex flex-col justify-center items-center gap-40  sm:flex-row sm:justify-around sm:items-center sm:flex-wrap">
                <Link href="/en/comingsoon">
                  <LinkCard title="Place Your Order" imgUrl={cartIco.src} />
                </Link>

                <Link href="/en/blog/tv-commercial/6">
                  <LinkCard title="Dairy Tour" imgUrl={locationIco.src} />
                </Link>
                <Link href="/en/blog/tv-commercial/">
                  <LinkCard title="Nandini Commercials" imgUrl={commercialIco.src} />
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="w-full h-fit relative pt-20 pb-20     ">
        <div className=" p-10 w-full flex flex-col items-center space-y-10 justify-center max-w-[1600px] md:items-start m-auto">
          <div className="flex  w-full flex-col justify-center items-center  space-y-3 md:items-start">
            <Zoom>
              <div className="flex justify-center w-full    flex-wrap   items-end  ">
                <h1 className="text-5xl  text-center uppercase text-primary-gradient font-josefin w-full max-w-2xl  p-3 ">
                  Explore The World Of KMF
                </h1>
              </div>
            </Zoom>
          </div>

          <div className=" relative w-full h-[300px] md:h-[800px] flex justify-evenly items-center gap-5   flex-wrap">
          <div className="p-4 w-full h-full  flex justify-center items-center     ">
                  <video
                    src="/video/explore.mp4"
                     muted
                     autoplay
                     controls
                     playsInline
                     loop
                    className="w-full h-full "></video>
                </div>
          </div>

          <div className="w-full flex justify-center  space-x-5">
            <Link href={'/en/blog/gallery'}>
              <button className="w-44 h-5 border transition-all duration-300 uppercase bg-primary-main text-white p-6 flex items-center justify-center  rounded-full hover:scale-[1.1] hover:bg-secondary-darker   ">
                See more
              </button>
            </Link>

            <Link href={'/en/contact'}>
              <button className="w-44 h-5 border uppercase transition-all duration-300  bg-primary-main text-white p-6 flex items-center justify-center  rounded-full hover:scale-[1.1] hover:bg-secondary-darker    ">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full h-auto relative">
        <div className="p-4 md:p-10 flex flex-col items-center space-y-10 justify-center max-w-[1600px] md:items-start md:m-auto">
          <div className="w-full justify-center flex items-center space-y-3">
            <h1 className="text-2xl font-heading uppercase text-center w-full max-w-96 shadow-md p-3 shadow-black bg-primary-gradient text-white">
              Our Certificates
            </h1>
          </div>

          <div
            className={`w-full max-w-[2xl] mb-5 flex justify-center items-center space-x-7 ${
              certificateRunning ? 'marquee-sponser' : ''
            }`}>
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={certificatePrivew}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[FreeMode, Autoplay]}
              className="w-full">
              {certificate?.map((item, idx) => (
                <SwiperSlide key={idx} className="w-72 md:m-auto">
                  <div className="w-96 h-40   m-auto   bg-white border-orange-500-500 p-2 border-orange-400 border-8 rounded-lg">
                    <img
                      src={item?.attributes?.url}
                      alt={`Certificate ${idx + 1}`}
                      className="w-96 h-32 object-contain rounded-md inline-block"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION  */}
      <Footer />
    </div>
  );
};

export default Home;
