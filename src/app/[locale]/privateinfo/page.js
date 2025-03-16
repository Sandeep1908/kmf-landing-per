import React from 'react'
import { Header } from '@/components/Header'
import secretinfoImg from "@/images/privateInfo.png"

function PrivateInfo() {
  return (


    <div className='w-full h-full'>
      
    <div className='w-full h-[98vh] flex justify-center items-center'>

          <div className='flex flex-col space-y-3 border p-2 '>
                <div className='flex flex-col'>
                    <p className='text-lg font-[400]'>Manufactured & Packed By:</p>
                    <h1 className='text-xl font-semibold'>GovindJee Dairy Milk Pvt Ltd</h1>
                    <p className='text-lg font-[400]'>NH-11, Village:Dhodhsar, Sikar Road,
                    Tehsil:Chomu, District:Jaipur, Rajasthan - 303712.
                    </p>
                    <h1 className='text-lg font-semibold'>Lic.No. 10012013000295</h1>
                  </div>

                  <div>
                  
                    <h1 className='text-lg font-semibold'>For: Mandya Co-operative Milk Union Limited</h1>
                    <p className='text-xl font-semibold'>Product Dairy, Gejjalagere – 571 428, Mandya, Karnataka
                    </p>
                    <h1 className='text-xl font-semibold'>Lic. No. 10012043000208</h1>

                    </div>
          </div>
    </div>
    
  </div>
  )
}

export default PrivateInfo
