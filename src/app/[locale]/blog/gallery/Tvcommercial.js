'use client'
import React,{useEffect,useState} from 'react'
import useApi from '@/hooks/useApi';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import VideoCard from './VideoCard';

function Tvcommercial() {
    
    const axios=useApi()
    const [tvCommercial,setTvCommercial]=useState([])
   
    const locale=useLocale().locale
    useEffect(() => {
        (async () => {
          const { data } = await axios.get('/api/tv-commercials');
          setTvCommercial(data.data)
    
        })();
      }, []);
    
       
  return (
    <div className='w-full  h-full  grid place-items-center grid-cols-1 sm:grid-cols:-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 '>

        {
            tvCommercial?.map((item,id)=>{
                return(
                    <VideoCard
                    key={id}
                        title={item?.attributes?.title}
                        description={item?.attributes?.description}
                        video={item?.attributes?.video?.data?.attributes?.url}
                    />
                )
            })
        }

          
    </div>
  )
}

export default Tvcommercial