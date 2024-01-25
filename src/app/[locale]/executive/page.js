'use client'
import React,{useState,useEffect} from 'react'
import directorImg from '@/images/directors/directorsbg.png';
import personImg from '@/images/directors/person.png';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';

const page = () => {
  const [md,setMd]=useState([])
  const [unionCheifs,setUnionCheif]=useState([])

  const [unitCheifs,setUnitCheif]=useState([])
  const [executives,setExecutives]=useState([])


  const axios =useApi()
  const locale=useParams().locale
  
  useEffect(()=>{
    (
      async()=>{
   

        const {data:chairman}= await axios.get('/api/md')
        const {data:excecutive}=await axios.get('/api/executives')
        const {data:unitchief}=await axios.get('/api/unitcheifs')
        const {data:unioncheif}=await axios.get('/api/unioncheifs')


        setMd(chairman?.data)
        setUnionCheif(unioncheif?.data)
        setUnitCheif(unitchief?.data)
        setExecutives(excecutive?.data)
        
    
      }
    )()
  },[])
  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
    <section
      className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
      <img src={directorImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
    </section>

    <section className="w-full  bg-[#F6F6F6] pt-10  ">
    <h1 className='text-center text-primary-main text-xl'>KMF Executives</h1>

    <div className='p-12 h-full  '>
        <div className='w-full min-h-56 shadow-md md:h-2/4 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl flex flex-col md:flex-row p-3'>
            <div className='md:w-1/2 flex justify-center items-center mt-6 lg:pt-3 lg:pb-3 md:mt-0 ' >
              <img className='w-2/4' src={md?.attributes?.image?.data?.attributes?.url} alt="" />
            </div>
            <div className=' md:w-1/2 flex flex-col justify-center items-center mt-3 md:p-3 md:items-start lg:mt-0 '>
              <div>
                <p className='text-2xl font-bold text-neutral-dark1'>{md?.attributes?.name}</p>
                <p className='text-base font-normal text-neutral-dark2'>{md?.attributes?.description}</p>
              </div>
              <div className='mt-3 lg:mt-12 p-3 md:p-0'>
                
              </div>
            </div>
        </div>
    
      </div>
    <div>


    <div className='w-full p-5 md:p-20'>
      <div className=''>
        <h1 className='text-3xl font-bold'>
            Executive
        </h1>
      </div>


      <table className="mt-10 table-fixed   border-spacing-y-2	 border-collapse border overflow-auto    w-full">
        <thead className=" bg-primary-main text-white ">
          <tr className="text-md    ">
            <th className="p-2 ">Name</th>
            <th className="p-2 text-start">Designation	</th>
            <th className="p-2 text-start">Place of working	</th>
          </tr>
        </thead>

        <tbody className="text-start  text-sm  bg-secondary-gradient">
        {executives?.map((item,id)=>{
 


 return(
    
    <tr className='border-t' >
    <td className="p-2 text-xs text-center ">{item?.attributes?.name}</td>
    <td className="p-2 text-xs">{item?.attributes?.designation}</td>
    <td className="p-2 text-xs overflow-auto">{item?.attributes?.working}</td>
  </tr>
   
 )



} )}

         
      
        </tbody>
      </table>

      </div>


      <div className='w-full p-5 md:p-20'>
      <div className=''>
        <h1 className='text-3xl font-bold'>
            Union Chief
        </h1>
      </div>


      <table className="mt-10 table-fixed   border-spacing-y-2	 border-collapse border     w-full overflow-auto">
        <thead className="bg-primary-main text-white  ">
          <tr className="text-md ">
            <th className="p-2 ">Name</th>
            <th className="p-2 text-start">Designation	</th>
            <th className="p-2 text-start">Place of working	</th>
          </tr>
        </thead>

        <tbody className="text-start  text-sm  bg-secondary-gradient">
        {unionCheifs?.map((item,id)=>{
 


 return(
    
  <tr className='border-t' >
  <td className="p-2 text-xs text-center ">{item?.attributes?.name}</td>
  <td className="p-2 text-xs">{item?.attributes?.designation}</td>
  <td className="p-2 text-xs overflow-auto">{item?.attributes?.working}</td>
</tr>
 )



} )}

         
      
        </tbody>
      </table>

      </div>


      <div className='w-full p-5 md:p-20 overflow-auto'>
      <div className=''>
        <h1 className='text-3xl font-bold'>
            Unit Chief
        </h1>
      </div>


      <table className="mt-10 table-fixed   border-spacing-y-2	 border-collapse border     w-full overflow-auto">
        <thead className=" w-full bg-primary-main text-white ">
          <tr className="text-md    ">
            <th className="p-2 ">Name</th>
            <th className="p-2 text-start">Designation	</th>
            <th className="p-2 text-start ">Place of working	</th>
          </tr>
        </thead>

        <tbody className="text-start  text-sm  bg-secondary-gradient">
        {unitCheifs?.map((item,id)=>{
 


 return(
    
  <tr className='border-t' >
  <td className="p-2 text-xs text-center ">{item?.attributes?.name}</td>
  <td className="p-2 text-xs">{item?.attributes?.designation}</td>
  <td className="p-2 text-xs overflow-auto">{item?.attributes?.working}</td>
</tr>
   
 )



} )}

         
      
        </tbody>
      </table>

      </div>
    </div>
     
    </section>

    <Footer/>
  </div>
  )
}

export default page
