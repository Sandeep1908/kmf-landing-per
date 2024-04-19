'use client';
import Footer from '@/components/Footer'
import React, { useEffect, useState } from 'react'
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
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';

import useApi from '@/hooks/useApi';





const BrandAmbassador = () => {
    const locale =useLocale().locale
    const [slideView, setSlideView] = useState(3);
    const [brandAmbassador,setBrandAmbassador]=useState([])

  const axios=useApi()

  useEffect(()=>{
(
  async()=>{
    const {data}=await axios.get('/api/brand-ambassadors')
    setBrandAmbassador(data.data)
  }
)()
  },[])




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
        {
          brandAmbassador?.map((item,id)=>{
            return(
              <div key={id} className='relative w-full h-[500px] md:h-[750px] '>

              <div className='absolute w-full h-full top-0 left-0 bg-[#4f7ffc] opacity-80 z-[-10]'></div>
              {/* <div className='absolute w-full h-full top-0 left-0  opacity-80 z-[-1]'> <img className='' src={KRISHNAPPA.src} alt="" /></div> */}
    
              <div className='w-full h-full flex flex-col justify-center items-center  '>
              <h1 className=' text-white text-2xl md:text-6xl font-bold text-center'>BRAND AMBASSADOR</h1>
                 <div className='w-full h-auto mt-6 md:mt-20'>
                  <div className='max-w-[700px] m-auto'>
    
                 
                     <h1 className='text-white text-xl md:text-5xl font-bold text-center'>{item?.attributes?.name}</h1>
                     {item?.attributes?.description?.map((des,id)=>{

              
                     return(
                      <p key={id} className='text-lg text-center  mt-4 md:mt-10 text-white p-2'>
                        {des?.children?.[0]?.text}
    
    </p>

                     )})}
                     
    </div>
                 </div>
            </div>
            </div>
            )
          })
        }
       

        
        </Carousels>
        
      </section>

      <section className='w-full h-auto bg-[#2858ac]'>
          <div className='max-w-6xl h-[500px]  m-auto flex flex-row gap-6 justify-center items-center '>
         
            <div className='max-w-96 w-full h-96 pt-2 pb-2 '>
                <div className='w-full h-full bg-[#3b75d8] shadow-xl'>

              <video autoPlay loop muted controls className='w-full h-full' src="/video/brand-video.mp4"></video>
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
