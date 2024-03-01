'use client'

import useApi from '@/hooks/useApi';
import React, { useState ,useEffect} from 'react'
import { useParams } from 'next/navigation';
import ShowCard from '../ShowCard';
import useLocale from '@/hooks/useLocale';
import Footer from '@/components/Footer';

function Images() {
    const axios=useApi()
    const [product ,setProducts]=useState([])
    const param =useParams()
    const [loading,setLoading]=useState(true)
    const [title,setTitle]=useState('')
    const locale=useLocale().locale

    useEffect(() => {
        (async () => {
     
          const { data } = await axios.get(`/api/galleries`);
          const { data:category } = await axios.get('/api/imagecategories');
            
            
     
         const categoryName=category?.data?.filter(item=>item?.id===parseInt(param?.slug))
           
          const product=data?.data?.filter((item)=>item?.attributes?.imagecategory?.data?.id === parseInt(param?.slug) )

         
          console.log(categoryName[0].attributes)
          setTitle(categoryName[0])
           
       
         
          setProducts(product)
          setLoading(false)
    
          
        })();
      }, []);

  return (
    <div className="w-full h-full absolute top-36 z-[-1]  ">

    <section className="w-full m-auto pt-10 relative h-full milk-bg  ">
    <div className="w-full space-y-5 p-4 ">
      <h1 className="text-center text-2xl text-primary-main uppercase">{title?.attributes?.name}</h1>
    </div>


    <div className="w-full max-w-7xl m-auto   grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   pt-10 p-4  gap-5  ">
            {product?.map((item,idx)=>{
                
                if(item?.attributes?.images?.data){
                  return(
                    <ShowCard 
                    key={idx}
                    imgUrl={item?.attributes?.images?.data?.attributes?.url}
                    title={item?.attributes?.title}
                    />
                )
                }
              
            })}
  </div>




   
  </section>
 
</div>



  )
}

export default Images