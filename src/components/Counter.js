import React,{useState,useEffect} from 'react'

function Counter({targetNumber,title}) {
    const [count, setCount] = useState(0);
     
    useEffect(() => {
      const timer = setInterval(() => {
      
        if (count < targetNumber) {
          setCount(prevCount => prevCount +1);  
        } else {
          clearInterval(timer);
        }
      }, 0.3);  
  
      return () => clearInterval(timer);  
    }, [count, targetNumber]);
  return (
    <div className='flex flex-col  space-y-2  justify-center items-center'>
        <p className='text-[100px] text-white font-subheading flex justify-center items-center'>{count}+</p>
        <p className='text-sm text-white text-center uppercase '>{title}</p>
    </div>
  )
}

export default Counter