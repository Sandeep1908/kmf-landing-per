

import Link from 'next/link'
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
 
function UnionCard({name,image,description,link}) {
 
  return (
    <div className=" w-full h-full flex justify-center items-center border-b  p-2    ">
      <div className='w-full h-72 flex justify-center items-center'>

      <PhotoProvider >
       
          <PhotoView src={image} height="400px"  >
          <img src={image} className=' max-w-[400px] h-full object-fill'/>
          </PhotoView>
      
    
    </PhotoProvider>
        
      </div>

<Link href={link || ''} className='w-full flex flex-col justify-start items-start space-y-6'>
   
        <h1 className='text-3xl uppercase text-primary-main'>{name}</h1>
        <p className='text-sm  text-justify'>{description?.[0]?.children?.[0]?.text}</p>
    
     
      
      </Link>
   </div>
  )
}

export default UnionCard