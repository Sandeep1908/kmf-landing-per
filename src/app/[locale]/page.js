'use client';

import React, { useEffect, useState } from 'react';
import CarouselImage from '@/components/CarouselImage';
import { LinkCard } from './Card.js';
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
import Card from './Card.js';
import Link from 'next/link';
import useApi from '@/hooks/useApi.js';
import TenderNotification from '@/components/TenderNotification.js';
import ArrivalCard from '@/components/ArrivalCard.js';


const Home = () => {
  const [previewCount, setPreviewCount] = useState(1);
  const [banners, setAllBanners] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [homeAboutDetails, setHomeAboutDetails] = useState([]);
  const [allTenders, setAllTenders] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [certificate,setCertificate]=useState([])
 
  
  const axios = useApi();
  

  useEffect(() => {
    (async () => {
      const {data:certificate}= await axios.get('/api/certificates')
   
      const { data } = await axios.get('/api/tender-notifications?sort[0]=last_date:desc');
      const { data: banner } = await axios.get('/api/banners');

      const images = banner?.data?.map((img) => img?.attributes?.banner?.data?.attributes?.url);
      setAllBanners(images);
      const { data: arrivals } = await axios.get('/api/latestproducts');
      const { data: homenotification } = await axios.get('/api/homenotifications');
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

     
    

      setNewArrivals(arrivals?.data);
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
      <CarouselImage images={banners || []}  />

      <section className="w-full    pt-20  relative z-[1]  ">
        <video
          src="/video/home-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full inset-0 object-cover z-[-10] opacity-.4"
        />
        <div className="w-full">
          <div className=" w-full          p-10  ">
            <h1 className="text-4xl text-[#242424] text-center font-alfa font-[400] tracking-wide md:text-4xl uppercase ">
              Welcome to KMF Nandini
            </h1>
            <p className="text-[#595959] text-center     ">A Milk Brand Trusted by</p>
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
              <h1 className="text-4xl uppercase font-alfa">About KMF</h1>

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
                  className="w-full h-96 object-contain"
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
                  className="w-full h-96 object-contian"
                />
              </div>
            </Fade>
            <div
              className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 z-10 lg:items-center  lg: max-w-5xl lg:pr-10 bg-img-2`}>
              <h1 className="text-4xl uppercase">OUR BRAND NANDINI</h1>

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
            <h1 className="text-4xl uppercase">Quick Links</h1>
            <p className="text-center text-sm text-[#595959]">Here&apos;s some quick links.</p>
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
                <h1 className="text-4xl uppercase">Know Your Milk</h1>

                <div className="space-y-6">
                  <p className="text-justify font-[100] text-neutral-dark1">
                    Milk is a nutrient-rich beverage, widely consumed for its high calcium content
                    essential for bone health. It is a source of protein, vitamins, and minerals,
                    contributing to overall well-being. Varieties include cow&apos;s milk, known for
                    its widespread availability, and alternatives like almond or soy milk for those
                    with dietary preferences or lactose intolerance. Milk&apos;s versatility extends
                    to culinary uses, featuring prominently in recipes from creamy desserts to
                    savory dishes, showcasing its cultural and nutritional significance in various
                    global cuisines.
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

      <section className="w-full h-auto  bg-primary-subtle  ">
        <div className=" p-10 flex flex-col items-center space-y-10 justify-center max-w-[1600px] md:items-start m-auto">
          <div className="flex    flex-col justify-center items-center  space-y-3  ">
            <h1 className="text-4xl uppercase">Notification</h1>

            <p className="text-neutral-dark1">Here&apos;s some latest update</p>
          </div>

          <div className="w-full flex flex-col justify-center space-y-4 items-center lg:space-y-0 lg:flex-row lg:space-x-5 lg:items-start ">
            <div className=" relative w-full overflow-scroll flex flex-col justify-center items-start h-[570px]    sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]    ">
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
                {allTenders?.map((item, id) => {
                 
                  return (
                    <SwiperSlide className="swiper-sldier-card " key={id}>
                      <TenderNotification
                        title={item?.attributes?.title}
                        date={item?.attributes?.last_date}
                        link="/en/blog/notification"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="w-full flex flex-col shadow-md bg-white overflow-hidden  justify-center items-center  h-[425px] p-5 rounded-lg border-b-2 border-primary-main  ">
                <div className="w-full marquee h-full flex flex-col   ">
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
                <h1 className="text-4xl uppercase">New Arrivals & Best Selling</h1>

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
              <h1 className="text-4xl uppercase">Latest News</h1>
            </div>
            <p className="text-neutral-dark1">Here some latest News and blog</p>
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
                See more
              </button>
            </Link>

            <Link href={'/en/contact'}>
              <button className="w-40 h-5 border bg-primary-main text-white p-5 flex items-center justify-center  rounded-md    ">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>



      <section className="w-full h-auto overflow-hidden    ">
        <div className=" p-10 flex flex-col items-center space-y-10 justify-center  max-w-[1600px] md:items-start m-auto">
          <div className="flex  flex-col justify-center items-center  space-y-3 md:items-start">
            <div className="flex justify-center flex-wrap   items-end  ">
              <h1 className="text-4xl uppercase">Certificates</h1>
            </div>
           
          </div>
                
          <div className={` w-full max-w-[5xl] m-auto   flex justify-center  space-x-7  marquee-sponser `} >
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
