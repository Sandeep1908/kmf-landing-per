'use client';
import Footer from '@/components/Footer'
import React, { useState } from 'react'
import ReactPlayer from 'react-player';

import { Carousel as Carousels } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import rajkumar1 from '@/images/portfolio/rajkumar-1.jpg'
import rajkumar2 from '@/images/portfolio/rajkumar-2.jpg'
import rajkumar3 from '@/images/portfolio/rajkumar-3.jpg'
import rajkumar4 from '@/images/portfolio/rajkumar-4.jpg'
import rajkumar5 from '@/images/portfolio/rajkumar-5.jpg'
import rajkumar6 from '@/images/portfolio/rajkumar-6.jpg'
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import { PhotoProvider, PhotoView } from 'react-photo-view';






const BrandAmbassador = () => {
    const locale =useLocale().locale
    const [slideView, setSlideView] = useState(3);
  return (<>
      <div className='w-full h-full'>
       
      <section id='AMBASSADOR' className=' w-full h-auto '>
      <Carousels
       className='w-full '
        autoPlay={true}
        interval={4000}
        showStatus={false}
        infiniteLoop
        showThumbs={false}
        showIndicators={true}
       >
        <div className='relative w-full h-[500px] md:h-[750px] '>

          <div className='absolute w-full h-full top-0 left-0 bg-[#4f7ffc] opacity-80 z-[-10]'></div>
          {/* <div className='absolute w-full h-full top-0 left-0  opacity-80 z-[-1]'> <img className='' src={KRISHNAPPA.src} alt="" /></div> */}

          <div className='w-full h-full flex flex-col justify-center items-center  '>
          <h1 className=' text-white text-2xl md:text-6xl font-bold text-center'>BRAND AMBASSADOR</h1>
             <div className='w-full h-auto mt-6 md:mt-20'>
              <div className='max-w-[700px] m-auto'>

             
                 <h1 className='text-white text-xl md:text-5xl font-bold text-center'>Dr. Rajakumar</h1>
                 <p className='text-lg text-center  mt-4 md:mt-10 text-white p-2'>Dr. Rajakumar, Karnataka Rathna Padmabhushana, commenced in 1994 when he became the ambassador for Karnataka Milk Federation (KMF) products. During a special event held at Ravindra Kalakshetra, he was presented with a cow as a symbol of goodwill for the farmers of Karnataka. Remarkably, Dr. Rajakumar graciously declined any remuneration for his role. The cow presented to him was housed in Gajanur for an extended period, becoming a testament to his dedication to the cause. 

</p>
</div>
             </div>
        </div>
        </div>

        <div className='relative w-full h-full '>

          <div className='absolute w-full h-full top-0 left-0 bg-[#f99457] opacity-80 z-[-1]'></div>

          <div className='w-full h-full flex flex-col justify-center items-center  '>
          <h1 className=' text-white text-2xl md:text-6xl font-bold text-center'>BRAND AMBASSADOR</h1>
             <div className='w-full h-auto mt-20'>
              <div className='max-w-[700px] m-auto'>

             
                 <h1 className='text-white text-xl md:text-5xl font-bold text-center'>Upendra Rao
</h1>
                 <p className='text-lg text-center mt-10 text-white'>A famous actor and director of Kannada Film Industry star Shri. Upendra Rao became a brand ambassador for KMF products in the year 2003.


</p>
</div>
             </div>
        </div>
        </div>

        <div className='relative w-full h-full '>

          <div className='absolute w-full h-full top-0 left-0 bg-[#f99457] opacity-80 z-[-1]'></div>

          <div className='w-full h-full flex flex-col justify-center items-center  '>
          <h1 className=' text-white text-2xl md:text-6xl font-bold text-center'>BRAND AMBASSADOR</h1>
             <div className='w-full h-auto mt-20'>
              <div className='max-w-[700px] m-auto'>

             
                 <h1 className='text-white text-xl md:text-5xl font-bold text-center'>Dr. Puneet Rajkumar

</h1>
                 <p className='text-lg text-center mt-10 text-white'>Following in his father’s footsteps, Dr. Rajakumar’s third son, Karnataka Rathna Dr. Puneeth Rajakumar, continued the legacy by becoming the brand ambassador for KMF Nandini products. In an advertisement, Puneeth Rajakumar even featured consuming milk from a massive pot, further endorsing the state farmers’ products without seeking any personal favors.


</p>
</div>
             </div>
        </div>
        </div>

        <div className='relative w-full h-full '>

          <div className='absolute w-full h-full top-0 left-0 bg-[#f99457] opacity-80 z-[-1]'></div>

          <div className='w-full h-full flex flex-col justify-center items-center  '>
          <h1 className=' text-white text-2xl md:text-6xl font-bold text-center'>BRAND AMBASSADOR</h1>
             <div className='w-full h-auto mt-20'>
              <div className='max-w-[700px] m-auto'>

             
                 <h1 className='text-white text-xl md:text-5xl font-bold text-center'>Dr. ShivarajRajkuma

</h1>
                 <p className='text-lg text-center mt-10 text-white'>Kannada film actor Shivarajkumar has been named the new brand ambassador of Nandini milk products. Shivarajkumar’s father and matinee idol Rajkumar and subsequently his late brother Puneeth Rajkumar were ambassadors of the Nandini milk products for several years. In a special event, CM Siddaramaiah honoured KMF New Brand Ambassador Dr. Shivarajkumar and launched the products of KMF Nandini brand Nandini Buffalo Milk and Nandini Yogurt Light


</p>
</div>
             </div>
        </div>
        </div>
        </Carousels>
        
      </section>

      <section className='w-full h-auto bg-[#2858ac]'>
          <div className='max-w-6xl h-[500px]  m-auto flex flex-row gap-6 justify-center items-center '>
         
            <div className='max-w-96 w-full h-96 pt-2 pb-2 '>
                <div className='w-full h-full bg-[#3b75d8] shadow-xl'>

                <PhotoProvider >
                  
                  <PhotoView src="/video/brand-video.mp4" height="400px"  >

                  <video autoPlay loop muted controls className='w-full h-full' src="/video/brand-video.mp4"></video>
                  </PhotoView>
              
 
             </PhotoProvider>

              {/* <video autoPlay loop muted controls className='w-full h-full' src="/video/brand-video.mp4"></video> */}
                </div>
            </div>
            <div className='max-w-4xl w-full h-96 '>
            <Swiper
             slidesPerView={slideView}
              freeMode={true}
           
              
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[FreeMode, Autoplay]}
              className="max-w-7xl m-auto">

                 
                      <SwiperSlide className='' >
                      <div className='flex justify-center items-center   w-full h-96 p-2 '>
                     <img className='m-auto w-full h-full object-cover' src={rajkumar1.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2 '>
                     <img className='m-auto w-full h-full object-cover' src={rajkumar2.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center  w-full h-96 p-2 '>
                     <img className='m-auto w-full h-full object-cover' src={rajkumar3.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2'>
                     <img className='m-auto w-full h-full object-cover' src={rajkumar4.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2'>
                     <img className='m-auto w-full h-full object-cover' src={rajkumar5.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2'>
                     <img className='m-auto w-full h-full object-cover' src={rajkumar6.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                     <Link href={`/${locale}/blog/gallery`}><div className='flex justify-center items-center   w-full h-96 p-2 '>
                        <div className='w-full h-full flex justify-center items-center bg-slate-200'>

                        <h1 className='text-3xl text-primary-main'>See More..</h1>
                        </div>
                </div></Link> 
                        </SwiperSlide>

                  
                
            </Swiper>
            </div>

          </div>
      </section>

    </div>
<Footer/>
 </>
    
  )
}

export default BrandAmbassador
