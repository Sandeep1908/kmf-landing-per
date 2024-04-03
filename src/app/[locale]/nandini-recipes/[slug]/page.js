'use client'
import React from 'react'
import sweet from '@/images/recipes/sweet.jpg'
import Footer from '@/components/Footer'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Carousel as Carousels } from 'react-responsive-carousel';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const page = () => {
  return (
    <div className='w-full'>
      <div className='w-full mt-20 mb-20'>
      <div className='flex flex-col justify-center items-center'>
            <h1 className='text-primary-main  text-4xl md:text-5xl'>
                            NANDINI RECIPES
                        </h1>
                        <div className='w-40 h-1 bg-primary-main mt-8'></div>
                        <h1 className='text-primary-main  text-2xl md:text-4xl mt-10'>
                        NUTTY BARFI
                        </h1>
            </div>

            <div className='w-full relative mt-10 md:mt-20'>
                <div className='absolute w-full h-full z-[-10] ' >
                   <div className='w-full h-full flex justify-between items-center'>
                       <div className='w-40 h-8 bg-red-600' ></div>
                       <div className='w-40 h-8 bg-red-600' ></div>
                   </div>
                </div>


              

                {/* <Swiper
                 spaceBetween={0}
                 slidesPerView={1}
          
                 onSwiper={(swiper) => console.log(swiper)}
                 onSlideChange={() => console.log('slide change')}
           
            >
                <SwiperSlide>
                <div className='w-full flex justify-center items-center'>
                    <img className=' w-80  md:w-[40%]  ' src={sweet.src} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full flex justify-center items-center'>
                    <video className=' w-80 h-80  md:w-[40%] md:h-[40%]  ' autoPlay muted loop  src="/video/banner.mp4"></video>
                    </div>
                </SwiperSlide>
                </Swiper> */}
                    
              
                <Carousels
                className='w-2xl h-96'
        autoPlay={true}
        interval={4000}
        showStatus={false}
        infiniteLoop
        showThumbs={false}
        showIndicators={true}
       >
                         <div className='m-auto max-w-xl h-96 flex justify-center items-center p-1'>
                    <img className=' w-80  md:w-[40%]  ' src={sweet.src} alt="" />
                    </div>

                    <div className='m-auto max-w-xl h-96 flex justify-center items-center p-1'>
                    <video className=' w-full h-full object-fill' autoPlay muted loop  src="/video/banner.mp4"></video>
                    </div>
      </Carousels>
               
       
               
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
