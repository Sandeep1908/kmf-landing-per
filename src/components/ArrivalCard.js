import React from 'react'

function ArrivalCard({imgUrl,title}) {
    
  return (
    <div
    className=" max-w-96  shadow-md  h-96  rounded-md overflow-hidden   m-auto   "
     >
    <div className="p-2 h-[70%]">
      <img
        src={imgUrl}
        alt="featured-img"
        className=" w-full    h-full hover:scale-[1.1] "
        style={{ transition: '.4s all' }}
      />
    </div>

    <div className="mt-10">
      <h1 className="text-2xl text-center ">{title}</h1>
    </div>

 
  </div>
  )
}

export default ArrivalCard