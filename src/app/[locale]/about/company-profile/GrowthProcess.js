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
        const {data}=await axios.get('/api/growht-processes')
        const {data:growthProcessHeaderData}=await axios.get('/api/growthprocessheaders')
 
       

        setGrowthProcessHeader(growthProcessHeaderData?.data)
        setGrowthProcess(data?.data)
        setLoading(false)
        
      }
    )()
  },[])
  return (
    <div className="w-full flex-col   overflow-auto  items-start justify-start p-10 space-y-5">
      <table className="table-fixed  border-spacing-y-2	 border-collapse border      min-w-full">
        <thead className=" ">
          <tr className="text-md bg-secondary-gradient ">
            <th className="p-2">KEY ITEMS</th>
            <th className="p-2">UNIT</th>
            {growthProcess?.map((gp, id) => (
              <th key={id}>{gp?.attributes?.year}</th>
            ))}
          </tr>
        </thead>

        <tbody className="text-center  text-md">
          {growthProcessHeader.map((header, id) => {
         
            return (
              <tr key={id} className='border-t  '>
                <td className='p-2 text-md'>{header?.attributes?.header}</td>
                <td className='p-2 text-md'>{header?.attributes?.unit}</td>

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
