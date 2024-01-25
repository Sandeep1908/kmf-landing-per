import React from 'react';
 
import useApi from '@/hooks/useApi';
import { useState,useEffect } from 'react';
import { useParams } from 'next/navigation';
function OngoingAndFuture({ futureProject}) {

  const [futureProjects,setFutureProjects]=useState([])
  const [ongoingProjects,setOngoingProjects]=useState([])
  const axios=useApi()
  const locale=useParams()?.locale
  useEffect(()=>{
    (async()=>{
      const {data}= await axios.get('/api/projects?sort[0]=createdAt:desc')
      const incomingFutureProjects=data?.data?.filter(item=>item?.attributes?.status==='future')
      const incomingOngoingProjects=data?.data?.filter(item=>item?.attributes?.status==='ongoing')
      setFutureProjects(incomingFutureProjects)
      setOngoingProjects(incomingOngoingProjects)
    })()
  },[])
  return (
    <div className="w-full flex-col   overflow-auto  items-start justify-start p-10 space-y-5">
      <table className="table-fixed  shadow-md border-spacing-y-2	 border-collapse border     min-w-full">
        <thead className=" ">
          <tr className="text-md   bg-secondary-gradient ">
            <th className="p-2 ">S.NO</th>
            <th className="p-2 text-start">{locale==='en'?'ONGOING PROJECTS':'ನಡೆಯುತ್ತಿರುವ ಯೋಜನೆಗಳು'}</th>
          </tr>
        </thead>

        <tbody className="text-start  text-sm">
          {ongoingProjects?.map((item, idx) => {
         return (
          <tr key={idx}>
            <td className="p-2 text-center ">{idx+1}</td>
            <td className="p-2">{item?.attributes?.project_name}</td>
          </tr>
        );
         
          })}
        </tbody>
      </table>




      <table className="table-auto shadow-md  border-spacing-y-2	 border-collapse border      min-w-full">
        <thead className="  ">
          <tr className="text-md bg-secondary-gradient ">
            <th className="p-2">S.NO</th>
            <th className="p-2 text-start">{locale==='en'?'FUTURE PROJECTS':'ಭವಿಷ್ಯದ ಯೋಜನೆಗಳು'}</th>
          </tr>
        </thead>

        <tbody className="text-start  text-sm">
          {futureProjects?.map((item, idx) => {
         
            return (
              <tr key={idx}>
                <td className="p-2 text-center ">{idx+1}</td>
                <td className="p-2">{item?.attributes?.project_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>



    </div>
  );
}

export default OngoingAndFuture;
