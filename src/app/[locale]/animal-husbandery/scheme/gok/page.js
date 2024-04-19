'use client';
import React,{useEffect,useState} from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useApi from '@/hooks/useApi';
import Link from 'next/link';
function GOK() {
  const { isScroll } = useMyContext();
  const locale = useLocale().locale;
  const [scheme,setScheme]=useState([])
  const axios=useApi()
  useEffect(()=>{
    (
      async()=>{
        const {data}=await axios.get('/api/schemes')
        setScheme(data.data)
      }
    )()
  },[])
  return (
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
          className={`w-full  h-full    object-cover absolute top-0  ${
            isScroll ? 'h-[400px]' : ''
          } `}
        />
      </section>
      <div className="flex w-full    justify-center pt-5 space-x-2 items-center relative before:absolute before:-bottom-3 before:w-20   before:h-0.5 before:bg-primary-main">
            <Link className="  text-sm font-bold  " href={`/${locale}/animal-husbandery/scheme` || ''}>
              Schemes
            </Link>

            <p className="text-primary-main">&gt;</p>
            <Link className="  text-sm font-bold text-primary-main  " href={`/${locale}/our-product/`}>
              GOK
            </Link>
            
          </div>
      <h1 className="text-2xl w-full mt-5 p-3 uppercase bg-primary-main text-white  shadow-lg relative flex justify-center items-center before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-primary-main  ">
        Government Of Karnataka
      </h1>
      <section className=" relative w-full flex flex-col space-y-5 mb-10 max-w-7xl m-auto h-auto pt-10  ">
         

      {
  scheme?.[0]?.attributes?.GOK &&
  <BlocksRenderer
  content={scheme?.[0]?.attributes?.GOK}
  blocks={{
    paragraph:({children})=><p className="text-md">{children}</p>,
    heading: ({ children, level }) => {
      switch (level) {
        case 1:
          return <h1 className="text-2xl text-primary-main">{children}</h1>;
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
    list:({children})=>{
      console.log("list",children)
      return(
<li>{children}</li>
      )
    
  },
  code: ({ children }) => {
    const columns =
      children?.[0]?.props?.text.split(',')[0].trim() === 'columns'
        ? children?.[0]?.props?.text.split(',').slice(1)
        : [];

    return (
      <table className="table-fixed  border-spacing-y-2	 border-collapse border-black border      w-full ">
        <thead className=" text-left ">
          {columns?.map((item, id) => {
            return (
              <th className="p-2   border-r border-black " key={id}>
                {item}
              </th>
            );
          })}
        </thead>
        <tbody className="text-left  text-md ">
          <tr className="w-full ">
            {children?.[0]?.props?.text.split(',')[0].trim() !== 'columns' &&
              children?.[0]?.props?.text?.split(',')?.map((item, id) => {
                return (
                  <td className=" p-2 text-md font-content border-r border-black " key={id}>
                    {' '}
                    {item}
                  </td>
                );
              })}
          </tr>
        </tbody>
      </table>
    );
  },
    quote:({children})=><h1 className='text-2xl bg-primary-main text-white p-2 shadow-lg'>{children}</h1>
  }}
    
  />
}

      </section>

      <Footer />
    </div>
  );
}

export default GOK;








