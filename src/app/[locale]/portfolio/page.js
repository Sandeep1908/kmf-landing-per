'use client';
import React, { useState, useEffect } from 'react';
import portfolioImg from '@/images/portfolio/portfolio.png';
// import founderOfMilkImg from '@/images/portfolio/founder-of-milk.jpeg';
import founderOfMilkImg from '@/images/portfolio/founder-of-milk.jpeg';
import brandAmbasImg from '@/images/portfolio/brand.jpeg';
import mdkn from '@/images/portfolio/md-kn.png';
import mden from '@/images/portfolio/md-en.png';
import md from '@/images/portfolio/md.jpeg';
import milkImg from '@/images/portfolio/milkImg.png';
import Footer from '@/components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import headImg from '@/images/directors/1-1.png';
import headengImg from '@/images/directors/headeng.png';
import founderOfMilk2Img from '@/images/portfolio/founder-of-milk.png';
import KRISHNAPPA from '@/images/portfolio/KRISHNAPPA.png';
import achivement from '@/images/portfolio/achiv.jpg';
import hom from '@/images/portfolio/hom.jpg';
import titleBG from '@/images/portfolio/title-bg.png';
import flag from '@/images/portfolio/flag.jpg';
import band1 from '@/images/portfolio/brand-1.jpeg';
import band2 from '@/images/portfolio/brand-2.jpeg';
import band3 from '@/images/portfolio/brand-3.jpeg';
// import  from "'@/images/portfolio/flag.jpg"
import { Carousel as Carousels } from 'react-responsive-carousel';

// import homeVideo from "/video/video1.mp4"



// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay, } from 'swiper/modules';
import spon1 from '@/images/sponsored/1.jpg'
import spon2 from '@/images/sponsored/2.jpg'
import spon3 from '@/images/sponsored/3.png'
import spon4 from '@/images/sponsored/4.jpg'
import spon5 from '@/images/sponsored/5.png'
import spon6 from '@/images/sponsored/6.jpg'
import spon7 from '@/images/sponsored/7.jpg'
import spon8 from '@/images/sponsored/8.jpg'
import spon9 from '@/images/sponsored/9.jpg'
import spon10 from '@/images/sponsored/10.png'

import './style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import AchienvmentCard from '../about/organization-chart/AchienvmentCard';
import { achievements as achievementItems } from '@/configtext/companyProfile';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import { ParallaxBanner } from "react-scroll-parallax";
// import HistoryOfMilk from './HistoryOfMilk';
// import BrandAmbassador from './BrandAmbassador';
// import KmfAchivements from './KmfAchivements';
// import DepartmentUnderGovt from './DepartmentUnderGovt';
// import Sponsored from './Sponsored';
// import KmfSanjeevini from './KmfSanjeevini';
// import KsheeraDhare from './KsheeraDhare';
// import KsheeraBhagya from './KsheeraBhagya';
// import Schemes from './Schemes';
// import Awards from './Awards';
// import SexSortSemem from './SexSortSemem';
// import CattleFeedToFarmers from './CattleFeedToFarmers';
// import Defence from './Defence';
// import GheeSupply from './GheeSupply';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';

