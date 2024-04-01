import React,{useState,useEffect} from 'react'

function Counter({endNumber,title}) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const duration = 3000; // Animation duration in milliseconds
    const step = Math.ceil(endNumber / (duration / 50)); // Calculate step size

    const interval = setInterval(() => {
      setCurrentNumber(prevNumber => {
        const nextNumber = prevNumber + step;
        return nextNumber >= endNumber ? endNumber : nextNumber; // Ensure end number is reached
      });
    }, 50); // Update every 50 milliseconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [endNumber]);

  return (
    <div className='flex flex-col  space-y-2  justify-center items-center'>
        <p className='text-[100px] text-white font-subheading flex justify-center items-center'>{currentNumber.toLocaleString()}+</p>
        <p className='text-sm text-white text-center uppercase '>{title}</p>
    </div>
  )
}

export default Counter