'use client';
import Footer from '@/components/Footer'
import React, { useEffect, useState } from 'react'
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
import brand from '@/images/portfolio/BrandAmbassador.png'
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import VideoComponent from './VideoComponent';
import Lightbox from './Lightbox';

import useApi from '@/hooks/useApi';





const BrandAmbassador = () => {
    const locale =useLocale().locale
    const [slideView, setSlideView] = useState(3);


    const [lightboxOpen, setLightboxOpen] = useState(false);
    const videoUrl = "/video/brand-video.mp4"; // Replace with your actual video URL
  
    const openLightbox = () => {
      setLightboxOpen(true);
    };
  
    const closeLightbox = () => {
      setLightboxOpen(false);
    };
  
    useEffect(() => {
      
  
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
       
      <section id='AMBASSADOR' className='relative w-full h-auto '>
        <div className='absolute w-full h-full'>
         <img className='w-full h-full'  src={brand.src} alt="" />
        </div>
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

              <div className='absolute w-full h-full top-0 left-0  opacity-50 z-[-10]'></div>
              {/* <div className='absolute w-full h-full top-0 left-0  opacity-80 z-[-1]'> <img className='' src={KRISHNAPPA.src} alt="" /></div> */}
    
              <div className='w-full h-full flex flex-col justify-center items-center  '>
              <h1 className=' text-white text-2xl md:text-6xl font-bold text-center'>BRAND AMBASSADOR</h1>
                 <div className='w-full h-auto mt-6 md:mt-20'>
                  <div className='max-w-[700px] m-auto'>
    
                 
                     <h1 className='text-white text-xl md:text-5xl font-bold text-center uppercase'>{item?.attributes?.name}</h1>
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

      {/* <section className='relative w-full h-auto bg-[#2858ac]'>
          <div className='max-w-6xl  h-[1000px] md:h-[500px]  m-auto flex flex-col  md:flex-row gap-6 justify-center items-center '>
         
            <div className='max-w-96 w-full h-96 pt-2 pb-2 '>
                <div className='w-full h-full bg-[#3b75d8] shadow-xl flex justify-center items-center'>


                <VideoComponent onClick={openLightbox} />
             {lightboxOpen && <Lightbox videoUrl={videoUrl} onClose={closeLightbox} />}


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
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar1.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar1.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2 '>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar2.src} height="400px"  >
                          <img className=' cursor-pointer  m-auto w-full h-full object-cover' src={rajkumar2.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center  w-full h-96 p-2 '>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar3.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar3.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2'>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar4.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar4.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2'>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar5.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar5.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2'>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar6.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar6.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>                </div>
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
      </section> */}

      <section className='relative w-full h-auto bg-[#2858ac] pt-10 pb-10'>
    
          <div className='w-full  h-[1000px] md:h-[500px]  m-auto flex flex-col  md:flex-row gap-6 justify-center items-center '>
         
            <div className='max-w-[50%] w-full h-96 '>
              
                <div className='relative w-full h-full  shadow-xl flex justify-center items-center'>
                   <div className='absolute w-full h-full'>
                       <div className='w-full h-full flex items-center justify-between'>
                            <div className='w-16 h-8 bg-red-600' ></div>
                            <div className='w-16 h-8 bg-red-600' ></div>
                       </div>
                   </div>
{/* 
                <VideoComponent onClick={openLightbox} />
             {lightboxOpen && <Lightbox videoUrl={videoUrl} onClose={closeLightbox} />} */}


              <video autoPlay loop muted controls className='w-full h-full' src="/video/brand-video.mp4"></video>
                </div>
            </div>
            <div className='max-w-[50%] w-full h-96 pr-5'>
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
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar1.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar1.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2 '>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar2.src} height="400px"  >
                          <img className=' cursor-pointer  m-auto w-full h-full object-cover' src={rajkumar2.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center  w-full h-96 p-2 '>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar3.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar3.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>                </div>
                        </SwiperSlide> 
                        <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2'>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar4.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar4.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2'>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar5.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar5.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2'>
                      <PhotoProvider >
                          
                          <PhotoView src={rajkumar6.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={rajkumar6.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>                </div>
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
