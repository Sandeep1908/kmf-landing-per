'use client';
import { useEffect, useState } from 'react';
import logo from '@/images/logo/logo.png';
import logokn from '@/images/logo/logo-kn.png';
import AccordionItem from '@/components/Accordion';
import { mobileHeader } from '@/configtext/header';
import downarrowIco from '@/images/icons/downarrow.svg';
import uparrowIco from '@/images/icons/uparrow.svg';
import locationIco from '@/images/header-ico/location.svg';
import contactIco from '@/images/header-ico/contact.svg';
import searchIco from '@/images/header-ico/search.svg';
import { RxCrossCircled } from 'react-icons/rx';
import useLocale from '@/hooks/useLocale';
import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';
import facebookIco from '@/images/footer/fb.svg';
import mailIco from '@/images/footer/Email.svg';
import twitterIco from '@/images/footer/x.svg';
import insta from '@/images/footer/insta.svg';
 
import useApi from '@/hooks/useApi';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const [openAccordion, SetOpenAccordion] = useState(null);
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(null);
  const [productSub, setProductSub] = useState([]);
  const [unionSub, setUnionSub] = useState([]);
  const [kmfUnits, setKmfUnits] = useState([]);
  const [headerItem,setHeaderItem]=useState([])
  const [latestNews,setLateatNews]=useState([])
  const { locale } = useLocale();
  const axios = useApi();
  let headItem = mobileHeader[locale];
  const params = useParams();
  const pathname=usePathname()
  const router=useRouter()

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/categories');
      const { data: milkunion } = await axios.get('/api/milk-unions');
      const { data: kmfUnit } = await axios.get('/api/units-of-kmfs');
      const {data:header}=await axios.get('/api/header')
      const {data:latestNews}=await axios.get('/api/latest-new')
      
      
      

      const productSubitems = data?.data?.map((category, idx) => {
  
        return {
          title: category?.attributes?.title,
          link: `/${locale}/our-product/${category?.id}`
        };
      });

 

      const unionSubitems = milkunion?.data?.map((category, idx) => {
        return {
          title: category?.attributes?.name,
          link: `/${locale}/milk-union/${category?.id}`
        };
      });

      const kmfSubitems = kmfUnit?.data?.map((category, idx) => {
        return {
          title: category?.attributes?.title,
          link: `/${locale}/kmf-unit/${category?.id}`
        };
      });

      setUnionSub(unionSubitems);
      setProductSub(productSubitems);
      setKmfUnits(kmfSubitems);
      setHeaderItem(header?.data)
      setLateatNews(latestNews?.data)
    })();
  }, [params.locale]);

  
  for (let i = 0; i < headItem?.length; i++) {
    if (headItem[i].title === 'OUR PRODUCT' || headItem[i].title === 'ನಮ್ಮ ಉತ್ಪನ್ನ') {
      headItem[i].subItems = productSub;
    }
    if (headItem[i].title === 'MILK UNION' || headItem[i].title === 'ಹಾಲು ಒಕ್ಕೂಟ') {
      headItem[i].subItems = [
        ...[
          {
            title: headItem[i].title === 'MILK UNION' ? 'Milk Unions' : 'ಹಾಲು ಒಕ್ಕೂಟಗಳು',
            link: `/${locale}/milk-union/`
          }
        ],
        ...unionSub
      ];
    }
    if (headItem[i].title === 'KMF UNITS' || headItem[i].title === 'KMF ಘಟಕಗಳು') {
      headItem[i].subItems = kmfUnits;
    }
  }

  const handleLanguageChange = () => {
    if(pathname==='/'){
       return router.push('/en')
    }
    if(pathname==='/en'){
      return router.push('/')
    }
    const newLanguagePrefix = pathname.startsWith('/en') ? '/kn' : '/en';
    const newUrl = pathname.replace(/^\/(en|kn)\//, newLanguagePrefix + '/');
    router.push(newUrl)

  };

  const arrows = {
    down: downarrowIco.src,
    up: uparrowIco.src
  };

  const handleAccordionClick = (accordionId) => {
    SetOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

 
  return (
    <>
      <div className="w-full h-full relative  ">
        {/* UPPER HEADER  */}

        <div
          className="w-full h-[150px] relative bg-gradient-to-r from-[#FDEEC8] to-secondary-gradient p-10 flex justify-between items-center"
          onMouseEnter={() => setOpen(null)}>

          <div className="flex justify-center items-center space-x-6">
            <img src={locale==='en'?logo.src:logokn.src} alt="logo-home" className="w-[150px]" />
            <p className='font-bold font-lato text-xs sm:text-xl'>KARNATAKA CO-OPERATIVE MILK <br/> PRODUCER’S FEDERATION LTD (KMF)</p>
          </div>

          <div className="flex flex-col  ">
            <div className='flex justify-center items-end space-x-5'>

       
            <div className="  hidden lg:flex lg:flex-col  justify-start items-start space-y-2    ">

            <div className='w-full flex space-x-5'>
              <div className="flex justify-center items-center      ">


                <div className="">
                  <img
                    src={locationIco.src}
                    className="w-10 h-7 hover:scale-125 transition-all duration-300"
                  />
                </div>

                <p className="text-xs font-sans flex flex-col font-black/10  ">
                  {headerItem?.attributes?.address?.map((item,id)=>{
                    return(
                      <span key={id} className='block'>{item?.children[0]?.text}</span>
                    )
                  })}
                 
                </p>
              </div>

              <div className="flex space-x-5 justify-center p-2 items-center">
                <Link href={"https://www.facebook.com/kmfnandini.coop"} className='hover:scale-125 transition-all duration-300'><img src={facebookIco.src} className="w-7" /></Link>
               <Link href={"https://twitter.com/kmfnandinimilk"}className='hover:scale-125 transition-all duration-300'><img src={twitterIco.src} className="w-7" /></Link> 
               <Link href={"https://www.kmfnandini.coop/en/contact-us"} className='hover:scale-125 transition-all duration-300'>  <img src={mailIco.src} className="w-7" /></Link> 
               <Link href={"#"} className='hover:scale-125 transition-all duration-300'>  <img src={insta.src} className="w-7" /></Link> 
               
              </div>

              </div>

              <div className="flex justify-center items-center   ">
                <div>
                  <img
                    src={contactIco.src}
                    className="w-10 h-7 hover:scale-125 transition-all duration-300"
                  />
                </div>
                <p className="text-xs font-sans font-black/10 ">
                {headerItem?.attributes?.time?.map((item,id)=>{
                    return(
                      <span key={id} className='block'>{item?.children[0]?.text}</span>
                    )
                  })}
                </p>
              </div>

           
            </div>

            <div className='flex flex-col justify-between  space-y-3'>
       
              <button
                className="bg-primary-main w-[100px] h-[36px]  text-neutral-light4 text-xs font-semibold rounded-md"
                onClick={handleLanguageChange}>
                {locale === 'en' ? 'KN' : 'EN'}
              </button>

        
            </div>
            </div>

            <p className='text-xs flex justify-end pt-4 marquee-notification overflow-hidden'>{latestNews? latestNews?.attributes?.title:''}</p>
          </div>
    
        </div>

        {/* MAIN HEADER DOWN  */}

        <div className="max-w-[90%] h-[50px] bg-gradient-to-r from-[#082649] to-primary-gradient m-auto p-5 z-20 ">
          <div className=" w-full h-full flex justify-between items-center lg:hidden ">
            <div onClick={() => setOpenNav((prev) => !prev)}>
              <img src="http://el.commonsupport.com/newwp/hankcok/wp-content/themes/hankcok/assets/images/icons/icon-bar.png" />
            </div>

         
          </div>

          <div className="w-full h-full hidden lg:block   ">
            <ul className=" h-full w-full text-light-light4 flex   space-x-2 items-center text-[12px]">
              {headItem?.map((header, i) => {
                const hasItems = header?.subItems?.length;
                const isLink = header?.link;
                return (
                  <Link href={isLink ? isLink : '#'} key={i} className=' transition-all duration-300 hover:scale-[1.1] '>
                    <li
                      className="border-r text-[10px] border-light-light4 pl-2 pr-2 relative hover:text-secondary-lighter "
                      onMouseEnter={() => setOpen(hasItems ? i : null)}>
                      {header.title}
                      {hasItems && (
                        <div
                          className={`p-4 bg-primary-darker absolute top-[2.71rem] left-[20px] w-[200px] overflow-auto max-h-[300px] ${
                            open === i ? 'visible' : 'invisible'
                          }  `}
                          onMouseLeave={() => setOpen(null)}>
                          <ul className="w-full  space-y-4 text-white">
                            {header.subItems?.map((subItem, idx) => {
                              return (
                                <Link
                                  href={subItem?.link || ''}
                                  className="text-[10px] block hover:text-secondary-lighter"
                                  key={idx}
                                
                                  onClick={() => setOpen(null)}>
                                  <li key={idx}>{subItem.title}</li>
                                </Link>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  </Link>
                );
              })}

          
            </ul>
          </div>
        </div>

        {/* Mobile Header  */}

        <div
          className={`w-full h-screen bg-[#f7bd00] fixed top-0 opacity-[0.60] lg:hidden  z-10   ${
            openNav ? 'left-0 ' : 'left-[-1200px] '
          }`}
          style={{ transition: 'all .5s' }}></div>

        <div
          className={`w-[305px] h-screen bg-primary-darker fixed top-0 z-10   lg:hidden  ${
            openNav ? 'left-0 ' : 'left-[-1200px]   '
          }`}
          style={{ transition: 'all .8s' }}>
          <div>
            <div className="flex justify-end items-center p-5">
              <RxCrossCircled size={40} color="white" onClick={() => setOpenNav((prev) => !prev)} />
            </div>

            <div className="flex justify-center items-center">
              <img src={logo.src} alt="nav-logo" className="w-[150px]" />
            </div>

            <div>
              <ul className=" ">
                {headItem?.map((items, idx) => {
                  const hasItems = items?.subItems?.length;
                  if (hasItems) {
                    return (
                      <AccordionItem
                        title={items.title}
                        id={idx}
                        open={openAccordion == idx}
                        arrow={arrows}
                        onToggle={handleAccordionClick}
                        key={idx}>
                        <ul className="">
                          {items?.subItems?.map((items, index) => {
                            return (
                              <Link
                                href={items?.link || ''}
                                key={index}
                                onClick={() => setOpenNav((prev) => !prev)}>
                                <li
                                  key={index}
                                  className="flex items-center  relative  text-light-light4 border-b-2 border-b-light-light4 pb-2 space-x-3 ">
                                  <span>{items.title}</span>
                                </li>
                              </Link>
                            );
                          })}
                        </ul>
                      </AccordionItem>
                    );
                  } else {
                    return (
                      <Link
                        href={items?.link || ''}
                        key={idx}
                        onClick={() => setOpenNav((prev) => !prev)}>
                        <li className=" " key={idx}>
                          <button className="flex items-center justify-between relative  text-light-light4 border-b-2 border-b-light4 p-4 w-full ">
                            <div className="flex space-x-2 ">
                              <span>{items.title}</span>
                            </div>
                          </button>
                        </li>
                      </Link>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
