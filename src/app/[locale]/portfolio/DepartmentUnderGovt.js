import React from 'react'
import './style-2.css'
import Link from 'next/link'
import comingSoonImg from '@/images/notfound/comingsoon.png'
import { IoHomeOutline } from 'react-icons/io5';

const DepartmentUnderGovt = () => {
  return (
    <div>

    <div className='w-full md:mt-20'>
            <div className='flex flex-col items-center'>
            <h1 className='text-primary-main text-2xl md:text-6xl'>DEPARTMENT UNDER GOVT.</h1>
            <div className='bg-primary-main w-20 h-1 mt-4'></div>

            </div>
            

            <div className='w-full text-center mt-20 mb-10'>
            <div class="flex-container">
    <div class="text-center">
      <h1 className='text-primary-main'>
        <span class="fade-in" id="digit1">C</span>
        <span class="fade-in" id="digit2">O</span>
        <span class="fade-in" id="digit3">M</span>
        <span class="fade-in" id="digit3">I</span>
        <span class="fade-in" id="digit3">N</span>
        <span class="fade-in" id="digit3">G</span>
      </h1>
      <h3 class="fadeIn text-primary-main">COMING SOON</h3>
      
    </div>
    <img src={comingSoonImg.src}/>
  </div>
            </div>
            
          

        </div>  
    </div>
  )
}

export default DepartmentUnderGovt
