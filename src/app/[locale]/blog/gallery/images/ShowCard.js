import React from 'react'
import './style.css'

function ShowCard({imgUrl,title}) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50">
    <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500">
      <a href="#">
        <img
          src={imgUrl}
          alt="Product image"
          class="h-80 w-72 object-contain"
        />
      </a>
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">product</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
       
      </div>
    </div>
  </div>
  )
}

export default ShowCard;