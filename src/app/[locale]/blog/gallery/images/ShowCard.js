import React from 'react'
import './style.css'

function ShowCard({imgUrl,title}) {
  return (
    <div
  className="relative group cursor-pointer overflow-hidden duration-500 w-72 h-80  bg-white rounded-md shadow-md text-gray-50 p-5"
>
  <div className="">
    <div
      className="group-hover:scale-110 w-full h-60  duration-500"
    >
        <img src={imgUrl} className='w-full h-full object-contain'/>
    </div>
    <div
      className="absolute w-56 left-0 p-5 -bottom-1 duration-500 group-hover:-translate-y-12"
    >
      <div
        className="absolute -z-10 left-0 w-72 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
      ></div>
      <span className="text-xl uppercase text-primary-main font-bold group-hover:text-white">{title}</span>
       
    </div>
  </div>
</div>
  )
}

export default ShowCard