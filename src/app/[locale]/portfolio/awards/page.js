"use client"
import React from 'react'
import titleBG from '@/images/portfolio/title-bg.png';
import Footer from '@/components/Footer';
import flag from '@/images/portfolio/flag.jpg';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';




const Awards = () => {
      const locale = useLocale().locale;
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
           
      </div>




<Footer/>
</div>
  
  )
}

export default Awards
