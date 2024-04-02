import React from 'react'
import sweet from '@/images/recipes/sweet.jpg'


const Recipes = () => {
  return (
    <div className='max-w-md mt-10'>
    <div className='w-full'>
       <img className='w-full' src={sweet.src} alt="" />
    </div>
    <h3 className='text-3xl mt-10 mb-10'>
      NUTTY BARFI

    </h3>
    <hr className='bg-slate-300 h-[2px]' />
</div>
  )
}

export default Recipes
