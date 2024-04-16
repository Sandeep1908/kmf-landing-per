import useApi from '@/hooks/useApi';
import React from 'react';
// import { growhtProcess, growthProcessTableHeader } from '@/configtext/companyProfile.js';
import { useState,useEffect } from 'react';

function GrowthProcess({setLoading}) {
  const [growthProcess,setGrowthProcess]=useState([])
  const [growthProcessHeader,setGrowthProcessHeader]=useState([])
 const axios=useApi()
  useEffect(()=>{
    (
      async()=>{
        const {data}=await axios.get('/api/growht-processes?sort[0]=year:asc')
        const {data:growthProcessHeaderData}=await axios.get('/api/growthprocessheaders')
      
 
       

        setGrowthProcessHeader(growthProcessHeaderData?.data)
        setGrowthProcess(data?.data)
        setLoading(false)
        
      }
    )()
  },[])
  return (
    <div className="w-full flex-col max-w-7xl m-auto mb-10 rounded-md shadow-md  bg-[#FDF9F7]     overflow-auto  items-start justify-start p-10 space-y-5">
      <table className="table-fixed  border-spacing-y-2	 border-collapse border-black border      min-w-full">
        <thead className=" text-left ">
          <tr className="text-md bg-secondary-main   ">
          <th className="p-2">S.NO</th>
            <th className="p-2">KEY ITEMS</th>
            <th className="p-2 ">UNIT</th>
            {growthProcess?.map((gp, id) => (
              <th className='w-20' key={id}>{gp?.attributes?.year}</th>
            ))}
          </tr>
        </thead>

        <tbody className="text-left  text-md">
          {growthProcessHeader.map((header, id) => {
             
          
            return (
              <tr key={id} className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>{id+1}</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>{header?.attributes?.header}</td>
                <td className='p-2 text-md font-content border-r border-black'>{header?.attributes?.unit}</td>

                {growthProcess.map((gp, id) => {
                  
                  return <td className='p-2 text-md' key={id}>{gp?.attributes[header?.attributes?.key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GrowthProcess;
