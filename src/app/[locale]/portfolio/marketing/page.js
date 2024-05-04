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


const Marketing = () => {
  const locale = useLocale().locale;
  const axios = useApi();


  const [market, setMarket] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/gheesupplies');
    
      setMarket(data.data)
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
            MARKETING
            </Link>
          </div>
      <div className=' relative w-full h-full flex flex-col items-center justify-center mt-20'>

            <h1 className='text-primary-main text-2xl md:text-4xl  ' > MARKETING </h1>
            <div className='bg-primary-main w-[150px] h-[4px] mt-2'></div>

            <img className='absolute md:top-[-55px] top-[-35px] left-[38%] md:left-[47%] w-32 md:w-40 ' src={titleBG.src} alt="" />
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


      <div className='w-full h-auto'>
        
        <div className=' hidden lg:block relative w-full max-h-[500px] h-full z-[-1]'>
            <img className='w-full h-full' src={flag.src} alt="" />
            <div className='absolute top-[60px] lg:top-0 xl:top-[60px] w-full h-full'>
                <div className='w-full h-full flex justify-center items-center'>
                <div className='max-w-xl lg:max-w-lg xl:max-w-xl w-full m-auto'>
                   <h1 className='text-primary-main text-2xl md:text-4xl text-center ' >  
                   {locale === 'en' ? "Marketing" : ""}
                   </h1>
             <div className='mt-6'>
              <p className=' text-sm md:text-lg lg:text-sm xl:text-2xl text-center '>
              {locale === 'en' ? "Excellent U.H.T. Milk is being supplied to Eastern Command and Northern Command an average of 28,000 liters per day for the Indian Defense Department. Butter and ghee in tins and milk powder are also supplied." : ""}
              
              </p>
             </div>
                   </div>
                </div>
            </div>
        </div>  

        <div className='w-full h-auto flex flex-wrap justify-center'>
           
             <div className='block lg:hidden max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                   <div className='m-auto'>
                   <h1 className='text-primary-main text-2xl md:text-3xl ' >   {locale === 'en' ? "Ksheerdhare Project" : "ಕ್ಷೀರ ಧಾರೆ,"} </h1>
             <div className=' mt-10'>
              <p className=''>
              {locale === 'en' ? "An ambitious scheme of the Karnataka State Government, the “Ksheerdhare” scheme has been implemented for the following objectives:" : "ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸರ್ಕಾರದ ದ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯ ಯೋಜನೆ. 'ಕ್ಷೀರಧಾರೆ' ಯೋಜನೆಯನ್ನು ಈ ಕೆಳಗಿನ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ."}                
              </p>
             </div>
                   </div>
             </div>



          

        {market.map((item,idx)=>{
          console.log("items",item)
          return(
          
            <div key={idx} className='max-w-7xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
            <div className='m-auto'>
           
     
      <div className="p-5">
                        {item?.attributes?.content && (
                          <BlocksRenderer
                            content={item?.attributes?.content}
                            blocks={{
                              paragraph: ({ children }) => <p className="text-md text-lg">{children}</p>,
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
</div>
          )
        })}
 
         

          
            
        </div>
           
      </div>


   



<Footer/>
</div>
  
  )
}

export default Marketing
