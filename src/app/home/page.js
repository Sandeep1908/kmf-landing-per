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
import Card from './Card.js';
import { LinkCard } from './Card.js';
import { CarouselNotification } from '@/components/CarouselImage';
import cartIco from '../../images/homeImages/quikLink/cart.tif.svg';
import locationIco from '../../images/homeImages/quikLink/location.tif.svg';
import newsIco from '../../images/homeImages/quikLink/news.tif.svg';
import commercialIco from '../../images/homeImages/quikLink/commercial.svg';
import Slider from 'react-slick';
import logo from '../../images/logo/logo.png';
import milkglassImg from '../../images/homeImages/milkglass.png';
import kymIco1 from '../../images/homeImages/kym/importance.tif.svg';
import kymIco2 from '../../images/homeImages/kym/type.tif.svg';
import kymIco3 from '../../images/homeImages/kym/nutrition.svg';
import kymIco4 from '../../images/homeImages/kym/age.tif.svg';
import cowBlogImg from '../../images/homeImages/cowBlog.png';
import locationVectorIco from '../../images/footer/locationVector.svg'
import callVectorIco from '../../images/footer/callVector.svg'
import msgVectorIco from '../../images/footer/msgVector.svg'
import nearMeIco from '../../images/footer/near_me.svg'
import facebookIco from '../../images/footer/facbook.png'
import xIco from '../../images/footer/x-icon.png'
import ytIco from '../../images/footer/yt.png'
import Fade from 'react-reveal/Fade';

