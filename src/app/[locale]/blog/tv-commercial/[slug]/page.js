'use client';

import React, { useEffect, useState } from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';
import Link from 'next/link';
import useApi from '@/hooks/useApi';

import Footer from '@/components/Footer';
import downarrowIco from '@/images/icons/downarrow.svg';
import uparrowIco from '@/images/icons/uparrow.svg';

import { useParams } from 'next/navigation';
import TvcommercialAccordion from '@/components/TvcommercialAccordion';
import { PhotoProvider, PhotoView } from 'react-photo-view';


function TvcommercialDetails() {
   
  const [assets, setAssets] = useState([]);
  const [brandAmbassador, setBrandAmbassador] = useState([]);
   
  const [openAccordion, SetOpenAccordion] = useState(null);
  const [brandAsset, setBrandAsset] = useState([]);
  const axios = useApi();
  const param=useParams()
  const [commercialCategory, setCommercialCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [subId,setSubId]=useState(null)
  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSubId(window.location.search.split('=')[1] || null);
    }
  }, []);
 
   
  const arrows = {
    down: downarrowIco.src,
    up: uparrowIco.src
  };
  const locale = useParams().locale;
  const handleAccordionClick = (accordionId) => {
    SetOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  useEffect(() => {
    (async () => {
        const { data: brandAmbassador } = await axios.get('/api/brand-ambassadors');
 
        const { data: commercialCategory } = await axios.get('/api/tv-commercials');
        const { data: commercialItems } = await axios.get('/api/tv-commercial-items');
        console.log("comercial items",commercialItems.data)



      if(subId){
       const brandAsset= brandAmbassador?.data?.filter(item=>item?.id===parseInt(subId))
        setAssets(brandAsset)
      }
      else{
        const brandAsset= commercialItems?.data?.filter(item=> item?.attributes?.tv_commercial?.data?.id===parseInt(param.slug))
        setAssets(brandAsset)
      }
     
      setBrandAmbassador(brandAmbassador.data)
      setCommercialCategory(commercialCategory.data)
    })();
  }, []);

  return (
    <div className="w-full  absolute top-36 z-[-1]     ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>
      <section className="w-full h-fit m-auto pt-10   ">
        <div className="w-full space-y-5 p-4 ">
          <div className="mb-20  mt-20  relative w-full  flex justify-center items-center ">
            <h1 className=" text-primary-main relative z-10 font-heading text-xl font-extrabold uppercase">
              {locale === 'en'
                ? `Gallery`
                : `
ಗ್ಯಾಲರಿ`}
            </h1>
          </div>

          <div className="w-full flex justify-center items-center pt-10 relative before:max-w-[1200px] before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
            <ul className="flex gap-5">
              <Link href={`/${locale}/blog/gallery`}>
                <li
                  className={` 
                   text-sm relative  
                       
                  uppercase`}>
                  NEWS AND EVENTS
                </li>
              </Link>

              <Link href={`/${locale}/blog/gallery`}>
                <li
                  className={` 
                 text-sm relative  
                       
                  uppercase`}>
                  Press Release
                </li>
              </Link>

              <Link href={`/${locale}/blog/tv-commercial`}>
            
              <li
                className={` 
                   text-primary-main text-xl font-bold relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-primary-main
                         
                    uppercase`}>
                Tv Commercials
              </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="w-full h-auto   mt-10 flex ">
          <section className="max-w-[1282px] m-auto w-full h-full bg-white   ">
            <div className="w-full h-full flex flex-col space-x-5 justify-between items-start lg:flex-row lg:justify-start">
              <div className="w-full h-full flex flex-col space-y-28   ">

            <div className='w-full h-full'>

          
             <div className='w-full h-full  grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3     gap-5 lg:flex-row lg:items-start'>
 

 {
  subId ?
  assets?.map((items)=>{
                console.log("assets",items)
    return(
      items.attributes.assets?.data?.map((item,id)=>{
    
    const validExtensions = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG'];
    if (validExtensions.includes(item?.attributes?.ext)) {
      return (
      <div key={id} className='w-full h-full relative'>

        <img
          
          src={item?.attributes?.url}
          className="w-96 h-80    transition-all duration-300 hover:scale-[1.1]"
        />



<div className="absolute h-full w-full bg-black/80 inset-0 flex items-center justify-center -bottom-10 hover:bottom-0 opacity-0 transition-all duration-300  card-hover">
        <Link href={link|| ''}> <button className="bg-primary-main  w-48 h-12  uppercase    text-neutral-light4 font-semibold rounded-md">
                {title}
              </button>

              </Link>
           
      </div>
        </div>
      );
  } 
  else{
    return (
      <video
        
        controls
        loop
        muted
        key={id}
        src={item?.attributes?.url}
        className="w-96   h-96      transition-all duration-300 hover:scale-[1.1]"
        onClick={() => handleVideoClick(item?.attributes?.url)}
      />

    );
  }
})
)
})




  :
  assets?.map((items,id)=>{
 
    const validExtensions = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG'];
    if (validExtensions.includes(items?.attributes?.assets?.data?.[0]?.attributes?.ext)) {
      return (
       <div key={id} className='w-full h-full relative'>
         <PhotoProvider >

<PhotoView src={items?.attributes?.assets?.data?.[0]?.attributes?.url}>

        <img
          
          src={items?.attributes?.assets?.data?.[0]?.attributes?.url}
          className="w-96 h-80    transition-all duration-300 hover:scale-[1.1]"
        />
        </PhotoView>
       </PhotoProvider>

        </div>
      );  
    
     
    
    
  } 

  else{
    return (
      <video
        
        controls
        loop
        muted
        key={id}
        src={items?.attributes?.assets?.data?.[0]?.attributes?.url}
        className="w-[400px]   h-60 object-fill      transition-all duration-300 hover:scale-[1.1]"
        onClick={() => handleVideoClick(items?.attributes?.assets?.data?.[0]?.attributes?.url)}
      />

    );
  }

  
})
 
}        
             
                  
           
             </div>
            </div>
 


             


          
                      
                         
                   
             
                
              </div>

             
            </div>

          </section>
          <div className=" w-full max-w-60 mr-10 h-full transition-all duration-300  ">
                <TvcommercialAccordion
                  title={'Brand Ambassador'}
                  id={100}
                  open={openAccordion == 100}
                  arrow={arrows}
                  onToggle={handleAccordionClick}>
                  <ul className="">
                    {brandAmbassador?.map((item, index) => {
                      return (
                        <Link
                          href={`/${locale}/blog/tv-commercial/${item?.id}/?subid=${item?.id}` || ''}
                          key={index}
                          onClick={() => setOpenNav((prev) => !prev)}>
                          <li
                            key={index}
                            className="flex items-center  relative  text-light-light4 border-b-2 border-b-light-light4 pb-2 space-x-3 ">
                            <span>{item?.attributes?.name}</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </TvcommercialAccordion>

                {commercialCategory?.map((item, id) => {
                   
                  return (
                    
                    <Link    key={id}  href={`/${locale}/blog/tv-commercial/${item?.id}` || ''}>
                    <li
                   
                   
                      className="w-full list-none transition-all duration-300 bg-primary-main ">
                      <button className="flex items-center justify-between relative  text-light-light4 border-b-2 border-b-light4 p-4 w-full ">
                        <div className="w-full flex space-x-2 ">
                          <span className=" text-sm text-white">{item?.attributes?.title}</span>
                        </div>
                      </button>
                    </li>
                    </Link>
                  );
                })}
              </div>
        </div>
      </section>



      {selectedVideo && (
        <div className="modal">
          <div className="modal-content">
            <span className="close z-40 " onClick={closeModal}>&times;</span>
            <video controls src={selectedVideo} autoPlay className="modal-video w-full max-w-7xl h-[500px] object-fill">
               
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default TvcommercialDetails;