function Portfolio() {
  const [achievments, setAchievments] = useState([]);
  const [slideView, setSlideView] = useState(3);
  const axios = useApi();
  // const locale = useParams().locale;
  const [portfilioData, setPortfolioData] = useState([]);
  const [md,setMd]=useState([])
  const [chairman,setChairman]=useState([])
  const [loading,setLoading]=useState(true)
  const [sponsers,setSponsor]=useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
   const locale =useLocale().locale
 

  const tabs = [
    {
      tabName: "KMF Sanjeevini",
      link: `/${locale}/women-empowerment`,
    },
    {
      tabName:  'KsheeraBhagya',
      link: `/${locale}/portfolio/ksheerabhagaya`,
    },
    {
      tabName: 'KsheeraDhare',
      link: `/${locale}/portfolio/ksheeradhare`,
    },
  
    {
      tabName: 'Schemes',
      link: `/${locale}/portfolio/ksheerabhagaya`,
    },
    {
      tabName: 'Awards',
      link: `/${locale}/portfolio/awards`,
    },
    {
      tabName: 'Sex Sorted Semen',
      link: `/${locale}/portfolio/ksheerabhagaya`,
    },
    {
      tabName: 'Cattle Feed To Farmers ',
      link: `/${locale}/portfolio/cattlefeedtofarmers`,
    },
    {
      tabName: 'Defence',
      link: `/${locale}/portfolio/defence`,
    },
    {
      tabName: 'Ghee Supply',
      link: `/${locale}/portfolio/gheesupply`,
    },
  ];
  const handleTabs = (idx) => {
    
   
    setCurrentIndex(idx);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/kmf-acheivment');
      const {data:sponsor}= await axios.get('/api/Sponsoreds')
      const {data:md}= await axios.get('/api/md')
      const {data:chairman}= await axios.get('/api/chairmain')
      
      setPortfolioData(data.data);
      setMd(md?.data)
      setChairman(chairman?.data)
      setLoading(false)
      setSponsor(sponsor.data?.[0]?.attributes?.image?.data)
    })();
  }, []);

  useEffect(() => {
    setAchievments(achievementItems);

    const handleSlideView = () => {
      const screen = window.innerWidth;
      if (screen < 1113) {
        setSlideView(2);
      }
      if (screen < 779) {
        setSlideView(1);
      }
    };
    handleSlideView();

    window.addEventListener('resize', handleSlideView);
    return () => window.removeEventListener('resize', handleSlideView);
  }, []);
  return (
    <div
      className="w-full h-full absolute top-36 z-[-1]   
           "
       >
      <section className={`w-full  h-auto relative  grid place-items-center company-bg`}>


     <video autoPlay muted loop controls className='w-full h-full' src="/video/portfolio.mp4"></video>

      </section>



      <section className='w-full h-auto mt-10'>
      <div className=' w-full flex flex-col items-center justify-center lg:mt-20 p-3'>
        <h1 className='text-primary-main text-2xl md:text-5xl ' style={{fontFamily:'cursive'}}> <i> HISTORY OF MILK </i></h1>
        <div className='mt-0 md:mt-4 text-center mr-auto ml-auto' >
                  


                < p className='text-3xl md:text-6xl font-bold'>LETS BEGIN THE <br />
                                            JOURNEY OF MILK</p>

                   <p className='text-lg md:text-2xl  mt-6 md:mt-16 max-w-[850px] text-justify'>The history of milk is a fascinating journey that intertwines with the evolution of human civilization and the domestication of animals. As early humans transitioned from a nomadic lifestyle to settled agricultural communities, the realization that certain animals could provide a steady supply of milk marked a pivotal moment.</p>
                  
              </div>
                    

        </div>
      
      </section>



      <section id='ACHIEVEMENTS' className='w-full h-auto mt-10 md:mt-20'>
          <div className='w-full text-center'>
          <h1 className='text-primary-main text-2xl md:text-6xl ' > KMF ACHIEVEMENTS </h1>
          <div className='w-full flex flex-col md:flex-row flex-wrap justify-center items-center mt-10 gap-5'>
            {
              tabs?.map((tab, idx) =>{
                return(
                  <div 
                    key={idx}
                    onClick={() => handleTabs(idx)}
                    className='flex gap-3'>
                     <Link href={tab.link}> <p className={`${currentIndex===idx?"text-black":"text-[#7c7a7a]"} text-lg`}> {tab.tabName}</p></Link>
                      <p className='text-2xl font-bold'>/</p>
                 </div>
                );
              })
            }


          </div>


          <div className='w-full h-auto mt-10 mb-20'>
          {tabs?.map((tab, id) => {
        if (currentIndex === id) {
          return tab.data;
        }
      })} 
          </div>

          <div className='w-full h-auto'>
            <div className=' relative w-full'>

                 <h1 className='text-primary-main text-2xl md:text-4xl ' > KMF ACHIEVEMENTS </h1>
                 <img className='absolute top-[-35px] md:top-[-50px] left-[49%] md:left-[51%] w-32 md:w-40 ' src={titleBG.src} alt="" />
            </div>
            

           <div className=' hidden lg:block relative w-full max-h-[500px] h-full z-[-1]'>
                <img className='w-full h-full' src={flag.src} alt="" />
                <div className='absolute top-[60px] lg:top-0 xl:top-[60px] w-full h-full'>
                    <div className='w-full h-full flex justify-center items-center'>
                    <div className='max-w-xl lg:max-w-lg xl:max-w-xl w-full m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' > KMF Achievement </h1>
                 <div className='mt-6'>
                  <ul className=' text-sm md:text-lg lg:text-sm xl:text-lg list-disc text-left'>
                  <li>
                  State entirely covered by Cooperative Dairy Development.
                  </li>
                  <li>
                  Elected boards are in position in all the District Milk Unions and Federation.
                  </li>
                  <li>
                  Lowest price spread between procurement price and sale price. Due to efficiency of operations in the Federation and Unions, more than 75% of the consumer rupee is passed on to producers.
                  </li>
                  <li>
                  More than 97% of the Dairy Cooperative Societies (DCS) are earning profit.

                  </li>
                  <li>
                  Extensive coverage of cross-breeding programs has catapulted the state to become one of the few pioneering states in cross-breeding in the country.
                  </li>
                  </ul>
                 </div>
                       </div>
                    </div>
                </div>
            </div>  

            <div className='w-full h-auto flex flex-wrap justify-center'>
               
                 <div className='block lg:hidden max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' >  KMF Achievement </h1>
                 <div className=' mt-10'>
                  <ul className='list-disc text-left'>
                  <li>
                  State entirely covered by Cooperative Dairy Development.

                  </li>
                  <li>
                  Elected boards are in position in all the District Milk Unions and Federation.

                  </li>
                  <li>
                  Lowest price spread between procurement price and sale price. Due to efficiency of operations in the Federation and Unions, more than 75% of the consumer rupee is passed on to producers.

                  </li>
                  <li>
                  More than 97% of the Dairy Cooperative Societies (DCS) are earning profit.

                  </li>
                  <li>
                  Implementation of Yashaswini Health Insurance Scheme, to benefit farmer families of Dairy Cooperatives.
                  </li>
                  <li>
                  Extensive coverage of cross-breeding programs has catapulted the state to become one of the few pioneering states in cross-breeding in the country.


                  </li>
                
                  </ul>
                 </div>
                       </div>
                 </div>
                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' > Empowering Producers for Rural Prosperity </h1>
                 <div className=' mt-10'>
                  <ul className='list-disc text-left'>
                  <li>
                  Overwhelming majority of the beneficiaries of Cooperative Dairy Development programs in the State belong to vulnerable section in villages: Total membership of 24.36 lakh covers around 4.34 lakh (20%) landless laborers, 9.01 lakhs(40%) small farmers, 7.11 lakhs(32%) marginal farmers and 3.90 lakhs(18%) others. Of the total membership, 8.66 Lakh (39%) are women members and 3.94 Lakh (18%) belong to SC/ST groups.

                  </li>
                  <li>
                  The State Government has magnanimously increased the incentive, being paid for every litre of milk supplied by farmers to Dairy Cooperatives in the state, from Rs. 4 to Rs. 5. This ground breaking support program, implemented nowhere else in the country, is acting as a remarkable growth stimulus for the cooperative dairy sector in the state.

                  </li>
                  <li>
                  Farmers have earned over Rs.134.25(Nov17)crores over the last 40 years.

                  </li>
                  <li>
                  At present, an average daily payment of around Rs. 19 Crores is paid to milk producers.

                  </li>
                  <li>
                  Implementation of Yashaswini Health Insurance Scheme, to benefit farmer families of Dairy Cooperatives.
                  </li>
                  <li>
                  Majority of our member milk producers are small farmers, marginal farmers and landless laborers, who need hand-holding in their critical times of distress. KMF is implementing several financial assistance programs of GOK, some of which are: Establishment of 1000 Dairy Cooperative Societies in North Karnataka; Implementation of Nanjundappa report for overcoming regional imbalances; Equity contribution for loan repayment of Northern Milk Unions; Amrutha Yojane for Devadashis and widows Rs. 750 lakhs, SC women (Special Component program) Rs. 289 lakhs, <span className='text-primary-main text-lg font-bold'>Read More</span>


                  </li>
                  {/* <li>
                  Karnataka Milk Federation is also successfully implementing Central Government Schemes, such as Clean Milk Production Program, RKVY and National Programme for Dairy Development(NPDD) in Kalaburgi, Yadagir and Bidar Districts...
                  </li> */}
                  {/* <li>
                  Rs. 10 Crores sanctioned in RKVY 2015-16 for the development of Bidar district as Milk Shed Area. Under this scheme programs such as animal induction, strengthening of artificial insemination, strengthening of marketing activities are under implementation
                  </li>
                  <li>
                  ‘Nandini Dairy Farmers Welfare Trust’ Hostel has been established in the Bengaluru city for the benefit of farmers’ children at the cost of Rs. 12.96 crores and is now serving around 252 girls and 246 , who are pursuing higher education in the City.

                  </li>
                  <li>
                  Strengthening training facilities - The KMF is making great efforts to ensure that DCS operate as profitable business units and producer members play active role in the management of their DCS. Determined efforts are being made continually to build the capacities of our member producers by making large investments in member education and training. KMF is developing its training facilities into state-of-the-art facilities and has conducted many need-based training programs to farmers. Conducted many programs on Dairy animal management, First-aid, Aritificial insemination, Clean milk production, and other HRD programs.

                  </li> */}
                  </ul>
                 </div>
                       </div>
                 </div>


                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' > Input Support to Producers </h1>
                 <div className='mt-10'>
                  <ul className='list-disc text-left'>
                  <li>
                  Cattle Feed Production and Sales - Supply of balanced cattle feed in sufficient quantity at reasonable price is very essential for boosting milk production in the State. During 2015-16, KMF has supplied 5,07,851 MTs of Cattle feed, which is 16% higher than the 4,37,008 MTs sold during 2014-15.

                  </li>
                  <li>
                  The four Cattle Feed Plants of the Federation have excelled in productivity by capacity utilization of more than 120%, so as to meet the ever increasing demand for NANDINI cattle feed from producers. All the Cattle feed plants are ISO 9001:2008 certified for producing quality cattle feed.

                  </li>
                  <li>
                  In order to meet the increasing demand for NANDINI cattle feed, new 300 MTD (MTs per Day) each Cattle Feed Unit have been commissioned at Hassan and Shikaripur.

                  </li>
                  <li>
                  The capacity of Dharwar Cattle Feed plant has been expanded from 150 MTD to 200 MTD.

                  </li>
                  <li>
                  KMF is the first Federation in the country to introduce Area-specific Mineral Mixtures, under the technical guidance of NIANP. Now, this concept has become very popular across the country.

                  </li>
                  <li>
                  Established Mineral Mixture Plants in Gubbi, Dharwar and Hassan Cattle Feed Plants.
                  </li>
                  <li>Fodder Densification Units - In the present days of increasing manufacturing cost of cattle feeds, the profitability of dairying to farmers is getting constantly eroded. Hence, effective utilization of locally available roughages is a promising solution to increase farmers profitability in milk production. KMF has initiated ambitious program to commission Fodder Densification Units in the state. In these units, locally available poor quality roughages <span className='text-primary-main text-lg font-bold'>Read More</span>
</li>
                  </ul>
                 </div>
                       </div>
                 </div>


                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' > Processing Excellence for Quality and Cost Competitiveness </h1>
                 <div className='mt-10'>
                  <ul className='list-disc text-left'>
                  <li>
                  Bengaluru Milk Union, Mother Dairy, DK Milk Union and Tumakuru Milk Unions have been certified for ISO 22000 (Food Safety Management Systems). Kolar and Mysuru Milk Unions have been certified for ISO 9001 (Quality Management Systems). Other Unions are in the process of implementing ISO 22000.


                  </li>
                  <li>
                  Mother Dairy has been certified for exports by EIA.


                  </li>
                  <li>
                  Cost competitiveness is critical to ensure that our producer members receive the highest possible share of the consumer rupee. In order to achieve cost competitiveness, Total Energy Management Programs are being implemented by the Unions of KMF during the last several years. Unions & units of KMF have won many national and state awards for the Energy Efficiency in dairy sector.


                  </li>
                  <li>
                  The Unions and Units of KMF have also won many Productivity Awards from GOI.


                  </li>
                  <li>
                  Implemented “Quality Excellence from Cow to Consumers”, under which many best practices in quality have been implemented at all stages of procurement, processing and marketing. The Unions of the Federation have 1020 BMCs, 5711 AMCUs and 92 Community Milking Parlors.


                  </li>
                  <li>
                  The Federation is creating necessary milk processing facilities to enhance the existing processing capacities, new processing plants and other infrastructure from time to time in the state.. <span className='text-primary-main text-lg font-bold'>Read More</span>

                  </li>


                  </ul>
                 </div>
                       </div>
                 </div>


                 <div className='max-w-xl w-full m-3 md:m-10 rounded-3xl  shadow-2xl h-auto bg-slate-50 p-6 md:p-16'>
                       <div className='m-auto'>
                       <h1 className='text-primary-main text-2xl md:text-3xl ' > Profitable Disposal of Farmers’ Produce – Milk
 </h1>
                 <div className='mt-10'>
                  <ul className='list-disc text-left'>
                  <li>
                  KMF is making all out efforts in market development and is successful in garnering a significant market share of over 65% in liquid milk, which is considered to be highest by a cooperative brand in any city. KMF is marketing over 34.66 LLPD of milk at present.



                  </li>
                  <li>
                  KMF is also the market leader is selling curds (dahi) to the tune of 6.00LKPD (Lakh kgs per day), which is highest by any organization in the country.


                  </li>
                  <li>
                  The demand for value added dairy products is likely to increase with fast changing lifestyles of the people and rapid urbanization. Nandini has introduced an extensive range of milk products in the market and several new milk products, such as Yoghurt in various flavors, Cheddar Cheese and Process cheese, Chocolates, Kunda in long life flexible retort pack, UHT Cream, Sugar free sweets, etc. have been introduced. Now, NANDINI has wide range of milk and milk products catering to the diverse needs of consumers – 66 milk and milk products in 246 SKUs (Stock Keeping Units).



                  </li>
                  <li>
                  Leader in the country in the sale of Tetra-fino UHT milk.



                  </li>
                  <li>
                  In order to improve marketing of milk and milk products, for profitable disposal of milk, many proactive market initiatives have been taken, viz New sales Depot at strategic locations in & outside the state, all NMP products in new packs, introduction of new value added products, direct export of milk products etc.



                  </li>
                  <li>
                  Dividend of Rs. 1.68 Crores and bonus of Rs.1.38 Crores for the period 2014-15 have been distributed by KMF, out of its profit, to its Member Unions.
... <span className='text-primary-main text-lg font-bold'>Read More</span>

                  </li>


                  </ul>
                 </div>
                       </div>
                 </div>
                
            </div>
               
          </div>

          </div>
      </section>

    
<section className='w-full h-full'>


<div className=' h-[480px] flex flex-col lg:flex-row items-center mt-10 md:mt-20'>


<Swiper
     slidesPerView={slideView}
      freeMode={true}
      centeredSlides={false}
      
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[FreeMode, Autoplay]}
      className="w-full h-full">

     <SwiperSlide className='' >
     <div className='relative max-w-xl w-[100%]  h-full bg-[#f99457] group '>
       <div className='absolute w-full h-full top-0 left-0 z-20'>
             <img className='w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 ' src={hom.src} alt="" />
        </div>
        <div className='full h-full flex flex-col justify-between p-6 md:p-16 ' >
        <div className='w-full h-full z-50'>
        <h1 className='text-white text-3xl md:text-5xl text-center'> HISTORY OF MILK
                </h1> 
                <p className='mt-6 md:mt-12 text-2xl text-white'>
                The history of milk is a fascinating journey that intertwines with the evolution of human...
                </p>
        </div>


                <div className='w-40 h-14 border-[1px] border-white z-50 '>
                  <a href="#krisna">  <div className='w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]'> 
                      <p className='text-lg text-white'>Know More</p>
                    </div></a>
                </div>
        </div>
        
       </div>
      </SwiperSlide>

      <SwiperSlide className='' >
      <div className='relative max-w-xl w-[100%]  h-full bg-[#4f7ffc] group'>
       <div className='absolute w-full h-full top-0 left-0 z-20'>
       <Swiper
     slidesPerView={1}
      freeMode={true}
      centeredSlides={false}
      
      autoplay={{
        delay: 1000,
        disableOnInteraction: false
      }}
      modules={[FreeMode, Autoplay]}
      className="w-full h-full">
        <SwiperSlide>
             <img className='w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 ' src={band1.src} alt="" />

        </SwiperSlide>
        <SwiperSlide>
             <img className='w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 ' src={band2.src} alt="" />

        </SwiperSlide>
        <SwiperSlide>
             <img className='w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 ' src={band3.src} alt="" />

        </SwiperSlide>
        </Swiper>
        </div>
        <div className='full h-full flex flex-col justify-between p-6 md:p-16 ' >
        <div className='w-full h-full z-50'>
        <h1 className='text-white text-3xl md:text-5xl text-center'> BRAND AMBASSADOR
                </h1> 
                <p className='mt-6 md:mt-12 text-2xl text-white'>
                He was originally from Kolar district who was very concerned about the farmers...
                </p>
        </div>


                <div className='w-40 h-14 border-[1px] border-white z-50 '>
                  <Link href={`/${locale}/portfolio/brandambassador`}>  <div className='w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]'> 
                      <p className='text-lg text-white'>Know More</p>
                    </div></Link>
                </div>
        </div>
        
       </div>
      </SwiperSlide>
      <SwiperSlide className='' >
     
      <div className='relative max-w-xl w-[100%]  h-full bg-[#f99457] group'>
       <div className='absolute w-full h-full top-0 left-0 z-20'>
             <img className='w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 ' src={achivement.src} alt="" />
        </div>
        <div className='full h-full flex flex-col justify-between p-6 md:p-16 ' >
        <div className='w-full h-full z-50'>
        <h1 className='text-white text-3xl md:text-5xl text-center '> KMF ACHIEVEMENTS
                </h1> 
                <p className='mt-6 md:mt-12 text-lg md:text-2xl text-white'>
                He was originally from Kolar district who was very concerned about the farmers...
                </p>
        </div>


                <div className='w-40 h-14 border-[1px] border-white z-50 '>
                  <a href="#ACHIEVEMENTS">  <div className='w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]'> 
                      <p className='text-lg text-white'>Know More</p>
                    </div></a>
                </div>
        </div>
        
       </div>
      </SwiperSlide>
      <SwiperSlide className='' >
     
      <div className='relative max-w-xl w-[100%]  h-full bg-[#4f7ffc]  group'>
       <div className='absolute w-full h-full top-0 left-0 z-20'>
       <Swiper
     slidesPerView={1}
      freeMode={true}
      centeredSlides={false}
      
      autoplay={{
        delay: 1000,
        disableOnInteraction: false
      }}
      modules={[FreeMode, Autoplay]}
      className="w-full h-full">
        <SwiperSlide>
             <img className='w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 ' src={spon2.src} alt="" />

        </SwiperSlide>
        <SwiperSlide>
             <img className='w-full h-full opacity-0 transition duration-0 group-hover:opacity-30 group-hover:duration-1000 ' src={spon3.src} alt="" />

        </SwiperSlide>
       
        </Swiper>
        </div>
        <div className='full h-full flex flex-col justify-center md:justify-between p-6 md:p-16 ' >
        <div className='w-full h-full z-50'>
        <h1 className='text-white text-3xl md:text-5xl text-center '> SPONSORED
                </h1> 
                <p className='mt-6 md:mt-12 text-2xl text-white'>
                He was originally from Kolar district who was very concerned about the farmers...
                </p>
        </div>


                <div className='w-40 h-14 border-[1px] border-white z-50 '>
                  <a href="#SPONSORED">  <div className='w-full h-full flex justify-center items-center border-l-[3px] border-l-white hover:border-[3px]'> 
                      <p className='text-lg text-white'>Know More</p>
                    </div></a>
                </div>
        </div>
        
       </div>
      </SwiperSlide>
      

        </Swiper>
      
    
     
