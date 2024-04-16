import React from 'react'
import titleBG from '@/images/portfolio/title-bg.png';
import Footer from '@/components/Footer';
import flag from '@/images/portfolio/flag.jpg';


const KsheeraDhare = () => {
  return (
     <div className='w-full h-full'>
        <div className='w-full h-auto'>
        <div className=' relative w-full h-full flex justify-center mt-20'>

            <h1 className='text-primary-main text-2xl md:text-5xl  ' > KSHEERADHARE </h1>
            <img className='absolute top-[-50px] left-[52%] w-40 ' src={titleBG.src} alt="" />
        </div>


        
        
    </div>

    <div className='w-full h-auto'>
        
            <div className=' hidden lg:block relative w-full max-h-[500px] h-full z-[-1]'>
                <img className='w-full h-full' src={flag.src} alt="" />
                <div className='absolute top-[60px] lg:top-0 xl:top-[60px] w-full h-full'>
                    <div className='w-full h-full flex justify-center items-center'>
                    <div className='max-w-xl lg:max-w-lg xl:max-w-xl w-full m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' > Ksheerdhare Project </h1>
                 <div className='mt-6'>
                  <p className=' text-sm md:text-lg lg:text-sm xl:text-lg '>
                  An ambitious scheme of the Karnataka State Government, the “Ksheerdhare” scheme has been implemented for the following objectives:
                  </p>
                 </div>
                       </div>
                    </div>
                </div>
            </div>  

            <div className='w-full h-auto flex flex-wrap justify-center'>
               
                 <div className='block lg:hidden max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' >  Ksheerdhare Project </h1>
                 <div className=' mt-10'>
                  <p className=''>
                  An ambitious scheme of the Karnataka State Government, the Ksheerdhare scheme has been implemented for the following objectives:
                
                  </p>
                 </div>
                       </div>
                 </div>
                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' > Objectives of the Milk Producer Incentive Scheme:  </h1>
                 <div className=' mt-10'>
                  <ul className='list-disc text-left'>
                  <li>
                  To make dairy farming profitable at village level to promote and expand dairy farming.

                  </li>
                  <li>
                  	To motivate youth / unemployed people to take up dairy farming at village level.

                  </li>
                  <li>
                  For economic and social security of milk producers engaged in dairy farming.

                  </li>
                  <li>
                  	For increase in milk production for food security.

                  </li>
                 
                  </ul>
                 </div>
                       </div>
                 </div>


                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' > Scheme implementation details </h1>
                 <div className='mt-10'>
                  <ul className='list-disc text-left'>
                  <li>
                    The scheme was implemented on 08.09.2008.

                  </li>
                  <li>
                	Incentive came into effect on 09.09.2008 (Rs.2/- per litre)

                  </li>
                  <li>
                  Incentive per litre increased from Rs.2/- to Rs.4/- for milk on 14.05.2013.

                  </li>
                  <li>
                  Incentive per litre increased from Rs.4/- to Rs.5/- per litre of milk and continued from 19.11.2016.

                  </li>
                  </ul>
                 </div>
                       </div>
                 </div>

              
                
            </div>
               
          </div>




          <div className="w-full flex-col max-w-7xl m-auto mb-10 rounded-md shadow-md  bg-slate-50     overflow-auto  items-start justify-start p-10 space-y-5">
      <table className="table-fixed  border-spacing-y-2	 border-collapse border-black border      min-w-full">
        <thead className=" text-left ">
          <tr className="text-md">
            <th className="p-2">Year</th>
            <th className="p-2 ">Rs. in Crores	</th>

             
          </tr>
        </thead>

        <tbody className="text-left  text-md">

              <tr className='border-t-2 border-black  '>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>2008-09</td>
                <td className='p-2 text-md font-content border-r border-black'>110.00</td>


                  

              </tr>
              <tr className='border-t-2 border-black  '>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>2009-10</td>
                <td className='p-2 text-md font-content border-r border-black'>224.99</td>


                  

              </tr>
              <tr className='border-t-2 border-black  '>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>2010-11</td>
                <td className='p-2 text-md font-content border-r border-black'>302.65</td>


                  

              </tr>
              <tr className='border-t-2 border-black  '>
                <td className='p-2 text-md uppercase text-center border border-r border-black font-content font-bold'>Total</td>
                <td className='p-2 text-md  font-content border-r border-black font-bold'>14126.70</td>


                  

              </tr>
          
        </tbody>
      </table>
    </div>


  
    <Footer/>
    </div>
  
  )
}

export default KsheeraDhare
