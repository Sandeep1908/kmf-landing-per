'use client'
import React,{useState,useEffect} from 'react'
import directorImg from '@/images/directors/directorsbg.png';
import personImg from '@/images/directors/person.png';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Zoom';

const Executive = () => {
  const [md,setMd]=useState([])
  const [unionCheifs,setUnionCheif]=useState([])

  const [unitCheifs,setUnitCheif]=useState([])
  const [executives,setExecutives]=useState([])
  const [loading,setLoading]=useState(true)


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
        setLoading(false)
    
      }
    )()
  },[])
  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
    <section
      className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
       
      <img src={directorImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
    
    </section>

    <section className="w-full   pt-10  ">
    <h1 className='text-center text-primary-main text-2xl uppercase'>KMF Executives</h1>

    <div className='p-10 h-full flex justify-center items-center   '>
        <div className='w-full max-w-7xl mt-auto min-h-44  md:h-2/4 shadow-lg bg-primary-gradient rounded-tl-3xl rounded-br-3xl flex flex-col md:flex-row p-3'>
            <div className='md:w-1/2 flex justify-around  items-center mt-6 lg:pt-3 lg:pb-3 md:mt-0 rounded-full '  >
              <Zoom>
              <img className='w-[200px] h-[200px]   object-contain  sm:w-[350px] sm:h-[350px]' src={md?.attributes?.image?.data?.attributes?.url} alt="" />
              </Zoom>
            </div>
            <div className=' md:w-2/3 flex flex-col justify-center items-center mt-3 md:p-3 md:items-start lg:mt-0 '>
              <div>
                <p className='text-3xl md:text-5xl font-lato font-bold text-start text-white'>{md?.attributes?.name}</p>
                <p className=' text-2xl text-center  md:text-3xl font-lato md:text-start text-white '>{md?.attributes?.description}</p>
              </div>
           
            </div>
        </div>
    
      </div>
    <div>


    <div className='w-full max-w-7xl m-auto p-5  '>
      <div className=''>
        <h1 className='text-3xl font-bold'>
            Executive
        </h1>
      </div>


      <table className="mt- table-fixed    border-spacing-y-2	 border-collapse border overflow-auto    w-full">
        <thead className=" bg-primary-main text-white ">
          <tr className="text-md    ">
            <th className="p-2 text-start ">Name</th>
            <th className="p-2 text-start ">Department</th>
            <th className="p-2 text-start">Designation	</th>
            <th className="p-2 text-start ">Place of working</th>
 
          </tr>
        </thead>

        <tbody className="text-start  text-sm  bg-secondary-gradient">
        {executives?.map((item,id)=>{
 


 return(
    
    <tr className='border-t ' key={id}>
    <td className="p-2 text-sm  ">{item?.attributes?.name}</td>
    <td className="p-2 text-sm  "> </td>
    <td className="p-2 text-sm">{item?.attributes?.designation}</td>
    <td className="p-2 text-sm"> </td>
  </tr>
   
 )



} )}

         
      
        </tbody>
      </table>

      </div>


      <div className='w-full max-w-7xl m-auto  p-5 '>
      <div className=''>
        <h1 className='text-3xl font-bold'>
            Union Chief
        </h1>
      </div>


      <table className="  table-fixed   border-spacing-y-2	 border-collapse border     w-full overflow-auto">
        <thead className="bg-primary-main text-white  ">
          <tr className="text-md ">
            <th className="p-2 text-start ">Name</th>
            <th className="p-2 text-start">Designation	</th>
            <th className="p-2 text-start">Place of working	</th>
          </tr>
        </thead>

        <tbody className="text-start  text-sm  bg-secondary-gradient">
        {unionCheifs?.map((item,id)=>{
 


 return(
    
  <tr className='border-t' key={id} >
  <td className="p-2 text-sm  ">{item?.attributes?.name}</td>
  <td className="p-2 text-sm">{item?.attributes?.designation}</td>
  <td className="p-2 text-sm overflow-auto">{item?.attributes?.working}</td>
</tr>
 )



} )}

         
      
        </tbody>
      </table>

      </div>


      <div className='w-full p-5  max-w-7xl  m-auto overflow-auto'>
      <div className=''>
        <h1 className='text-3xl font-bold'>
            Unit Chief
        </h1>
      </div>


      <table className="  table-fixed   border-spacing-y-2	 border-collapse border     w-full overflow-auto">
        <thead className=" w-full bg-primary-main text-white ">
          <tr className="text-md    ">
            <th className="p-2 text-start">Name</th>
            <th className="p-2 text-start">Designation	</th>
            <th className="p-2 text-start ">Place of working	</th>
          </tr>
        </thead>

        <tbody className="text-start  text-sm  bg-secondary-gradient">
        {unitCheifs?.map((item,id)=>{
 


 return(
    
  <tr className='border-t' key={id} >
  <td className="p-2 text-sm  ">{item?.attributes?.name}</td>
  <td className="p-2 text-sm">{item?.attributes?.designation}</td>
  <td className="p-2 text-sm overflow-auto">{item?.attributes?.working}</td>
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

export default Executive