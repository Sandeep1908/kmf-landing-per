import Link from 'next/link'
import React from 'react'

function ArrivalCard({imgUrl,title}) {
    
  return (
    <Link href={''}>
    <div
    className="  w-72     h-96  rounded-md overflow-hidden   m-auto group   transition-all duration-500  "
     >
    <div className="p-2 w-full h-[70%]">
      <img
        src={imgUrl}
        alt="featured-img"
        className=" w-full h-full rounded-full transition-all duration-100 group-hover:scale-[1.01] hover:rounded-none "
        style={{ transition: '.4s all' }}
      />
    </div>

    <div className="p-2  w-full   rounded-full bg-zinc-300 group-hover:bg-orange-500 ">
      <h1 className="text-sm text-center group-hover:text-white  ">{title}</h1>
    </div>

 
  </div>
  </Link>
  )
}

export default ArrivalCard