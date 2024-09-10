import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
 

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
const imgURL='/poster/home-banner-card.jpeg'
  useEffect(() => {
    setIsVisible(true)
    setAnimationClass('flash-animation');
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className='fixed w-full h-[100vh] top-0 z-[100]'>
      <div className={`relative w-full h-full ${animationClass}`}>
        <div className='absolute w-full h-full bg-black opacity-80 z-40'></div>
        <div className='absolute w-full h-full z-[100]'>
          <div className='flex w-full h-full'>
            <div className='relative flex flex-col justify-center w-full max-w-[900px] m-auto  rounded-lg  p-3'>
              <div className='absolute border border-black shadow-lg rounded-full cursor-pointer top-[-10px] right-5' onClick={handleClose}>
                <RxCross2 size={20} color='#fff' />
              </div>
            
              
              <div className='m-auto w-full h-full'>
                <img src={imgURL} alt="" className='w-[90%] h-[90%] m-auto' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
