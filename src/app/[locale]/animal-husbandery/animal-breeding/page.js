'use client';
import React,{useEffect,useState} from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
 
import Link from 'next/link';
 import useApi from '@/hooks/useApi';
 import { BlocksRenderer } from '@strapi/blocks-react-renderer';

function AnimalBreeding() {
  const axios =useApi()
  const { isScroll } = useMyContext();
  const locale = useLocale().locale;
  const [animalBreeding, setAnimalBreeding] = useState([]);
  const [readMore, setReadMore] = useState(false);


  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/animal-breedings');
       
      setAnimalBreeding(data.data);
   
    })();
  }, []);
    
  
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };


return(
 
    <div className={`w-full h-full absolute   z-[-1] ${isScroll ? 'top-48' : ''}  `}>
      <section className={`w-full h-[700px] pt-28 relative  grid place-items-center `}>
        {/* <img src={banner?banner[0]:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
         */}
        <video
          src="/video/precrument.mp4"
          muted
          autoPlay
          loop
          controls
          playsInline
          className={`w-full  h-full    object-cover absolute top-0 z-[-1] ${
            isScroll ? 'h-[400px]' : ''
          } `}
        />
      </section>
      <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
                      <Link className="  text-sm font-bold  " href={`/` || ''}>
              {locale==='kn'?'Home':'Home'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold " href={`${locale==='kn'?'/kn/animal-husbandery/procurement':'/en/animal-husbandery/procurement'}`}>
            {locale==='kn'?'ಹಾಲು ಶೇಖರಣೆ':'Procurement'}
              
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold  " href={`${locale==='kn'?'/kn/animal-husbandery/animal-health':'/en/animal-husbandery/animal-health'}`}>
            {locale==='kn'?'ಹಾಲು ಶೇಖರಣೆ':'Animal Health'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main  " href={`${locale==='kn'?'/kn/animal-husbandery/animal-breeding':'/en/animal-husbandery/animal-breeding'}`}>
            {locale==='kn'?'ಪಶು ಸಂತಾನಾಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮ':'Animal Breeding Program'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold  " href={`${locale==='kn'?'/kn/animal-husbandery/feed-and-fodder':'/en/animal-husbandery/feed-and-fodder'}`}>
            {locale==='kn'?'ಮೇವು ಚಟುವಟಿಕೆಗಳು':'Fodder Activities'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold   "  href={`${locale==='kn'?'/kn/animal-husbandery/scheme':'/en/animal-husbandery/scheme'}`}>
            {locale==='kn'?'ಯೋಜನೆಗಳು/ ಅನುದಾನಗಳು':'Schemes/Grants'}
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold  " href={`${locale==='kn'?'/kn/women-empowerment':'/en/women-empowerment'}`}>
            {locale==='kn'?'ಸ್ಟೆಪ್ ಯೋಜನೆ':'Step'}
            </Link>
            
      </div>

      <section className="w-full h-auto p-10 mt-10   relative flex justify-center items-center flex-col   ">
        <div className="w-full flex flex-col justify-center items-center space-y-5">
       

      
          <div className="mb-20     relative w-full  flex justify-center items-center ">
             
              <h1 className=" text-primary-main relative z-10 font-heading text-2xl font-extrabold uppercase">
             {locale==='kn'?'':'Animal Breeding'}
              </h1>
            </div>
          
        </div>
      </section>

      <section className=" relative w-full   h-auto   ">
        <div className="w-full  h-full flex flex-col p-3 space-y-3 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full h-full flex flex-col space-y-2 justify-center items-start    p-1   ">
            <div className="w-full h-full flex justify-center items-center flex-wrap">
              {animalBreeding?.map((_, id) => {
                return (
                  <div
                    key={id}
                    className="max-w-3xl w-full m-10 rounded-3xl  min-h-[400px] shadow-2xl bg-slate-50 p-16">
                    <div className="m-auto">


                    <div className=' w-full relative flex justify-center items-center'>
            <img src='/images/heading/heading-color/group.png' className='absolute z-[1] w-[450px] top-[-56px]   object-contain'/>


                        <h1 className="w-full relative max-w-[300px] m-auto text-center  text-primary-main text-xl   z-[100] ">
                          {' '}
                          {_?.attributes?.title}
                        </h1>
                        </div>



                      
                      <div className="mt-20">
                      {_?.attributes?.content && (
                          <BlocksRenderer
                            content={readMore ? _?.attributes?.content: _?.attributes?.content.slice(0,3) }
                            blocks={{
                              paragraph: ({ children }) => <p className="text-md">{children}</p>,
                              heading: ({ children, level }) => {
                                switch (level) {
                                  case 1:
                                    return (
                                      <h1 className="text-2xl text-primary-main">{children}</h1>
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

{
  _?.attributes?.content.length>3 &&

<button onClick={toggleReadMore} className='w-full flex justify-end text-primary-main'>
                  {readMore ? 'Read less' : 'Read more'}
                </button>
            }
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    

      <Footer />
    </div>
  );
}

export default AnimalBreeding;