</div>
</section>



<section id='krisna' className='w-full h-[100vh] lg:h-[80vh] mt-10 md:mt-20'>
    <div className='w-full h-full'>
      <div className='relative max-w-7xl  h-full bg-[#f99457] m-auto flex flex-col lg:flex-row justify-center '>

          <div className='w-full lg:w-[50%]  lg:p-10 h-full flex justify-center items-center'>

          <img className='w-[70%] lg:w-full' src={KRISHNAPPA.src} alt="" />
          </div>
        

          <div className='w-full lg:w-[50%] h-full flex flex-col justify-center text-justify items-center p-3 lg:p-10'>
             <h1 className='text-white text-lg md:text-4xl font-bold text-center '>KARNATAKA KSHEERA BRAHMA - MR. MV KRISHNAPPA</h1>
             <p className='text-sm md:text-lg  lg:mt-10 text-white text-justify'>
             He was originally from Kolar district who was very concerned about the farmers. He was born in a village called Motakapalli in Mulbagilu taluk. Date 01.06.1918 is his birthday. He entered politics at one stage and was elected to the Lok Sabha for the first time in 1952. Central government led by Jawaharlal Nehru M.V.K. He was given the opportunity to serve as Agriculture and Food Minister. It was a time when the dairy farmers of the state relied on indigenous breeds of cattle for dairying. 
             Mr. M.V.K said that if dairy farming continues like this, it will be difficult to meet the demand for milk from cities/towns. He had thought in those days. When he was a minister in the Union Cabinet, he had visited many foreign countries and was amazed to see the milk production capacity of the breeds there. 
             {/* Not only that, he had imported HF breed heifers from Holland and distributed them to the farmers here. With the aim of developing the countrys native breed heifers through artificial insemination, he got help from the central government and succeeded in importing 8 to 10 foreign breed bulls to Karnataka. He worked hard to increase milk production through breeding activities in Mysore, Bangalore, Mangalore and some areas of the hill country. Perhaps about dairy farming Mr. M.V.K. It is a fact that due to the influence of the foresight of Mr. R., the situation is now created that wherever you go in the entire state, you are driven by crossbred horses. */}


             </p>
          </div>

      </div>
    </div>
    </section>
