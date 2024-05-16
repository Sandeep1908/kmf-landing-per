

import Link from 'next/link'
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Carousel } from 'react-responsive-carousel';
 
function UnionCard({name,image,description,link}) {
 
  return (
    <div className=" w-full h-full flex justify-center items-center border-b  p-2    ">
      <div className='w-full h-full flex justify-center items-center'>

      <Carousel
                          className=" w-full h-full"
                          autoPlay={false}
                          interval={2000}
                          showStatus={false}
                          infiniteLoop
                          showThumbs={false}
                          showIndicators={false}>
                          {image?.data?.map((item, id) => {
                             
                             
                            return(

                                
                                  
                         
                                  <img key={id} src={item?.attributes?.url} className=' max-w-[400px] h-full object-cover'/>
                                 
                              
 
                            )
                          })}
                        </Carousel>

        
      </div>

<Link href={link || ''} className='w-full flex flex-col justify-start items-start space-y-6'>
   
        <h1 className='text-4xl uppercase text-primary-main'>{name}</h1>
        <p className='text-md  text-justify'>{description?.[0]?.children?.[0]?.text}</p>
    
     
      
      </Link>
   </div>
  )
}

export default UnionCard