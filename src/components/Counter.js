import React,{useState,useEffect} from 'react'

function Counter({targetNumber,title}) {
    const [count, setCount] = useState(0);
     
    useEffect(() => {
      const timer = setInterval(() => {
      
        if (count < targetNumber) {
          setCount(prevCount => prevCount + 1);  
        } else {
          clearInterval(timer);
        }
      }, 1);  
  
      return () => clearInterval(timer);  
    }, [count, targetNumber]);
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='text-5xl text-primary-gradient flex justify-center items-center'>{count}+</p>
        <p className='text-2xl text-primary-main '>{title}</p>
    </div>
  )
}

export default Counter