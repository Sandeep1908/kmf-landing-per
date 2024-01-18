

import React from 'react'
import locationIco from '@/images/milk-union/icons/location_on.svg'
import mailIco from '@/images/milk-union/icons/mail.svg'
import callIco from '@/images/milk-union/icons/call.svg'
import printIco from '@/images/milk-union/icons/print.svg'
function UnionCard({name,address,phone,fax,email,image}) {
  return (
    <div className=' max-w-96  h-96  flex flex-col m-auto justify-center items-center    bg-neutral-light4 rounded-tl-3xl  rounded-br-3xl md:max-w-[600px] md:h-96 md:flex-row' style={{ boxShadow: '0px 11px 49px 0px rgba(0, 0, 0, 0.15)' }}>
    <div className='w-full h-5/6 overflow-hidden md:h-full'>
        <img src={image} className='w-full h-full   rounded-tl-3xl '/>
    </div>


    <div className='flex w-full flex-col justify-evenly items-start m-3 p-2 md:h-full'>

            <div className='w-full relative flex flex-col items-center  md:items-start before:absolute before:bottom-[-12px] before:hidden before:bg-neutral-light1 before:w-full before:h-[2px] before:mt-2 before:md:block'>
              <p className='text-lg font-semibold text-primary-main'>Name</p>
              <p className='text-lg font-semibold '>{name}</p>
            </div>
             
            <div className='hidden md:flex flex-col w-full relative  items-start before:absolute before:bottom-[-12px] before:bg-neutral-light1 before:w-full before:h-[2px] before:mt-2'>
              <p className='text-lg font-semibold text-primary-main'  >Address:</p>
              <div className='flex justify-center items-start space-x-4'>
                <img src={locationIco.src}/>
                <p className='text-sm'>{address}</p>
              </div>
            </div>


            <div className=' hidden md:flex   flex-col w-full relative  items-start before:absolute before:bottom-[-12px] before:bg-neutral-light1 before:w-full before:h-[2px] before:mt-2'>
              <p className='text-lg font-semibold text-primary-main'>Phone:</p>
              <div className='flex justify-center items-center space-x-4'>
              <img src={callIco.src}/>
                <p className='text-sm'>{phone}</p>
              </div>
            </div>




            <div className=' hidden md:flex   flex-col w-full relative  items-start before:absolute before:bottom-[-12px] before:bg-neutral-light1 before:w-full before:h-[2px] before:mt-2'>
              <p className='text-lg font-semibold text-primary-main'>Fax:</p>
              <div className='flex justify-center items-center space-x-4'>
              <img src={printIco.src}/>
                <p className='text-sm'>{fax}</p>
              </div>
            </div>



            <div className=' hidden md:flex   flex-col w-full relative  items-start before:absolute before:bottom-[-12px] before:bg-neutral-light1 before:w-full before:h-[2px] before:mt-2'>
              <p className='text-lg font-semibold text-primary-main'>Email:</p>
              <div className='flex justify-center items-center  space-x-4'>
              <img src={mailIco.src}/>
                <p className='text-sm'>{email}</p>
              </div>
            </div>

    </div>
  </div>
  )
}

export default UnionCard