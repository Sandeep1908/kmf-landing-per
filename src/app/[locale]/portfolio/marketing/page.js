"use client"
import React, { useEffect, useState } from 'react'
import titleBG from '@/images/portfolio/title-bg.png';
import Footer from '@/components/Footer';
import flag from '@/images/portfolio/flag.jpg';
import dhare1 from '@/images/portfolio/dhare1.jpg'
import dhare2 from '@/images/portfolio/dhare2.jpg'
import dhare3 from '@/images/portfolio/dhare3.jpg'
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import useApi from '@/hooks/useApi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import KnmModel from '@/components/KymModel';
import MarketModel from './marketModel';
import { SwiperSlide,Swiper } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
  FreeMode
} from 'swiper/modules';
 
import CarouselImage from './Slidevideos';

const Marketing = () => {
  const locale = useLocale().locale;
  const axios = useApi();
  const [previewCount, setPreviewCount] = useState(1);
 
  

  const [knowMarket,setKnowMarket]=useState([])


  const [isModalOpen, setIsModalOpen] = useState(false);

  // ... (existing code)

   const handleMarket=(item)=>{
    console.log("item",item)
    setKnowMarket(item)
    setIsModalOpen(true);
   }
   console.log("knowMarket",knowMarket)

  const [market, setMarket] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/gheesupplies');
    
      setMarket(data.data)
      console.log(data.data);
    
    })();
  }, []);


  const slideVideos =[
    {
      url:"/video/market.mp4"
    },
    {
      url:"/video/market1.mp4"
    },
    {
      url:"/video/marketing1.mp4"
    },
    {
      url:"/video/marketing3.mp4"
    },
    
  ]


  return (
    <div className='w-full h-full'>




      <section className='w-full h-full'>
      <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
            <Link className="  text-sm font-bold  " href={`/${locale}/portfolio/#ACHIEVEMENTS` || ''}>
            {locale==='en'?'KMF ACHIEVEMENTS':'ಕಹಾಮ ಸಾಧನೆಗಳು'}
            </Link>

           
            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main" href={''}>
            {locale === 'en' ?   'MARKETING' : 'ಕಹಾಮ ಮಾರುಕಟ್ಟೆ'}
            </Link>
          </div>
      <div className=' relative w-full h-full flex flex-col items-center justify-center mt-20'>

            <h1 className='text-primary-main text-2xl md:text-4xl  ' >  {locale === 'en' ?   'MARKETING' : 'ಕಹಾಮ ಮಾರುಕಟ್ಟೆ'} </h1>
            <div className='bg-primary-main w-[150px] h-[4px] mt-2'></div>

            <img className='absolute md:top-[-55px] top-[-35px] left-[38%] md:left-[47%] w-32 md:w-40 ' src={titleBG.src} alt="" />
        </div>
      </section>
       <section className={`w-full  relative company-bg mt-20`}>

               <div className='absolute w-full h-full '>
                     <div className='w-full h-full  z-[-1] flex justify-between items-center'>
                           <div className='bg-red-600 w-48 h-7 '>

                           </div>
                           <div className='bg-red-600 w-48 h-7 '>

                           </div>
                     </div>
                </div>
                {/* <video autoPlay muted loop controls className='relative w-[800px] m-auto h-full z-[10]' src="/video/market.mp4"></video> */}
             
                <div className="w-full h-full relative z-10    ">
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
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false
              // }}
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
              spaceBetween={10}
              slidesPerView={3}
              navigation={true}
              controller={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              slide
              loop={true}
              className={` max-w-7xl `}>
                   {slideVideos.map((item,id)=>{
                    return(
                       <SwiperSlide className="swiper-sldier-card lg:p-10" key={id} >
                  <div
                      className="w-full max-w-96 relative  h-96 bg-light-light4 rounded-md overflow-hidden   m-auto   "
                      style={{ boxShadow: '0px 11px 49px 0px rgba(0, 0, 0, 0.15)' }}>
                      <div className="  w-full h-full">
                        
                  <video autoPlay muted loop controls
                   className='relative w-[800px] m-auto object-fill  h-full hover:scale-[1.1]  z-[10]' 
                   src={item.url}>

                   </video>

                      </div>
                    </div>
                  </SwiperSlide>
                    )
                   })}
                 
                 
             
            </Swiper>
          </div>

      </section>

      <MarketModel
                    closeModal={isModalOpen}
                    market={knowMarket}
                     close={setIsModalOpen}
          
               />


      <div className='w-full h-[600px]'>
        
        <div className=' hidden lg:block relative w-full max-h-[500px] h-full '>
            <img className='w-full h-full' src={flag.src} alt="" />
            <div className='absolute top-[60px] lg:top-0 xl:top-[20px] w-full h-full '>
                <div className='w-full h-full flex justify-center items-center'>
                <div className='relative z-[10] max-w-xl lg:max-w-lg xl:max-w-xl w-full m-auto'>
                   <h1 className='text-primary-main text-2xl md:text-4xl text-center mb-10' >  
                         {locale === 'en' ?   'Marketing' : 'ಕಹಾಮ ಮಾರುಕಟ್ಟೆ'}
                   </h1>

               
              {market.map((item,idx)=>{
                console.log()
                return(
                  <div key={idx} onClick={()=>handleMarket(item)} className='mt-2'>
                     <h1  className='uppercase cursor-pointer text-sm md:text-lg lg:text-sm xl:text-xl text-center hover:text-white transition-all duration-200 hover:scale-[1.5]'>
                      {item?.attributes?.title}
                    </h1>
                   
                   </div>
                )
              })}
            
                   </div>
                </div>
            </div>
        </div>  

        <div className='w-full h-auto flex flex-wrap justify-center'>
           
             <div className='block lg:hidden max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                   <div className='m-auto'>
                   <h1 className='text-primary-main text-2xl md:text-3xl ' >   {locale === 'en' ?   'Marketing' : 'ಕಹಾಮ ಮಾರುಕಟ್ಟೆ'} </h1>
             <div className=' mt-10'>
              <p className=''>
              An ambitious scheme of the Karnataka State Government, the “Ksheerdhare” scheme has been implemented for the following objective                
              </p>
             </div>
                   </div>
             </div>



{/*           

        {market.map((item,idx)=>{
          return(
          
            <div key={idx} className='max-w-7xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
            <div className='m-auto'>
           
     
      <div className="p-5">
                        {item?.attributes?.content && (
                          <BlocksRenderer
                            content={item?.attributes?.content}
                            blocks={{
                              paragraph: ({ children }) => <p className="text-md text-lg">{children}</p>,
                              heading: ({ children, level }) => {
                                switch (level) {
                                  case 1:
                                    return (
                                      <h1 className="text-2xl text-primary-main mt-5">{children}</h1>
                                    );
                                  case 2:
                                    return <h2 className="text-lg">{children}</h2>;
                                  case 3:
                                    return <h3>{children}</h3>;
                                  case 4:
                                    return <h4>{children}</h4>;
                                  case 5:
                                    return <h5>{children}</h5>;
                                  case 6:
                                    return <h6>{children}</h6>;
                                  default:
                                    return <h1>{children}</h1>;
                                }
                              },
                              list: ({ children }) => {
                                return children
                              },
                              code: ({ children }) => (
                                <h1 className="text-2xl bg-primary-main text-white p-2 shadow-lg">
                                  {children}
                                </h1>
                              )
                            }}
                          />
                        )}
                      </div>
            </div>
</div>
          )
        })} */}
 
         

          
            
        </div>
           
      </div>


   



<Footer/>
</div>
  
  )
}

export default Marketing