const Home = () => {
  const images = [image12.src, image2.src, image3.src];
  const notificationImg = [notificationImg1.src];
  const aboutVideo = '/video/video1.mp4';
  const aboutVideo2 = '/video/video2.mp4';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="w-full h-full absolute top-[151px] z-[-1]">
      {/* HOME CARAOUSAL IMAGE */}
      <CarouselImage images={images} />

      <section className="w-full before:h-[1700px] pt-20  relative z-[1] before:absolute before:inset-0 before:bg-secondary-main before:z-[-1] before:md:h-[600px] ">
        <div>
          <div className="flex justify-center items-center flex-col p-10">
            <h1 className="text-[40px] text-[#242424] text-center font-lato font-[400] tracking-wide md:text-4xl">
              Welcome to KMF Nandhini
            </h1>
            <p className="text-[#595959] text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </p>
          </div>

          <div className="flex gap-10 flex-wrap overflow-x-auto">
            <Card imgUrl={feturedImg.src} title="Featured On" />
            <Card imgUrl={galleryImg.src} title="Gallery" />
            <Card imgUrl={portfolioImg.src} title="Portfolio KMF" />
          </div>
        </div>
      </section>

      <section className="w-full p-2  bg-primary-subtle  mt-[50px]">
        <div>
          <div className=" mt-10  lg:space-x-10 lg:flex justify-center items-center m-auto max-w-[1300px]">
            <div
              className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-start   lg: max-w-[60rem] lg:pr-10 bg-img`} style={{background:"url('/images/cow1.png')center center/cover"}}>
              <h1 className="text-[40px]">About KMF</h1>

              <div className="space-y-6" >
                <p className="text-justify font-[100] text-neutral-dark1">
                  KMF stands for KARNATAKA MILK FEDRATION’S LTD., KMF is a 4Decade Organization
                  covering around 24,000 Villages procuring about 85Lakh Kgs of milk per day.
                  Emphasizing on “Quality Excellence from Cow to Consumer”. KMF Heralding economic,
                  social and cultural prosperity in the lives of our milk producer members by
                  promoting vibrant, self-sustaining and holistic cooperative dairy development in
                  Karnataka State.
                </p>
              </div>

              <button className="bg-primary-main w-[200px] h-[56px]  text-neutral-light4 font-[600] rounded-md">
                Read More
              </button>
            </div>

            <Fade right>
              <div className="p-4 flex justify-center items-center w-full h-[400px]   lg:max-w-[32rem]">
                <video
                  src={aboutVideo}
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-[500px] h-[400px] object-cover"
                />
              </div>
            </Fade>
          </div>

          <div className=" mt-10 mb-10 lg:space-x-10  flex flex-col-reverse  justify-center items-center lg:flex-row lg:justify-center lg:items-center m-auto max-w-[1300px]">
            <Fade left>
              <div className="p-4 flex justify-center items-center w-full h-[400px]   lg:max-w-[32rem]">
                <video
                  src={aboutVideo2}
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="w-[500px] h-[400px] object-cover"
                />
              </div>
            </Fade>
            <div
              className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-start  lg: max-w-[60rem] lg:pr-10 bg-img`} style={{background:"url('/images/cow2.png')center center/cover"}}>
              <h1 className="text-[40px]">About OUR BRAND NANDINI</h1>

              <div className="space-y-6">
                <p className="text-justify font-[100] text-neutral-dark1">
                  NANDINI MILK is a brand owned by KMF. Nandini was founded in 1974 by the
                  government of Karnataka as Karnataka Dairy Development Corporation (KDDC). NANDINI
                  brand became household name in state of Karnataka. In 1955 First Dairy was
                  established in the State of Karnataka, belonging to KODAGU district at KUDIGE
                  Village, later in the Year 1965 The Biggest Dairy was Built in Bengaluru. Nandini
                  Brand Includes verities of Milk & Milk Products.
                </p>
              </div>

              <button className="bg-primary-main w-[200px] h-[56px]  text-neutral-light4 font-[600] rounded-md">
                Read More
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

            <button className="bg-primary-main w-[200px] h-[56px]  text-neutral-light4 font-[600] rounded-md">
              Read More
            </button>
          </div>

          <div className="p-4 flex justify-center items-center w-full lg:max-w-[32rem]">
            <img src={aboutSecImg.src} className=" lg:max-w-lg" />
          </div>
        </div>
      </section> */}

      {/* NOTIFICATION SECTION  */}

      <section className="w-full h-[316px]   ">
        <CarouselNotification
          images={notificationImg}
          title="Notification"
          description="11 OCT Tender Notification"
        />
      </section>

      {/* QUICK LINK  */}

      <section className="w-full h-auto pt-[180px]   ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[40px] ">Quick Links</h1>
            <p className="text-center text-[16px] text-[#595959]">
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

      <section className="w-full pt-20 bg-secondary-subtle h-auto ">
        <div>
          <div className=" pt-10 pb-10 lg:space-x-10  flex flex-col-reverse  justify-center items-center lg:flex-row lg:justify-center lg:items-center m-auto max-w-[1300px]">
            <Fade left>
              <div className="p-4 flex justify-center items-center w-full h-[500px]   lg:max-w-[32rem]">
                <img src={milkglassImg.src} className="w-full h-full" />
              </div>
            </Fade>
            <div className="flex flex-col justify-center space-y-10 items-center">
              <div
                className={`flex relative w-full justify-center items-center flex-col space-y-7 p-6 lg:items-start  lg: max-w-[60rem] lg:pr-10 bg-img`}>
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
              <div className='max-w-[500px] overflow-hidden'>
                <img src={cowBlogImg.src} className="w-full hover:scale-[1.2]  "  style={{transition:'1s all'}}/>
              </div>
              <div className="absolute bottom-9 left-7">
                <p className="text-light-light4 text-[12px]">Dec 13, 2023</p>
                <p className="text-light-light4 text-[24px]">Latest News....</p>
              </div>
            </div>

            <div className="relative">
            <div className='max-w-[500px] overflow-hidden'>
                <img src={cowBlogImg.src} className="w-full hover:scale-[1.2]  "  style={{transition:'1s all'}}/>
              </div>
              <div className="absolute bottom-9 left-7">
                <p className="text-light-light4 text-[12px]">Dec 13, 2023</p>
                <p className="text-light-light4 text-[24px]">Latest News....</p>
              </div>
            </div>

            <div className="relative">
            <div className='max-w-[500px] overflow-hidden'>
                <img src={cowBlogImg.src} className="w-full hover:scale-[1.2]  "  style={{transition:'1s all'}}/>
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

      <section  className="w-full h-full md:h-auto pt-10  bg-primary-subtle relative footer-bg  ">
        <div className=' z-[10] relative p-5 max-w-[1400px] h-[600px] m-auto flex flex-col justify-between items-center md:p-10 md:items-start'>

              <div>
              <img src={logo.src} className='w-[100px]'/>
              </div>

              <div className='  pt-10 w-full flex flex-col justify-center items-center  gap-5 md:flex-row md:justify-between md:items-start'>

                  <div className='flex flex-col justify-center items-center md:items-start p-2 max-w-[400px] space-y-5'>
                    <h1 className='text-[24px] mb-5 relative before:absolute before:bottom-[-10px] before:w-[40px] before:h-1 before:bg-primary-lighter'>
                    Address
                    </h1>

                    <div className='flex justify-center items-start space-x-3'>
                      <img src={locationVectorIco.src}/>

                      <div className='flex flex-col justify-center items-center md:items-start space-y-5'>
                        <p className='text-neutral-dark1 text-justify'>Karnataka Cooperative Milk Producers Mahamandal Regt.Kahama Complex, Post Box No- 2915,D. R. College Post, Dr.MH Marigowda Road,Bangalore-560029, Karnataka.</p>
                        <butto className="flex justify-center items-center bg-primary-main w-[170px] h-[40px]   text-neutral-light4 font-[600] rounded-full"> <img src={nearMeIco.src} className='m-2' /> Get Direction</butto>
                      </div>

                    </div>
                  </div>

                  <div className='flex flex-col p-2 max-w-[400px] justify-center space-y-5 items-center md:items-start'>
                    <h1 className='text-[24px] mb-5 relative before:absolute before:bottom-[-10px] before:w-[40px] before:h-1 before:bg-primary-lighter'>
                    Telephone
                    </h1>

                    <div className='flex justify-center items-start space-x-3'>
                      <img src={callVectorIco.src}/>

                      <div className='flex flex-col justify-center items-start space-y-5'>
                        <p className='text-neutral-dark1 text-justify'>080-260 96800
