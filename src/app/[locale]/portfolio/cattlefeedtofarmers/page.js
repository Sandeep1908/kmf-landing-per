import React from 'react'
import titleBG from '@/images/portfolio/title-bg.png';
import Footer from '@/components/Footer';


const CattleFeedToFarmers = () => {
  return (
     <>
    <div className='w-full h-[100vh]'>
        <div className=' relative w-full h-full flex justify-center mt-20'>

            <h1 className='text-primary-main text-2xl md:text-4xl  ' > CATTLE FEED TO FARMERS </h1>
            <img className='absolute top-[-50px] left-[49%] w-40 ' src={titleBG.src} alt="" />
        </div>
        
    </div>
    <Footer/>
    </>
  
  )
}

export default CattleFeedToFarmers
