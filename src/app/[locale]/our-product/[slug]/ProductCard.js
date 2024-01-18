import React from 'react'

function ProductCard({title,image,description1,description2}) {
  return (
      
    <div className='max-w-96 h-96 flex flex-col justify-center items-center   p-5 rounded-lg bg-neutral-light4  '  style={{ boxShadow: '0px 11px 49px 0px rgba(0, 0, 0, 0.15)' }}>
    <div className='text-center'>
        <h1 className='text-primary-main text-2xl font-semibold'>{title}</h1>
    </div>

    <div className='flex w-full h-full flex-col justify-center items-center p-5    '>
          <div className='w-full h-full flex justify-center items-center'>
          <img src={image} className='w-52 h-40 object-contain '/>
          </div>
            
            <div className='space-y-5'>
              <p className='text-justify text-sm'>{description1}</p>

              <p className='text-justify text-sm'>{description2}</p>
            </div>
    </div>

  
</div>
  )
}

export default ProductCard