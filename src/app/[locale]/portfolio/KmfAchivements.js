import React, { useState } from 'react'
import KsheeraBhagya from './KsheeraBhagya';
import KsheeraSagara from './KsheeraSagara';

const KmfAchivements = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading,setLoading]=useState(true)

    const tabs = [
        {
          tabName: 'KHEERABHAGHA',
          data:  <KsheeraBhagya setLoading={setLoading} name={"Ksheera Bhagya"}/>
        },
        {
          tabName:'KHEERASAGARA',
          data: <KsheeraSagara setLoading={setLoading} name={"Ksheera Sagara"} />
        },

      ];
      const handleTabs = (idx) => {
        
       
        setCurrentIndex(idx);
      };
  return (
    <div>
    <div className='w-full md:mt-20'>
            <div className='flex flex-col items-center'>
            <h1 className='text-primary-main text-2xl md:text-6xl'>KMF ACHIVEMENTS</h1>
            <div className='bg-primary-main w-20 h-1 mt-4'></div>

            </div>
            {/* ksheera bhagya
            ksheera sagara */}

            <div className='mt-20'>
                <div className='flex'>
                    {/* <div className='p-5 text-slate-500 font-bold hover:text-black text-center w-full flex flex-col items-center'>KSHEERA BHAGYA
                    <div className='w-28 h-1 bg-primary-main mt-2'></div>
                    </div>
                    <div className='p-5 text-slate-500 font-bold hover:text-black text-center w-full flex flex-col items-center'> KSHEERA SAGARA
                    <div className='w-28 h-1 bg-primary-main mt-2'></div>
                    </div> */}

                    {tabs?.map((tab, idx) => {
                return (
                    <>
                  <div
                    key={idx}
                    onClick={() => handleTabs(idx)}
                    className={`${currentIndex===idx?' text-black  ':''} p-5 text-slate-500 font-bold hover:text-black text-center w-full flex flex-col items-center`}>
                    {tab.tabName}
                  <div className={`${currentIndex===idx?' bg-primary-main ':''}  w-28 h-1  mt-2`}></div>
                  </div>
                  </>
                );
              })}


                </div>
                <hr className='w-full h-[2px] bg-slate-400' />
            </div>
            <div className='mt-10'>
            {tabs?.map((tab, id) => {
        if (currentIndex === id) {
          return tab.data;
        }
      })}             </div>
          

        </div>  
       </div>
  )
}

export default KmfAchivements
