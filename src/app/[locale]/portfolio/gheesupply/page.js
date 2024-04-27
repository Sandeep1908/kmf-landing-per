"use client"
import React from 'react'
import titleBG from '@/images/portfolio/title-bg.png';
import Footer from '@/components/Footer';
import flag from '@/images/portfolio/flag.jpg';
import dhare1 from '@/images/portfolio/dhare1.jpg'
import dhare2 from '@/images/portfolio/dhare2.jpg'
import dhare3 from '@/images/portfolio/dhare3.jpg'
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';


const GheeSupply = () => {
  const locale = useLocale().locale;
  return (
    <div className='w-full h-full'>
      <section className='w-full h-full'>
      <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
            <Link className="  text-sm font-bold  " href={`/${locale}/portfolio/#ACHIEVEMENTS` || ''}>
            KMF ACHIEVEMENTS
            </Link>

           
            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main" href={''}>
            GHEE SUPPLY
            </Link>
          </div>
      <div className=' relative w-full h-full flex flex-col items-center justify-center mt-20'>

            <h1 className='text-primary-main text-2xl md:text-4xl  ' > GHEE SUPPLY </h1>
            <div className='bg-primary-main w-[150px] h-[4px] mt-2'></div>

            <img className='absolute md:top-[-50px] top-[-35px] left-[38%] md:left-[49%] w-32 md:w-40 ' src={titleBG.src} alt="" />
        </div>
      </section>
       <section className={`w-full h-auto md:h-[90vh] relative company-bg mt-20`}>

               <div className='absolute w-full h-full '>
                     <div className='w-full h-full  z-[-1] flex justify-between items-center'>
                           <div className='bg-red-600 w-28 h-7 '>

                           </div>
                           <div className='bg-red-600 w-28 h-7 '>

                           </div>
                     </div>
                </div>
                <video autoPlay muted loop controls className='relative w-full h-full z-[10]' src="/video/gheesupply.mov"></video>

      </section>
   
  <section className=" relative w-full flex flex-col space-y-5 mb-10 max-w-7xl m-auto h-auto pt-10  ">
  <div className='w-full h-auto'>
   
    
</div>
    <div className="w-full h-full flex space-y-3 flex-col p-10">
      <h1 className=" text-2xl md:text-4xl text-primary-main text-center ">Sub:  Tirupati Laddo now made with Nandini Ghee.</h1>
      <p className="text-sm  md:text-lg text-justify">
      Karnataka Milk Federation (KMF) is a second largest Co-operative milk federation in the country with a procurement of 74 lakh liters of milk daily from the farmers of state and making payment of 18 crores of rupees daily to state dairy farmers. The said milk procured is marketed under the brand  “Nandini” where there are more than 72 plus  milk products namely., Milk in pouches, Curd, Butter milk, Flavored milk, long shelf life Good life milk, Butter, Ghee, Paneer, Cheese along with mouth watering sweets such as Mysore Pak, Peda, Badam Burfi, Cashew burfi, Kesar Peda, Chocolate Burfi, Jamoon, Rasogolla etc., are being manufactured and marketed across.
      </p>
      <p className="text-sm  md:text-lg text-justify">
      At present all our Member District Milk unions are ISO and FSSAI certified dairies producing high quality milk products which is also certified and authenticated by National Dairy Development board ,(NDDB) by awarding “Quality Mark” to our dairies. With this quality products KMF is supplying Long shelf life Milk ie., Nandini Goodlife milk, Ghee, Butter and Milk powder to Defence Forces of our country thoughout the year and also exporting to other neighboring countries. 
      </p>
      <p className="text-sm  md:text-lg text-justify">
      Further, from past 20 years we were supplying Nandini Ghee to Tirumala Tirupati Temple (TTD) for making famous Laddu prasadam. Now again KMF is awarded with a contract for supply of 14 Lakh Kgs of Nandini Ghee for Tirumala Tirupati Devasthanams (TTD) for making popular and delicious laddus. The above supplies of Ghee will start immediately which makes the devotees to get delicious laddus made out of  Nandini ghee. 
      </p>
      <p className="text-sm  md:text-lg">
      We hereby request your kind self to publish the same in your esteemed media for the awareness of general public.
      </p>
    </div>
   

    



  </section>


<Footer/>
</div>
  
  )
}

export default GheeSupply
