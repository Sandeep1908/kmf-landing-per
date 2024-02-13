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
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={evolutionImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>

      <section className="w-full h-auto pt-10  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5  lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col justify-center items-center shadow-md ">
            <h1 className="text-2xl text-primary-main uppercase  p-2">
              {locale === 'en' ? 'Mission & Vision' : 'ದೃಷ್ಟಿ'}
            </h1>

            <ul className="flex flex-col space-y-5 p-6 w-full h-full justify-center items-center list-disc text-justify text-sm  md:justify-normal md:items-start">
              <li>
                {locale === 'en'
                  ? `    To march forward with a missionary zeal which will make KMF a trailblazer of
                exemplary performance and achievements beckoning other Milk Federations in the
                country in pursuit of total emulation of its good deeds.`
                  : `
                KMF ಅನ್ನು ಟ್ರಯಲ್‌ಬ್ಲೇಜರ್ ಮಾಡುವ ಮಿಷನರಿ ಉತ್ಸಾಹದಿಂದ ಮುನ್ನಡೆಯಲು
                                ಇತರ ಹಾಲು ಒಕ್ಕೂಟಗಳನ್ನು ಕೈಬೀಸಿ ಕರೆಯುವ ಅನುಕರಣೀಯ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಸಾಧನೆಗಳು
                                ತನ್ನ ಒಳ್ಳೆಯ ಕಾರ್ಯಗಳ ಸಂಪೂರ್ಣ ಅನುಕರಣೆಯ ಅನ್ವೇಷಣೆಯಲ್ಲಿ ದೇಶ.`}
              </li>

              <li>
                {locale === 'en'
                  ? ` To ensure prosperity of the rural Milk producers who are ultimate owners of the
                Federation.`
                  : `
                ಇದರ ಅಂತಿಮ ಮಾಲೀಕರಾಗಿರುವ ಗ್ರಾಮೀಣ ಹಾಲು ಉತ್ಪಾದಕರ ಏಳಿಗೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು
                                ಫೆಡರೇಶನ್.`}
              </li>

              <li>
                {locale === 'en'
                  ? ` To promote producer oriented viable cooperative society to impart an impetus to the
                rural income, dairy productivity and rural employment.`
                  : `
                
ಉತ್ಪಾದಕ ಆಧಾರಿತ ಕಾರ್ಯಸಾಧ್ಯವಾದ ಸಹಕಾರಿ ಸಂಘವನ್ನು ಉತ್ತೇಜಿಸಲು ಪ್ರಚೋದನೆಯನ್ನು ನೀಡಲು
ಗ್ರಾಮೀಣ ಆದಾಯ, ಡೈರಿ ಉತ್ಪಾದಕತೆ ಮತ್ತು ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ.`}
              </li>

              <li>
                {locale === 'en'
                  ? ` To abridge the gap between price of milk procurement and sale price.`
                  : `
                

                ಹಾಲು ಸಂಗ್ರಹಣೆ ಮತ್ತು ಮಾರಾಟ ದರದ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು.`}
              </li>
              <li>
                {locale === 'en'
                  ? ` To develop business acumen in marketing and trading disciplines so as to serve
                consumers with quality milk, give a fillip to the income of milk producers.`
                  : `
                

                ಸೇವೆ ಸಲ್ಲಿಸಲು ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ವ್ಯಾಪಾರ ವಿಭಾಗಗಳಲ್ಲಿ ವ್ಯಾಪಾರ ಕುಶಾಗ್ರಮತಿಯನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು
                ಗುಣಮಟ್ಟದ ಹಾಲನ್ನು ಹೊಂದಿರುವ ಗ್ರಾಹಕರು, ಹಾಲು ಉತ್ಪಾದಕರ ಆದಾಯವನ್ನು ತುಂಬುತ್ತಾರೆ.`}
              </li>

              <li>
                {locale === 'en'
                  ? `     
                To compete with MNCs and Private Dairies with better quality of milk and milk
                products and in the process sustain invincibility of cooperatives.`
                  : `
                

        
ಹಾಲು ಮತ್ತು ಹಾಲಿನ ಉತ್ತಮ ಗುಣಮಟ್ಟದ MNCಗಳು ಮತ್ತು ಖಾಸಗಿ ಡೈರಿಗಳೊಂದಿಗೆ ಸ್ಪರ್ಧಿಸಲು
ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಸಹಕಾರಿಗಳ ಅಜೇಯತೆಯನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತವೆ.`}
              </li>

             
             
              <li>
                {locale === 'en'
                  ? `     
                  Heralding economic, social and cultural prosperity in the lives of our milk producer
                  members by promoting vibrant, self-sustaining and holistic cooperative dairy
                  development in Karnataka State.`
                  : `
                

        
                  ನಮ್ಮ ಹಾಲು ಉತ್ಪಾದಕರ ಜೀವನದಲ್ಲಿ ಆರ್ಥಿಕ, ಸಾಮಾಜಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಏಳಿಗೆಗೆ ನಾಂದಿ ಹಾಡುವುದು
                  ರೋಮಾಂಚಕ, ಸ್ವಾವಲಂಬಿ ಮತ್ತು ಸಮಗ್ರ ಸಹಕಾರಿ ಡೈರಿಯನ್ನು ಉತ್ತೇಜಿಸುವ ಮೂಲಕ ಸದಸ್ಯರು
                  ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಅಭಿವೃದ್ಧಿ`}
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
            <h1 className="text-2xl text-primary-main uppercase p-2">
              {locale === 'en'
                ? ` Objectives`
                : `
                

               
                ಉದ್ದೇಶಗಳು`}{' '}
            </h1>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `       KMF is a Cooperative Apex Body in the State of Karnataka representing organisations of
              milk producer and implementing all round dairy development activities to achieve the
              following objectives:`
                : `
                

               
              KMF ಸಂಸ್ಥೆಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುವ ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಸಹಕಾರಿ ಅಪೆಕ್ಸ್ ಬಾಡಿ ಆಗಿದೆ
              ಹಾಲು ಉತ್ಪಾದಕ ಮತ್ತು ಸಾಧಿಸಲು ಎಲ್ಲಾ ಸುತ್ತಿನ ಡೈರಿ ಅಭಿವೃದ್ಧಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಅನುಷ್ಠಾನಗೊಳಿಸುವುದು
              ಕೆಳಗಿನ ಉದ್ದೇಶಗಳು:`}
            </p>

            <ul className="flex flex-col space-y-3 p-6 w-full h-full justify-center items-center list-disc text-justify text-sm  md:justify-normal md:items-start">
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
                

               
          
                ನಗರ ಪ್ರದೇಶದ ಗ್ರಾಹಕರಿಗೆ ಗುಣಮಟ್ಟದ ಹಾಲು ಮತ್ತು ಇತರ ಪ್ರಮುಖ ಡೈರಿ ಉತ್ಪನ್ನಗಳನ್ನು ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡುವುದು.`}
              </li>

              <li>
              {locale === 'en'
                  ? `                To build & develop village level institutions as cooperative model units to manage
                  the dairy activities.`
                  : `
                

               
          