Helpline :
1800 425 8030 toll free 10.00AM - 5.30PM
(Except Second Saturday, Fourth Saturday, Sunday and other State Government Holidays)
Nandini Helpline Number (24*7) :
080-66660000
Fax: : 080-255 36105</p>
                    
                      </div>

                    </div>
                  </div>





                  <div className='flex flex-col p-2 max-w-[400px] space-y-5 justify-center items-center md:items-start'>
                    <h1 className='text-[24px] mb-5 relative before:absolute before:bottom-[-10px] before:w-[40px] before:h-1 before:bg-primary-lighter'>
                    E-mail
                    </h1>

                    <div className='flex justify-center items-start space-x-3'>
                      <img src={msgVectorIco.src}/>

                      <div className='flex flex-col justify-center items-start space-y-5'>
                        <p className='text-neutral-dark1 text-justify'>customercare.nandini@kmf.coop</p>
                    
                      </div>

                    </div>
                  </div>

              </div>


              <div className='flex flex-col w-full justify-between items-center mt-10 space-y-6  flex-wrap md:flex-row'>

                <div className='flex justify-center items-center'>
                  <p className='text-[12px]'>© 2009 - 2020 Karnataka Milk Federation.</p>
                </div>

                <div className='flex space-x-10 justify-between items-center'>
                      <img src={facebookIco.src}/>
                      <img src={xIco.src}/>
                      <img src={ytIco.src}/>
                </div>

                <div className='flex justify-center items-center'>
                <p className='text-justify text-[12px]'>Login for Member Unions Privacy Policy Site Map</p>
                </div>

              </div>


        </div>
      </section>

    </div>
  );
};

export default Home;
