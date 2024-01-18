'use client';

import React, { useEffect, useState } from 'react';

import directorImg from '@/images/directors/directorsbg.png';
import personImg from '@/images/directors/person.png';
import headImg from '@/images/directors/1-1.png';
import headengImg from '@/images/directors/headeng.png';
import Footer from '@/components/Footer';
import TeamCard from './TeamCard';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';


function Directors() {
  const [directors,setDirectors]=useState([])
  const axios =useApi()
  const locale=useParams().locale

  useEffect(()=>{
    (
      async()=>{
        const {data}=await axios.get('/api/directors?sort[0]=createdAt:asc')
        const directorsData=data?.data?.map((item,id)=>{
     
          return(
            {
              title:item?.attributes?.title,
              image:item?.attributes?.image?.data?.map(item=>item?.attributes?.url),
              description:item?.attributes?.description

            }
          )
        })
        setDirectors(directorsData)
        
    
      }
    )()
  },[])
   
  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section
        className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
      <img src={directorImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>

      <section className="w-full  bg-[#F6F6F6] pt-10  ">
      <h1 className='text-center text-primary-main text-xl'>{locale==='en'?'Board of Directors':'ನಿರ್ದೇಶಕರ ಮಂಡಳಿ'}</h1>
      <div className='p-12 h-full  '>
        <div className='w-full min-h-80 md:h-3/4 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl flex flex-col md:flex-row p-3'>
            <div className='md:w-1/2 flex justify-center items-center mt-6 lg:pt-3 lg:pb-3 md:mt-0 ' >
              <img className='w-3/4' src={locale==='en'?headengImg.src:headImg.src} alt="" />
            </div>
            <div className=' md:w-1/2 flex flex-col justify-center items-center mt-3 md:p-3 md:items-start lg:mt-0 '>
              <div>
                <p className='text-2xl font-bold text-neutral-dark1'>{locale==='en'?`Mr. Shri L.B.P. Bhimanayka`:`
ಶ್ರೀ ಶ್ರೀ ಎಲ್.ಬಿ.ಪಿ. ಭೀಮಾನಾಯ್ಕ`}</p>
                <p className='text-base font-normal text-neutral-dark2'>{locale==='en'?`Honorable President, Kahama`:`

ಗೌರವಾನ್ವಿತ ಅಧ್ಯಕ್ಷರು, ಕಹಾಮಾ`} </p>
              </div>
              <div className='mt-3 lg:mt-12 p-3 md:p-0'>
                <p className='text-base font-normal text-justify'>
                  {locale==='en'?`                Former Hagaribommanahalli Congress MLA Bhima Nayak has been elected unopposed as the new Chairman of Karnataka Milk Federation ...`:`
ಕರ್ನಾಟಕ ಹಾಲು ಒಕ್ಕೂಟದ ನೂತನ ಅಧ್ಯಕ್ಷರಾಗಿ ಹಗರಿಬೊಮ್ಮನಹಳ್ಳಿ ಕಾಂಗ್ರೆಸ್ ಮಾಜಿ ಶಾಸಕ ಭೀಮಾ ನಾಯಕ್ ಅವಿರೋಧವಾಗಿ ಆಯ್ಕೆಯಾಗಿದ್ದಾರೆ.`}

                </p>
              </div>
            </div>
        </div>
        <div className='flex flex-wrap gap-5 md:flex-row mt-10 justify-center'>

          
          {directors?.map((item,id)=>{
    
            return(
              <TeamCard key={id} imgUrl={item?.image?.[0]} fullName={"Mr.Name"} desc={"Lorem Ipsum is simply dummy text of the printing."} />
            )
          })}
 
        </div>
      </div>

      </section>

      <Footer/>
    </div>
  );
}

export default Directors;
