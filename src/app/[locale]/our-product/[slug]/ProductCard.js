import React from 'react'

function ProductCard({title,image,description1,description2}) {
  return (
      
    <div className='w-full max-w-96 h-96 overflow-auto  flex flex-col justify-center items-center   p-5 rounded-lg bg-neutral-light4 shadow-md hover:bg-primary-lighter transition-all duration-500 '   >
    <div className='text-center h-[20%]'>
        <h1 className='text-primary-main text-2xl font-semibold'>{title}</h1>
    </div>

    <div className='flex w-full h-[65%] flex-col justify-center items-center p-5    '>
          <div className='w-full h-[60%] flex justify-center items-center'>
          <img src={image} className='w-52 h-40 object-contain '/>
          </div>
        
    </div>
        
    <div className='space-y-5 h-[20%]'>
              <p className='text-justify text-sm'>{description1}</p>

      
            </div>

  
</div>
  )
}

export default ProductCard