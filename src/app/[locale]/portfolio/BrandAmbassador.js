import React from 'react'
import founderOfMilkImg from '@/images/portfolio/founder-of-milk.jpeg';


const BrandAmbassador = () => {
  return (
    <div className='w-full'>
    <div className='w-full md:mt-20'>
            <div className='flex flex-col items-center'>
            <h1 className='text-primary-main text-2xl md:text-6xl'>BRAND AMBASSADOR</h1>
            <div className='bg-primary-main w-20 h-1 mt-4'></div>

            </div>



            <div className='w-full p-10'>
                <div className=' w-full flex flex-col md:flex-row border-2 border-slate-300 p-6 md:p-10 m-auto'>
                    <div className=' w-[100%] md:w-[50%]'>
                        <img className=' h-72 md:h-96 w-96' src={founderOfMilkImg.src} alt="" />
                    </div>
                    <div className=' w-[100%] md:w-[50%] text-center'>
                        <h1 className='text-primary-main text-3xl'>Dr. Rajakumar</h1>
                        <p className='mt-10  md:text-lg'>Dr. Rajakumar, Karnataka Rathna Padmabhushana, commenced in 1994 when he became the ambassador for Karnataka Milk Federation (KMF) products. During a special event held at Ravindra Kalakshetra, he was presented with a cow as a symbol of goodwill for the farmers of Karnataka. Remarkably, Dr. Rajakumar graciously declined any remuneration for his role. The cow presented to him was housed in Gajanur for an extended period, becoming a testament to his dedication to the cause. In his life span Dr. Rajkumar endorced only once   
</p>
                    </div>
                </div>
            </div>

            <div className='w-full p-10'>
                <div className=' w-full flex flex-col md:flex-row border-2 border-slate-300 p-10 m-auto'>
                <div className='order-last md:order-1 w-[100%] md:w-[50%] text-center'>
                        <h1 className='text-primary-main text-3xl'>Upendra Rao</h1>
                        <p className='mt-10 md:text-lg'>A famous actor and director of Kannada Film Industry star Shri. Upendra Rao became a brand ambassador for KMF products in the year 2003.

</p>
                    </div>
                    <div className='order-1 md:order-last w-[100%] md:w-[50%] flex justify-end'>
                        <img className='h-72 md:h-96 w-96' src={founderOfMilkImg.src} alt="" />
                    </div>
                   
                </div>
            </div>

            <div className='w-full p-10'>
                <div className=' w-full flex flex-col md:flex-row border-2 border-slate-300 p-10 m-auto'>
                    <div className='w-[100%] md:w-[50%]'>
                        <img className='h-72 md:h-96 w-96' src={founderOfMilkImg.src} alt="" />
                    </div>
                    <div className='w-[100%] md:w-[50%] text-center'>
                        <h1 className='text-primary-main text-3xl'>Dr. Puneet Rajkumar</h1>
                        <p className='mt-10 md:text-lg'>Following in his father’s footsteps, Dr. Rajakumar’s third son, Karnataka Rathna Dr. Puneeth Rajakumar, continued the legacy by becoming the brand ambassador for KMF Nandini products. In an advertisement, Puneeth Rajakumar even featured consuming milk from a massive pot, further endorsing the state farmers’ products without seeking any personal favors.

</p>
                    </div>
                </div>
            </div>

            <div className='w-full p-10'>
                <div className=' w-full flex flex-col md:flex-row border-2 border-slate-300 p-10 m-auto'>
                <div className='order-last md:order-1 w-[100%] md:w-[50%] text-center'>
                        <h1 className='text-primary-main text-3xl'>Dr. ShivarajRajkumar</h1>
                        <p className='mt-10 md:text-lg'>Kannada film actor Shivarajkumar has been named the new brand ambassador of Nandini milk products. Shivarajkumar’s father and matinee idol Rajkumar and subsequently his late brother Puneeth Rajkumar were ambassadors of the Nandini milk products for several years. In a special event, CM Siddaramaiah honoured KMF New Brand Ambassador Dr. Shivarajkumar and launched the products of KMF Nandini brand 'Nandini Buffalo Milk' and 'Nandini Yogurt Light'

</p>
                    </div>
                    <div className='order-1 md:order-last w-[100%] md:w-[50%] flex justify-end'>
                        <img className='h-72 md:h-96 w-96' src={founderOfMilkImg.src} alt="" />
                    </div>
                   
                </div>
            </div>
            
          

        </div>  
    </div>
  )
}

export default BrandAmbassador
