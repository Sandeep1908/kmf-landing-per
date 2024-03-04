'use client';

import React, { useEffect, useState } from 'react';
import CarouselImage from '@/components/CarouselImage';

 

import { LinkCard } from '@/app/[locale]/Card.js';
import cartIco from '@/images/homeImages/quikLink/cart.tif.svg';
import locationIco from '@/images/homeImages/quikLink/location.tif.svg';
import commercialIco from '@/images/homeImages/quikLink/commercial.svg';
import milkglassImg from '@/images/homeImages/milkglass.png';
import kymIco1 from '@/images/homeImages/kym/importance.tif.svg';
import kymIco2 from '@/images/homeImages/kym/type.tif.svg';
import kymIco3 from '@/images/homeImages/kym/nutrition.svg';
import kymIco4 from '@/images/homeImages/kym/age.tif.svg';
import Fade from 'react-reveal/Fade';
import Footer from '@/components/Footer';
import TypeWriter from '@/components/TypeWriter';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@/app/[locale]/Card.js';
import Link from 'next/link';
import useApi from '@/hooks/useApi.js';
import TenderNotification from '@/components/TenderNotification.js';
import ArrivalCard from '@/components/ArrivalCard.js';


const Home = () => {
  const [previewCount, setPreviewCount] = useState(1);
  const [liveTenders, setLiveTenders] = useState([]);
  const [banners, setAllBanners] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [homeAboutDetails, setHomeAboutDetails] = useState([]);
  const [allTenders, setAllTenders] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [sponsored,setSponsored]=useState([])
  const [certificate,setCertificate]=useState([])
  const [isCertificated,setIsCertificate]=useState(false)
  const axios = useApi();
  

  useEffect(() => {
    (async () => {
      const {data:certificate}= await axios.get('/api/certificates')
   
      const { data } = await axios.get('/api/tender-notifications?sort[0]=last_date:desc');
      const { data: banner } = await axios.get('/api/banners');

      const images = banner?.data?.map((img) => img?.attributes?.banner?.data?.attributes?.url);
      setAllBanners(images);
      const { data: arrivals } = await axios.get('/api/latestproducts');
      // const { data: homenotification } = await axios.get('/api/homenotifications');
      const { data: gallery } = await axios.get('/api/galleries');

      const { data: homecard } = await axios.get('/api/homecards');
      const { data: homeabout } = await axios.get('/api/homeabouts');

  
      

      const videos = gallery?.data?.map((item) => item?.attributes?.video?.data?.attributes?.url);
      const liveTenders = data?.data?.filter((item) => item.attributes?.status === 'live tender');
      const pastTenders = data?.data?.filter((item) => item.attributes?.status === 'past tender');
      const homedetials = homeabout?.data?.map((item) => {
        return {
          about1: item?.attributes?.about1?.[0]?.children?.[0]?.text,
          about2: item?.attributes?.about2?.[0]?.children?.[0]?.text,
          video1: item?.attributes?.video1?.data?.attributes?.url,
          video2: item?.attributes?.video2?.data?.attributes?.url
        };
      });

      if (liveTenders.length === 0) {
        setLiveTenders(pastTenders);
      } else {
        setLiveTenders(liveTenders);
      }

      // if (videos?.length > 2) {
      //   setHomeVideo(videos?.slice(0, 2));
      // } else {
      //   setHomeVideo(videos);
      // }

      setNewArrivals(arrivals?.data);
      // setHomeNotification(homenotification?.data);
      setAllTenders(data?.data);
      setCardDetails(homecard?.data);
      setHomeAboutDetails(homedetials);
      setCertificate(certificate.data?.[0]?.attributes?.image?.data)
    })();
  }, []);

   

  useEffect(() => {
    const updateScreensize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 768) {
        setPreviewCount(2);
      } else {
        setPreviewCount(1);
      }
    };
    updateScreensize();
    window.addEventListener('resize', updateScreensize);
    return () => window.removeEventListener('resize', updateScreensize);
  });

  return (
    <div className="w-full h-full absolute top-36 z-[-1]">
      {/* HOME CARAOUSAL IMAGE */}
      <CarouselImage images={banners || []} />

      <section className="w-full   pt-20  relative z-[1]  ">
        <video
          src="/video/home-vid.mp4"
          autoPlay
          muted
          loop
          className="absolute w-full h-full inset-0 object-cover z-[-10] opacity-.4"
        />
        <div className="w-full">
          <div className=" w-full          p-10  ">
            <h1 className="text-4xl text-[#242424] text-center font-alfa font-[400] tracking-wide md:text-4xl uppercase ">
              
KMF ನಂದಿನಿ ಅವರಿಗೆ ಸ್ವಾಗತ
            </h1>
            <p className="text-[#595959] text-center     ">
 


ಹಾಲಿನ ಬ್ರಾಂಡ್ ಅನ್ನು ನಂಬಲಾಗಿದೆ</p>
          </div>

          <div className="w-full relative z-10 p-2   ">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
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
              slide
            
              loop={true}
              className={`max-w-7xl  `}>
              {cardDetails?.map((card, id) => {
                return (
                  <SwiperSlide className="swiper-sldier-card lg:p-10" key={id}>
                    <Card
                      imgUrl={card?.attributes?.image?.data?.attributes?.url}
                      title={card?.attributes?.title}
                      link={card?.attributes?.link}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        {/* <video src='/video/milk-video.mp4' autoPlay muted loop className='absolute inset-0 w-full h-full '/> */}
      </section>

      <section className="w-full p-2  bg-primary-subtle  mt-12">
        <div>
          <div className=" mt-10  lg:space-x-10  flex flex-col justify-center items-center m-auto max-w-7xl md:flex-row">
            <div
              className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-center lg:max-w-5xl     lg:pr-10 bg-img`}>
              <h1 className="text-4xl uppercase font-alfa">KMF ಬಗ್ಗೆ</h1>

              <div className="space-y-6">
                <TypeWriter text={homeAboutDetails[0]?.about1 || ''} delay={70} />
              </div>
            </div>

            <Fade right>
              <div className="p-4 flex justify-center items-center w-full h-96    ">
                <video
                  src={homeAboutDetails[0]?.video1}
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-full h-96 object-cover"
                />
              </div>
            </Fade>
          </div>

          <div className=" mt-10 mb-10 lg:space-x-10  flex flex-col-reverse  justify-center items-center   m-auto max-w-7xl md:flex-row">
            <Fade left>
              <div className="p-4 flex justify-center items-center w-full h-96    ">
                <video
                  src={homeAboutDetails[0]?.video2}
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-full h-96 object-cover"
                />
              </div>
            </Fade>
            <div
              className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 z-10 lg:items-center  lg: max-w-5xl lg:pr-10 bg-img-2`}>
              <h1 className="text-4xl uppercase">ನಮ್ಮ ಬ್ರಾಂಡ್ ನಂದಿನಿ</h1>

              <div className="space-y-6 h-[">
                <TypeWriter text={homeAboutDetails[0]?.about2 || ''} delay={70} />
              </div>

              <Link
                href="/en/about/company-profile"
                className="bg-primary-main flex justify-center items-center w-48 h-12 z-30 text-neutral-light4 font-semibold rounded-md">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINK  */}

      <section className=" relative w-full h-auto pt-5 pb-5   ">
        <video
          src="/video/vid.webm"
          autoPlay
          muted
          loop
          className="absolute w-full h-full inset-0 object-contain   z-[-10] opacity-[.3]"
        />
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl uppercase">
ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು</h1>
            <p className="text-center text-sm text-[#595959]">ಕೆಲವು ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು ಇಲ್ಲಿವೆ.</p>
          </div>

          <div className="  w-full h-auto  relative   ">
            <Fade bottom>
              <div className="max-w-max m-auto p-3 flex flex-col justify-center items-center gap-40  sm:flex-row sm:justify-around sm:items-center sm:flex-wrap">
                <Link href="/en/comingsoon">
                  <LinkCard title="Place Your Order" imgUrl={cartIco.src} />
                </Link>

                <Link href="/en/comingsoon">
                  <LinkCard title="Dairy Tour" imgUrl={locationIco.src} />
                </Link>
                <Link href="/kn/404">
                  <LinkCard title="Nandini Commercials" imgUrl={commercialIco.src} />
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="w-full   bg-secondary-subtle h-auto ">
        <div>
          <div className=" pt-10 pb-10 lg:space-x-10  flex flex-col-reverse  justify-center items-center lg:flex-row lg:justify-center lg:items-center m-auto max-w-7xl">
            <Fade left>
              <div className="p-4 flex justify-center bg-secondary-main items-center w-full h-[500px]   lg:max-w-xl">
                <img src={milkglassImg.src} className="w-full h-full" />
              </div>
            </Fade>
            <div className="flex flex-col justify-center space-y-10 items-center">
              <div
                className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-start  lg: max-w-[60rem] lg:pr-10  `}>
                <h1 className="text-4xl uppercase">ನಿಮ್ಮ ಹಾಲನ್ನು ತಿಳಿಯಿರಿ</h1>

                <div className="space-y-6">
                  <p className="text-justify font-[100] text-neutral-dark1">
                  ಹಾಲು ಪೌಷ್ಟಿಕಾಂಶ-ಭರಿತ ಪಾನೀಯವಾಗಿದೆ, ಅದರ ಹೆಚ್ಚಿನ ಕ್ಯಾಲ್ಸಿಯಂ ಅಂಶಕ್ಕಾಗಿ ವ್ಯಾಪಕವಾಗಿ ಸೇವಿಸಲಾಗುತ್ತದೆ
                    ಮೂಳೆ ಆರೋಗ್ಯಕ್ಕೆ ಅಗತ್ಯ. ಇದು ಪ್ರೋಟೀನ್, ಜೀವಸತ್ವಗಳು ಮತ್ತು ಖನಿಜಗಳ ಮೂಲವಾಗಿದೆ,
                    ಒಟ್ಟಾರೆ ಯೋಗಕ್ಷೇಮಕ್ಕೆ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ. ವೈವಿಧ್ಯಗಳಲ್ಲಿ ಹಸುವಿನ ಹಾಲು ಸೇರಿದೆ, ಹೆಸರುವಾಸಿಯಾಗಿದೆ
                    ಅದರ ವ್ಯಾಪಕ ಲಭ್ಯತೆ, ಮತ್ತು ಬಾದಾಮಿ ಅಥವಾ ಸೋಯಾ ಹಾಲಿನಂತಹ ಪರ್ಯಾಯಗಳು
                    ಆಹಾರದ ಆದ್ಯತೆಗಳು ಅಥವಾ ಲ್ಯಾಕ್ಟೋಸ್ ಅಸಹಿಷ್ಣುತೆಯೊಂದಿಗೆ. ಹಾಲಿನ ಬಹುಮುಖತೆಯು ವಿಸ್ತರಿಸುತ್ತದೆ
                    ಪಾಕಶಾಲೆಯ ಬಳಕೆಗಳಿಗೆ, ಕೆನೆ ಸಿಹಿತಿಂಡಿಗಳಿಂದ ಪಾಕವಿಧಾನಗಳಲ್ಲಿ ಪ್ರಮುಖವಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ
                    ಖಾರದ ಭಕ್ಷ್ಯಗಳು, ವಿವಿಧ ಅದರ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಪೌಷ್ಟಿಕಾಂಶದ ಮಹತ್ವವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ
                    ಜಾಗತಿಕ ಪಾಕಪದ್ಧತಿಗಳು.
                  </p>
                </div>
              </div>

              <div className=" w-full flex flex-wrap  justify-center  p-2 gap-5 items-center md:justify-between">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco1.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                  ನ ಪ್ರಾಮುಖ್ಯತೆ <br /> 
ಹಾಲು
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
                    
ಅಗತ್ಯ ಪೋಷಣೆ <br />
ಹಾಲಿನಲ್ಲಿ
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={kymIco4.src} alt="imp-milk" />
                  <p className="text-neutral-dark1">
                  ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹಾಲು<br />
                  ವಯಸ್ಸಿನ ಗುಂಪು
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto  bg-primary-subtle  ">
        <div className=" p-10 flex flex-col items-center space-y-10 justify-center max-w-[1600px] md:items-start m-auto">
          <div className="flex    flex-col justify-center items-center  space-y-3  ">
            <h1 className="text-4xl uppercase">ಅಧಿಸೂಚನೆ</h1>

            <p className="text-neutral-dark1">ಕೆಲವು ಇತ್ತೀಚಿನ ಅಪ್‌ಡೇಟ್ ಇಲ್ಲಿದೆ</p>
          </div>

          <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:space-x-5 lg:items-start ">
            <div className=" relative w-full overflow-scroll flex flex-col justify-center items-start  space-y-5 sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]    ">
              <Swiper
                grabCursor={true}
                centeredSlides={true}
                effect={'coverflow'}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
                navigation={true}
                scrollbar={{ draggable: true }}
                slide
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                loop={true}>
                {liveTenders?.map((item, id) => {
                  return (
                    <SwiperSlide className="swiper-sldier-card  " key={id}>
                      <TenderNotification
                        title={item?.attributes?.title}
                        date={item?.attributes?.last_date}
                        link="/en/blog/notification"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="w-full flex flex-col shadow-md bg-white overflow-hidden space-y-4 justify-center items-center  h-[400px] p-5 rounded-lg border-b-2 border-primary-main  ">
                <div className="w-full marquee h-full flex flex-col space-y-3 ">
                  {allTenders?.map((item, id) => {
                    return (
                      <p key={id} className="bg-white p-2 text-xs rounded w-full ">
                        {id} - {item?.attributes?.title}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* <div className="w-full flex flex-col space-y-4 justify-center items-center bg-white p-5 rounded-lg border-b-2 border-primary-main sm:flex-row sm:justify-between">
                <div className=" w-full flex items-center">
                  <div className="flex flex-col justify-center items-start">
                    <h1>Export Enquiry</h1>
                  </div>
                </div>

                <div className="">
                  <Link href="/en/export-enquiry">
                    <button className="w-40 h-5 border border-primary-main p-5 flex items-center justify-center text-primary-main rounded-md">
                      View all
                    </button>
                  </Link>
                </div>
              </div> */}

              {/* {homeNotification?.map((item,idx)=>{
                  console.log("notification",item)
                  return(
                    <div key={idx} className="w-full flex flex-col space-y-4 justify-center items-center bg-white p-5 rounded-lg border-b-2 border-primary-main sm:flex-row sm:justify-between">
                    <div className=" w-full flex items-center">
                      <div className="flex flex-col justify-center items-start">
                        <h1>{item?.attributes?.title}</h1>
                      </div>
                    </div>
    
                    <div className="">
                      <Link href={item?.attributes?.pdf?.data?.attributes?.url || ''} className="w-40 h-5 border border-primary-main p-5 flex items-center justify-center text-primary-main rounded-md">
                        View all
                      </Link>
                    </div>
                  </div>
                  )
                })} */}

          
            </div>

            <div className=" relative w-full overflow-scroll flex flex-col justify-center items-start  space-y-5 sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]    ">
              <div className="w-full flex flex-col shadow-md bg-white overflow-hidden space-y-4 justify-center items-center  h-[570px] p-5 rounded-lg border-b-2 border-primary-main  ">
                <h1 className="text-4xl uppercase">ಹೊಸ ಆಗಮನ ಮತ್ತು ಉತ್ತಮ ಮಾರಾಟ</h1>

                <div className="w-full marquee-notification h-full flex  space-x-3 ">
                  {newArrivals?.map((item, id) => {
                    return (
                      <ArrivalCard
                        key={id}
                        title={item?.attributes?.title}
                        imgUrl={item?.attributes?.image?.data?.[0]?.attributes?.url}
                      />
                    );
                  })}
                </div>
              </div>

              {/* <div className="w-full flex flex-col space-y-4 justify-center items-center bg-white p-5 rounded-lg border-b-2 border-primary-main sm:flex-row sm:justify-between">
                <div className=" w-full flex items-center">
                  <div className="flex flex-col justify-center items-start">
                    <h1>Export Enquiry</h1>
                  </div>
                </div>

                <div className="">
                  <Link href="/en/export-enquiry">
                    <button className="w-40 h-5 border border-primary-main p-5 flex items-center justify-center text-primary-main rounded-md">
                      View all
                    </button>
                  </Link>
                </div>
              </div> */}

              {/* {homeNotification?.map((item,idx)=>{
                  console.log("notification",item)
                  return(
                    <div key={idx} className="w-full flex flex-col space-y-4 justify-center items-center bg-white p-5 rounded-lg border-b-2 border-primary-main sm:flex-row sm:justify-between">
                    <div className=" w-full flex items-center">
                      <div className="flex flex-col justify-center items-start">
                        <h1>{item?.attributes?.title}</h1>
                      </div>
                    </div>
    
                    <div className="">
                      <Link href={item?.attributes?.pdf?.data?.attributes?.url || ''} className="w-40 h-5 border border-primary-main p-5 flex items-center justify-center text-primary-main rounded-md">
                        View all
                      </Link>
                    </div>
                  </div>
                  )
                })} */}

            
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto  bg-primary-lighter  ">
        <div className=" p-10 flex flex-col items-center space-y-10 justify-center max-w-[1600px] md:items-start m-auto">
          <div className="flex  flex-col justify-center items-center  space-y-3 md:items-start">
            <div className="flex justify-center flex-wrap   items-end  ">
              <h1 className="text-4xl uppercase">ಇತ್ತೀಚಿನ ಸುದ್ದಿ</h1>
            </div>
            <p className="text-neutral-dark1">
ಇಲ್ಲಿ ಕೆಲವು ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು ಮತ್ತು ಬ್ಲಾಗ್</p>
          </div>

          <div className=" relative w-full flex justify-evenly items-center gap-5   flex-wrap">
            <div className="p-4  max-w-2xl flex justify-center items-center h-96    ">
              <iframe
                height="315"
                src={'https://www.youtube.com/embed/CHII1bdx5Sg?si=Z4aAkimBAHviYXmo'}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="w-full sm:w-[540px]"></iframe>
            </div>

            <iframe
              height="315"
              src="https://www.youtube.com/embed/noTHHLsuLUA?si=eI6SZK_av1Sb4HCP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full sm:w-[540px]"></iframe>
          </div>

          <div className="w-full flex justify-center  space-x-5">
            <Link href={'/en/blog'}>
              <button className="w-40 h-5 border bg-primary-main text-white p-5 flex items-center justify-center  rounded-md    ">
               
ಇನ್ನೂ ಹೆಚ್ಚು ನೋಡು
              </button>
            </Link>

            <Link href={'/en/contact'}>
              <button className="w-40 h-5 border bg-primary-main text-white p-5 flex items-center justify-center  rounded-md    ">
              ಸಂಪರ್ಕದಲ್ಲಿರಲು
              </button>
            </Link>
          </div>
        </div>
      </section>



      <section className="w-full h-auto overflow-hidden    ">
        <div className=" p-10 flex flex-col items-center space-y-10 justify-center  max-w-[1600px] md:items-start m-auto">
          <div className="flex  flex-col justify-center items-center  space-y-3 md:items-start">
            <div className="flex justify-center flex-wrap   items-end  ">
              <h1 className="text-4xl uppercase">ಪ್ರಮಾಣಪತ್ರಗಳು</h1>
            </div>
           
          </div>
                
          <div className={` w-full max-w-[5xl] m-auto   flex justify-center  space-x-7 ${isCertificated?'marquee-sponser':''} `} onClick={()=>setIsCertificate(true)}>
                  {certificate?.map((item,idx)=>{
                    return(
                      <img key={idx} src={item?.attributes?.url} className='w-40 h-40 rounded-md inline-block'/>
                    )
                  })}
          </div>
        </div>
      </section>

      {/* FOOTER SECTION  */}
      <Footer />
    </div>
  );
};

export default Home;
