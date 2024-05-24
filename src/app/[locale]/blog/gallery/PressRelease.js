'use client'
import React,{useEffect,useState} from 'react'
import useApi from '@/hooks/useApi';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Zoom } from 'react-reveal';

function PressRelease() {
    const [pressRel,setPressRel]=useState([])
    const axios=useApi()
   
    const locale=useLocale().locale
    useEffect(() => {
        (async () => {
          const { data } = await axios.get('/api/galleries');
     
          setPressRel(data.data[0]);
         
     
        })();
      }, []);
    
       
  return (
    <div className='w-full  h-full  grid place-items-center grid-cols-1 sm:grid-cols:-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 '>

        {
      
            pressRel?.attributes?.pressRelease?.data?.map((item,id)=>{
                
                return(
                    <div key={id} className='w-full max-w-72 h-72 m-2 shadow-lg'>
                      <Zoom>
                        <PhotoProvider >
       
       <PhotoView src={item?.attributes?.url} height="400px"  >
       <img src={item?.attributes?.url} className='w-full h-full object-fill'/>
       </PhotoView>
   
 
 </PhotoProvider>
 </Zoom>
            </div>
                )
            })
        }

          
    </div>
  )
}

export default PressRelease