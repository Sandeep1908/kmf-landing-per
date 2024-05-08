// TenderDetailsModal.jsx

import React from 'react';
import Rodal from 'rodal';


const MarketModel = ({ closeModal,market ,close}) => {
  console.log("market", market)
 
  return (

    <Rodal visible={closeModal} onClose={()=>close(!closeModal)} animation='door'  className='overflow-auto' width={700} height={600}>
    <div className='w-full h-full p-4  flex flex-col justify-center items-center space-y-5 overflow-auto'>

      <div className='w-full h-[10%]'>

    
        <h1 className='text-2xl text-primary-main'>{market?.attributes?.title}</h1>
        </div>


        {/* <div className='w-full h-[60%]  '>
          <img src={kymMilk?.attributes?.image?.data?.attributes?.url} className='w-full max-w-[90%] h-full object-containf  m-auto'/>
        </div> */}

      <div className='w-full h-[70%]  '>
      {market?.attributes?.content?.map((item, idx) => {
                return (
                  <p key={idx} className="text-xl ove text-neutral-dark1 text-justify">
                    {item?.children[0]?.text}
                  </p>
                );
              })}
      </div>
      

    </div>
   </Rodal>
  );
};

export default MarketModel;