import Link from 'next/link'
import React from 'react'

function ProductCard({title,image,link}) {
  return (
      
    <Link href={link || ''}>
 
    <div className='w-80 h-96 bg-[#F7F7F7] shadow-md flex flex-col justify-between items-center overflow-hidden'>
    <div className='w-full h-[80%] flex justify-center items-center '>
      <img src={image}
      className='w-full h-full transition-all duration-300 object-contain hover:scale-[1.1]'
      />  

    </div>

    <div className='w-full bg-[#F7F7F7] h-[10%] flex justify-center items-center
    '>
      <p className='text-lg uppercase'>{title}</p>
    </div>
</div>
</Link>
  )
}

export default ProductCard