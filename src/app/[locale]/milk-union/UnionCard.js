

import React from 'react'
import locationIco from '@/images/milk-union/icons/location_on.svg'
import mailIco from '@/images/milk-union/icons/mail.svg'
import callIco from '@/images/milk-union/icons/call.svg'
import printIco from '@/images/milk-union/icons/print.svg'
function UnionCard({name,image}) {
  console.log(image)
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50">
    <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500">
      <a href="#">
        <img
          src={image}
          alt="Product image"
          className="h-80 w-72 object-cover"
        />
      </a>
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Union</span>
        <p className="text-lg font-bold text-black truncate block uppercase font-heading">{name}</p>
       
      </div>
    </div>
  </div>
  )
}

export default UnionCard