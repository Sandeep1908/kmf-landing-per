'use client';
import React from 'react';
import Footer from '@/components/Footer';
import { useMyContext } from '@/context/headerContext';
import useLocale from '@/hooks/useLocale';
function GOK() {
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
          className={`w-full  h-full    object-cover absolute top-0  ${
            isScroll ? 'h-[400px]' : ''
          } `}
        />
      </section>
      <h1 className="text-2xl w-full mt-5 p-3 uppercase bg-primary-main text-white  shadow-lg relative flex justify-center items-center before:absolute before:-bottom-3 before:w-40   before:h-1 before:bg-primary-main  ">
        Government Of Karnataka
      </h1>
      <section className=" relative w-full flex flex-col space-y-5 mb-10 max-w-7xl m-auto h-auto pt-10  ">
        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main text-center uppercase "> 1. Ksheera Bhagya: </h1>

          <ul className='list-disc'>
            <li>The Ksheera Bhagya Scheme was launched on 1st Aug 2013 by GOK in co-ordination with KMF to provide nutritious food with protein and fat which is essential for healthy growth and all-round development of School Children as well as Anganwadi in the State.</li>

            <li>
            Ksheera Bhagya Scheme was an innovative project conceived by KMF based on the suggestion of honorable CM of Karnataka to help the poor children of the State and also the Milk producers to dispose their surplus milk.
            </li>

            <li> Coverage of Ksheera Bhagya Scheme:</li>
          </ul>
          <div className="w-full flex-col max-w-7xl m-auto mb-10 rounded-md        overflow-auto  items-start justify-start p-10 space-y-5">
      <table className="table-fixed  border-spacing-y-2	 border-collapse border-black border      min-w-full">
        <thead className=" text-left ">
          <tr className="text-md">
          <th className="p-2">#</th>
            <th className="p-2">GIST</th>
            <th className="p-2 ">Schools	</th>

              <th className='' >Anganwadi
            </th>
          </tr>
        </thead>

        <tbody className="text-left  text-md">

              <tr className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>1</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>Schools / Anganwadi covered</td>
                <td className='p-2 text-md font-content border-r border-black'>55,683 nos</td>


                  
                 <td className='p-2 text-md' >64,000 nos</td>

              </tr>
              <tr className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>2</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>No. of School / Anganwadi Children</td>
                <td className='p-2 text-md font-content border-r border-black'>64 lakhs</td>


                  
                 <td className='p-2 text-md' >40 lakhs</td>

              </tr>
              <tr className='border-t-2 border-black  '>
                 <td className='p-2 text-md uppercase text-start font-content'>3</td>
                <td className='p-2 text-md uppercase text-start border border-r border-black font-content'>Beneficiaries</td>
                <td className='p-2 text-md font-content border-r border-black'>1st to 10th standard in government and government aided schools in all over Karnataka</td>


                  
                 <td className='p-2 text-md' >	Children from 6 months to 6 years</td>

              </tr>
          
        </tbody>
      </table>
    </div>
        </div>

        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">
            {' '}
            2. Milk Incentives to Milk Producers: {' '}
          </h1>
          <p className="text-sm">
          Government announced this scheme during the year 2008-09 with the objective to encourage rural farmers to take up dairying by giving Rs.2/- per litre.  Government with effect from 14.5.2013  enhanced this incentive to Rs.4/- per litre.Government of Karnataka raised the incentive from Rs.4/- to Rs.5/- for every litre of milk supplied by producer to cooperatives

About 8.60 lakhs  milk producers are being benefitted by this scheme.
          </p>
        </div>

        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">
            {' '}
            3.National Livestock Insurance:{' '}
          </h1>
          <p className="text-sm">
          Under National Livestock Insurance Scheme 31400 milch animals belonging to members of cooperative societies are targeted to provide insurance facility,.In this scheme Govt. contributes 40% premium, balance 30% each borne by milk union and milk producers respectively.


          </p>
        </div>

        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> 4.Dairy Development Fund: </h1>
          <p className="text-sm">
          As per order No: AHF:117: KDC:93:Dt:16-3-2002, a provision for creation of Dairy Development Fund by way of transfer of “any future savings out of the grants received from the GOK & GOI under plan and non plan schemes, any accretion to the fund by way of interest, provision made on the savings and also on the investment of corpus fund” has been made.

Under this provision, interest amounts of such grant received for encouraging dairying in northern Karnataka milk unions ( viz., Dharwad, Belagavi, Vijayapura, Ballari and Kalaburagi) is being utilized as Dairy Development Fund. The following activities are being subidised out of the DDF :
          </p>

          <ul className='list-disc pl-4'>
            <li>Conducting Artificial insemination, health and infertility camp and Calf rallies.</li>
            <li>Purchase of LN2 and drugs & vaccines.</li>
            <li>Perennial fodder plot development</li>
            <li>Sales incentive given to dairy farmers, to encourage usage of fodder blocks.</li>

            <li>Training and Extension programme etc.,</li>

          </ul>
        </div>








        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> Vaccination program: </h1>
         

          <ul className='list-disc pl-4'>
            <li>Vaccination against recognized infectious diseases.</li>
            <li>Vaccination program against foot and mouth disease. 100% grant from the Centre</li>
            <li>Under ASCAD scheme, 60% central share and 40% states share (vaccination against HS,BQ,ET,Anthrax)</li>
            <li>Vaccination program against PPR disease. 60% central share and 40% States share</li>

            

          </ul>
        </div>


        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> Amrita Swabhimani Kurigahi scheme: </h1>
         

          <p>Under the Amrita Swabhimani Kurigahi scheme, 20+1 sheep/goat units will be provided to 20 thousand economically backward members of the sheep and wool producers cooperative societies at a unit cost of Rs.1,75,000/-. 50% of the unit cost will be provided by the National Cooperative Development Corporation,Department of Cooperation, Government of India, 25% grant from State Government and 25% contribution from the beneficiary.</p>
        </div>



        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> Assistance to Pinjarpol Goshalas </h1>
         

          <p>Assistance is being provided at the rate of Rs.17.50/- per cattle per day for the maintenance of unproductive and abandoned cows in government and private goshalas of the state.</p>
        </div>



        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> Ex-gratiafor accidental death of small animals (Karnataka Sheep & Wool Development Corporation): </h1>
         

          <p>For accidental death, an amount of Rs.5000/- for sheep/goats above 6 months andRs. 3500/- forsheep/goats aged3-6 months, compensation will be distributed to their owners.</p>
        </div>






        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> KSHEERASIRI                         (Incentives for Milk Producers)</h1>
         

          <p>To encourage milk production, members supplying milk to the Karnataka Milk Maha Board will receive Rs. 5/- will be given incentive.</p>
        </div>


       

        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> Conservation Scheme of Local Cow Breeds in Bidar and Haveri Districts by the State Govt</h1>
         

          <p>2000 cow breeds have been allocated to Haveri and Bidar districts (1000 each) to preserve the indigenous cow breeds of the state and increase their progeny. (Of the unit cost of Rs.70,000, 50% for general category beneficiary, 60% for scheduled caste and 75% for scheduled tribe beneficiary)</p>
        </div>





        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> Proposals submitted to Karnataka Mines Environment Restoration Corporation:</h1>
         

          <p>To establish 25 new women milk producers cooperative societies in Sandurtaluk of Bellary districtEnvironmental restoration agriculture and associated activities, drinking water and sanitation rural road, health, education, other basic facilities and installation of 60,000 capacity refrigeration plant in Tipaturu, Chikkanayakanahalli and Gubbitaluks to complement the social and economic development of the affected areas under the integrated environmental plan for the mining affected zone in Tumkur district.</p>
        </div>


        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main "> Ksheera Samriddhi Pathina Co-operative Bank;</h1>
         

          <p>To provide credit facility to milk producing farmers who depend on dairying as a sub-occupation for their livelihood, to increase milk production and to facilitate supply of quality milk to milk producers cooperative societies at low interest rates and with simple provisions to engage in dairying and dairy related activities.
Milk producer farmers depend on dairy farming as a sub-occupation for their livelihood, to increase milk production and facilitate supply of quality milk to milk producer cooperatives at low interest rates and simple To provide credit facility for engaging in dairying and allied occupations subject to the provisions.</p>
        </div>




        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Establishment of Haveri Mega Dairy:</h1>
         

          <p>To ensure provision of inputs for milk production, processing facilities and dissemination of know how.
To facilitate rural development by providing opportunities for self employment at village level, preventing migration to urban areas,introducing cash economy and opportunity for a sustained income.</p>
        </div>





        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Bidar Milk Shed Area: RKVY for the year 2015-16 Project    </h1>
         

          <p>Bidar Milk Shed Area: RKVY for the year 2015-16. Project.    </p>
        </div>




        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Storage of individual indigenous breed milk:  </h1>
         

          <p>To create a milk procurement and milk marketing network of domestic cattle.   </p>
        </div>


        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Chamarajanagar District Milk Union:  </h1>
         

          <p>Chamarajanagar District Milk Union to split and establish Chamarajanagar District Milk Union.   </p>
        </div>



        <div className="w-full h-full flex space-y-3 flex-col">
          <h1 className="text-2xl text-primary-main ">Animal Welfare Helpline 24/7 </h1>
         

          <p>To provide 24/7 continuous service to livestock, the Department of Animal Husbandry and Veterinary Services has launched a helpline for farmers who can contact the helpline number 8277100200 to get the technical support of the department.   </p>
        </div>



      </section>

      <Footer />
    </div>
  );
}

export default GOK;








