'use client'
import React,{useEffect,useState} from 'react'
import Recipes from './Recipes'
import Link from 'next/link'
import Footer from '@/components/Footer'
import useApi from '@/hooks/useApi'

import useLocale from '@/hooks/useLocale'

function Recipe() {

  const [recipe,setRecipe]=useState([])
const axios =useApi()
const locale=useLocale().locale
  useEffect(()=>{
    (
      async()=>{
        const {data:recipe}=await axios.get('/api/recipes')
        setRecipe(recipe.data)
      }
    )()
  },[])
  return (
    <div className='w-full h-full mt-10  md:mt-20 '>
          <div className='w-full h-full text-center mb-20'>
          <div className='flex h-full flex-col justify-center items-center'>
            <h1 className='text-primary-main text-5xl'>
                            NANDINI RECIPES
                        </h1>
                        <div className='w-40 h-1 bg-primary-main mt-8'></div>
            </div>

            <div className='w-full h-full mt-10 md:mt-20 p-5 mb-20 flex justify-center items-center'>
            <div className='w-full h-full m-auto grid grid-cols-3 gap-36 '>

             {/* <Link > */}
        
        {
          recipe?.map((item,id)=>{
           
            return(
              <Recipes key={id} title={item?.attributes?.title} image={item?.attributes?.image?.data?.[0]?.attributes?.url}
              link={`/${locale}/nandini-recipes/${item?.id}`}
              />
            )
          })
        }
 
                </div>
            </div>
           
          </div>
          <Footer/>
    </div>
  )
}

export default Recipe
