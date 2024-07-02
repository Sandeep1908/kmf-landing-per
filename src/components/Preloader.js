import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
 

const Preloader = ({ imgURL }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Add the animation class when the component mounts
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
            <div className='relative flex flex-col justify-center w-[500px] m-auto h-[500px] rounded-lg bg-white p-10'>
              <div className='absolute border border-black shadow-lg rounded-full cursor-pointer top-5 right-5' onClick={handleClose}>
                <RxCross2 size={30} />
              </div>
              <h1 className='text-lg md:text-4xl text-center text-red-500 underline'>Latest Updates</h1>
              <img src='/images/product-new/new.gif' className='w-20 absolute right-5 z-[10]' />
              <div className='p-5 m-auto w-full h-full'>
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
