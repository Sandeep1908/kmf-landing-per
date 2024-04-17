'use client'
import React,{useEffect,useState} from 'react'
import useApi from '@/hooks/useApi';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
 

function BlogCard() {
    const [blogs,setBlogs]=useState([])
    const axios=useApi()
    const monthsName=['January','February','March','April','May','June','July','August','September','October','November','December']
    const locale=useLocale().locale
    useEffect(() => {
        (async () => {
          const { data } = await axios.get('/api/blog-posts?sort[0]=date:desc');
     
          setBlogs(data.data);
          setLoading(false)
     
        })();
      }, []);
    
  return (
    <div className='w-full h-ful '>

        {
            blogs?.map((item,id)=>{
                
                return(
                    <div key={id} className='w-full flex space-x-5 p-10 justify-center items-center'>
                    <div className='w-40 h-20 flex flex-col justify-center items-center border'>
                            <p className='text-xl'>{new Date(item?.attributes?.date).getDate()}</p>
                            <div className='flex justify-center items-center text-sm text-slate-500'>
                                <p >{monthsName[new Date(item?.attributes?.date).getMonth()]}</p>-<p>{new Date(item?.attributes?.date).getFullYear()}</p>
                            </div>
                    </div>

                    <div className='w-full'>
                            <h1 className='text-xl text-primary-main'>{item?.attributes?.title}</h1>
                            {item?.attributes?.content?.map((items,idx)=>{
                                if(idx==0){
                                    return(
                                        <p key={idx}>{items?.children[0]?.text}</p>
                                    )
                                }
                               
                            })}
                            <Link href={`/${locale}/blog/${item?.id}`}>Read More....</Link>
                    </div>
            </div>
                )
            })
        }

          
    </div>
  )
}

export default BlogCard