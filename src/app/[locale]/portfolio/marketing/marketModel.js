// TenderDetailsModal.jsx

import React, { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Rodal from 'rodal';


const MarketModel = ({ closeModal,market ,close}) => {
  const [mobileWidth, setMobileWidth] = useState(null);

   useEffect(()=>{
    console.log("jashdjas")
   const handleResize=()=>{
    if(window.innerWidth === 786){
      console.log("window.innerWidth",mobileWidth )
       setMobileWidth(250)
    }
    else{
      console.log("window.innerWidth",mobileWidth )
      setMobileWidth(700)
    }
   }

   window.addEventListener('resize',handleResize);
   
   },[])  
 
  return (

    <div   className={`${closeModal===true? "opacity-1 scale-[1.01] z-[100]":"opacity-0 z-[-10]"} flex justify-center items-center fixed inset-0 transition-all duration-500  w-full h-full  top-0 left-0`}  >
        <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black z-10 '></div>
    <div className='relative w-full h-fit md:max-w-7xl md:h-[300px] p-2 md:p-4  flex flex-col justify-center items-center space-y-5 overflow-auto z-20 bg-white'>

      <div className='relative w-full h-[10%] '>

    
        <h1 className='text-xl md:text-2xl text-primary-main'>{market?.attributes?.title}</h1>
        <RxCross2 onClick={()=>{close(!closeModal)}} className="absolute top-1 right-3"/>

        </div>

      <div className='w-full h-[70%]  '>
      {market?.attributes?.content?.map((item, idx) => {
                return (
                  <p key={idx} className="text-lg md:text-xl ove text-neutral-dark1 text-justify">
                    {item?.children[0]?.text}
                  </p>
                );
              })}
      </div>
      

    </div>
   </div>
  );
};

export default MarketModel;