import React from 'react'

function ArrivalCard({imgUrl,title}) {
    
  return (
    <div
    className=" max-w-80 w-full shadow-md  h-96  rounded-md overflow-hidden   m-auto group   transition-all duration-500  "
     >
    <div className="p-2 h-[70%]">
      <img
        src={imgUrl}
        alt="featured-img"
        className=" w-full h-full group-hover:scale-[1.1] "
        style={{ transition: '.4s all' }}
      />
    </div>

    <div className="pt-10  w-full h-[30%] group-hover:bg-primary-main ">
      <h1 className="text-2xl text-center group-hover:text-white  ">{title}</h1>
    </div>

 
  </div>
  )
}

export default ArrivalCard