"use client"
import React, { useEffect, useState } from 'react'
import titleBG from '@/images/portfolio/title-bg.png';
import Footer from '@/components/Footer';
import flag from '@/images/portfolio/flag.jpg';
import award1 from '@/images/portfolio/Award1.png';
import award2 from '@/images/portfolio/Award2.png';
import award3 from '@/images/portfolio/Award3.png';
import award4 from '@/images/portfolio/Award4.png';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
import Marquee from './Marquee';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useApi from '@/hooks/useApi';





const Awards = () => {
      const locale = useLocale().locale;
      const axios = useApi();

      const [award, setAward] = useState([]);
      useEffect(() => {
        (async () => {
          const { data } = await axios.get('/api/awards');
        
          setAward(data.data)
          console.log(data.data);
        
        })();
      }, []);

      return (
    <div className='w-full h-full'>
       <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
            <Link className="  text-sm font-bold  " href={`/${locale}/portfolio/#ACHIEVEMENTS` || ''}>
            KMF ACHIEVEMENTS
            </Link>

           
            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main" href={''}>
            AWARDS
            </Link>
          </div>
    <div className='w-full h-auto mt-20'>
    <div className=' relative w-full h-full flex flex-col items-center justify-center mt-20'>

        <h1 className='text-primary-main text-2xl md:text-5xl  ' > AWARDS </h1>
        <div className='bg-primary-main w-[100px] h-[4px] mt-2'></div>

        <img className='absolute top-[-50px] left-[47%] w-40 ' src={titleBG.src} alt="" />
    </div>


    
    
</div>

<div className='w-full h-auto'>
    



        
        <div className=' hidden lg:block relative w-full max-h-[500px] h-full z-[-1]'>
                <img className='w-full h-full' src={flag.src} alt="" />
                <div className='absolute top-[60px] lg:top-0 xl:top-[60px] w-full h-full'>
                    <div className='w-full h-full flex justify-center items-center'>
                    <div className='max-w-xl lg:max-w-lg xl:max-w-xl w-full m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' > 2004 to till date: The Unions & Dairies of  KMF have Won 14 National Energy Conservation Awards  From GOI. </h1>
                
                       </div>
                    </div>
                </div>
            </div>  

            <div className='w-full h-auto flex flex-wrap justify-center'>
               
                 <div className='block lg:hidden max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' >  2004 to till date: The Unions & Dairies of  KMF have Won 14 National Energy Conservation Awards  From GOI.  </h1>

                       </div>
                 </div>
                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl  ' > 2009 : Nandini  Brand of KMF Won The Most Valuable Brand in Karnataka Award  in the Sunday Indian & IIPM regional excellence awards. </h1>
                 
                       </div>
                 </div>


                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl  ' > 2010 : Indias Largest selling English monthly Magazine Readers Digest carried out a Trusted Brand Survey  during 2010 and has given confirmed  Gold Award in the Milk Category.  Survey comprised over 1.3 million readers across the country.  </h1>
                
                       </div>
                 </div>

                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl  ' > “NANDINI” AWARDED AS ONE OF THE TOP BRAND IN THE BANGALORE BRAND SUMMIT-2014
At the Bangalore Brand Summit 2014 award ceremony KMF was presented with an  Indias premier marketing award recognizing excellence among the Bangalore Hot 50 Brands. </h1>
                
                       </div>
                 </div>

                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl  ' > 08-Jun-2015                                             
                   Rotary Club of Bangalore president Ram Kumarr Seshu presented the Corporate Citizen Award, 2014-15, to KMF Managing Director Sri.S.N.Jayaram IAS, at the Rotary Club of Bangalore on Monday-08.06.2015. </h1>
                
                       </div>
                 </div>

              
                
            </div>


<div className='w-full h-auto mt-10 '>
<h1 className="p-5  text-primary-main text-4xl uppercase text-center">Awards</h1>
<div className="marquee-notification h-full flex lg:gap-5 xl:gap-44 justify-evenly space-x-3 mt-10">



          {award.map((item,idx)=>{
                console.log()
                return(
              <div key={idx}
                  className="  w-72     h-96  rounded-md overflow-hidden   m-auto group   transition-all duration-100  "
                  >
                  <div className="p-2 w-full h-[70%]">
                  <PhotoProvider >
                          
                          <PhotoView src={item?.attributes?.image?.data?.[0]?.attributes?.url} width="400px" height="400px"  >
                         
                          <img
                        src={item?.attributes?.image?.data?.[0]?.attributes?.url}
                        alt="featured-img"
                        className=" w-full h-full rounded-full transition-all duration-100 group-hover:scale-[1.01] hover:rounded-none "
                        />   
                                               </PhotoView>
                      
                    
                    </PhotoProvider>
                       
                  </div>

                  <div className="p-2  w-full   rounded-full bg-zinc-300 group-hover:bg-orange-500 ">
                        <h1 className="text-sm text-center group-hover:text-white  "> {item?.attributes?.title}
</h1>
                  </div>

                  
                  </div>
                )
              })}

      
              </div>


</div>
            
           
      </div>




<Footer/>
</div>
  
  )
}

export default Awards