<section id='verghese' className='w-full h-[100vh] lg:h-[80vh] mt-5'>
    <div className='w-full h-full'>
      <div className='relative max-w-7xl  h-full bg-[#4f7ffc] m-auto flex flex-col lg:flex-row justify-center '>

         
        

          <div className='order-last lg:order-1 w-full lg:w-[50%] h-full flex flex-col justify-center text-justify items-center p-3 lg:p-10'>
             <h1 className='text-white text-lg md:text-4xl font-bold text-center '>KSHEERA PITHAMHA - DR. VERGHESE KURIEN</h1>
             <p className='text-sm md:text-lg  lg:mt-10 text-white text-justify'>
             Dr. Verghese Kurien, the Father of the White Revolution, passed away in the early hours of today, after a brief illness. He was 91 years old. He is survived by his wife, Molly Kurien, daughter Nirmala and grandson, Siddharth.


Dr. Kurien, was the architect of Indias White Revolution, which helped India emerge as the largest milk producer in the world. Founder Chairman of the National Dairy Development Board (NDDB) from 1965 to 1998, the Gujarat Co-operative Milk Marketing Federation Ltd. (GCMMF), from 1973 to 2006 and the Institute of Rural Management (IRMA) from 1979 to 2006, his professional life has been dedicated to empowering the Indian farmers through co-operatives. Dr. Kurien has helped to lay the foundation of democratic enterprises at the grass roots.
 {/* He believed that by placing technology and professional management in the hands of the farmers, the standard of living of millions of our poor people can be improved.
             The cooperative movement, he helped to create became a model not only for India, but for developing countries throughout the world. The Operation Flood Programme, of which Milk Producers; Cooperatives were the central plank, emerged as Indias largest rural employment programme and unleashed the larger dimension of dairy development. Dr. Kurien was the undisputed Milkman of India. Born on November 26, 1921 at Kozhikode, Kerala, he graduated in Science from the Loyola College in 1940 and obtained hisdegree in Engineering from the Guindy College of Engineering in Chennai. After a stint at TISCO, Jamshedpur, he obtained the Govt. of Indias scholarship to study Dairy Engineering. After some specialized training at the Imperial Institute of Animal Husbandry & Dairying, Bangalore, he left for the United States where he completed his Masters degree in Mechanical Engineering with Dairy Engineering as a minor subject from the Michigan State University in 1948. */}


             </p>
          </div>
          <div className='order-1 lg:order-last w-full lg:w-[50%] lg:p-10 h-full flex justify-center items-center'>

          <img className='w-[70%] lg:w-full' src={founderOfMilk2Img.src} alt="" />
          </div>

      </div>
    </div>
    </section>


    
      <section id='SPONSORED' className='w-full h-auto pt-10 md:pt-20 pb-10 md:pb-20  '>
          <div className='w-full text-center'>
              <h1 className='text-primary-main text-2xl md:text-6xl ' > SPONSORED </h1>
              <div className='w-full flex justify-center items-center flex-wrap mt-10'>
            <Swiper
             slidesPerView={slideView}
              freeMode={true}
              centeredSlides={true}
              
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[FreeMode, Autoplay]}
              className="max-w-7xl m-auto">

                 
                      <SwiperSlide className='' >
                      <div className='flex justify-center items-center   w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon1.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon2.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon3.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-52 h-52 '>
                     <img className='m-auto w-44 h-44 object-contain' src={spon4.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon5.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon6.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center  w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon7.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon8.src} alt="" />
                </div>
                        </SwiperSlide>
                      <SwiperSlide>
                      <div className='flex justify-center items-center   w-52 h-52 '>
                     <img className='m-auto w-44 h-44' src={spon9.src} alt="" />
                </div>
                        </SwiperSlide>
                
            </Swiper>


            </div>
          </div>
      </section>
      



     {/* <section className='w-full h-auto mt-10 mb-10  '>
          <div className='max-w-7xl m-auto bg-slate-300 shadow-lg'>
              <div className='w-full'>
                <div className='flex flex-col md:flex-row justify-between m-0 p-0'>
                {tabs?.map((tab, idx) => {
                return (
                  <>
                  <div
                    key={idx}
                    onClick={() => handleTabs(idx)}
                    className={`${currentIndex===idx?'bg-sky-500 w-fit  ':''} p-5 hover:bg-sky-500 text-center w-full relative`}>
                    {tab.tabName}
                  <div className= {`${currentIndex===idx?'bg-sky-500  ':''}  absolute bottom-[-6px] md:bottom-[-10px] left-[48%]  md:left-[43%]  w-3 h-3 md:w-5 md:h-5 rotate-45`} ></div>
                  </div>
                  </>
                );
              })}
                  
                </div>
              </div>
              <div className='w-full p-7 bg-slate-200'>
              {tabs?.map((tab, id) => {
        if (currentIndex === id) {
          return tab.data;
        }
      })} 
          </div>
          </div>
         
     </section> */}



      {/* <section className="max-w-7xl m-auto pt-10     ">
        <div className="w-full space-y-5 p-4 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
          <h1 className="text-center text-xl text-primary-main uppercase">
            {locale === 'en'
              ? `KMF Portfolio`
              : `
KMF ಪೋರ್ಟ್‌ಫೋಲಿಯೋ`}
          </h1>

          <div className="w-full flex flex-col items-start justify-start space-y-5">
            <h1 className="text-lg font-bold">{portfilioData?.attributes?.bannertitle}</h1>

            <div className="w-full h-96">
              <img
                src={portfilioData?.attributes?.banner?.data?.attributes?.url}
                className="max-w-full h-full "
              />
            </div>
          </div>
        </div>
      </section> */}



      {/* <ParallaxBanner
        layers={[
          { image: "/images/milk-bg.jpg", speed: -20 },
          {
            speed: -15,
            children: (
              <div className="">
                <h1 className="text">Hello World!</h1>
              </div>
            ),
          },
          // { image: "/images/pt-bg.webp", speed: -10 },
        ]}
        className="fixed w-full   inset-0 object-cover"
      >
 <section className="max-w-7xl m-auto h-auto pt-10  pt-bg relative  ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full   flex justify-center items-center">
            <img src={milkImg.src} className="  h-96" />
          </div>

          <div className="w-full flex flex-col justify-center items-start bg-white ">
            <h1 className="text-2xl text-primary-main uppercase">
              {locale === 'en'
                ? `History of milk`
                : `

ಹಾಲಿನ ಇತಿಹಾಸ`}{' '}
            </h1>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `The history of milk is a fascinating journey that intertwines with the evolution of human civilization and the domestication of animals. As early humans transitioned from a nomadic lifestyle to settled agricultural communities, the realization that certain animals could provide a steady supply of milk marked a pivotal moment.`
                : `

ಹಾಲಿನ ಇತಿಹಾಸವು ಮಾನವ ನಾಗರಿಕತೆಯ ವಿಕಾಸ ಮತ್ತು ಪ್ರಾಣಿಗಳ ಪಳಗಿಸುವಿಕೆಯೊಂದಿಗೆ ಹೆಣೆದುಕೊಂಡಿರುವ ಆಕರ್ಷಕ ಪ್ರಯಾಣವಾಗಿದೆ. ಆರಂಭಿಕ ಮಾನವರು ಅಲೆಮಾರಿ ಜೀವನಶೈಲಿಯಿಂದ ನೆಲೆಸಿದ ಕೃಷಿ ಸಮುದಾಯಗಳಿಗೆ ಪರಿವರ್ತನೆಯಾದಾಗ, ಕೆಲವು ಪ್ರಾಣಿಗಳು ಹಾಲಿನ ಸ್ಥಿರ ಪೂರೈಕೆಯನ್ನು ಒದಗಿಸಬಲ್ಲವು ಎಂಬ ಅರಿವು ಒಂದು ಪ್ರಮುಖ ಕ್ಷಣವಾಗಿದೆ.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `            The domestication of animals like cows, goats, and sheep was a transformative development. These animals not only provided meat and hides but also became a reliable source of milk. This discovery had profound implications for human nutrition, allowing communities to thrive on a more varied and sustainable diet.`
                : `

ಹಸುಗಳು, ಮೇಕೆಗಳು ಮತ್ತು ಕುರಿಗಳಂತಹ ಪ್ರಾಣಿಗಳ ಪಳಗಿಸುವಿಕೆಯು ಒಂದು ರೂಪಾಂತರದ ಬೆಳವಣಿಗೆಯಾಗಿದೆ. ಈ ಪ್ರಾಣಿಗಳು ಮಾಂಸ ಮತ್ತು ಚರ್ಮವನ್ನು ಒದಗಿಸುವುದು ಮಾತ್ರವಲ್ಲದೆ ಹಾಲಿನ ವಿಶ್ವಾಸಾರ್ಹ ಮೂಲವೂ ಆಯಿತು. ಈ ಆವಿಷ್ಕಾರವು ಮಾನವ ಪೋಷಣೆಗೆ ಆಳವಾದ ಪರಿಣಾಮಗಳನ್ನು ಹೊಂದಿದ್ದು, ಸಮುದಾಯಗಳು ಹೆಚ್ಚು ವೈವಿಧ್ಯಮಯ ಮತ್ತು ಸಮರ್ಥನೀಯ ಆಹಾರದಲ್ಲಿ ಅಭಿವೃದ್ಧಿ ಹೊಂದಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `            Ancient civilizations, from Mesopotamia to Egypt and the Indus Valley, embraced dairy farming. In Sumeria, the goddess Ninhursag was revered as the goddess of milk, emphasizing the cultural and symbolic importance attached to this nutritious substance. Similarly, Egyptian art depicted scenes of milking and dairy processing, showcasing the centrality of milk in their daily lives.`
                : `
ಮೆಸೊಪಟ್ಯಾಮಿಯಾದಿಂದ ಈಜಿಪ್ಟ್ ಮತ್ತು ಸಿಂಧೂ ಕಣಿವೆಯವರೆಗಿನ ಪ್ರಾಚೀನ ನಾಗರಿಕತೆಗಳು ಹೈನುಗಾರಿಕೆಯನ್ನು ಸ್ವೀಕರಿಸಿದವು. ಸುಮೇರಿಯಾದಲ್ಲಿ, ನಿನ್ಹುರ್ಸಾಗ್ ದೇವತೆಯನ್ನು ಹಾಲಿನ ದೇವತೆ ಎಂದು ಪೂಜಿಸಲಾಯಿತು, ಈ ಪೌಷ್ಟಿಕಾಂಶದ ವಸ್ತುವಿಗೆ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಸಾಂಕೇತಿಕ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಒತ್ತಿಹೇಳುತ್ತದೆ. ಅಂತೆಯೇ, ಈಜಿಪ್ಟಿನ ಕಲೆಯು ಹಾಲುಕರೆಯುವ ಮತ್ತು ಡೇರಿ ಸಂಸ್ಕರಣೆಯ ದೃಶ್ಯಗಳನ್ನು ಚಿತ್ರಿಸುತ್ತದೆ, ಅವರ ದೈನಂದಿನ ಜೀವನದಲ್ಲಿ ಹಾಲಿನ ಕೇಂದ್ರೀಯತೆಯನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.`}
            </p>
          </div>
        </div>
      </section>
       
      </ParallaxBanner> */}

      
{/* 
      <section className="max-w-7xl m-auto h-auto pt-10   ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col justify-center items-start ">
            <h1 className="text-2xl text-primary-main uppercase">
              {locale === 'en'
                ? `Ksheera Pithamha - Founder of milk`
                : `

ಹಾಲಿನ ಸ್ಥಾಪಕ`}{' '}
            </h1>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `   Dr. Verghese Kurien, the Father of the White Revolution, passed away in the early hours of today, after a brief illness.  He was 91 years old.  He is survived by his wife, Molly Kurien,  daughter Nirmala and grandson, Siddharth.`
                : `

ಶ್ವೇತ ಕ್ರಾಂತಿಯ ಪಿತಾಮಹ ಡಾ. ವರ್ಗೀಸ್ ಕುರಿಯನ್ ಅವರು ಅಲ್ಪಕಾಲದ ಅನಾರೋಗ್ಯದ ನಂತರ ಇಂದು ಮುಂಜಾನೆ ನಿಧನರಾದರು. ಅವರಿಗೆ 91 ವರ್ಷ ವಯಸ್ಸಾಗಿತ್ತು. ಅವರು ಪತ್ನಿ ಮೊಲಿ ಕುರಿಯನ್, ಮಗಳು ನಿರ್ಮಲಾ ಮತ್ತು ಮೊಮ್ಮಗ ಸಿದ್ಧಾರ್ಥ್ ಅವರನ್ನು ಅಗಲಿದ್ದಾರೆ.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `           Dr. Kurien, was the architect of Indias White Revolution, which helped India emerge as the largest milk producer in the world.   Founder Chairman of the National Dairy Development Board (NDDB) from 1965 to 1998, the Gujarat Co-operative Milk Marketing Federation Ltd. (GCMMF), from 1973 to 2006 and the Institute of Rural Management (IRMA) from 1979 to 2006, his professional life has been dedicated to empowering the Indian farmers through co-operatives.  Dr. Kurien has helped to lay the foundation of democratic enterprises at the grass roots.   He believed that by placing technology and professional management in the hands of the farmers, the standard of living of millions of our poor people can be improved.`
                : `

ಡಾ. ಕುರಿಯನ್, ಭಾರತದ ಶ್ವೇತ ಕ್ರಾಂತಿಯ ವಾಸ್ತುಶಿಲ್ಪಿಯಾಗಿದ್ದರು, ಇದು ಭಾರತವು ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಹಾಲು ಉತ್ಪಾದಕರಾಗಿ ಹೊರಹೊಮ್ಮಲು ಸಹಾಯ ಮಾಡಿತು. 1965 ರಿಂದ 1998 ರವರೆಗೆ ರಾಷ್ಟ್ರೀಯ ಡೇರಿ ಅಭಿವೃದ್ಧಿ ಮಂಡಳಿಯ (NDDB) ಸಂಸ್ಥಾಪಕ ಅಧ್ಯಕ್ಷರು, ಗುಜರಾತ್ ಕೋ-ಆಪರೇಟಿವ್ ಮಿಲ್ಕ್ ಮಾರ್ಕೆಟಿಂಗ್ ಫೆಡರೇಶನ್ ಲಿಮಿಟೆಡ್ (GCMMF), 1973 ರಿಂದ 2006 ರವರೆಗೆ ಮತ್ತು ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ರೂರಲ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ (IRMA) 1979 ರಿಂದ 2006 ರವರೆಗೆ, ಅವರ ವೃತ್ತಿಪರ ಸಹಕಾರಿ ಸಂಘಗಳ ಮೂಲಕ ಭಾರತೀಯ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸಲು ಜೀವನವನ್ನು ಸಮರ್ಪಿಸಲಾಗಿದೆ. ಡಾ. ಕುರಿಯನ್ ಅವರು ತಳಮಟ್ಟದಲ್ಲಿ ಪ್ರಜಾಪ್ರಭುತ್ವದ ಉದ್ಯಮಗಳ ಅಡಿಪಾಯವನ್ನು ಹಾಕಲು ಸಹಾಯ ಮಾಡಿದ್ದಾರೆ. ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ವೃತ್ತಿಪರ ನಿರ್ವಹಣೆಯನ್ನು ರೈತರ ಕೈಯಲ್ಲಿ ಇರಿಸುವ ಮೂಲಕ ನಮ್ಮ ಲಕ್ಷಾಂತರ ಬಡ ಜನರ ಜೀವನಮಟ್ಟವನ್ನು ಸುಧಾರಿಸಬಹುದು ಎಂದು ಅವರು ನಂಬಿದ್ದರು.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `                      The cooperative movement, he helped to create became a model not only for India, but for developing countries throughout the world.  The Operation Flood Programme, of which Milk Producers; Cooperatives were the central plank, emerged as Indias largest rural employment programme and unleashed the larger dimension of dairy development. Dr. Kurien was the undisputed Milkman of India.  Born on November 26, 1921 at Kozhikode, Kerala, he graduated in Science from the Loyola College in 1940 and obtained hisdegree in Engineering from the Guindy College of Engineering in Chennai. After a stint at TISCO, Jamshedpur, he obtained the Govt. of Indias scholarship to study Dairy Engineering.  After some specialized training at the Imperial Institute of Animal Husbandry & Dairying, Bangalore, he left for the United States where he completed his Masters degree in Mechanical Engineering with Dairy Engineering as a minor subject from the Michigan State University in 1948.`
                : `

ಅವರು ರಚಿಸಲು ಸಹಾಯ ಮಾಡಿದ ಸಹಕಾರ ಚಳುವಳಿ ಭಾರತಕ್ಕೆ ಮಾತ್ರವಲ್ಲ, ಪ್ರಪಂಚದಾದ್ಯಂತ ಅಭಿವೃದ್ಧಿಶೀಲ ರಾಷ್ಟ್ರಗಳಿಗೆ ಮಾದರಿಯಾಗಿದೆ. ಆಪರೇಷನ್ ಫ್ಲಡ್ ಪ್ರೋಗ್ರಾಂ, ಇದರಲ್ಲಿ ಹಾಲು ಉತ್ಪಾದಕರು; ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳು ಕೇಂದ್ರ ಪ್ಲಾಂಕ್ ಆಗಿದ್ದು, ಭಾರತದ ಅತಿದೊಡ್ಡ ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ ಕಾರ್ಯಕ್ರಮವಾಗಿ ಹೊರಹೊಮ್ಮಿತು ಮತ್ತು ಡೇರಿ ಅಭಿವೃದ್ಧಿಯ ದೊಡ್ಡ ಆಯಾಮವನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿತು. ಡಾ. ಕುರಿಯನ್ ಭಾರತದ ನಿರ್ವಿವಾದ ಹಾಲುಮತದವರಾಗಿದ್ದರು. ನವೆಂಬರ್ 26, 1921 ರಂದು ಕೇರಳದ ಕೋಯಿಕ್ಕೋಡ್‌ನಲ್ಲಿ ಜನಿಸಿದ ಅವರು 1940 ರಲ್ಲಿ ಲೊಯೋಲಾ ಕಾಲೇಜಿನಲ್ಲಿ ವಿಜ್ಞಾನದಲ್ಲಿ ಪದವಿ ಪಡೆದರು ಮತ್ತು ಚೆನ್ನೈನ ಗಿಂಡಿ ಕಾಲೇಜ್ ಆಫ್ ಇಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ ಎಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ ಪದವಿ ಪಡೆದರು. ಜೆಮ್‌ಶೆಡ್‌ಪುರದ TISCO ನಲ್ಲಿ ಕೆಲಸ ಮಾಡಿದ ನಂತರ, ಅವರು ಸರ್ಕಾರವನ್ನು ಪಡೆದರು. ಡೇರಿ ಎಂಜಿನಿಯರಿಂಗ್ ಅಧ್ಯಯನ ಮಾಡಲು ಭಾರತದ ವಿದ್ಯಾರ್ಥಿವೇತನ. ಬೆಂಗಳೂರಿನ ಇಂಪೀರಿಯಲ್ ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಅನಿಮಲ್ ಹಸ್ಬೆಂಡರಿ ಮತ್ತು ಡೇರಿಯಿಂಗ್‌ನಲ್ಲಿ ಕೆಲವು ವಿಶೇಷ ತರಬೇತಿಯ ನಂತರ, ಅವರು ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್‌ಗೆ ತೆರಳಿದರು, ಅಲ್ಲಿ ಅವರು 1948 ರಲ್ಲಿ ಮಿಚಿಗನ್ ಸ್ಟೇಟ್ ಯೂನಿವರ್ಸಿಟಿಯಿಂದ ಡೇರಿ ಎಂಜಿನಿಯರಿಂಗ್‌ನೊಂದಿಗೆ ಮೆಕ್ಯಾನಿಕಲ್ ಎಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ ತಮ್ಮ ಸ್ನಾತಕೋತ್ತರ ಪದವಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದರು.`}
            </p>
          </div>

          <div className="w-full   flex justify-center items-center">
            <img src={founderOfMilkImg.src} className=" h-96" />
          </div>
        </div>
      </section> */}

      {/* <section className="max-w-7xl m-auto relative pb-10 pt-36     company-bg">
        <div className="w-full flex pr-10 pl-10 flex-col    justify-center items-center space-y-10 lg:flex-row lg:justify-between lg:space-x-10">
          <div className="grid place-content-center w-1/4">
            <h1 className="text-[40px] text-primary-main uppercase">
              KMF <br /> Achievements
            </h1>
          </div>

          <div className="w-3/4 flex justify-center items-center gap-5">
            <Swiper
              slidesPerView={slideView}
              freeMode={true}
              centeredSlides={true}
              spaceBetween={slideView === 1 ? 5 : 0}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[FreeMode, Autoplay]}
              className="mySwiper">
              {achievments?.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <AchienvmentCard img={item.image} title={item.title} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section> */}
 




 