ಗ್ರಾಮ ಮಟ್ಟದ ಸಂಸ್ಥೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಸಹಕಾರಿ ಮಾದರಿ ಘಟಕಗಳಾಗಿ ನಿರ್ಮಿಸಲು ಮತ್ತು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು
ಡೈರಿ ಚಟುವಟಿಕೆಗಳು.`}
            
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

            <p className="text-sm text-justify p-2">
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
            <h1 className="text-2xl text-primary-main uppercase p-2">
            {locale === 'en'
                  ? `                    Evolution`
                  : `
                

               
          

                  ವಿಕಾಸ.`}</h1>

            <ul className="flex flex-col space-y-3 p-6 w-full h-full justify-center items-center list-disc text-justify text-sm  md:justify-normal md:items-start">
              <li>
              {locale === 'en'
                  ? `                               Karnataka Milk Federation which is most popular as KMF, evolved itself as a premier
                  and most profitable dairy farmers organization in the State of Karnataka.`
                  : `
                

               
          

                  KMF ಎಂದು ಹೆಚ್ಚು ಜನಪ್ರಿಯವಾಗಿರುವ ಕರ್ನಾಟಕ ಹಾಲು ಒಕ್ಕೂಟವು ತನ್ನನ್ನು ತಾನೇ ಪ್ರಧಾನವಾಗಿ ವಿಕಸನಗೊಳಿಸಿತು
                ಮತ್ತು ಕರ್ನಾಟಕ ರಾಜ್ಯದ ಅತ್ಯಂತ ಲಾಭದಾಯಕ ಡೈರಿ ರೈತರ ಸಂಸ್ಥೆ..`}
                
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
                

               
          
                  ವಿಶ್ವಬ್ಯಾಂಕ್ ನೆರವಿನ ಡೈರಿ ಅಭಿವೃದ್ಧಿಯನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು 1975 ರಲ್ಲಿ ಏಜೆನ್ಸಿಯಾಗಿ
                  ಯೋಜನೆಗಳು,ಕರ್ನಾಟಕ ಡೈರಿ ಡೆವಲಪ್ಮೆಂಟ್ ಕಾರ್ಪೊರೇಶನ್ (ಕೆಡಿಡಿಸಿ) ರಚನೆಯಾಯಿತು, ಕಂಪನಿಯು ಬೆಳೆಯಿತು
                  ಸ್ವತಃ ವೇಗವಾಗಿ ಮತ್ತು ಅದು ಹೊಸ ಗ್ರಾಮೀಣ ಆರ್ಥಿಕ ಚಟುವಟಿಕೆಯ ರೆಕ್ಕೆಗಳನ್ನು ಹರಡುತ್ತದೆ -
                  ರಾಜ್ಯದೆಲ್ಲೆಡೆ ಹೈನುಗಾರಿಕೆ, ಅಪೆಕ್ಸ್ ಸಹಕಾರಿ ಸಂಸ್ಥೆಯ ಹುಟ್ಟು ರೂಪ ಪಡೆಯಿತು
                  KMF 1984 ರಲ್ಲಿ 13 ಜಿಲ್ಲಾ ಸಹಕಾರ ಹಾಲು ಒಕ್ಕೂಟಗಳೊಂದಿಗೆ ಇಡೀ ರಾಜ್ಯವನ್ನು ಒಳಗೊಂಡಿದೆ
                  ಡೈರಿ ಚಟುವಟಿಕೆಯ ವಿವಿಧ ನಿಯತಾಂಕಗಳನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸುವುದು - ಡೈರಿ ಸಂಘಟನೆ
                  ಸಹಕಾರ ಸಂಘಗಳು, ಹಾಲಿನ ಮಾರ್ಗಗಳು, ಪಶುವೈದ್ಯಕೀಯ ಸೇವೆಗಳು, ಎರಡು ಪಾಳಿಯಲ್ಲಿ ಹಾಲು ಸಂಗ್ರಹಣೆ
                  ದಿನದ, ಶೀತಲೀಕರಣ, ಹಾಲಿನ ಸಂಸ್ಕರಣೆ, ಹಾಲಿನ ವಿತರಣೆ ಮತ್ತು ಸಹ
                  ಜಾನುವಾರು ಮೇವಿನ ಸಸ್ಯಗಳ ಸ್ಥಾಪನೆ, ನಂದಿನಿ ವೀರ್ಯ ಕೇಂದ್ರ, ದ್ರವ ಸಾರಜನಕ ಪೂರೈಕೆ,
                  ತರಬೇತಿ ಕೇಂದ್ರಗಳು - ಅದರ ಮುಖ್ಯ ವಾಸ್ತವ್ಯ.`}
               
              </li>

              <li>
              {locale === 'en'
                  ? `                                        The entire system was reconstructed on the model of now well known ANAND pattern
                  dairy cooperative societies. Eight southern districts of Karnataka was considered
                  initially with a target of organizing 1800 Dairy Co-operative Societies, four Milk
                  Unions and processing facilities were set up to the tune of 6.5 lakhs per day by
                  1984.`
                  : `
                

               
          
                  ಇಡೀ ವ್ಯವಸ್ಥೆಯನ್ನು ಈಗ ತಿಳಿದಿರುವ ಆನಂದ್ ಮಾದರಿಯ ಮಾದರಿಯಲ್ಲಿ ಪುನರ್ನಿರ್ಮಿಸಲಾಯಿತು
                  ಡೈರಿ ಸಹಕಾರ ಸಂಘಗಳು. ಕರ್ನಾಟಕದ ಎಂಟು ದಕ್ಷಿಣ ಜಿಲ್ಲೆಗಳನ್ನು ಪರಿಗಣಿಸಲಾಗಿದೆ
                  ಆರಂಭದಲ್ಲಿ 1800 ಡೈರಿ ಸಹಕಾರ ಸಂಘಗಳು, ನಾಲ್ಕು ಹಾಲು ಸಂಘಟಿಸುವ ಗುರಿಯೊಂದಿಗೆ
                  ಸಂಘಗಳು ಮತ್ತು ಸಂಸ್ಕರಣಾ ಸೌಲಭ್ಯಗಳನ್ನು ದಿನಕ್ಕೆ 6.5 ಲಕ್ಷದವರೆಗೆ ಸ್ಥಾಪಿಸಲಾಯಿತು
                  1984.`}
           
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
                

               
                  ಆಪರೇಷನ್ ಫ್ಲಡ್ - II & III ಅಡಿಯಲ್ಲಿ, 1984 ಮತ್ತು 1987 ರಲ್ಲಿ ಪ್ರಾರಂಭವಾದ ಯೋಜನೆಯು ಒಳಗೊಂಡಿದೆ
                  ಕರ್ನಾಟಕದ ಉಳಿದ ಭಾಗಗಳು. ನ 175 ತಾಲೂಕುಗಳಲ್ಲಿ 13 ಹಾಲು ಒಕ್ಕೂಟಗಳನ್ನು ಆಯೋಜಿಸಲಾಗಿದೆ
                  ಎಲ್ಲಾ 20 ಜಿಲ್ಲೆಗಳು ಮತ್ತು ಹೆಚ್ಚಿನ ಹೈನುಗಾರಿಕೆಯನ್ನು ಆಯೋಜಿಸುವ ಮೂಲಕ ಕ್ಷೇತ್ರ ಕಾರ್ಯವನ್ನು ವಿಸ್ತರಿಸಲಾಯಿತು
                  ಸಹಕಾರ ಸಂಘಗಳು. ಸಂಸ್ಕರಣಾ ಸೌಲಭ್ಯಗಳು ಅಂದರೆ ಶೀತಲೀಕರಣ ಕೇಂದ್ರಗಳು, ಹಾಲಿನ ಡೈರಿಗಳು
                  ಮತ್ತು ಪುಡಿ ಸಸ್ಯಗಳನ್ನು ಹಂತಗಳಲ್ಲಿ ಆಡಳಿತಾತ್ಮಕ ನಿಯಂತ್ರಣಕ್ಕೆ ವರ್ಗಾಯಿಸಲಾಯಿತು
                  ಆಯಾ ಸಹಕಾರಿ ಹಾಲು ಒಕ್ಕೂಟಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸುವುದನ್ನು ಮುಂದುವರಿಸಲಾಗಿದೆ
                  ಈ ಜಿಲ್ಲಾ ಸಂಸ್ಥೆಗಳು. ಹೆಚ್ಚುವರಿ ಸಂಸ್ಕರಣಾ ಸೌಲಭ್ಯಗಳನ್ನು ರಚಿಸಲಾಗಿದೆ &
                  ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಸೌಲಭ್ಯಗಳನ್ನು ಸರ್ಕಾರದ ಸಹಾಯದಿಂದ ಪ್ರತಿ ದಶಕದಲ್ಲಿ ಹೆಚ್ಚಿಸಲಾಗುತ್ತದೆ. / ಜಿಲ್ಲಾ ಪಂಚಾಯತ್
                  ಮತ್ತು NDDB (ಪರ್ಸ್ಪೆಕ್ಟಿವ್ ಪ್ಲಾನ್ ಅಡಿಯಲ್ಲಿ) ಇಲ್ಲದೆ ನಿರಂತರವಾಗಿ ಹೆಚ್ಚುತ್ತಿರುವ ಹಾಲು ಸಂಗ್ರಹಣೆಯನ್ನು ನಿರ್ವಹಿಸಲು
                  ಹಾಲಿನ ರಜಾದಿನಗಳನ್ನು ಘೋಷಿಸುವುದು. 57.40 ಲಕ್ಷ ಲೀಟರ್/ದಿನಕ್ಕೆ ಸಂಸ್ಕರಣಾ ಸೌಲಭ್ಯವಿದೆ
                  ಮತ್ತಷ್ಟು ಬಲಗೊಂಡಿದೆ.`}
            
              </li>
            </ul>
          </div>

          <div className="w-full   flex justify-center items-center">
            <img src={CowImg2.src} className=" w-full h-full" />
          </div>
        </div>

        <img src={MilkBottomImg.src} className="w-full h-full" />
      </section>

      <Footer />
    </div>
  );
}

export default MissionVission;
