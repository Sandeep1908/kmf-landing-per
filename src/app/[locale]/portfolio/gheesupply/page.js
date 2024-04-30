"use client"
import React, { useEffect, useState } from 'react'
import titleBG from '@/images/portfolio/title-bg.png';
import Footer from '@/components/Footer';
import flag from '@/images/portfolio/flag.jpg';
import dhare1 from '@/images/portfolio/dhare1.jpg'
import dhare2 from '@/images/portfolio/dhare2.jpg'
import dhare3 from '@/images/portfolio/dhare3.jpg'
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
import useApi from '@/hooks/useApi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


const GheeSupply = () => {
  const locale = useLocale().locale;
  const axios = useApi();


  const [ghee, setGhee] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/gheesupplies');
    
      setGhee(data.data)
      console.log(data.data);
    
    })();
  }, []);

  return (
    <div className='w-full h-full'>
      <section className='w-full h-full'>
      <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
            <Link className="  text-sm font-bold  " href={`/${locale}/portfolio/#ACHIEVEMENTS` || ''}>
            KMF ACHIEVEMENTS
            </Link>

           
            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main" href={''}>
            GHEE SUPPLY
            </Link>
          </div>
      <div className=' relative w-full h-full flex flex-col items-center justify-center mt-20'>

            <h1 className='text-primary-main text-2xl md:text-4xl  ' > GHEE SUPPLY </h1>
            <div className='bg-primary-main w-[150px] h-[4px] mt-2'></div>

            <img className='absolute md:top-[-50px] top-[-35px] left-[38%] md:left-[49%] w-32 md:w-40 ' src={titleBG.src} alt="" />
        </div>
      </section>
       <section className={`w-full h-auto md:h-[90vh] relative company-bg mt-20`}>

               <div className='absolute w-full h-full '>
                     <div className='w-full h-full  z-[-1] flex justify-between items-center'>
                           <div className='bg-red-600 w-28 h-7 '>

                           </div>
                           <div className='bg-red-600 w-28 h-7 '>

                           </div>
                     </div>
                </div>
                <video autoPlay muted loop controls className='relative w-full h-full z-[10]' src="/video/gheesupply.mov"></video>

      </section>
   
  <section className=" relative w-full flex flex-col space-y-5 mb-10 max-w-7xl m-auto h-auto pt-10  ">
  <div className='w-full h-auto'>
   
    
</div>

    {ghee?.map((item,idx)=>{
      return(
        <div key={idx} className="w-full h-full flex space-y-3 flex-col p-10">
        <h1 className=" text-2xl md:text-4xl text-primary-main text-center ">{item?.attributes?.title}</h1>
       
        <div className="mt-20">
                        {item?.attributes?.content && (
                          <BlocksRenderer
                            content={item?.attributes?.content}
                            blocks={{
                              paragraph: ({ children }) => <p className="text-md">{children}</p>,
                              heading: ({ children, level }) => {
                                switch (level) {
                                  case 1:
                                    return (
                                      <h1 className="text-2xl text-primary-main mt-5">{children}</h1>
                                    );
                                  case 2:
                                    return <h2 className="text-lg">{children}</h2>;
                                  case 3:
                                    return <h3>{children}</h3>;
                                  case 4:
                                    return <h4>{children}</h4>;
                                  case 5:
                                    return <h5>{children}</h5>;
                                  case 6:
                                    return <h6>{children}</h6>;
                                  default:
                                    return <h1>{children}</h1>;
                                }
                              },
                              list: ({ children }) => {
                                return children
                              },
                              code: ({ children }) => (
                                <h1 className="text-2xl bg-primary-main text-white p-2 shadow-lg">
                                  {children}
                                </h1>
                              )
                            }}
                          />
                        )}
                      </div>
        
      </div>
      );
    })}



    



  </section>


<Footer/>
</div>
  
  )
}

export default GheeSupply
