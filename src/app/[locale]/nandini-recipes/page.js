import React from 'react'
import Recipes from './Recipes'
import Link from 'next/link'
import Footer from '@/components/Footer'

function page() {
  return (
    <div className='w-full mt-10  md:mt-20 '>
          <div className='w-full text-center mb-20'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-primary-main text-5xl'>
                            NANDINI RECIPES
                        </h1>
                        <div className='w-40 h-1 bg-primary-main mt-8'></div>
            </div>

            <div className='w-full mt-10 md:mt-20 p-5 mb-20 flex justify-center items-center'>
            <div className='w-full m-auto flex justify-center items-center flex-wrap gap-10 '>

             {/* <Link > */}
        

                 <Recipes/>
            {/* </Link>   */}
              <Recipes/>
              <Recipes/>
                </div>
            </div>
           
          </div>
          <Footer/>
    </div>
  )
}

export default page
