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
    const [itemShow,setItemShow]=useState(15)
    useEffect(() => {
        (async () => {
          const { data } = await axios.get('/api/blog-posts?sort[0]=date:desc');
     
          setBlogs(data.data);
          
     
        })();
      }, []);
    
  return (
    <div className='w-full h-full mb-20  '>

        {
            blogs?.map((item,id)=>{
                if(id<itemShow){
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
                                            <p key={idx} className='text-slate-500'>{items?.children[0]?.text}</p>
                                        )
                                    }
                                   
                                })}
                                <Link href={`/${locale}/blog/${item?.id}`} className='hover:text-green-500 uppercase'>Read More....</Link>
                        </div>
                </div>
                    )
                }
                
                
            })
        }

    <div className='w-full flex justify-center items-center'>
        <button onClick={()=>setItemShow(prev=>prev+15)} className=' w-full max-w-32 h-10 bg-green-500 text-white  shadow-md rounded-md'>Load More..</button>
    </div>
          
    </div>
  )
}

export default BlogCard