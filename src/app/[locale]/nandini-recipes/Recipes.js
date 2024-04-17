import React from 'react'
import sweet from '@/images/recipes/sweet.jpg'
import Link from 'next/link'


const Recipes = ({image,title,link}) => {
  return (
    <Link href={link || ''}>
    <div className='max-w-md mt-10'>
    <div className='w-full'>
       <img className='w-full' src={image} alt="" />
    </div>
    <h3 className='text-3xl mt-10 mb-10'>
     {title}

    </h3>
    <hr className='bg-slate-300 h-[2px]' />
</div>
</Link>
  )
}

export default Recipes