{/* 
 <div className="w-full h-screen m-auto pt-10 relative z-[-10]   ">
      <ParallaxBanner
        layers={[
          { image: "/images/milk-bg.jpg", speed: -20 },
          {
            speed: -15,
            children: (
              <div className="">
                <h1 className="text">Hello World!</h1>
              </div>
            ),
          },
          { image: "/images/milk-bg.png", speed: -10 },
        ]}
        className="fixed w-full h-[100vh] inset-0 object-cover"
      >

<section className="max-w-7xl m-auto pt-10   relative z-[100] bg-white  overflow-hidden">
        <h1 className="text-center text-xl text-primary-main uppercase">
          {locale === 'en'
            ? `KMF Achievements`
            : `
KMF ಸಾಧನೆಗಳು`}{' '}
        </h1>
        <div className="w-full space-y-5 p-4 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
          <div className="w-full flex flex-col items-start justify-start space-y-5">
            <h1 className="text-lg font-bold">{portfilioData?.attributes?.title}</h1>

            <div className="w-full h-auto md:h-96 flex-wrap md:flex-nowrap flex justify-center gap-2 items-center marquee-sponser">
              {portfilioData?.attributes?.image?.data?.map((item, id) => {
                return <img key={id} src={item?.attributes?.url} className="w-full h-full " />;
              })}
            </div>
          </div>
        </div>
      </section>
       
      </ParallaxBanner>
    </div> */}
    {/* <section className="max-w-7xl m-auto h-auto pt-10 relative z-[100] bg-white ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col justify-center items-start ">
            <h1 className="text-2xl text-primary-main uppercase">
              {locale === 'en'
                ? `Brand AMBASSADOR`
                : `
ಬ್ರಾಂಡ್ ರಾಯಭಾರಿ`}{' '}
            </h1>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `  Kannada film actor Shivarajkumar has been named the new brand ambassador of Nandini milk products. He was on Tuesday honoured by Karnataka Milk Federation (KMF) Chairman Bheema Naik and MD Jagadish in Bengaluru, as he took over as the ambassador of the State-run milk co-operative which produces the Nandini brand.`
                : `

ನಂದಿನಿ ಹಾಲಿನ ಉತ್ಪನ್ನಗಳ ಹೊಸ ಬ್ರಾಂಡ್ ಅಂಬಾಸಿಡರ್ ಆಗಿ ಕನ್ನಡ ಚಿತ್ರರಂಗದ ನಟ ಶಿವರಾಜಕುಮಾರ್ ಅವರನ್ನು ನೇಮಿಸಲಾಗಿದೆ. ಮಂಗಳವಾರ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಕರ್ನಾಟಕ ಹಾಲು ಮಹಾಮಂಡಳದ (ಕೆಎಂಎಫ್) ಅಧ್ಯಕ್ಷ ಭೀಮಾ ನಾಯ್ಕ್ ಮತ್ತು ಎಂಡಿ ಜಗದೀಶ್ ಅವರು ನಂದಿನಿ ಬ್ರಾಂಡ್ ಉತ್ಪಾದಿಸುವ ರಾಜ್ಯ-ಹಾಲು ಸಹಕಾರಿ ಸಂಘದ ರಾಯಭಾರಿಯಾಗಿ ಅಧಿಕಾರ ಸ್ವೀಕರಿಸಿದರು.`}
            </p>

            <p className="text-sm text-justify p-2">
              {locale === 'en'
                ? `           Shivarajkumar’s father and matinee idol Rajkumar and subsequently his late brother Puneeth Rajkumar were ambassadors of the Nandini milk products for several years. `
                : `


ಶಿವರಾಜಕುಮಾರ್ ಅವರ ತಂದೆ ಮತ್ತು ಮ್ಯಾಟಿನಿ ಆರಾಧ್ಯ ರಾಜಕುಮಾರ ರಾಜ್ಕುಮಾರ್ ಮತ್ತು ನಂತರ ಅವರ ದಿವಂಗತ ಸಹೋದರ ಪುನೀತ್ ರಾಜ್ಕುಮಾರ್ ಹಲವಾರು ವರ್ಷಗಳಿಂದ ನಂದಿನಿ ಹಾಲಿನ ಉತ್ಪನ್ನಗಳ ರಾಯಭಾರಿಗಳಾಗಿದ್ದರು.`}
            </p>
          </div>

          <div className="w-full   flex justify-center items-center">
          <iframe width="560" height="315" src={"https://www.youtube.com/embed/CHII1bdx5Sg?si=Z4aAkimBAHviYXmo"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </section> */}
   

    

      {/* <section className="max-w-7xl m-auto h-auto pt-10 relative z-[100]  shadow-md bg-primary-darker ">
        <div className="w-full  h-full flex flex-col p-3 space-y-5 lg:flex-row lg:p-10 lg:space-x-10">
          <div className="w-full flex flex-col justify-center items-start ">
          <p className="text-2xl   font-bold text-white">{chairman?.attributes?.name}</p>
        <h1 className="text-sm text-center text-white ">{chairman?.attributes?.description}</h1>
 
              <p className='text-sm text-white text-justify pt-2'>{chairman?.attributes?.message}</p>
          
          </div>

          <div className="w-full   flex justify-center items-center">
          <img
          src={chairman?.attributes?.image?.data?.attributes?.url}
          alt="featured-img"
          className="w-96 h-96 object-contain group-hover:scale-[1.1]"
          style={{ transition: '.4s all' }}
        />
          </div>
        </div>
      </section> */}


      {/* <section className="max-w-7xl m-auto mt-10 h-auto pt-10 relative z-[100]  shadow-md  bg-primary-darker   ">
        <div className="w-full  h-full flex flex-col   space-y-5 lg:flex-row lg:p-10 lg:space-x-10">


        <div className="w-full   flex justify-center items-center">
          <img
          src={md?.attributes?.image?.data?.attributes?.url}
          alt="featured-img"
          className="w-96 h-96 object-contain group-hover:scale-[1.1]"
          style={{ transition: '.4s all' }}
        />
          </div>


          <div className="w-full flex flex-col justify-center items-start ">
          <p className="text-2xl   font-bold text-white">{md?.attributes?.name}</p>
        <h1 className="text-sm text-center text-white ">{md?.attributes?.description}</h1>
 
              <p className='text-sm text-white text-justify pt-2'>{md?.attributes?.message}</p>
          
          </div>

      
        </div>
      </section> */}

   
 

      {/* <section className="w-full h-auto overflow-hidden    ">
        <div className=" p-10 flex flex-col items-center space-y-10 justify-center  max-w-[1600px] md:items-start m-auto">
          <div className="flex w-full flex-col justify-center items-center  space-y-3 md:items-start">
            <div className="  w-full justify-center        ">
              <h1 className="text-4xl uppercase text-primary-main text-center">Sponsored</h1>
            </div>
           
          </div>
                
          <div className={` w-full max-w-[5xl] m-auto   flex justify-center  space-x-7  marquee-sponser `} >
                  {sponsers?.map((item,idx)=>{
                  console.log(item?.attributes?.image?.data)
                    return(
                      <img key={idx} src={item?.attributes?.url} className='w-40 h-40 rounded-md inline-block'/>
                    )
                  })}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

export default Portfolio;
