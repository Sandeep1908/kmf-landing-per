'use client';

import React, { useEffect, useState } from 'react';
import CarouselImage from '@/components/CarouselImage';

import feturedImg from '@/images/homeImages/featured.png';
import portfolioImg from '@/images/homeImages/portfolio.png';
import galleryImg from '@/images/homeImages/gallery.png';
import image12 from '@/images/homeImages/image12.png';
import image2 from '@/images/homeImages/image2.png';
import image3 from '@/images/homeImages/image3.png';
import notificationImg1 from '@/images/homeImages/notification/cow-grass.png';

import { LinkCard } from './Card.js';
import cartIco from '@/images/homeImages/quikLink/cart.tif.svg';
import locationIco from '@/images/homeImages/quikLink/location.tif.svg';
import newsIco from '@/images/homeImages/quikLink/news.tif.svg';
import commercialIco from '@/images/homeImages/quikLink/commercial.svg';
import milkglassImg from '@/images/homeImages/milkglass.png';
import kymIco1 from '@/images/homeImages/kym/importance.tif.svg';
import kymIco2 from '@/images/homeImages/kym/type.tif.svg';
import kymIco3 from '@/images/homeImages/kym/nutrition.svg';
import kymIco4 from '@/images/homeImages/kym/age.tif.svg';
import cowBlogImg from '@/images/homeImages/cowBlog.png';
import { v4 as uuidv4 } from 'uuid';
import Fade from 'react-reveal/Fade';
import Footer from '@/components/Footer';
import TypeWriter from '@/components/TypeWriter';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card.js';
import News from '@/components/News';

import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
import useApi from '@/hooks/useApi.js';
import TenderNotification from '@/components/TenderNotification.js';

