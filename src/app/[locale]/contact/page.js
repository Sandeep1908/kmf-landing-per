'use client';
import React from 'react';
import mapImg from '@/images/contact/map.png';
import map2Img from '@/images/contact/map_2.png';
import plusImg from '@/images/contact/plus.svg';
import callImg from '@/images/contact/call.svg';
import mailImg from '@/images/contact/mail.svg';
import supportImg from '@/images/contact/support.svg';
import waImg from '@/images/contact/wa.svg';
import locImg from '@/images/contact/loc.svg';
import faxImg from '@/images/contact/fax.svg';
import Input from '@/components/Input';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';

const Contact = () => {
  const locale=useParams().locale
  return (
    <div className="w-full h-full absolute top-36 z-[-1] bg-[#F6F6F6] ">
      <section className={`w-full h-80 pt-28 relative  grid place-items-center company-bg`}>
      <iframe
            align="middle"
            allowfullscreen=""
            frameborder="0"
            height="100%"
           scrolling={true}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.518745456276!2d77.60279164133709!3d12.938623223603017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ef1a5c4365%3A0xf0eb81ef4c8cd455!2sKMF!5e0!3m2!1sen!2sin!4v1456068635330"
            width="100%" className='z-[100]'></iframe>
      </section>

      {/* <div className='w-full'>
        <img className='w-full ' src={mapImg.src} alt="" />
      </div> */}

      <div className="w-full bg-[#F6F6F6]">
        <p className="text-2xl	text-primary-main   text-center pt-9">{locale==='en'?'CONTACT US':'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'}</p>
        <div className="w-full grid  md:grid-cols-3  md:p-9">
          <div className=" m-4 col-span-2  border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl">
            <div className="w-full p-12">
              <p className="text-xl text-primary-darker  ">{locale==='en'?'Get in Touch':'ಸಂಪರ್ಕದಲ್ಲಿರಲು'}</p>

              <p className=" mt-6 text-base font-semibold text-neutral-dark1">
              {locale==='en'?' Kindly fill in the particulars given below. We will be pleased to revert back to you':`
ಕೆಳಗೆ ನೀಡಿರುವ ವಿವರಗಳನ್ನು ದಯವಿಟ್ಟು ಭರ್ತಿ ಮಾಡಿ. ನಿಮ್ಮ ಬಳಿಗೆ ಹಿಂತಿರುಗಲು ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ`}
               
              </p>

              <div className="mt-3 w-full lg:grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <Input title="Name" type="text" style="mt-7  md:col-span-2" />
                <Input title="Organisation *" type="text" style="mt-7 " />
                <Input title="Profession *" type="text" style="mt-7 " />

                <Input title="Street Address *" type="text" style="mt-7 md:col-span-2" />
                <Input title="City *" type="text" style="mt-7" />
                <Input title="State" type="text" style="mt-7" />
                <Input title="Postal Code or Zip" type="number" style="mt-7" />
                <Input title="Country *" type="text" style="mt-7" />
                <Input title="Telephone" type="number" style="mt-7" />
                <Input title="Fax" type="number" style="mt-7" />
                <Input title="Mobile No *" type="number" style="mt-7" />
                <Input title="E-mail *" type="email" style="mt-7" />
                <Input
                  title="Message"
                  type="text"
                  style="mt-7 col-span-2"
                  inputStyle="h-32  lg:h-64"
                />
              </div>

              <div className="mt-10 md:mt-16 lg:mt-28 flex justify-center md:justify-end">
                <button className="w-48 h-14 flex justify-center items-center bg-primary-main rounded-full">
                  <p className="text-base text-neutral-light4 font-semibold">Submit</p>
                </button>
              </div>
            </div>
          </div>

          <div className=" md:m-4 p-4 md:p-0 w-full space-y-9	">
            <div className=" p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4 w-full">
                <p className="text-xl font-semibold	text-primary-darker ">{locale==='en'?'           Address':`
ವಿಳಾಸ`}</p>
                <div className="flex flex-col lg:flex-row items-start w-full ">
                  <div className="w-1/5">
                    <img src={locImg.src} alt="" className="w-full h-8" />
                  </div>

                  <div className="ml-2 w-full ">
                    <p className="text-base font-semibold text-neutral-dark1">
                    {locale==='en'?'           Karnataka Co-operative Milk Producers Federation Ltd':`
ಕರ್ನಾಟಕ ಸಹಕಾರ ಹಾಲು ಉತ್ಪಾದಕರ ಒಕ್ಕೂಟ ಲಿ`}
                      
           
                    </p>
                    <p className="text-sm  text-neutral-dark1">
                    {locale==='en'?`        #2915, KMF Complex,D.R.College Post,Dr.M.H.Marigowda Road,BENGALURU - 560 029.
                      Karnataka.`           :`

                      #2915, ಕೆಎಂಎಫ್ ಕಾಂಪ್ಲೆಕ್ಸ್, ಡಿ.ಆರ್.ಕಾಲೇಜ್ ಪೋಸ್ಟ್, ಡಾ.ಎಂ.ಎಚ್.ಮರಿಗೌಡ ರಸ್ತೆ, ಬೆಂಗಳೂರು - 560 029.
                      ಕರ್ನಾಟಕ.`}
              
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4">
                <p className="text-xl font-semibold	text-primary-darker ">{locale==='en'?'           Toll Free':`
ಶುಲ್ಕರಹಿತ`}</p>
                <div className="flex items-start flex-col lg:flex-row ">
                  <div className="w-1/5">
                    <img src={supportImg.src} alt="" className="w-full h-8" />
                  </div>

                  <div className="ml-2 w-full">
                    <p className="text-base  text-neutral-dark1">
                    {locale==='en'?`              1800 425 8030 10.00AM - 5.30PM Except on Second Saturday,Sunday &
                      GOVT.Holidays`           :`

                      1800 425 8030 10.00AM - 5.30PM ಎರಡನೇ ಶನಿವಾರ, ಭಾನುವಾರ ಮತ್ತು ಹೊರತುಪಡಿಸಿ
                      GOVT. ರಜಾದಿನಗಳು`}
                
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4">
                <p className="text-xl font-semibold	text-primary-darker ">{locale==='en'?'           Phone':`
ದೂರವಾಣಿ`}</p>
                <div className="flex items-start flex-col lg:flex-row  ">
                  <div className="w-1/5">
                    <img src={callImg.src} alt="" className="w-full h-8" />
                  </div>

                  <div className="ml-2 w-full">
                    <p className="text-base text-neutral-dark1"> 080-260 96800</p>
                  </div>
                </div>
              </div>
            </div>
          

            <div className="mt-7 p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4">
                <p className="text-xl	text-primary-darker font-semibold ">{locale==='en'?'           Whatsapp':`
ವಾಟ್ಸ್ ಆ್ಯಪ್ `}</p>
                <div className="flex items-start flex-col lg:flex-row  ">
                  <div className="w-1/5">
                    <img src={waImg.src} alt="" className="w-full h-8" />
                  </div>

                  <div className="ml-2 w-full">
                    <p className="text-base  text-neutral-dark1"> 7899683696</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4 w-full">
                <p className="text-xl font-semibold	text-primary-darker ">{locale==='en'?'           Email':`
ಮಿಂಚಂಚೆ`}</p>
                <div className="flex items-start w-full flex-col lg:flex-row ">
                  <div className="w-1/5">
                    <img src={mailImg.src} alt="" className="w-full h-8" />
                  </div>

                  <div className="ml-2 w-full">
                    <p className="text-base md:text-xs lg:text-base  text-neutral-dark1">
                      {' '}
                      customercare.nandini@kmf.coop
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-7  max-w-100 ">
              <div className="absolute w-40 h-11 p-2 bg-neutral-light4 top-4 left-4">
                <p className="text-xs font-semibold text-black">Karnataka Milk Federation</p>

                <p className="text-[8px] font-normal text-[#356CFC]">View larger map</p>
              </div>

              <img src={map2Img.src} className="w-full rounded-tl-3xl rounded-br-3xl" alt="" />

              <img src={plusImg.src} alt="" className="absolute right-2 bottom-2" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
