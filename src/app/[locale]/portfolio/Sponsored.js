import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay,FreeMode } from 'swiper/modules';
import spon1 from '@/images/sponsored/1.jpg'
import spon2 from '@/images/sponsored/2.jpg'
import spon3 from '@/images/sponsored/3.png'
import spon4 from '@/images/sponsored/4.jpg'
import spon5 from '@/images/sponsored/5.png'
import spon6 from '@/images/sponsored/6.jpg'
import spon7 from '@/images/sponsored/7.jpg'
import spon8 from '@/images/sponsored/8.jpg'
import spon9 from '@/images/sponsored/9.jpg'
import spon10 from '@/images/sponsored/10.png'


const Sponsored = () => {
  return (
    <div>
  <div className='w-full md:mt-20'>
            <div className='flex flex-col items-center'>
            <h1 className='text-primary-main text-2xl md:text-6xl'>SPONSORED</h1>
            <div className='bg-primary-main w-20 h-1 mt-4'></div>

            </div>


            <div className='w-full flex justify-center items-center flex-wrap mt-10'>
            <Swiper
             slidesPerView={3}
              freeMode={true}
              centeredSlides={true}
              
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[FreeMode, Autoplay]}
              className="max-w-7xl m-auto">

                 
                      <SwiperSlide>
                      <div className='flex justify-center items-center border-2  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon1.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center border-2  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon2.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center border-2  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon3.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center border-2  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon4.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center border-2  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon5.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center border-2  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon6.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center border-2  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon7.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center border-2  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon8.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center border-2  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon9.src} alt="" />
                </div>
                        </SwiperSlide>
                
            </Swiper>


            </div>


            {/* <div className='w-full flex justify-center items-center flex-wrap gap-5 mt-10'>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon1.src} alt="" />
                </div>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon2.src} alt="" />
                </div>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon3.src} alt="" />
                </div>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon4.src} alt="" />
                </div>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon5.src} alt="" />
                </div>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon6.src} alt="" />
                </div>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon7.src} alt="" />
                </div>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon8.src} alt="" />
                </div>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon9.src} alt="" />
                </div>
                <div className='flex justify-center items-center border-2 border-slate-400 w-72 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon10.src} alt="" />
                </div>


            </div> */}
            
          

        </div>  
     </div>
  )
}

export default Sponsored
