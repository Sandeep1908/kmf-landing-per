'use client'
import React,{useEffect,useState} from 'react'
import founderOfMilkImg from '@/images/portfolio/founder-of-milk.jpeg';

import useApi from '@/hooks/useApi';
import useLocale from '@/hooks/useLocale';


const BrandAmbassador = () => {


    const [ambassador,setAmbassador]=useState([])
    const axios =useApi()
    const locale=useLocale().locale
      useEffect(()=>{
        (
          async()=>{
            const {data:ambassador}=await axios.get('/api/brand-ambassadors?sort[0]=createdAt:asc')
             setAmbassador(ambassador.data)
          }
        )()
      },[])

  return (
    <div className='w-full'>
    <div className='w-full md:mt-20'>
            <div className='flex flex-col items-center'>
            <h1 className='text-primary-main text-2xl md:text-6xl'>BRAND AMBASSADOR</h1>
            <div className='bg-primary-main w-20 h-1 mt-4'></div>

            </div>


          {ambassador?.map((items,id)=>{
   
            if(id%2 ==0){
                return(
                    <div key={id} className='w-full p-10'>
                    <div className=' w-full flex flex-col md:flex-row border-2 border-slate-300 p-6 md:p-10 m-auto'>
                        <div className=' w-[100%] md:w-[50%]'>
                            <img className=' h-72 md:h-96 w-96' src={items?.attributes?.image?.data?.[0]?.attributes?.url} alt="" />
                        </div>
                        <div className=' w-[100%] md:w-[50%] text-center'>
                            <h1 className='text-primary-main text-3xl'>{items?.attributes?.name}</h1>
                            
                                {
                                    items?.attributes?.description?.map((item,idx)=>{
                                        return(
                                        <p key={idx} className='mt-10  md:text-lg'>
                                            {item?.children?.[0]?.text}
                                        </p>
                                             
                                   )
                                    })
                                } 
    
                        </div>
                    </div>
                </div>
                )
            }
            else{
                return(
<div key={id} className='w-full p-10'>
                <div className=' w-full flex flex-col md:flex-row border-2 border-slate-300 p-10 m-auto'>
                <div className='order-last md:order-1 w-[100%] md:w-[50%] text-center'>
                        <h1 className='text-primary-main text-3xl'>{items?.attributes?.name}</h1>
                        {
                                    items?.attributes?.description?.map((item,idx)=>{
                                        return(
                                        <p key={idx} className='mt-10  md:text-lg'>
                                            {item?.children?.[0]?.text}
                                        </p>
                                             
                                   )
                                    })
                                } 
    

 
                    </div>
                    <div className='order-1 md:order-last w-[100%] md:w-[50%] flex justify-end'>
                        <img className='h-72 md:h-96 w-96' src={items?.attributes?.image?.data?.[0]?.attributes?.url} alt="" />
                    </div>
                   
                </div>
            </div>
                )
                
            }
            
          })}
            


 

      

          
            
          

        </div>  
    </div>
  )
}

export default BrandAmbassador
