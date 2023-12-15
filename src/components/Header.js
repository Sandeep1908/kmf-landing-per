'use client';

import { useState} from 'react';
import logo from '../images/logo/logo.png';
import AccordionItem from '../components/Accordion';
import { mobileHeader } from '@/configtext/header';
import downarrowIco from '../images/icons/downarrow.svg';
import uparrowIco from '../images/icons/uparrow.svg';
import locationIco from '../images/header-ico/location.svg';
import contactIco from '../images/header-ico/contact.svg';
import searchIco from '../images/header-ico/search.svg';
import { RxCrossCircled } from 'react-icons/rx';

export const Header = () => {
  const [openAccordion, SetOpenAccordion] = useState(null);

  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(null);
  const headItem = mobileHeader['eng'];

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

        <div className="w-full h-[150px] relative bg-gradient-to-r from-[#FDEEC8] to-secondary-gradient p-10 flex justify-center sm:justify-between" onMouseEnter={()=>setOpen(null)}>
          <div className="flex justify-center items-center">
            <img src={logo.src} alt="logo-home" className="w-[150px]" />
          </div>

          <div className=" w-full hidden sm:flex justify-end space-x-8   ">
            <div className="flex justify-center items-center space-x-3  border-r-2 border-[#F6AE2E;] p-10">
              <div className="">
                <img src={locationIco.src} />
              </div>

              <p className="text-sm font-sans font-[200]  ">
                2915, KMF Complex,
                <br />
                Bengaluru - 560 029
              </p>
            </div>

            <div className="flex justify-center items-center space-x-3  ">
              <div>
                <img src={contactIco.src} />
              </div>
              <p className="text-sm font-sans font-[200] ">
                1800 425 8030
                <br />
                Call us
              </p>
            </div>
          </div>
        </div>

        {/* MAIN HEADER DOWN  */}

        <div className="w-[85%] h-[50px] bg-gradient-to-r from-[#082649] to-primary-gradient m-auto p-5 z-20 ">
          <div className=" w-full h-full flex justify-between items-center lg:hidden ">
            <div onClick={() => setOpenNav((prev) => !prev)}>
              <img src="http://el.commonsupport.com/newwp/hankcok/wp-content/themes/hankcok/assets/images/icons/icon-bar.png" />
            </div>

            <div>
              <img src={searchIco.src} />
            </div>
          </div>

          <div className="w-full h-full hidden lg:block   ">
            <ul className=" h-full text-light-light4 flex  space-x-10 items-center text-[12px]">
              <li className="border-r border-light-light4 pl-2 pr-2  " onMouseEnter={()=>setOpen(null)}>HOME</li>
              <li className="border-r border-light-light4 pl-2 pr-2 relative" onMouseEnter={()=>setOpen('OUR PRODUCT')}>
                OUR PRODUCTS
                
                <div className={`p-4 bg-primary-darker absolute top-[2.14rem] left-[-40px] w-[200px] ${open==='OUR PRODUCT'?'visible':'invisible'}`}   onMouseLeave={()=>setOpen(null)} >
                    <ul className='space-y-4'>
                      {headItem.map(item=>{
                        if(item.title==='OUR PRODUCT'){
                          return item.subItems?.map((subItem,idx)=>{
                            return(
                              <li key={idx} className='text-[14px] '>{subItem.title}</li>
                            )
                          })
                        }
                      
                      })}
                    </ul>
                </div>
                
              </li>
              <li className="border-r border-light-light4 pl-2 pr-2  relative " onMouseEnter={()=>setOpen('MILK UNION')}>MILK UNION
              
              <div className={`p-4 bg-primary-darker absolute top-[2.14rem] left-[-40px] w-[200px] ${open==='MILK UNION'?'visible':'invisible'}`} onMouseLeave={()=>setOpen(null)} >
                    <ul className='space-y-4'>
                      {headItem.map(item=>{
                        if(item.title==='MILK UNION'){
               
                          return item.subItems?.map((subItem,idx)=>{
                            return(
                              <li key={idx} className='text-[14px] '>{subItem.title}</li>
                            )
                          })
                        }
                      
                      })}
                    </ul>
                </div>
              
              </li>
              <li className="border-r border-light-light4 pl-2 pr-2 relative " onMouseEnter={()=>setOpen('KMF UNITS')}>KMF UNITS
                      
              <div className={`p-4 bg-primary-darker absolute top-[2.14rem] left-[-40px] w-[200px] ${open==='KMF UNITS'?'visible':'invisible'}`} onMouseLeave={()=>setOpen(null)} >
                    <ul className='space-y-4'>
                      {headItem.map(item=>{
                        if(item.title==='KMF UNITS'){
               
                          return item.subItems?.map((subItem,idx)=>{
                            return(
                              <li key={idx} className='text-[14px] '>{subItem.title}</li>
                            )
                          })
                        }
                      
                      })}
                    </ul>
                </div>
              
              
              </li>
              <li className="border-r border-light-light4 pl-2 pr-2 relative  " onMouseEnter={()=>setOpen('ABOUT US')}>ABOUT US
              
              <div className={`p-4 bg-primary-darker absolute top-[2.14rem] left-[-40px] w-[200px] ${open==='ABOUT US'?'visible':'invisible'}`} onMouseLeave={()=>setOpen(null)} >
                    <ul className='space-y-4'>
                      {headItem.map(item=>{
                        if(item.title==='ABOUT US'){
               
                          return item.subItems?.map((subItem,idx)=>{
                            return(
                              <li  key={idx} className='text-[14px] '>{subItem.title}</li>
                            )
                          })
                        }
                      
                      })}
                    </ul>
                </div>
              
              
              </li>
              <li className="border-r border-light-light4 pl-2 pr-2  " onMouseEnter={()=>setOpen(null)}>WOMEN EMPOWERMENT</li>
              <li className="border-r border-light-light4 pl-2 pr-2  " onMouseEnter={()=>setOpen(null)}>CONTACT US</li>
              <li>
                {' '}
                <img src={searchIco.src} />
              </li>
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
                            <li
                              key={index}
                              className="flex items-center  relative  text-light-light4 border-b-2 border-b-light-light4 pb-2 space-x-3 ">
                              <span>{items.title}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionItem>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
