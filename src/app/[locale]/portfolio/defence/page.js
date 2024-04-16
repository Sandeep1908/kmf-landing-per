import React from 'react'
import titleBG from '@/images/portfolio/title-bg.png';
import Footer from '@/components/Footer';
import comingSoonImg from '@/images/notfound/comingsoon.png'
import ComingSoon from '../../comingsoon/page';



const Defence = () => {
  return (
     <>
    <div className='w-full h-auto'>
        {/* <div className=' relative w-full h-full flex justify-center mt-20'>

            <h1 className='text-primary-main text-2xl md:text-4xl  ' > DEFENCE </h1>
            <img className='absolute top-[-50px] left-[46%] w-40 ' src={titleBG.src} alt="" />
        </div> */}
        

        <div className='w-full h-full'>
          <ComingSoon/>
        </div>
       
        
    </div>
    <Footer/>
    </>
  
  )
}

export default Defence
