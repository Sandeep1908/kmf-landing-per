'use client';
import React from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
function GOI() {
  const { isScroll } = useMyContext();
  const locale = useLocale().locale;
  return (
    <div className={`w-full h-full absolute   z-[-1] ${isScroll ? 'top-36' : ''}  `}>
      <section className={`w-full h-[700px] pt-28 relative  grid place-items-center `}>
        {/* <img src={banner?banner[0]:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
         */}
        <video
          src="/video/precrument.mp4"
          muted
          autoPlay
          loop
          controls
          playsInline
          className={`w-full  h-full    object-cover absolute top-0 z-[-1] ${
            isScroll ? 'h-[400px]' : ''
          } `}
        />
      </section>
      <h1 className="text-2xl w-full mt-5 uppercase p-3 bg-primary-main text-white  shadow-lg relative flex justify-center items-center before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-primary-main  ">
        Government Of India
      </h1>
      <section className=" relative w-full flex flex-col space-y-5 mb-10 max-w-7xl m-auto h-auto pt-10  ">
        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Rashtriya Krishi Vikas Yojane: (RKVY): </h1>
          <p className="text-sm">
            The scheme was commenced in KMF during the year 2009-10. Under the Scheme grants have
            been released for various activities such as Accelerating Dairy Development activities
            at Vijayapura,Kalaburagi and Ballari Union, Bio-security Measure at Nandini Sperm
            Station, Strengthening Training centers, Establishment of Fodder densification Units,
            Urea enrichment of fodder, Areca Sheath Powdering plant, Mineral mixture plant, Calf
            rearing programme under National Mission for Protein Supplement scheme and Dairy
            infrastructure development in northern Karnataka. During the years 2014-15 grants has
            been released for programmes such as purchase Milking Machine, Chaff cutter, Rubber
            mats, Area specific mineral mixture, Mobile Bulk Milk coolers, Fodder Mini kits beside
            for giving subsidy for cattle feed and establishment of cattle feed plants. Under the
            scheme programmes under implementation.
          </p>
        </div>

        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">
            {' '}
            National programme for Dairy Development :{' '}
          </h1>
          <p className="text-sm">
            Government of India during the 2014-15 introduced this programme to uplift the Dairy
            activities. Proposals from Kalaburagi-Bidar-Yadgir, and Raichur, Ballari, Koppal
            Districts Milk Unions for Rs.2897.08 lakhs for various activities such as Organization
            of Dairy Cooperative Societies, Purchase of milk cans, Electronic Milk Tester,
            Electronic weighing Machine, AMCUs and Management grants to DCS have been submitted to
            GOI. GOI has approved and sanctioned proposal of Kalaburagi Milk Union for Rs 791.60
            lakhs and released Rs.395.80 lakhs. The programme is under implementation in
            Kalaburagi-Bidar and yadgir Districts.
          </p>
        </div>

        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">
            {' '}
            STEP and KSHEERA-SANJEEVINI SCHEME: WOMEN EMPOWERMENT{' '}
          </h1>
          <p className="text-sm">
            STEP and Ksheera-Sanjeevini Scheme aims to make a significant impact by upgrading skills
            and providing continuous income, generating employment to women on a project basis.
            Ksheera-Sanjeevini advocates a package of inputs aiming at the integrated development of
            poor women in traditional sectors. The ultimate endeavour of the project is to develop
            the group to thrive on a self sustaining basis in the market place with minimal
            Government support and intervention after the completion of project period.
          </p>
        </div>

        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> National Dairy Plan </h1>
          <p className="text-sm">
            National Dairy Plan Phase I (NDP I) is a scientifically planned multi-state initiative
            being implemented by National Dairy Development Board (NDDB) with the network of End
            Implementing Agencies (EIAs) at an outlay of Rs.2242 Crores and with the following
            objectives:
          </p>

          <ul className='list-disc pl-4'>
            <li>Increase productivity of milch animals and thereby increase milk production to meet the rapidly growing demand for milk.</li>
            <li>Provide rural milk producers with greater access to the organised milk processing sector.</li>
          </ul>
        </div>



        <div className="w-full h-full flex space-y-3 flex-col ">
          <h1 className="text-2xl bg-primary-main text-white p-2 shadow-lg "> NDP PROGRAMME IN KARNATAKA THROUGH DAIRY COOPERATIVES: </h1>
          

 
 
          <div className='w-full p-3'>
          <h1 className="text-2xl text-primary-main "> 1. KMF PROGENY TESTING:</h1>
          <p className="text-sm">
          A Progeny Testing Project for Production of High Genetic Merit (HGM) Holstein Friesian Bulls under NDP-I was launched in June 2012 with the total financial outlay of Rs 2055 lakhs as grant spanned over a period of 6 years.
          </p>

          </div>




          <div className='w-full p-3'>
          <h1 className="text-2xl text-primary-main "> 2.Strengthening of Nandini Sperm Station:</h1>
          <ul className='list-disc pl-4'>
            <li>To strengthen the existing infra structure</li>
            <li>To produce 4-5 million disease free frozen semen by the end of 2017-18.</li>
            <li>Project financial outlay Rs 678.20 lakhs.</li>

            <li>Project implemented by KMF.</li>

          </ul>

          </div>




          <div className='w-full p-3'>
          <h1 className="text-2xl text-primary-main "> 3.Fodder Development Programme:</h1>
          <ul className='list-disc pl-4'>
            <li>To encourage fodder seed production, production incentive to the seed producers and e sales incentive to the milk producers.



</li>
            <li>For establishment of seed processing unit to produce quality fodder seeds.</li>
            <li>To conserve green fodder silage demonstrations are implemented.</li>

            <li>Demonstrate post harvest technology equipments to minimize wastage of fodder during harvesting.</li>
            <li>Establishment and demonstration of storage of fodder silos.</li>

          </ul>

          </div>




          <div className='w-full p-3'>
          <h1 className="text-2xl text-primary-main "> 4.Ration Balancing Programme:</h1>
          <ul className='list-disc pl-4'>
            <li>To encourage proper utilization of available fodder and feed resource.



</li>
            <li>To minimize the cost of milk production.</li>
            <li>To reduce the cost of feed materials.</li>

            <li>To increase milk production and quality.</li>
            <li>Financial assistance wil be provided for first two years of a module towards LRP salary, Note Books and all accessories for animal identification, measurement etc.</li>

          </ul>

          </div>




          <div className='w-full p-3'>
          <h1 className="text-2xl text-primary-main "> 5.Village Based Milk Procurement System:</h1>
          <ul className='list-disc pl-4'>
            <li>To enhance the milk production in rural area.







</li>
            <li>To increase the quality parameters of milk production.</li>
            <li>To strengthen the infra structure for milk chilling and distribution system.</li>

            <li>To create awareness among farmers regarding clean milk production.</li>
            <li>Financial assistance will be provided for DCS organization, installation of BMC’s and training.</li>

          </ul>

          </div>


          <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">National Programme for Dairy Development (NPDD) </h1>
          <p className="text-sm">
          Aims to enhance quality of milk and milk products and increase share of organized milk procurement. it also focuses towards creating/strengthening of infrastructure for quality milk testing equipment as well as primary chilling facilities for State Cooperative Dairy Federations/ District Cooperative Milk Producers’ Union/SHG run private dairy/Milk Producer Companies/Farmer Producer Organisations. The scheme will be implemented across the country for the period of five year from 2021-22 to 2025-26.
          </p>
        </div>


        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">National Livestock Mission </h1>
          <p className="text-sm">
          The focus of the scheme is on entrepreneurship development and breed improvement in poultry, sheep, goat and piggery including feed and fodder development.
          </p>
        </div>





        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">DAIRY INFRASTRUCTURE. DEVELOPMENT FUND (DIDF) </h1>
          <p className="text-sm">
          To modernize the milk processing plants and machinery and to create additional infrastructure for processing more milk.
          </p>
        </div>


        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">RASHTRIYA GOKUL MISSION </h1>
          <p className="text-sm">
          To enhance productivity of bovines and increasing milk production in a sustainable manner using advance technologies.It also enhance Artificial insemination coverage through strengthening breeding network and delivery of Artificial insemination services at farmers doorstep.
To promote indigenous cattle & buffalo rearing and conservation in a scientific and holistic ma
          </p>
        </div>




        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Livestock Census (LC)&  Integrated Sample Survey (ISS)</h1>
         <ul className='list-decimal p-3'>
          <li> Conducting quinquennial Livestock Census (LC).</li>
          <li> Conducting annual sample survey namely Integrated Sample Survey (ISS).</li>

          <li> Publishing All India Livestock Report consisting of livestock population of major species at National and States/UT level by use, sex and age.</li>

          <li> Publishing Breed-wise report based on the latest Livestock Census consisting of detail breed-wise livestock population at aggregate as well as segregated level.</li>

          <li> Publishing of annual publication title Basic Animal Husbandry Statistics to release the production estimates of four major livestock products like milk, meat, egg and wool.</li>


         </ul>
        </div>



        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Animal Husbandry Infrastructure Development Fund (AHIDF)</h1>
         <ul className='list-decimal p-3'>
          <li>To help increasing of milk and meat processing capacity and product diversification thereby providing greater access for unorganized rural milk and meat producers to organized milk and meat market.</li>
          <li> To make available increased price realization for the producer.</li>

          <li> To make available quality milk and meat products for the domestic consumer.</li>

          <li> To fulfill the objective of protein enriched quality food requirement of the growing population of the country and prevent malnutrition in one of the highest malnourished children population in the world.</li>

          <li> Develop enterpreneurship and generate employment.</li>

          <li>To promote exports and increase the export contribution in the milk and meat sector.</li>
          <li> To make available quality concentrated animals feed to the cattle, buffalo, sheep, goat, pig and poultry to provide balanced ration at affordable prices.</li>
         </ul>
        </div>





        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Livestock Health and Disease Control programmee </h1>
          <p className="text-sm">
          To implement Critical Animal disease control programme to eradicate PPR by 2030 by vaccinating all sheep and goats and to control Classical Swine Fever (CSF) by vaccinating the entire pig population
          </p>
        </div>




        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Supporting Dairy Cooperatives & Farmer Producer Organizations (SDCFPO) </h1>
          <p className="text-sm">
          To assist the State Dairy Cooperative Federations by providing soft working capital loan to tide over the crisis on account severely adverse market conditions or natural calamities.
To provide stable market access to the dairy farmers.
To enable State Cooperative Dairy Federations to continue to make timely payments of dues to the farmers.
          </p>
        </div>


        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">National Animal Disease Control Programme (NADCP) </h1>
          <p className="text-sm">
          National Animal Disease Control Programme (NADCP) is a flagship scheme launched by Honble Prime Minister in September, 2019 for control of Foot & Mouth Disease and Brucellosis by vaccinating 100% cattle, buffalo, sheep, goat and pig population for FMD and 100% bovine female calves of 4-8 months of age for brucellosis with the total outlay of Rs.13, 343.00 crore for five years (2019-20 to 2023-24).
          </p>
        </div>



        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Amrita Siri Scheme: </h1>
          <p className="text-sm">
          A program of distribution of surplus female calves/heifers/cows/buffaloes available in all livestock areas of the department under “Amrita Siri” scheme to farmers/devasi/widows/war widows/cremation workers in districts where breeds are available at 25% of book price. Thereby farmers are encouraged to breed more indigenous breeds of cows.
          </p>
        </div>



        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Mobile Vetirinary Units:	
</h1>
          <p className="text-sm">
          Under the Livestock Health and Disease Control Programme, 290 well-equipped mobile veterinary vehicles have been provided to provide emergency veterinary services at the doorsteps of farmers.
          </p>
        </div>



        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">PM-FME Scheme:	
</h1>
          <p className="text-sm">
          As a part of Atmanirbhar Bharat Abhiyan, Government of Indias Prime Minister Formalization of Micro Food Processing Enterprises (PM-FME) is in force. Under this scheme there will be opportunity to set up new Food Processing Enterprises/upgradation of existing Enterprises/Food processing Units.
          </p>
        </div>





        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Pashu Sanjeevini (Mobile Animal Surgery Vehicle)
</h1>
          <p className="text-sm">
          Under the Livestock Health and Disease Control Programme, 290 well-equipped mobile veterinary vehicles have been provided to provide emergency veterinary services at the doorsteps of farmers.
          </p>
        </div>



        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Rashtriya Krishi Vikas Yojana (RKVY) 
</h1>
          <p className="text-sm">
          Aims at making farming a remunerative economic activity by strengthening the farmers‟ efforts, risk mitigation and promoting agri-business entrepreneurship.
          </p>
        </div>




        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Kisan Credit Card: 
</h1>
          <p className="text-sm">
          This program is intended to provide short-term working capital financial assistance to farmers engaged in dairy, sheep, goat, poultry, pig and rabbit farming.Interest rebate facility under Kisan Credit Card Scheme is Rs. 3 lakhs, each farmer can get a loan facility of Rs.1.60 lakh without any security.Kisan is giving 2% interest subsidy on the loan taken from the credit card, and if the loan is repaid on time, an additional annual percentage of A facility of 3% interest subsidy is also available.
          </p>
        </div>




          
        </div>




      </section>

      <Footer />
    </div>
  );
}

export default GOI;
