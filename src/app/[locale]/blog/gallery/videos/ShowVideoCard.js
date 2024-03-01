import React from 'react'
 

function ShowVideoCard({vidUrl,title}) {
  return (
    <div
  className="relative group cursor-pointer overflow-hidden duration-500 w-72 h-80   rounded-md shadow-md text-gray-50 p-2"
>
  <div className="w-full h-full">
    <div
      className=" w-full group-hover:scale-110 h-full    duration-500"
    >
        <video src={vidUrl}  muted controls className='w-full h-full object-cover'/>
    </div>

  </div>
</div>
  )
}

export default ShowVideoCard