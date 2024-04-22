'use client'
import React,{useState,useEffect} from 'react'
import directorImg from '@/images/directors/directorsbg.png';

import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import Zoom from 'react-reveal/Zoom';
 

const Executive = () => {
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
        const {data:executive}=await axios.get('/api/executives?sort[0]=order:asc')
        const {data:unitchief}=await axios.get('/api/unitcheifs?sort[0]=createdAt:asc')
        const {data:unioncheif}=await axios.get('/api/unioncheifs?sort[0]=createdAt:asc')
        
        let orderExecutive = new Array(executive?.data?.length).fill(null);
        let orderUnion = new Array(unioncheif?.data?.length).fill(null);

        let orderUnits = new Array(unitchief?.data?.length).fill(null);

        


        let indexE = 0;
        let indexUT=0;
        let indexUN=0;

        // Executives
        executive?.data.forEach(item => {
          if (item?.attributes?.order != null) {
            orderExecutive[item?.attributes?.order - 1] = item;
          }
        });

        executive?.data.forEach(item => {
          if (item.attributes.order === null) {
            while (orderExecutive[indexE] !== null) {
              indexE++;
            }
            if (indexE < orderExecutive.length) {
              orderExecutive[indexE] = item;
            }
          }
        });


    
 

        // unitCheifs

        unitchief?.data.forEach(item => {
          if (item?.attributes?.order != null) {
            orderUnits[item?.attributes?.order - 1] = item;
          }
        });

        unitchief?.data.forEach(item => {
          if (item.attributes.order === null) {
            while (orderUnits[indexUT] !== null) {
              indexUT++;
            }
            if (indexUT < orderExecutive.length) {
              orderUnits[indexUT] = item;
            }
          }
        });
        
        

   
       
        setMd(chairman?.data)
        setUnionCheif(unioncheif?.data)
        setUnitCheif(unitchief?.data)
        setExecutives(orderExecutive)
     
    
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
    <h1 className='text-5xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white'>KMF Executives</h1>

    <div className='p-10 h-full flex justify-center items-center   '>
    <div className='w-full max-w-7xl mt-auto min-h-44  md:h-2/4   justify-center items-center  rounded-tl-3xl rounded-br-3xl flex flex-col   p-3'>
            <div className='md:w-1/2 flex   justify-center  items-center mt-6 lg:pt-3 lg:pb-3 transition-all duration-300 md:mt-0 rounded-full hover:scale-[1.1]  '  >
              <Zoom>
              <img className='w-[200px] h-[200px]   object-contain  sm:w-[350px] sm:h-[290px] transition-all duration-300   ' src={md?.attributes?.image?.data?.attributes?.url} alt="" />
              </Zoom>
            </div>
            <div className=' md:w-2/3 flex flex-col justify-center items-center mt-3 md:p-3 md:items-center lg:mt-0 '>
              <div>
                <p className='text-3xl md:text-4xl font-lato font-bold text-start text-black'>{md?.attributes?.name}</p>
                <p className=' text-lg flex justify-center items-center  w-full  font-lato md:text-start text-black '>{md?.attributes?.description}</p>
              </div>
           
            </div>
        </div>
    
      </div>
    <div>


    <div className='w-full max-w-[1400px] m-auto p-5  '>
      <div className=''>
        <h1 className='text-3xl font-bold font-heading'>
            Executive
        </h1>
      </div>


      <table className="      border-spacing-y-2	 border-collapse w-full border overflow-auto ">
        <thead className=" bg-primary-main text-white ">
          <tr className="text-md    ">
            <th className="p-2 text-start font-heading ">Name</th>
          
            <th className="p-2 text-start font-heading">Designation	</th>
            <th className="p-2 text-start font-heading ">Department</th>
            <th className="p-2 text-start  font-heading">Place of working</th>
            <th className="p-2 text-start  font-heading">Mobile No</th>

            <th className="p-2 text-start  font-heading">Email Id</th>

 
          </tr>
        </thead>

        <tbody className="text-start  text-md  bg-secondary-gradient">
        {executives?.map((item,id)=>{
        
         

 return(
    
    <tr className='border-t ' key={id}>
    <td className="p-1 text-md  ">{item?.attributes?.name}</td>
   
    <td className="p-1 text-md">{item?.attributes?.designation}</td>
    <td className="p-1 text-md  ">{item?.attributes?.department}</td>
    <td className="p-1 text-md"> {item?.attributes?.working}</td>
    <td className="p-1 text-md"> {item?.attributes?.mobile}</td>
    <td className="p-1 text-md"> {item?.attributes?.email}</td>
  </tr>
   
 )



} )}

         
      
        </tbody>
      </table>

      </div>


      <div className='w-full max-w-[1400px] m-auto  p-5 '>
      <div className=''>
        <h1 className='text-3xl font-bold font-heading'>
            Union Chief
        </h1>
      </div>


      <table className="  table-fixed   border-spacing-y-2	 border-collapse border     w-full overflow-auto">
        <thead className="bg-primary-main text-white  ">
          <tr className="text-md ">
            <th className="p-2 text-start font-heading ">Name</th>
            <th className="p-2 text-start font-heading">Designation	</th>
            <th className="p-2 text-start font-heading">Place of working	</th>
            <th className="p-2 text-start  font-heading">Mobile No</th>

<th className="p-2 text-start  font-heading">Email Id</th>
          </tr>
        </thead>

        <tbody className="text-start  text-md  bg-secondary-gradient">
        {unionCheifs?.map((item,id)=>{
 


 return(
    
  <tr className='border-t' key={id} >
  <td className="p-1 text-md  ">{item?.attributes?.name}</td>
  <td className="p-1 text-md">{item?.attributes?.designation}</td>
  <td className="p-1 text-md overflow-auto">{item?.attributes?.working}</td>
  <td className="p-1 text-md overflow-auto">{item?.attributes?.mobile}</td>
  <td className="p-1 text-md overflow-auto">{item?.attributes?.email}</td>

</tr>
 )



} )}

         
      
        </tbody>
      </table>

      </div>


      <div className='w-full p-5  max-w-[1400px]  m-auto overflow-auto'>
      <div className=''>
        <h1 className='text-3xl font-bold font-heading'>
            Unit Chief
        </h1>
      </div>


      <table className="  table-fixed   border-spacing-y-2	 border-collapse border     w-full overflow-auto">
        <thead className=" w-full bg-primary-main text-white ">
          <tr className="text-md    ">
            <th className="p-2 text-start font-heading">Name</th>
            <th className="p-2 text-start font-heading">Designation	</th>
            <th className="p-2 text-start font-heading ">Place of working	</th>
            <th className="p-2 text-start  font-heading">Mobile No</th>

<th className="p-2 text-start  font-heading">Email Id</th>
          </tr>
        </thead>

        <tbody className="text-start  text-md  bg-secondary-gradient">
        {unitCheifs?.map((item,id)=>{
 


 return(
    
  <tr className='border-t' key={id} >
  <td className="p-1 text-md  ">{item?.attributes?.name}</td>
  <td className="p-1 text-md">{item?.attributes?.designation}</td>
  <td className="p-1 text-md overflow-auto">{item?.attributes?.working}</td>
  <td className="p-1 text-md overflow-auto">{item?.attributes?.mobile}</td>

  <td className="p-1 text-md overflow-auto">{item?.attributes?.email}</td>

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
