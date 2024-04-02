import React from 'react'
import sweet from '@/images/recipes/sweet.jpg'
import Footer from '@/components/Footer'



const page = () => {
  return (
    <div className='w-full'>
      <div className='w-full mt-20 mb-20'>
      <div className='flex flex-col justify-center items-center'>
            <h1 className='text-primary-main  text-4xl md:text-5xl'>
                            NANDINI RECIPES
                        </h1>
                        <div className='w-40 h-1 bg-primary-main mt-8'></div>
                        <h1 className='text-primary-main  text-2xl md:text-4xl mt-10'>
                        NUTTY BARFI
                        </h1>
            </div>

            <div className='w-full relative mt-10 md:mt-20'>
                <div className='absolute w-full h-full z-[-10] ' >
                   <div className='w-full h-full flex justify-between items-center'>
                       <div className='w-40 h-8 bg-red-600' ></div>
                       <div className='w-40 h-8 bg-red-600' ></div>
                   </div>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <img className=' w-80  md:w-[40%]  ' src={sweet.src} alt="" />
                </div>
               

               
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
