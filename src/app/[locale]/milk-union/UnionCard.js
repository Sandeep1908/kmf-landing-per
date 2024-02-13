

import React from 'react'
import locationIco from '@/images/milk-union/icons/location_on.svg'
import mailIco from '@/images/milk-union/icons/mail.svg'
import callIco from '@/images/milk-union/icons/call.svg'
import printIco from '@/images/milk-union/icons/print.svg'
function UnionCard({name,image}) {
  console.log(image)
  return (
<div className='group max-w-80  h-96 z-[10] bg-slate-400 shadow-md rounded-md '>
  <div class=" relative w-full h-full flex items-end">
    <div className='w-full h-full absolute top-0 left-0  '>
      <img className='w-full h-full' src={image} alt="" />
    </div>

       <div className='overflow-hidden h-[50%] rounded-md'>
       <div class="z-[10] bg-white p-4 flex   h-full justify-center   translate-y-[115px] group-hover:translate-y-0 duration-700  ">
      

      <h1 class="text-2xl font-semibold text-center"><a href="#">{name}</a></h1>
      {/* <p class="text-sm font-normal text-center mt-5">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p> */}
  

     </div>
       </div>
       
  </div>
  </div>
  )
}

export default UnionCard