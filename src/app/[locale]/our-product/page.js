'use client'
import React, { useEffect, useState } from 'react'
import useApi from '@/hooks/useApi'
import HeroImg from '@/images/milk-union/milk-union-home.png';
import Footer from '@/components/Footer';
import ProductCard from './[slug]/ProductCard';
import useLocale from '@/hooks/useLocale';


function Products() {
  const [categories,setCategories]=useState([])
  const [subcategory,setSubcategory]=useState([])
  const [banner,setBanner]=useState()
  const axios =useApi()
  const locale=useLocale().locale

  useEffect(()=>{
    (
      async()=>{
        const { data } = await axios.get('/api/categories?sort[0]=order:asc');
        const { data:subcategory } = await axios.get('/api/subcategories');
     
        setBanner(data?.data?.map(item=>item?.attributes?.banner?.data?.attributes?.url))

        setCategories(data.data)
        setSubcategory(subcategory.data)
      }
    )()
  },[])

  const handleProduct=async(id)=>{
    
    const { data } = await axios.get(`/api/subcategories`);
    
    if(id==='all'){
      setSubcategory(data.data)
    }
    else{
      const subcategory=data?.data?.filter((item)=>item?.attributes?.category?.data?.id === parseInt(id) ) 
      setSubcategory(subcategory)
    }
  
    

    

  }

  return (
    <div className='w-full h-full absolute top-36 z-[-1]'>
         <section className={`w-full h-96 pt-28 relative  grid place-items-center company-bg`}>
        <img src={banner?banner[0]:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
     
      </section>

            <section className='w-full max-w-[1400px] m-auto mb-10'>
                <div className='w-full h-40 flex justify-center items-center relative '>
                    <h1 className='text-5xl font-bold flex justify-center items-center relative font-heading text-primary-main before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-red-700 '>Our Products</h1>
                </div>

                <div className='w-full  flex flex-wrap justify-between items-center space-x-6 '>
                  <p className='font-subheading transition-all text-sm cursor-pointer  hover:scale-[1.1]' onClick={()=>handleProduct('all')}>All</p>
                      {categories?.map((item,id)=>{
                        return(
                          <p key={id} onClick={()=>handleProduct(item?.id)} className='font-subheading transition-all duration-300 text-md cursor-pointer  hover:scale-[1.1] '>{item?.attributes?.title}</p>
                        )
                      })}
                </div>


                <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-10'>
       
                      {subcategory?.map((item,id)=>{
                   
                        return(
                          <ProductCard
                           key={id}
                            title={item?.attributes?.title}
                             image={item?.attributes?.image?.data[0]?.attributes?.url}
                             link={`/${locale}/our-product/${item?.id}`}
                             />
                           
                        )
                      })}
                </div>

            </section>
<Footer/>
    </div>
  )
}

export default Products