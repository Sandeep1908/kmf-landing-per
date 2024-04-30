"use client"
import React, { useEffect, useState } from 'react'
import titleBG from '@/images/portfolio/title-bg.png';
import bhagaya1 from '@/images/portfolio/bhagaya-1.png';
import bhagaya2 from '@/images/portfolio/bhagaya-2.png';
import bhagaya3 from '@/images/portfolio/bhagaya-3.png';
import Footer from '@/components/Footer';
import flag from '@/images/portfolio/flag.jpg';
import banner from '@/images/portfolio/Childrens-min.png';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
import useApi from '@/hooks/useApi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { SwiperSlide,Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import VideoComponent from './VideoComponent';
import Lightbox from './Lightbox';





const KsheeraBhagaya = () => {


  const locale = useLocale().locale;
  const [bhagaya, setBhagaya] = useState([]);
const axios = useApi();
  useEffect(() => {
    (async () => {
      const { data: bhagaya } = await axios.get(`/api/ksheerabhagaya`);
       
 
     
      setBhagaya(bhagaya?.data);

    })();
  }, []);

  const [slideView, setSlideView] = useState(3);


  const [lightboxOpen, setLightboxOpen] = useState(false);
  const videoUrl = "/video/ksheerabhagaya.mov"; // Replace with your actual video URL

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
  return (
     <>
    <div className='w-full h-full'>
      <section className='w-full h-full'>
      <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
            <Link className="  text-sm font-bold  " href={`/${locale}/portfolio/#ACHIEVEMENTS` || ''}>
            KMF ACHIEVEMENTS
            </Link>

           
            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main" href={''}>
               KSHEERABHAGAYA
            </Link>
          </div>
      <div className=' relative w-full h-auto flex flex-col items-center justify-center mt-20'>

        <h1 className='text-primary-main   flex justify-center items-center text-2xl md:text-4xl  ' > KSHEERABHAGAYA </h1>
        <div className='bg-primary-main w-[200px] h-[4px] mt-2'></div>
        <img className='absolute top-[-50px] left-[49%] w-40 ' src={titleBG.src} alt="" />
</div>
      </section>
         <section className={`w-full h-auto md:h-[90vh] relative  company-bg mt-10`}>

              
<img src={banner.src} alt="" />

        </section>
        <section className='w-full h-full mt-20 '>
         
          <div className='w-full h-auto'>
      
        
            <div className=' hidden lg:block relative w-full max-h-[500px] h-full z-[-1]'>
                <img className='w-full h-full' src={flag.src} alt="" />
                <div className='absolute top-[60px] lg:top-0 xl:top-[60px] w-full h-full'>
                    <div className='w-full h-full flex justify-center items-center'>
                    <div className='max-w-xl lg:max-w-lg xl:max-w-xl w-full m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl text-center ' > KSHEERABHAGAYA </h1>
                 <div className='mt-6'>
                  <ul className=' text-sm md:text-lg lg:text-sm xl:text-lg list-disc text-left'>
                  <li>
                  The Ksheera Bhagya Scheme was launched on 1st Aug 2013 by GOK in co-ordination with KMF to provide nutritious food with protein and fat which is essential for healthy growth and all-round development of School Children as well as Anganwadi in the State.
                  </li>
                  <li>
                  Ksheera Bhagya Scheme was a dream project conceived by KMF based on the suggestion of honorable CM of Karnataka to help the poor children of the State and also the Milk producers to dispose their surplus milk.
                  </li>
                  <li>
                  The Gist of Ksheera Bhagya Scheme is as follows:
                  </li>
                
                  </ul>
                 </div>
                       </div>
                    </div>
                </div>
            </div>  

            <div className='w-full h-auto flex flex-wrap justify-center'>
               
                 <div className='block lg:hidden max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' >  KSHEERABHAGAYA </h1>
                 <div className=' mt-10'>
                  <ul className='list-disc text-left'>
                  <li>
                  The Ksheera Bhagya Scheme was launched on 1st Aug 2013 by GOK in co-ordination with KMF to provide nutritious food with protein and fat which is essential for healthy growth and all-round development of School Children as well as Anganwadi in the State.
                  </li>
                  <li>
                  Ksheera Bhagya Scheme was a dream project conceived by KMF based on the suggestion of honorable CM of Karnataka to help the poor children of the State and also the Milk producers to dispose their surplus milk.
                  </li>
                  <li>
                  The Gist of Ksheera Bhagya Scheme is as follows:
                  </li>
                
                
                  </ul>
                 </div>
                       </div>
                 </div>
          

            </div>

           
          <div className="w-full flex-col max-w-7xl m-auto mb-10 rounded-md shadow-md  bg-slate-50     overflow-auto  items-start justify-start p-10 ">


           
          {bhagaya && bhagaya.attributes && bhagaya.attributes.content && (
                    <BlocksRenderer
                      content={ bhagaya.attributes.content}
                      blocks={{
                        // You can use the default components to set class names...
                   
                        code: ({ children }) => {
                          const columns =
                            children?.[0]?.props?.text.split(',')[0].trim() === 'columns'
                              ? children?.[0]?.props?.text.split(',').slice(1)
                              : [];

                          return (
                            <table className="table-fixed  border-spacing-y-2	 border-collapse border-black border      w-full ">
                              <thead className=" text-left bg-orange-400 text-primary-main">
                                {columns?.map((item, id) => {
                                  console.log(item,id)
                                  if(id===0){
                                    return(
                                      <th className="p-2 w-10  border-r border-black " key={id}>
                                      {item}
                                    </th>
                                    )
                                 
                                  }
                                  return (
                                    <th className="p-2   border-r border-black " key={id}>
                                      {item}
                                    </th>
                                  );
                                })}
                              </thead>
                              <tbody className="text-left  text-md ">
                                <tr className="w-full ">
                                  {children?.[0]?.props?.text.split(',')[0].trim() !== 'columns' &&
                                    children?.[0]?.props?.text?.split(',')?.map((item, id) => {
                                      if(id===0){
                                        return(
                                          <td className="w-10 p-2 text-md font-content border-r border-black " key={id}>
                                          {' '}
                                          {item}
                                        </td>
                                        )
                                     
                                      }
                                      return (
                                        <td className=" p-2 text-md font-content border-r border-black " key={id}>
                                          {' '}
                                          {item}
                                        </td>
                                      );
                                    })}
                                </tr>
                              </tbody>
                            </table>
                          );
                        },

                 
                      }}
                    />
                  )}




      {/* <table className="table-fixed  border-spacing-y-2	 border-collapse border-black border      min-w-full">
        <thead className=" text-left ">
          <tr className="text-md">
          <th className="p-2">#</th>
            <th className="p-2">GIST</th>
            <th className="p-2 ">Schools	</th>

              <th className='' >Anganwadi
            </th>
          </tr>
        </thead>

        <tbody className="text-left  text-md">

              <tr className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>1</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>Schools / Anganwadi covered</td>
                <td className='p-2 text-md font-content border-r border-black'>55,683 nos</td>


                  
                 <td className='p-2 text-md' >64,000 nos</td>

              </tr>
              <tr className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>2</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>No. of School / Anganwadi Children</td>
                <td className='p-2 text-md font-content border-r border-black'>64 lakhs</td>


                  
                 <td className='p-2 text-md' >40 lakhs</td>

              </tr>
              <tr className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>3</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>Beneficiaries</td>
                <td className='p-2 text-md font-content border-r border-black'>1st to 10th standard in government and government aided schools in all over Karnataka</td>


                  
                 <td className='p-2 text-md' >	Children from 6 months to 6 years</td>

              </tr>
              <tr className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>4</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>Milk Powder required</td>
                <td className='p-2 text-md font-content border-r border-black'>WMP required per child is 18gms, ie., equivalent to serving 150ml of Milk. (given five times a week)	</td>


                  
                 <td className='p-2 text-md' >	SMP required per child is 18gms, ie., equivalent to serving 150ml of Milk. (given five times a week)</td>

              </tr>
              <tr className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>5</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>Milk required per day</td>
                <td className='p-2 text-md font-content border-r border-black'>5 LLPD</td>


                  
                 <td className='p-2 text-md' >		3 LLPD</td>

              </tr>
              <tr className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>6</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>Cost/Child/one serve</td>
                <td className='p-2 text-md font-content border-r border-black'>Rs.5.25 Approx.</td>


                  
                 <td className='p-2 text-md' >	Rs.5.25 Approx.</td>

              </tr>
          
        </tbody>
      </table> */}





    </div>
               
          </div>


        </section>
        
      <section className='relative w-full h-auto bg-[#2858ac]'>
      <div className='max-w-6xl  m-auto w-full justify-center items-center text-center  pt-20'>
                  <p className='text-2xl text-white'>
                  The Ksheera Bhagya Scheme was launched on 1st Aug 2013 by GOK in co-ordination with KMF to provide nutritious food with protein and fat which is essential for healthy growth and all-round development of School Children as well as Anganwadi in the State.
                  </p>
                
                
                
                 </div>
          <div className='max-w-6xl  h-[1000px] md:h-[500px]  m-auto flex flex-col  md:flex-row gap-6 justify-center items-center '>
         
            <div className='max-w-96 w-full h-96 pt-2 pb-2 '>
              
                <div className='w-full h-full bg-[#3b75d8] shadow-xl flex justify-center items-center'>


                <VideoComponent onClick={openLightbox} />
             {lightboxOpen && <Lightbox videoUrl={videoUrl} onClose={closeLightbox} />}


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
                      <PhotoProvider >
                          
                          <PhotoView src={bhagaya1.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={bhagaya1.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-full h-96 p-2 '>
                      <PhotoProvider >
                          
                          <PhotoView src={bhagaya2.src} height="400px"  >
                          <img className=' cursor-pointer  m-auto w-full h-full object-cover' src={bhagaya2.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center  w-full h-96 p-2 '>
                      <PhotoProvider >
                          
                          <PhotoView src={bhagaya3.src} height="400px"  >
                          <img className=' cursor-pointer m-auto w-full h-full object-cover' src={bhagaya3.src} alt="" />
                          </PhotoView>
                      
                    
                    </PhotoProvider>                </div>
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

export default KsheeraBhagaya