const Home = () => {
  const [previewCount, setPreviewCount] = useState(1);
  const images = [image12.src, image2.src, image3.src];
  const notificationImg = [notificationImg1.src];
  const aboutVideo = '/video/video1.mp4';
  const aboutVideo2 = '/video/video2.mp4';
  const [liveTenders, setLiveTenders] = useState([]);
  const [recentNews, setRecentNew] = useState([]);
  const [homeNotification,setHomeNotification]=useState([])
  const axios = useApi();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/tender-notifications?sort=status:DESC&_limit=3');
      const { data: recentnew } = await axios.get(
        '/api/blog-posts?sort[0]=date:desc&_limit=3'
      );

      const { data:homenotification } = await axios.get('/api/homenotifications');
       

      const liveTenders = data?.data?.filter((item) => item.attributes?.status === 'live tender');
      setLiveTenders(liveTenders);
      setHomeNotification(homenotification?.data)
      if(recentnew?.data?.length > 3){
        setRecentNew(recentnew.data?.slice(0,3));
      }
      else{
        setRecentNew(recentnew?.data)
      }
    })();
  }, []);

  let cards = [
    {
      key: uuidv4(),
      content: <Card imgUrl={feturedImg.src} link="/en/about/company-profile" title="Featured On" />
    },
    {
      key: uuidv4(),
      content: <Card imgUrl={galleryImg.src} link="/en/blog/gallery" title="Gallery" />
    },
    {
      key: uuidv4(),
      content: <Card imgUrl={portfolioImg.src} link="/en/portfolio" title="Portfolio KMF" />
    },
    {
      key: uuidv4(),
      content: <Card imgUrl={portfolioImg.src} title="Achievments" link="/en/portfolio" />
    },
    {
      key: uuidv4(),
      content: <Card imgUrl={portfolioImg.src} title="Ksheera Sagara" />
    }
  ];

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
      <CarouselImage images={images} />

      <section className="w-full   pt-20  relative z-[1] before:absolute before:inset-0 before:bg-secondary-main before:z-[-1] before:md:h-[600px] ">
        <div>
          <div className="flex justify-center items-center flex-col p-10">
            <h1 className="text-4xl text-[#242424] text-center font-lato font-[400] tracking-wide md:text-4xl uppercase">
              Welcome to KMF Nandini
            </h1>
            <p className="text-[#595959] text-center ">A Milk Brand Trusted by</p>
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
              initialSlide={2}
              loop={true}
              className={`max-w-7xl  `}>
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

      <section className="w-full p-2  bg-primary-subtle  mt-12">
        <div>
          <div className=" mt-10  lg:space-x-10  flex flex-col justify-center items-center m-auto max-w-7xl md:flex-row">
            <div
              className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-center lg:max-w-5xl     lg:pr-10 bg-img`}>
              <h1 className="text-4xl uppercase">About KMF</h1>

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

          <div className=" mt-10 mb-10 lg:space-x-10  flex flex-col-reverse  justify-center items-center   m-auto max-w-7xl md:flex-row">
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
              className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 z-10 lg:items-center  lg: max-w-5xl lg:pr-10 bg-img-2`}>
              <h1 className="text-4xl uppercase">OUR BRAND NANDINI</h1>

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

      <section className="w-full h-auto pt-40 pb-20   ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl uppercase">Quick Links</h1>
            <p className="text-center text-sm text-[#595959]">Here&apos;s some quick links.</p>
          </div>

          <div className='mt-20 w-full h-auto  relative  before:absolute before:top-0   before:lg:top-1/3 before:w-full before:h-full before:z-[-1] before:bg-[url("/images/quickLinkbg.png")] before:bg-no-repeat before:bg-cover'>
            <Fade bottom>
              <div className="max-w-max m-auto p-3 flex flex-col justify-center items-center gap-10  sm:flex-row sm:justify-around sm:items-center sm:flex-wrap">
                <Link href="/kn/404">
                  <LinkCard title="Place Your Order" imgUrl={cartIco.src} />
                </Link>
                <Link href="/kn/404">
                  <LinkCard title="Latest News" imgUrl={newsIco.src} />
                </Link>
                <Link href="/kn/404">
                  <LinkCard title="Daily Tour" imgUrl={locationIco.src} />
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
              <div className="p-4 flex justify-center items-center w-full h-[500px]   lg:max-w-xl">
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
                    contributing to overall well-being. Varieties include cow&apos;s milk, known for its
                    widespread availability, and alternatives like almond or soy milk for those with
                    dietary preferences or lactose intolerance. Milk&apos;s versatility extends to
                    culinary uses, featuring prominently in recipes from creamy desserts to savory
                    dishes, showcasing its cultural and nutritional significance in various global
                    cuisines.
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
          <div className="flex  flex-col justify-center items-center  space-y-3 md:items-start">
            <div className="flex justify-center flex-wrap   items-end  ">
              <h1 className="text-4xl uppercase">Notification</h1>
              <div className="w-28 h-1 bg-black"></div>
            </div>
            <p className="text-neutral-dark1">Here&apos;s some latest update</p>
          </div>

          <div className="w-full flex flex-col justify-center space-y-10 items-center lg:flex-row lg:space-x-5 lg:items-start ">
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
                controller={true}
                scrollbar={{ draggable: true }}
                slide
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                loop={true}>
                {liveTenders?.map((item, id) => {
                  console.log(item);
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

              <div className="w-full flex flex-col space-y-4 justify-center items-center bg-white p-5 rounded-lg border-b-2 border-primary-main sm:flex-row sm:justify-between">
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
              </div>

                {homeNotification?.map((item,idx)=>{
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
                })}
        
 

              <div>
                <p>
                  karnataka milk federation has adoptede-procurement portal for tenders 080 25501216
                  / 25501227 for Registration
                </p>
              </div>
            </div>

            <div className="w-full justify-center items-center space-y-5">
              <div className="flex  w-full flex-col justify-center items-center  space-y-3 ">
                <div className="flex justify-center flex-wrap   items-end  ">
                  <h1 className="text-4xl uppercase">Latest Product</h1>
                  <div className="w-28 h-1 bg-black"></div>
                </div>
                <p className="text-neutral-dark1">Product yet to be launched</p>
              </div>

              <div className="w-full">
                <Card title="New Arrival" imgUrl={portfolioImg.src} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto  bg-primary-lighter  ">
        <div className=" p-10 flex flex-col items-center space-y-10 justify-center max-w-[1600px] md:items-start m-auto">
          <div className="flex  flex-col justify-center items-center  space-y-3 md:items-start">
            <div className="flex justify-center flex-wrap   items-end  ">
              <h1 className="text-4xl uppercase">Latest News</h1>
              <div className="w-28 h-1 bg-black"></div>
            </div>
            <p className="text-neutral-dark1">Here some latest News and blog</p>
          </div>

          <div className=" relative w-full flex flex-col justify-center items-center gap-5 flex-wrap space-y-10 sm:space-y-0 sm:flex-row sm:justify-evenly ">
            {recentNews?.map((item, idx) => {
              return (
                <News
                  key={idx}
                  image={item?.attributes?.image?.data?.attributes?.url}
                  date={item?.attributes?.date}
                  title={item?.attributes?.title}
                  link={`/${item?.attributes?.locale}/blog/${item?.id}`}  
                />
              );
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
