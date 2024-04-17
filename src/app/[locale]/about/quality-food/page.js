'use client';
import React, { useEffect, useState } from 'react';
import organizationHero from '@/images/about/organization-chart/organization-hero.png';
import milkRight from '@/images/about/organization-chart/milk-right.png';
import { mileStone } from '@/configtext/milestone';
import qualityImg from '@/images/about/organization-chart/quality.jpg';
import MilkBottomImg from '@/images/about/mission/milk-bottom.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import useApi from '@/hooks/useApi';
import { useMyContext } from '@/context/headerContext';
 
function OrganizationChart() {
  const locale = useParams().locale;
  const axios= useApi()
  const [banner,setBanner]=useState([])
  const { isScroll, setIsScroll, id, setId } = useMyContext();
  useEffect(()=>{
    (
      async()=>{
        const {data:banner}=await axios.get('/api/food-safety')
        console.log(banner.data)
        setBanner(banner?.data)
      }
    )()
  },[])
  return (
    <div className={`w-full h-full absolute   z-[-1] ${isScroll ? 'top-36' : ''}  `}>
    <section className={`w-full h-[700px] pt-28 relative  grid place-items-center `}>
     {/* <img src={banner?banner[0]:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
      */}
     <video
       src={banner?.attributes?.banner?.data?.attributes?.url}
       muted
       autoPlay
       loop
       playsInline
       className={`w-full  h-full    object-cover absolute top-0 z-[-1] ${
         isScroll ? 'h-[400px]' : ''
       } `}
     />
   </section>

      <section className=" relative w-full max-w-7xl m-auto h-auto pt-10  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          

          {locale === 'en' ? (
            <div className="w-full flex flex-col justify-center items-start  p-2 ">
              <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white  ">Quality And Food Safety</h1>

              <p className="text-lg text-justify p-2">
                During the last ten years, the Federation is giving greater emphasis on procuring
                quality milk from DCSs under the concept of “Quality Excellence from Cow to
                Consumer.” Many Clean Milk Production (CMP) initiatives have been implemented at all
                the stages of procurement, processing and marketing. Among these CMP initiatives,
                noteworthy initiative is the setting up of Community Milking Parlours in villages.
              </p>

              <p className="text-lg text-justify p-2">
                The KMF is forerunner to introduce this innovative technological initiative for
                bringing about revolutionary improvement in quality of milk collected in DCSs. This
                system has several advantages such as elimination of mastitis in milch animals and
                improvement of productivity. The milk from milking machines, collected through
                Automatic Computerized Milk Collection Units is chilled directly in Bulk Milk
                Coolers. This chilled raw milk, untouched and unadulterated by human hands, has very
                high microbiological quality, comparable to international standards. This high
                quality milk is being utilized for manufacturing high quality value added milk
                products, for both domestic as well as international markets.
              </p>

              <ul className="flex flex-col space-y-3 p-6 w-full h-full justify-center items-center list-disc text-justify text-lg  md:justify-normal md:items-start">
                <li>Other Clean Milk Production (CMP) Initiatives include: -</li>

                <li>
                  Training of milk producers on modern dairy husbandry practices and Clean Milk
                  Production (CMP).
                </li>

                <li>
                  Providing Stainless Steel utensils, antiseptic solutions for udder cleaning on pre
                  and post milking, etc. to producers.
                </li>

                <li>
                  Training to DCS staff and officers of the Unions on Clean Milk Production (CMP).
                </li>

                <li>
                  Replacing Aluminium milk cans and collection vessels with Stainless Steel –304.
                </li>

                <li>Posters, documentary films and booklets on Clean Milk Production (CMP).</li>
              </ul>


           <div className="w-full h-full flex space-y-3 flex-col p-3">
          <h1 className="text-2xl text-primary-main ">1. Home </h1>
          <p className="text-sm">
          Central Quality Assurance Laboratory (CQAL), KMF is an analytical laboratory at KMF Premises, Bengaluru. CQAL follows a quality management system based on ISO 17025:2017 and accredited for the same from NABL vide certificate Number (TC-7084) to ensure operational integrity and confidentiality.
 
          </p>


          <p className="text-sm">
          With state-of-the-art equipment and qualified technical staff, CQAL offers a range of reliable and accurate analytical services in the field of Milk and dairy products, food and animal feed at an affordable cost to Units and Unions of KMF.
 
          </p>

          <p className="text-sm">
          CQAL continually assesses its analytical competence by participating in the Proficiency Test (PT) programmes conducted at national and international levels.
 
 
          </p>

          <p className="text-sm">
          CQAL follows regular quality control programmes to verify the accuracy of analytical methodologies by including in-house quality checks at various steps of analysis.

          </p>



        </div>



        <div className="w-full h-full flex space-y-3 flex-col p-3">
          <h1 className="text-2xl text-primary-main "> Testing Methodologies followed at CQAL: </h1>
          <p className="text-sm">
          CQAL follows standard analytical methods acceptable by regulatory agencies, including those published by:

 
          </p>
          <ul className=" list-disc p-3">
                <li>Bureau of Indian Standards (BIS) –  <a href='https://standardsbis.bsbedge.com/'>Bureau of Indian Standards - e-Sale (bsbedge.com)</a></li>

                <li>Food Safety and Standards of India (FSSAI)  –  <a href='https://standardsbis.bsbedge.com/'> FSSAI</a></li>
                <li>International Organisation for Standardisation (ISO)   –  <a href='https://standardsbis.bsbedge.com/'> International Organisation for Standardisation (ISO) </a></li>

                 
                <li>Association of Official Analytical Chemists (AOAC)   –  <a href='https://standardsbis.bsbedge.com/'>  AOAC INTERNATIONAL - In Food & Agriculture, We Set the Standard </a></li>

                <li>International Dairy Federation (IDF)  –  <a href='https://standardsbis.bsbedge.com/'>  IDF - Global Dairy Expertise Since 1903 (fil-idf.org) </a></li>

                <li>CQAL also follows the methods published in National and International journals, after validation and verifications. -</li>
                <li>In-house validated and approved methods.</li>
              </ul>


 



        </div>
        
        
        
        
        
        <div className="w-full h-full flex space-y-3 flex-col p-3">
          <h1 className="text-2xl text-primary-main ">2. Facilities: </h1>
          <h1 className="text-2xl text-primary-main ">Chemical Laboratory: </h1>


          <p className="text-sm">
          Laboratory has state-of-the-art equipment to cater to the needs of dairy, feed and food industry for quality analysis and regulatory compliance. Laboratory continuously endeavours to enhance analytical capacity and upgrades infrastructure to serve milk unions and units of KMF.
 
          </p>

          <p className="text-sm">
          The major instruments of chemical laboratory are indicated as below:-
 
          </p>

          <ul className='list-decimal p-5'>

            <li>Gas Chromatography Mass Spectrometry (GC-MS/MS)</li>
            <li> Liquid Chromatography Mass Spectrometry (LC-MS/MS)</li>
            <li>Induced Coupled Plasma Mass Spectrometer (ICP-MS)</li>
            <li>Microwave digester</li>
            <li>High Performance Liquid Chromatography (HPLC)</li>
            <li>Automatic Fibre Analyser</li>
            <li>Automatic Fat Analyser</li>
            <li>Automatic Protein Analyser</li>
            <li>Multipurpose Ion Selective Electrode (ISE) Meter</li>
            <li>UV-Spectrophotometer</li>
            <li>Refractometer</li>
            <li>FTIR based Milk Analyser</li>

            <li>Centrifuge</li>

            <li>Electronic weighing balance</li>

            <li>Hot air oven</li>

            <li>Glassware Washer</li>

            <li>Ultrapure Water Purification System</li>
            <li>Muffle furnace</li>

            <li>Shaking Incubator</li>

            <li>Heating water bath</li>

            <li>Nitrogen Evaporator</li>

            <li>Refrigerated Centrifuge.</li>

            <li>pH Meter</li>

            <li>Viscometer</li>
            <li>Vacuum Oven</li>

            <li>Turbidity Meter
</li>

            <li>Conductivity Meter</li>




          </ul>


          <h1 className="text-2xl text-primary-main ">Microbiological Laboratory:</h1>

          <p className="text-sm">
          The microbiology laboratory of CQAL has all the instruments to meet the requirements of industry and regulatory bodies for testing microbial load and pathogens.
 
          </p>

          <ul className='list-decimal p-5'>

            <li>Biosafety Cabinet</li>
            <li>Bacteria and Somatic Cell analyser</li>
            <li>Incubators – Bacteriological & BOD</li>

            <li>Low temperature Incubators</li>
            <li>Stability Chamber</li>
            <li>Water bath</li>
            <li>Sample Dilutor</li>
            <li>Sample Homogeniser</li>
            <li>Laminar air flow unit</li>
            <li>Microscope</li>
            <li>Pathogen Detection System</li>
            <li>Weighing Balance</li>
            <li>Autoclave.</li>













          </ul>

        </div>



        <div className="w-full h-full flex space-y-3 flex-col p-3">
          <h1 className="text-2xl text-primary-main ">3 Accreditations: </h1>
   


          <p className="text-sm">
          CQAL has been accredited as per the ISO/IEC 17025 by the National Accreditation Board for Testing and Calibration Laboratories (NABL) in 2017 and the accreditation is renewed periodically for chemical testing.
 
          </p>

          <p className="text-sm">
         
NABL Certificate
Scope of Accreditation

 
          </p>

          


        

        </div>



        <div className="w-full h-full flex space-y-3 flex-col p-3">
          <h1 className="text-2xl text-primary-main ">4. Services Offered: </h1>
   


            <table className='table-fixed  border-spacing-y-2	 border-collapse border-black border      w-full'>
              <thead className='text-left'>
                <th className='p-2   border-r border-black'>Sr.No</th>
                <th className='p-2   border-r border-black'>Product Name</th>
                <th className='p-2   border-r border-black'>Services</th>

              </thead>

              <tbody className='text-left  text-md'>
                <tr className="w-full  border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">1.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Milk and Milk Products</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>Quality & Compositional Parameters</li>
                      <li>Adulteration in Milk & Ghee</li>
                      <li>Minerals</li>
                      <li>Fatty Acid Composition</li>
                      <li> Pesticide Residues</li>
                      <li> Antibiotic Residue</li>
                      <li> Heavy Metals</li>
                      <li>  Microbial Parameters</li>
                      <li>  Aflatoxin M1</li>



                       




                      
                    </ul>
                  </td>

                </tr>




      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">2.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Cattle Feed and Feed Ingredients</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>Compositional Parameters</li>
                      <li>Aflatoxin B1/B2/G1/G2</li>
                      
                    </ul>
                  </td>

                </tr>



      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">3.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Mineral Mixture</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>	
 Compositional Parameters</li>
                     
                      
                    </ul>
                  </td>

                </tr>




      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">4.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Oils and Fats</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>	
                      General Parameters</li>

                      <li>	
                      Fatty Acid Composition</li>
                     
                      
                    </ul>
                  </td>

                </tr>




      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">5.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Water</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>	
                      General Parameters</li>

                      <li>	
                      Microbial Parameters</li>
                     
                      
                    </ul>
                  </td>

                </tr>


      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">6.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Spices and Condiments</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>	
                      General Parameters</li>

                 
                     
                      
                    </ul>
                  </td>

                </tr>




      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">7.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Cereals & Cereal Products</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>	
                      General Parameters</li>

                      <li>	
                      Heavy Metals</li>
                      <li>	
                      Microbial Parameters</li>

                 
                     
                      
                    </ul>
                  </td>

                </tr>



      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">8.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Ready to Eat foods</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>	
                      General Parameters</li>

                      <li>	
                      Heavy Metals</li>
                      <li>	
                      Microbial Parameters</li>
                      <li>	
                      Pesticide Residues</li>

                 
                     
                      
                    </ul>
                  </td>

                </tr>





      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">9.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Nuts and Nut Products</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>	
                      General Parameters</li>

                      <li>	
                      Heavy Metals</li>
                      <li>	
                      Microbial Parameters</li>
                      <li>	
                      Pesticide Residues</li>

                      <li>	
                      Aflatoxin / Mycotoxin</li>

                 
                     
                      
                    </ul>
                  </td>

                </tr>


      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">10.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Proprietary Food</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>	
                      General Parameters</li>

                      <li>	
                      Heavy Metals</li>
                      <li>	
                      Microbial Parameters</li>
                      <li>	
                      Pesticide Residues</li>

                

                 
                     
                      
                    </ul>
                  </td>

                </tr>



      <tr className="w-full border-2 border-black ">
                   <td className=" p-2 text-md font-content border-r border-black ">11.</td>
                   <td className=" p-2 text-md font-content border-r border-black ">Bakery Products</td>
                   <td className=" p-2 text-md font-content border-r border-black ">
                    <ul className='list-disc p-3'>
                      <li>	
                      General Parameters</li>

                      <li>	
                      Heavy Metals</li>
                      <li>	
                      Microbial Parameters</li>
                      <li>	
                      Mycotoxins</li>

                

                 
                     
                      
                    </ul>
                  </td>

                </tr>



              </tbody>
            </table>

          


        

        </div>


        <div className="w-full h-full flex space-y-3 flex-col p-3">
          <h1 className="text-2xl text-primary-main ">
Quality & Compositional Parameters: </h1>
   


         <ul className='list-decimal p-4'>
          <li>Total Ash</li>
          <li>Acid value of extracted fath</li>
          <li>Acidity as Oleic Acid</li>
          <li>Acidity as Lactic acid</li>
          <li>Acidity of extracted fat
</li>
          <li>Alcoholic acidity
</li>
          <li>Bulk density</li>
          <li>Viscosity</li>
          <li>Butyrorefractrometer reading</li>
          <li>Carbohydrates</li>
          <li>Concentration of syrup</li>
          <li>Crude Fiber</li>
          <li>Curd content</li>
          <li>Detection of Sesame Oil (Baudouin Test)</li>
          <li>Fat</li>
          <li>Free fatty acids</li>
          <li>Insolubility index</li>
          <li>lodine value</li>
          <li>Lactose</li>
          <li>Leavening Index</li>
          <li>Milk Fat</li>
          <li>Moisture</li>
          <li>Moisture</li>

          <li>Over run
</li>

          <li>Peroxide value</li>

          <li>pH</li>

          <li>Polenske value</li>
          <li>Protein</li>
          <li>Refractive index</li>
          <li>Richerrt-Mieschal value</li>
          <li>RM Value of extracted fat</li>
          <li>Salt</li>
          <li>Saponification value</li>
          <li>Solids Not Fat (SNF)</li>
          <li> Scorched Particles</li>
          <li>Starch</li>
          <li>Sterility (pH & acidity monitored upon 7 days incubation)</li>
          <li>Sucrose</li>
          <li>Syrup acidity</li>
          <li>Total Fat</li>
          <li>Total solids</li>
          <li>Turbidity</li>
          <li>Urea</li>
          <li>Wettability</li>
          <li>Creaming Index</li>



         </ul>

          


        

        </div>

            </div>
          ) : 
          
          
          (
            <div className="w-full flex flex-col justify-center shadow-md items-start ">
              <h1 className="text-2xl font-heading text-center w-full shadow-md p-3 shadow-black bg-primary-gradient  text-white">
ಗುಣಮಟ್ಟ ಮತ್ತು ಆಹಾರ ಸುರಕ್ಷತೆ</h1>

              <p className="text-lg text-justify p-2">
              ಕಳೆದ ಹತ್ತು ವರ್ಷಗಳಲ್ಲಿ ಒಕ್ಕೂಟವು ಸಂಗ್ರಹಣೆಗೆ ಹೆಚ್ಚಿನ ಒತ್ತು ನೀಡುತ್ತಿದೆ
                ಕ್ವಾಲಿಟಿ ಎಕ್ಸಲೆನ್ಸ್ ಫ್ರಂ ಹಸು ಎಂಬ ಪರಿಕಲ್ಪನೆಯಡಿಯಲ್ಲಿ ಡಿಸಿಎಸ್‌ಗಳಿಂದ ಗುಣಮಟ್ಟದ ಹಾಲು
                ಗ್ರಾಹಕ. ಅನೇಕ ಶುದ್ಧ ಹಾಲು ಉತ್ಪಾದನೆ (CMP) ಉಪಕ್ರಮಗಳನ್ನು ಎಲ್ಲಾ ಕಾರ್ಯಗತಗೊಳಿಸಲಾಗಿದೆ
                ಸಂಗ್ರಹಣೆ, ಸಂಸ್ಕರಣೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆಯ ಹಂತಗಳು. ಈ CMP ಉಪಕ್ರಮಗಳಲ್ಲಿ,
                ಗಮನಾರ್ಹ ಉಪಕ್ರಮವೆಂದರೆ ಹಳ್ಳಿಗಳಲ್ಲಿ ಸಮುದಾಯ ಮಿಲ್ಕಿಂಗ್ ಪಾರ್ಲರ್‌ಗಳನ್ನು ಸ್ಥಾಪಿಸುವುದು.
              </p>

              <p className="text-lg text-justify p-2">
              KMF ಈ ನವೀನ ತಾಂತ್ರಿಕ ಉಪಕ್ರಮವನ್ನು ಪರಿಚಯಿಸಲು ಮುಂದಾಗಿದೆ
                DCS ಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ಹಾಲಿನ ಗುಣಮಟ್ಟದಲ್ಲಿ ಕ್ರಾಂತಿಕಾರಿ ಸುಧಾರಣೆಯನ್ನು ತರುವುದು. ಈ
                ಈ ವ್ಯವಸ್ಥೆಯು ಹಾಲುಣಿಸುವ ಪ್ರಾಣಿಗಳಲ್ಲಿ ಮಾಸ್ಟಿಟಿಸ್ ಅನ್ನು ತೊಡೆದುಹಾಕುವಂತಹ ಹಲವಾರು ಪ್ರಯೋಜನಗಳನ್ನು ಹೊಂದಿದೆ
                ಉತ್ಪಾದಕತೆಯ ಸುಧಾರಣೆ. ಹಾಲುಕರೆಯುವ ಯಂತ್ರಗಳಿಂದ ಹಾಲನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ
                ಸ್ವಯಂಚಾಲಿತ ಗಣಕೀಕೃತ ಹಾಲು ಸಂಗ್ರಹಣಾ ಘಟಕಗಳನ್ನು ನೇರವಾಗಿ ಬೃಹತ್ ಹಾಲಿನಲ್ಲಿ ತಂಪಾಗಿಸಲಾಗುತ್ತದೆ
                ಕೂಲರ್ಗಳು. ಈ ಶೀತಲವಾಗಿರುವ ಹಸಿ ಹಾಲು, ಮಾನವ ಕೈಗಳಿಂದ ಮುಟ್ಟದ ಮತ್ತು ಕಲಬೆರಕೆ ಮಾಡದೆ, ತುಂಬಾ ಹೊಂದಿದೆ
                ಹೆಚ್ಚಿನ ಸೂಕ್ಷ್ಮ ಜೀವವಿಜ್ಞಾನದ ಗುಣಮಟ್ಟ, ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಾನದಂಡಗಳಿಗೆ ಹೋಲಿಸಬಹುದು. ಈ ಹೆಚ್ಚಿನ
                ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಮೌಲ್ಯವರ್ಧಿತ ಹಾಲು ಉತ್ಪಾದನೆಗೆ ಗುಣಮಟ್ಟದ ಹಾಲನ್ನು ಬಳಸಲಾಗುತ್ತಿದೆ
                ಉತ್ಪನ್ನಗಳು, ದೇಶೀಯ ಹಾಗೂ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ.
              </p>

              <ul className="flex flex-col space-y-3 p-6 w-full h-full justify-center items-center list-disc text-justify text-lg  md:justify-normal md:items-start">
                <li>
ಇತರ ಶುದ್ಧ ಹಾಲು ಉತ್ಪಾದನೆ (CMP) ಉಪಕ್ರಮಗಳು ಸೇರಿವೆ: -</li>

                <li>
               
ಆಧುನಿಕ ಡೇರಿ ಸಾಕಣೆ ಪದ್ಧತಿಗಳು ಮತ್ತು ಶುದ್ಧ ಹಾಲಿನ ಬಗ್ಗೆ ಹಾಲು ಉತ್ಪಾದಕರಿಗೆ ತರಬೇತಿ
                  ಉತ್ಪಾದನೆ (CMP).
                </li>

                <li>
                ಸ್ಟೇನ್ಲೆಸ್ ಸ್ಟೀಲ್ ಪಾತ್ರೆಗಳನ್ನು ಒದಗಿಸುವುದು, ಕೆಚ್ಚಲು ಮುಂಚಿತವಾಗಿ ಸ್ವಚ್ಛಗೊಳಿಸಲು ನಂಜುನಿರೋಧಕ ಪರಿಹಾರಗಳು
                  ಮತ್ತು ನಂತರ ಹಾಲುಕರೆಯುವುದು, ಇತ್ಯಾದಿಗಳನ್ನು ಉತ್ಪಾದಕರಿಗೆ.
                </li>

                <li>
               
ಶುದ್ಧ ಹಾಲು ಉತ್ಪಾದನೆ (CMP) ಕುರಿತು ಒಕ್ಕೂಟಗಳ DCS ಸಿಬ್ಬಂದಿ ಮತ್ತು ಅಧಿಕಾರಿಗಳಿಗೆ ತರಬೇತಿ.
                </li>

                <li>
                ಅಲ್ಯೂಮಿನಿಯಂ ಹಾಲಿನ ಕ್ಯಾನ್‌ಗಳು ಮತ್ತು ಸಂಗ್ರಹಣಾ ಪಾತ್ರೆಗಳನ್ನು ಸ್ಟೇನ್‌ಲೆಸ್ ಸ್ಟೀಲ್ -304 ನೊಂದಿಗೆ ಬದಲಾಯಿಸುವುದು.
                </li>

                <li>
ಕ್ಲೀನ್ ಮಿಲ್ಕ್ ಪ್ರೊಡಕ್ಷನ್ (CMP) ಕುರಿತ ಪೋಸ್ಟರ್‌ಗಳು, ಸಾಕ್ಷ್ಯಚಿತ್ರಗಳು ಮತ್ತು ಕಿರುಪುಸ್ತಕಗಳು.304.</li>
              </ul>
            </div>
          )}
        </div>

        <img src={MilkBottomImg.src} className="w-full h-full" />
      </section>

      <Footer />
    </div>
  );
}

export default OrganizationChart;


 