'use client'
import React from 'react'
import Footer from '@/components/Footer'
import { useMyContext } from '@/context/headerContext'
import useLocale from '@/hooks/useLocale'
import Link from 'next/link'
function Procurement() {
    const { isScroll}=useMyContext()
    const locale=useLocale().locale
  return (
    <div className={`w-full h-full absolute   z-[-1] ${isScroll ? 'top-48' : ''}  `}>
    <section className={`w-full h-[700px] pt-28 relative  grid place-items-center `}>
      {/* <img src={banner?banner[0]:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
       */}
      <video
        src="/video/precrument.mp4"
        muted
        autoPlay
        loop
        controls
        playsInline
        className={`w-full  h-full    object-cover absolute top-0 z-[-1] ${
          isScroll ? 'h-[400px]' : ''
        } `}
      />
    </section>
    <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
                      <Link className="  text-sm font-bold  " href={`/` || ''}>
              Home
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold    " href={` `}>
              Animal Husbandery
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main  " href={` `}>
             Procurement
            </Link>
            
      </div>
    <section className=" relative w-full max-w-7xl m-auto h-auto pt-10  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-3 lg:flex-row lg:p-10 lg:space-x-10">
          

        
            <div className="w-full flex flex-col space-y-2 justify-center items-start shadow-md  p-1   ">
              <h1 className="text-4xl font-heading text-center w-full relative flex justify-center items-center   text-primary-main before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-primary-main  ">Procurement</h1>

              <p className="text-lg text-justify p-2">
              KMF at present has 15 Milk Unions covering all 31 districts in the state.  The daily average milk procurement of KMF through its appliated milk union is about 83.50 lakh Kgs from 15756  MPCS.  
              </p>

              <h1 className='text-3xl '>Clean Milk Production	</h1>

             

              <ul className="flex flex-col space-y-3 p-6 w-full h-full justify-center items-center list-disc text-justify text-lg  md:justify-normal md:items-start">
              <li> The following steps should be followed for ensuring clean milk production:</li>
              <li> Before milking the cow, give sufficient amount of feed and clean water.</li>
                <li> Before milking the cow, give sufficient amount of feed and clean water.</li>

                <li>
                The dung and urine should be removed from the shed.
                </li>

                <li>
                The animal should be given a clean bath before milking.
                </li>

                <li>
                The animal should not be sick or unwell.
                </li>

                <li>
                If the animal is under treatment for disease, do not use the milk but discard the milk during the withdrawal period of the treatment.
                </li>

                <li>Posters, documentary films and booklets on Clean Milk Production (CMP).</li>
              </ul>
            </div>
         
          
          
         
        </div>

 
      </section>
  
    <Footer />
  </div>
  )
}

export default Procurement