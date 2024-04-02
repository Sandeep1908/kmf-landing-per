'use client'
import React from 'react';
import evolutionImg from '@/images/about/mission/evolution.jpeg';
import CowImg1 from '@/images/about/mission/about-cow-1.png';
import CowImg2 from '@/images/about/mission/about-cow-2.png';
import MilkBottomImg from '@/images/about/mission/milk-bottom.png';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
function MissionVission() {
  const locale = useParams().locale;
 
  return (
    <div className="w-full h-full absolute top-36 z-[-1]   ">
      <section className={`w-full  h-96 pt-28 relative  grid place-items-center company-bg`}>
        <img src={evolutionImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>
 
    
      <section className="w-full max-w-5xl m-auto h-auto pt-10  ">

        <div className="w-full  h-full flex flex-col p-3 space-y-5  lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col justify-center items-center shadow-md ">
            <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white">
              {locale === 'en' ? 'Vission & Mission' : 'ಘನೋದ್ದೇಶ  ಮತ್ತು  ಧ್ಯೇಯದೃಷ್ಟಿ'}
            </h1>

            <ul className="flex flex-col space-y-5 p-6 w-full h-full justify-center items-center  list-disc text-justify text-lg  md:justify-normal md:items-start">

            <h1 className='text-xl'>{locale==='kn'?'ಘನೋದ್ದೇಶ':'Vission'}</h1>
              <li>
                {locale === 'en'
                  ? `    To march forward with a missionary zeal which will make KMF a trailblazer of
                exemplary performance and achievements beckoning other Milk Federations in the
                country in pursuit of total emulation of its good deeds.`
                  : `
                  ಉದಾತ್ತ ಧ್ಯೇಯೋದ್ದೇಶಗಳು ಮತ್ತು ಉತ್ತಮ ಚಿಂತನೆಗಳಿಂದ ಕರ್ನಾಟಕ ಹಾಲು ಮಹಾಮಂಡಳಿಯನ್ನು ರಾಷ್ಟ್ರದಲ್ಲಿಯೇ ಅನುಕರಣೀಯ ಸಂಸ್ಥೆಯನ್ನಾಗಿ ರೂಪಿಸುವುದರ ಜೊತೆಗೆ ವಿಶಿಷ್ಟ ಸಾಧನೆಗಳ ಮೂಲಕ ಇತರ ಹಾಲು ಮಹಾಮಂಡಳಿಗಳಿಗೆ ಮಾದರಿಯಾಗುವಂತಹ ಸಂಸ್ಥೆಯನ್ನಾಗಿ ರೂಪಿಸಲು ಶ್ರದ್ಧೆಯಿಂದ ಮುನ್ನಡೆಯುವುದು.`}
              </li>

              <li>
                {locale === 'en'
                  ? ` To ensure prosperity of the rural Milk producers who are ultimate owners of the
                Federation.`
                  : `
                  ಕರ್ನಾಟಕ ಹಾಲು ಮಹಾಮಂಡಳಿಯ ಬೆನ್ನೆಲುಬಾಗಿರುವ ಗ್ರಾಮೀಣ ಹಾಲು ಉತ್ಪಾದಕರಿಗೆ ಆರ್ಥಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ಸದೃಢತೆ ಹಾಗೂ ಶ್ರೇಯಸ್ಸು ಲಭಿಸುವಂತೆ ಮಾಡುವುದು.`}
              </li>

              <li>
                {locale === 'en'
                  ? ` To promote producer oriented viable cooperative society to impart an impetus to the
                rural income, dairy productivity and rural employment.`
                  : `
                
                  ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ, ಹೈನು ಉತ್ಪಾದನೆ ಹಾಗೂ ವರಮಾನ ಹೆಚ್ಚಳವನ್ನು ಪ್ರೇರೇಪಿಸುವಂತಹ, ಹಾಲು ಉತ್ಪಾದಕರ ಹಿತದೃಷ್ಟಿಯನ್ನು ಕಾಯುವಂತಹ ಸಹಕಾರಿ ಸಮಾಜವನ್ನು ವೃದ್ಧಿಗೊಳಿಸುವುದು.`}
              </li>

              <li>
                {locale === 'en'
                  ? ` To abridge the gap between price of milk procurement and sale price.`
                  : `
                

                  ಹಾಲಿನ ಮಾರಾಟ ಮತ್ತು ಹಾಲಿನ ಶೇಖರಣಾ ದರಗಳ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು.`}
              </li>
              <li>
                {locale === 'en'
                  ? ` To develop business acumen in marketing and trading disciplines so as to serve
                consumers with quality milk, give a fillip to the income of milk producers.`
                  : `
                

                  ಗ್ರಾಹಕರಿಗೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಹಾಲನ್ನು ಒದಗಿಸುವಲ್ಲಿ ಉತ್ತಮ ಮೌಲ್ಯದ ತೀಕ್ಷ್ಣತಮ ವ್ಯಾಪಾರಿ ಚಟುವಟಿಕೆಯನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳುವುದರ ಜೊತೆಗೆ ಹಾಲು ಉತ್ಪಾದಕರ ವರಮಾನಕ್ಕೆ ಪ್ರೇರಣೆಯಾಗುವುದು.`}
              </li>

              <li>
                {locale === 'en'
                  ? `     
                To compete with MNCs and Private Dairies with better quality of milk and milk
                products and in the process sustain invincibility of cooperatives.`
                  : `
                

        
                  ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಹಾಲು ಮತ್ತು ಹಾಲಿನ ಉತ್ಪನ್ನಗಳನ್ನು ನೀಡುವುದರೊಂದಿಗೆ ಖಾಸಗಿ ಡೇರಿಗಳು ಮತ್ತು ಬಹುರಾಷ್ಟ್ರೀಯ ಸಂಸ್ಥೆಗಳೊಂದಿಗೆ ಆರೋಗ್ಯಕರ ಸ್ಪರ್ಧೆಯನ್ನು ಮಾಡುತ್ತ, ಸಹಕಾರಿ ಸಂಸ್ಥೆಯ ಉತ್ತಮ ಸ್ಥಿತಿಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳುವುದು.`}
              </li>

             
             
      
            </ul>


            <ul className="flex flex-col space-y-5 p-6 w-full h-full justify-center items-center list-disc   text-justify text-lg  md:justify-normal md:items-start">

            <h1 className='text-xl'>{locale==='kn'?'ಧ್ಯೇಯದೃಷ್ಟಿ':'Mission'}</h1>

              <li>
              {locale === 'en'
                  ? `     
                  Heralding economic, social and cultural prosperity in the lives of our milk producer
                  members by promoting vibrant, self-sustaining and holistic cooperative dairy
                  development in Karnataka State.`
                  : `
                

        
                  ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಒಂದು ಸಶಕ್ತ, ಸ್ವಾವಲಂಬಿ ಮತ್ತು ಸಂಪೂರ್ಣವಾದ ಸಹಕಾರಿ ಹೈನು ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮವನ್ನು ಅನುಷ್ಠಾನಗೊಳಿಸುವ ಮೂಲಕ ನಮ್ಮ ಸದಸ್ಯ ಹಾಲು ಉತ್ಪಾದಕರ ಜೀವನದಲ್ಲಿ ಆರ್ಥಿಕ, ಸಾಮಾಜಿಕ ಹಾಗೂ ಸಾಂಸ್ಕೃತಿಕ ಸಮೃದ್ಧಿಯನ್ನು ಉಂಟುಮಾಡುವುದೇ ಕರ್ನಾಟಕ ಹಾಲು ಮಹಾಮಂಡಳಿಯ ಘನೋದ್ದೇಶವಾಗಿದೆ.`}
              </li>
                
              </ul>
          </div>

        
        </div>
      </section>

      <section className="w-full h-auto pt-10   ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full   flex justify-center items-center">
            <img src={CowImg1.src} />
          </div>

          <div className="w-full flex flex-col justify-center items-start shadow-md ">
            <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white">
              {locale === 'en'
                ? ` Objectives`
                : `
                

               
                ಉದ್ದೇಶಗಳು`}{' '}
            </h1>

            <p className="text-lg text-justify p-2">
              {locale === 'en'
                ? `       KMF is a Cooperative Apex Body in the State of Karnataka representing organisations of
              milk producer and implementing all round dairy development activities to achieve the
              following objectives:`
                : `
                

               
              KMF ಸಂಸ್ಥೆಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುವ ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಸಹಕಾರಿ ಅಪೆಕ್ಸ್ ಬಾಡಿ ಆಗಿದೆ
              ಹಾಲು ಉತ್ಪಾದಕ ಮತ್ತು ಸಾಧಿಸಲು ಎಲ್ಲಾ ಸುತ್ತಿನ ಡೇರಿ ಅಭಿವೃದ್ಧಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಅನುಷ್ಠಾನಗೊಳಿಸುವುದು
              ಕೆಳಗಿನ ಉದ್ದೇಶಗಳು:`}
            </p>

            <ul className="flex flex-col space-y-3 p-6 w-full h-full justify-center items-center list-disc text-justify text-lg  md:justify-normal md:items-start">
              <li>
                {locale === 'en'
                  ? `         To ensure assured and remunerative market round the year for the milk produced by
                the farmer members.`
                  : `
                

               
          
ಉತ್ಪಾದಿಸುವ ಹಾಲಿಗೆ ವರ್ಷವಿಡೀ ಖಚಿತವಾದ ಮತ್ತು ಲಾಭದಾಯಕ ಮಾರುಕಟ್ಟೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು
ರೈತ ಸದಸ್ಯರು.`}
              </li>

              <li>
                {locale === 'en'
                  ? `            To make available quality milk and other premier dairy products to urban consumers.`
                  : `
                

               
          
                ನಗರ ಪ್ರದೇಶದ ಗ್ರಾಹಕರಿಗೆ ಗುಣಮಟ್ಟದ ಹಾಲು ಮತ್ತು ಇತರ ಪ್ರಮುಖ ಡೇರಿ ಉತ್ಪನ್ನಗಳನ್ನು ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡುವುದು.`}
              </li>

              <li>
              {locale === 'en'
                  ? `                To build & develop village level institutions as cooperative model units to manage
                  the dairy activities.`
                  : `
                

               
          
ಗ್ರಾಮ ಮಟ್ಟದ ಸಂಸ್ಥೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಸಹಕಾರಿ ಮಾದರಿ ಘಟಕಗಳಾಗಿ ನಿರ್ಮಿಸಲು ಮತ್ತು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು
ಡೇರಿ ಚಟುವಟಿಕೆಗಳು.`}
            
              </li>

              <li>
              {locale === 'en'
                  ? `                    To ensure provision of inputs for milk production, processing facilities and
                  dissemination of know how.`
                  : `
                

               
          

                  ಹಾಲು ಉತ್ಪಾದನೆ, ಸಂಸ್ಕರಣಾ ಸೌಲಭ್ಯಗಳಿಗೆ ಒಳಹರಿವು ಒದಗಿಸುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಮತ್ತು
                  ಹೇಗೆ ಎಂದು ತಿಳಿಯುವ ಪ್ರಸರಣ.`}
           
              </li>
              <li>
              {locale === 'en'
                  ? `                            To facilitate rural development by providing opportunities for self employment at
                  village level, preventing migration to urban areas,introducing cash economy and
                  opportunity for a sustained income.`
                  : `
                

               
          

                  ನಲ್ಲಿ ಸ್ವಯಂ ಉದ್ಯೋಗಕ್ಕೆ ಅವಕಾಶಗಳನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿಗೆ ಅನುಕೂಲ ಕಲ್ಪಿಸುವುದು
                  ಗ್ರಾಮ ಮಟ್ಟ, ನಗರ ಪ್ರದೇಶಗಳಿಗೆ ವಲಸೆ ತಡೆಯುವುದು, ನಗದು ಆರ್ಥಿಕತೆಯನ್ನು ಪರಿಚಯಿಸುವುದು ಮತ್ತು
                  ನಿರಂತರ ಆದಾಯದ ಅವಕಾಶ.`}
      
              </li>
            </ul>

            <p className="text-lg text-justify p-2">
            {locale === 'en'
                  ? `                              The philosophy of dairy development is to eliminate middlemen and organise
                  institutions to be owned and managed by the milk producers themselves, employing
                  professionals. To sum it up, every activity of KMF revolves around meeting one basic
                  objective: Achieve economies of scale to ensure maximum returns to the milk producers,
                  at the same time facilitate wholesome milk at reasonable price to urban consumers.
                  Ultimately, the complex network of cooperative organisation should build a bridge
                  between masses of rural producers and millions of urban consumers and in the process
                  achieve a socio-economic revolution in every hinterland of the State.`
                  : `
                

               
          

                  ಹೈನುಗಾರಿಕೆ ಅಭಿವೃದ್ಧಿಯ ತತ್ವವು ಮಧ್ಯವರ್ತಿಗಳನ್ನು ತೊಡೆದುಹಾಕಲು ಮತ್ತು ಸಂಘಟಿಸಲು ಆಗಿದೆ
                  ಸಂಸ್ಥೆಗಳನ್ನು ಹಾಲು ಉತ್ಪಾದಕರು ಸ್ವತಃ ಮಾಲೀಕತ್ವದಲ್ಲಿ ಮತ್ತು ನಿರ್ವಹಿಸಬೇಕು, ಉದ್ಯೋಗಿ
                  ವೃತ್ತಿಪರರು. ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಹೇಳುವುದಾದರೆ, KMF ನ ಪ್ರತಿಯೊಂದು ಚಟುವಟಿಕೆಯು ಒಂದು ಮೂಲಭೂತ ಸಭೆಯ ಸುತ್ತ ಸುತ್ತುತ್ತದೆ
                  ಉದ್ದೇಶ: ಹಾಲು ಉತ್ಪಾದಕರಿಗೆ ಗರಿಷ್ಠ ಆದಾಯವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಪ್ರಮಾಣದ ಆರ್ಥಿಕತೆಯನ್ನು ಸಾಧಿಸುವುದು,
                  ಅದೇ ಸಮಯದಲ್ಲಿ ನಗರ ಗ್ರಾಹಕರಿಗೆ ಸಮಂಜಸವಾದ ಬೆಲೆಯಲ್ಲಿ ಆರೋಗ್ಯಕರ ಹಾಲನ್ನು ಒದಗಿಸುವುದು.
                  ಅಂತಿಮವಾಗಿ, ಸಹಕಾರಿ ಸಂಘಟನೆಯ ಸಂಕೀರ್ಣ ಜಾಲವು ಸೇತುವೆಯನ್ನು ನಿರ್ಮಿಸಬೇಕು
                  ಗ್ರಾಮೀಣ ಉತ್ಪಾದಕರು ಮತ್ತು ಲಕ್ಷಾಂತರ ನಗರ ಗ್ರಾಹಕರ ನಡುವೆ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ
                  ರಾಜ್ಯದ ಪ್ರತಿಯೊಂದು ಒಳನಾಡಿನಲ್ಲಿ ಸಾಮಾಜಿಕ-ಆರ್ಥಿಕ ಕ್ರಾಂತಿಯನ್ನು ಸಾಧಿಸುವುದು.`}
 
            </p>
          </div>
        </div>
      </section>

      <section className=" relative w-full h-auto pt-10  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col justify-center items-start shadow-md ">
            <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white">
            {locale === 'en'
                  ? `                    Evolution`
                  : `
                

               
          

                   ಸಂಸ್ಥೆಯ ವಿಕಸನ.`}</h1>

            <ul className="flex flex-col space-y-3 p-6 w-full h-full justify-center items-center list-disc text-justify text-lg  md:justify-normal md:items-start">
              <li>
              {locale === 'en'
                  ? `                               Karnataka Milk Federation which is most popular as KMF, evolved itself as a premier
                  and most profitable dairy farmers organization in the State of Karnataka.`
                  : `
                

               
          

                  ಕರ್ನಾಟಕ ಹಾಲು ಮಹಾಮಂಡಳಿ, ಕೆಎಂಎಫ್  ಎಂದು ಪ್ರತೀತಿಗಳಿಸಿ ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲೇ ಉತ್ತಮ ಲಾಭದಾಯಕ ಹಾಗೂ ಮುಂಚೂಣಿಯಲ್ಲಿರುವ ಸಹಕಾರಿ ಸಂಸ್ಥೆಯಾಗಿದೆ.
`}
                
              </li>

              <li>
              {locale === 'en'
                  ? `                                      As an agency in 1975 to implement the World Bank Aided Dairy Development
                  Projects,Karnataka Dairy Development Corporation (KDDC) was formed, the company grew
                  itself fast and as it spreads the wings of new found rural economic activity -
                  Dairying all over the State, the genesis of apex cooperative body took the shape of
                  KMF in 1984 encompassing entire State with 13 District Co-operative Milk Unions
                  executing the various parameters of Dairy activity - organization of Dairy
                  Co-operatives, Milk Routes, Veterinary Services, Procurement of milk in two shifts
                  of the day, Chilling, Processing of milk, distribution of milk and also
                  establishment of Cattle Feed Plants, Nandini Sperm Station, Liquid Nitrogen Supply,
                  Training Centres - as its main stay.`
                  : `
                

               
          
                  ಕರ್ನಾಟಕ ಡೇರಿ  ಅಭಿವೃದ್ಧಿ ನಿಗಮವು (KDDC) 1975ರಲ್ಲಿ ಸ್ಥಾಪನೆ ಹೊಂದಿ ವಿಶ್ವ ಬ್ಯಾಂಕಿನ ನೆರವಿನ ಡೇರಿ  ಅಭಿವೃದ್ಧಿಯನ್ನು ಕಾರ್ಯಗತ ಮಾಡುವಲ್ಲಿ ಮೊಟ್ಟ ಮೊದಲ ಸಂಸ್ಥೆಯಾಗಿ ಬೆಳೆದು ಬಂದು ಈ ಸಂಸ್ಥೆ ರಾಜ್ಯದೆಲ್ಲೆಡೆ ವಿಸ್ತರಿಸಿ ರಾಜ್ಯದ ಗ್ರಾಮೀಣ ಆರ್ಥಿಕ ಅಭಿವೃದ್ದಿಯಲ್ಲಿ ಚುಕ್ಕಾಣಿ ಹಿಡಿಯುವಂತಹ ಪ್ರತಿಷ್ಠಿತ ಸಹಕಾರಿ ಸಂಸ್ಥೆಯಾಗಿ ಬೆಳೆದಿದೆ. 1984ರಲ್ಲಿ ಕೆ.ಡಿ.ಡಿ.ಸಿ.ಯು, ಕೆಎಂಎಫ್. ಯೆಂದು ನಾಮಕರಣಗೊಂಡು ತನ್ನ 16 ಹಾಲು ಒಕ್ಕೂಟಗಳ ಸಮಗ್ರ ಡೇರಿ  ಚಟುವಟಿಕೆಗಳಿಂದ ಉತ್ತಮ ಸಂಸ್ಥೆಯಾಗಿ ಬೆಳೆದಿದೆ. ಹಾಲು ಉತ್ಪಾದಕರ ಸಹಕಾರ ಸಂಘಗಳ ರಚನೆ, ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಹಾಲು ಶೇಖರಣಾ ಮತ್ತು ವಿತರಣಾ ಮಾರ್ಗಗಳ ಸ್ಥಾಪನೆ, ಪಶು ವೈದ್ಯಕೀಯ ಸೇವೆಗಳು, ಹಾಲನ್ನು ಶೀತಲಗೊಳಿಸುವಲ್ಲಿ, ಸಂಸ್ಕರಿಸುವಲ್ಲಿ, ವಿತರಿಸುವಲ್ಲಿ ಮೂಲಭೂತ ಸೌಲಭ್ಯಗಳನ್ನೊಳಗೊಂಡ ಬಲ್ಕ್ ಮಿಲ್ಕ್ ಕೂಲರ್‍ಗಳು, ಶೀತಲಕೇಂದ್ರಗಳು, ಡೇರಿಗಳು, ಪಶು ಆಹಾರ ಘಟಕಗಳು, ನಂದಿನಿ ವೀರ್ಯಾಣು ಕೇಂದ್ರ, ದ್ರವ ಸಾರಜನಕ ಸರಬರಾಜು  ಹಾಗೂ ತರಬೇತಿ ಕೇಂದ್ರಗಳನ್ನು ಸ್ಥಾಪಿಸಿ ವಿಸ್ತರಿಸಿ ಬೆಳೆದು ನಿಂತ ಅಗ್ರ ಸಂಸ್ಥೆಯಾಗಿದೆ.
                  `}
               
              </li>

              <li>
              {locale === 'en'
                  ? `                                        The entire system was reconstructed on the model of now well known ANAND pattern
                  dairy cooperative societies. Eight southern districts of Karnataka was considered
                  initially with a target of organizing 1800 Dairy Co-operative Societies, four Milk
                  Unions and processing facilities were set up to the tune of 6.5 lakhs per day by
                  1984.`
                  : `
                

               
          
                  ಆನಂದ್' ಮಾದರಿಯಲ್ಲಿ ಸಹಕಾರ ಸಂಘಗಳನ್ನು ಸ್ಥಾಪಿಸುತ್ತಾ ಮೊದಲಿಗೆ ದಕ್ಷಿಣ ಕರ್ನಾಟಕದ 08 ಜಿಲ್ಲೆಗಳನ್ನೊಳಗೊಂಡು ವಿಸ್ತರಿಸಿದ ಡೇರಿ  ಅಭಿವೃದ್ಧಿ ಚಟುವಟಿಕೆಗಳು, 1800 ಹಾಲು ಉತ್ಪಾದಕರ ಸಹಕಾರ ಸಂಘಗಳ ರಚನೆ, 04 ಜಿಲ್ಲಾ ಹಾಲು ಒಕ್ಕೂಟಗಳ ಸಂಘಟನೆಯಿಂದ ದಿನವಹಿ 6.5 ಲಕ್ಷ ಲೀಟರುಗಳ ಹಾಲು ಸಂಸ್ಕರಿಸುವ ಸಾಮರ್ಥ್ಯದೊಂದಿಗೆ ಹೈನುಗಾರಿಕೆ ಅಭಿವೃದ್ದಿ ಯೋಜನೆ ಪ್ರಾರಂಭಿಸಲಾಯಿತ`}
           
              </li>

              <li>
              {locale === 'en'
                  ? `                                          Under Operation Flood - II &III, project which started in 1984 & 1987 covered the
                  remaining parts of Karnataka. Thirteen milk unions were organized in 175 talukas of
                  all 20 districts then and the field work was extended by organizing more dairy
                  cooperative societies. The processing facilities i.e. chilling centers, milk dairies
                  and powder plants were transferred in phases to the administrative control of
                  respective cooperative milk unions and the activities continued to be implemented by
                  these District Organisations. Additional processing facilities were created &
                  existing facilities augmented every decade with the help of Govt. / Zilla Panchayat
                  and NDDB (Under Perspective Plan) to handle ever increasing milk procurement without
                  declaring milk holidays. The processing facility as exists at 57.40 lakh liters/day
                  is further strengthened.`
                  : `
                

               
                  ಆಪರೇಷನ್ ಫ್ಲಡ್/ ಕ್ಷೀರದಾರೆ ಯೋಜನೆ II ಮತ್ತು III ಅನುಕ್ರಮವಾಗಿ 1984 ಮತ್ತು 1987ರಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿದ್ದು ಡೇರಿ  ಅಭಿವೃದ್ಧಿ ಚಟುವಟಿಕೆಗಳನ್ನು ರಾಜ್ಯದ ಅಂದಿನ ಎಲ್ಲಾ 20 ಜಿಲ್ಲೆಗಳ 175 ತಾಲ್ಲೂಕುಗಳಲ್ಲಿ ಹಮ್ಮಿಕೊಂಡು ಒಟ್ಟಾರೆ 16 ಹಾಲು ಒಕ್ಕೂಟಗಳನ್ನು ಸ್ಥಾಪಿಸುವಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿದೆ. ಹಾಲು ಸಂಸ್ಕರಣಾ ಘಟಕಗಳು, ಶೀತಲ ಕೇಂದ್ರಗಳು, ಹಾಲಿನ ಡೇರಿಗಳು ಹಾಗೂ ಹಾಲಿನ ಪುಡಿ ಘಟಕಗಳನ್ನು ಹಂತ ಹಂತವಾಗಿ ಈ ಜಿಲ್ಲಾ ಹಾಲು ಒಕ್ಕೂಟಗಳಿಗೆ ವರ್ಗಾಯಿಸಿ ಡೇರಿ  ಚಟುವಟಿಕೆಗಳನ್ನು ಮುಂದುವರಿಸಿದೆ. ಗ್ರಾಮೀಣ ಪ್ರದೇಶದಲ್ಲಿ ಉತ್ಪಾದನೆಯಾದ ಹೆಚ್ಚುವರಿ ಹಾಲನ್ನು ರೈತರಿಂದ ತೆಗೆದುಕೊಳ್ಳುತ್ತಾ ಯಾವುದೇ ಕಾರಣಕ್ಕೂ ಹಾಲಿನ ರಜೆ ನೀಡದಂತೆ ಇರಲು ಹಂತ ಹಂತವಾಗಿ ಸರ್ಕಾರ/ಜಿಲ್ಲಾ ಪಂಚಾಯತ್/ಎನ್.ಡಿ.ಡಿ.ಬಿ. ನೆರವಿನಿಂದ ಶೀತಲೀಕರಣ ಸಾಮರ್ಥ್ಯ ಹಾಗೂ ಸಂಸ್ಕರಣಾ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಪ್ರತಿ ದಶಕದಲ್ಲೂ ಹೆಚ್ಚು ಮಾಡಲಾಗಿದೆ. ಪ್ರಸ್ತುತ ರಾಜ್ಯದಲ್ಲಿ ಪ್ರತಿದಿನದ ಸಂಸ್ಕರಣಾ ಸಾಮರ್ಥ್ಯವು 57.40 ಲಕ್ಷ ಲೀಟರ್‍ಗಳಿದ್ದು ಸದ್ಯದಲ್ಲೇ ಇದನ್ನು ಇನ್ನೂ ಬಲಪಡಿಸುವ ಕಾರ್ಯಕ್ರಮ ಹಮ್ಮಿಕೊಳ್ಳಲಾಗಿದೆ.`}
            
              </li>
            </ul>
          </div>

          <div className="w-full   flex justify-center items-center">
            <img src={CowImg2.src} className=" w-full h-full" />
          </div>
        </div>

        

        {/* <img src={MilkBottomImg.src} className="w-full h-full " /> */}
      </section>

      <Footer />
    </div>
  );
}

export default MissionVission;
