'use client';
import React, { useState } from 'react';
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
import { Fade } from 'react-reveal';
import Confirmation from './Confirmation';
import { MdLocationOn } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";

import { FcCallback } from "react-icons/fc";
import { ImWhatsapp } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const locale = useParams().locale;
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [profession, setProfession] = useState('');
  const [streetAdd, setStreetAdd] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [telephone, setTelephone] = useState('');
  const [fax, setFax] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isOpen,setIsOpen]=useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        organization,
        profession,
        streetAdd,
        city,
        state,
        pincode,
        country,
        telephone,
        fax,
        mobile,
        email,
        message
      })
    });

    const data = await res.json();
    if(data?.status===200){
      setIsOpen(true)
    }
 

    
  };


  const handleReset=()=>{
    setIsOpen(false)
    setCity('');
    setEmail('');
    setCountry('');
    setFax('');
    setMessage('');
    setMobile('');
    setOrganization('');
    setName('');
    setProfession('');
    setStreetAdd('');
    setPincode('');
    setTelephone('');
    setState('');
  }


  return (
    <div className="w-full h-full absolute top-36 z-[-1] bg-[#F6F6F6] ">
      <section className={`w-full h-80 pt-14 relative  grid place-items-center company-bg`}>
        <iframe
          align="middle"
          allowfullscreen=""
          frameborder="0"
          height="100%"
          scrolling={true}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.518745456276!2d77.60279164133709!3d12.938623223603017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ef1a5c4365%3A0xf0eb81ef4c8cd455!2sKMF!5e0!3m2!1sen!2sin!4v1456068635330"
          width="100%"
          className="z-[100]"></iframe>
      </section>

    {
      isOpen &&
      <Confirmation handleReset={handleReset}/>
    }

      <div className="w-full  bg-[#F6F6F6]">
        <div className="mb-10  pt-10  relative w-full  flex justify-center items-center ">
          <h1 className=" text-primary-main relative z-10 font-heading text-5xl font-extrabold uppercase">
            {locale === 'en' ? 'CONTACT US' : 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'}
          </h1>
        </div>

        <div className="w-full grid  md:grid-cols-3  md:p-9">
          <div className=" m-4 col-span-2  border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl">
            <div className="w-full p-12">
              <p className="text-xl text-primary-darker font-heading  ">
                {locale === 'en' ? 'Get in Touch' : 'ಸಂಪರ್ಕಿಸಿ'}
              </p>

              <p className=" mt-6 text-base font-semibold text-neutral-dark1">
                {locale === 'en'
                  ? ' Kindly fill in the particulars given below. We will be pleased to revert back to you'
                  : `
ಕೆಳಗೆ ನೀಡಿರುವ ವಿವರಗಳನ್ನು ದಯವಿಟ್ಟು ಭರ್ತಿ ಮಾಡಿ. ಪ್ರತಿಕ್ರಿಯೆಗಾಗಿ ದಯಮಾಡಿ ನಿರೀಕ್ಷಣೆಯಲ್ಲಿರಿ`}
              </p>

              <div className="mt-3 w-full lg:grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <Input
                  title="Name"
                  astrik={'*'}
                  type="text"
                  style="mt-7  md:col-span-2"
                  setInfo={setName}
                  value={name}
                />
                <Input title="Organisation" type="text" style="mt-7 "   value={organization} setInfo={setOrganization} />
                <Input title="Profession " type="text" style="mt-7 "   value={profession} setInfo={setProfession} />

                <Input
                  title="Street Address"
                  type="text"
                  astrik={'*'}
                  style="mt-7 md:col-span-2"
                  setInfo={setStreetAdd}
                  value={streetAdd}
                />
                <Input title="City"    value={city} astrik={'*'} type="text" style="mt-7" setInfo={setCity} />
                <Input title="State"   value={state} astrik={'*'} type="text" style="mt-7" setInfo={setState} />
                <Input title="Postal Code or Zip"    value={pincode}type="number" style="mt-7" setInfo={setPincode} />
                <Input
                  title="Country "
                  astrik={'*'}
                  type="text"
                  style="mt-7"
                  setInfo={setCountry}
                  value={country}
                />

                <Input
                  title="Mobile No"
                  astrik={'*'}
                  type="number"
                  style="mt-7"
                  setInfo={setMobile}
                  value={mobile}
                />
                <Input title="E-mail"   value={email} astrik={'*'} type="email" style="mt-7" setInfo={setEmail} />

                <div className="w-full md:col-span-2 ">
                  <Fade bottom>
                    <label htmlFor="name" className="text-base  ">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className={`mt-4 w-full h-[200px] rounded-xl border border-neutral-dark4 p-2 bg-neutral-light4  `}
                    />
                  </Fade>
                </div>
              </div>

              
 
              <div className="mt-10 md:mt-16 lg:mt-28 flex justify-center md:justify-end">
                <button
                  onClick={handleSubmit}
                  className="w-48 h-14 flex justify-center items-center bg-primary-main rounded-full">
                  <p className="text-base text-neutral-light4 font-heading font-semibold">
                    {locale === 'kn' ? 'ಸಲ್ಲಿಸಿ' : 'Submit'}
                  </p>
                </button>
                {status && <p className="mt-4 text-center">{status}</p>}
              </div>
            </div>
          </div>

          <div className=" md:m-4 p-4 md:p-0 w-full space-y-9	">
            <div className=" p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4 w-full">
                <p className="text-xl font-semibold	text-primary-darker ">
                  {locale === 'en'
                    ? '           Address'
                    : `
ವಿಳಾಸ`}
                </p>
                <div className="flex flex-col lg:flex-row items-start w-full ">
                  <div className="w-1/5">
                  <MdLocationOn size={40} color='red' />
                  </div>

                  <div className="ml-2 w-full ">
                    <p className="text-base font-semibold text-neutral-dark1">
                      {locale === 'en'
                        ? '           Karnataka Co-operative Milk Producers Federation Ltd'
                        : `
ಕರ್ನಾಟಕ ಸಹಕಾರಿ ಹಾಲು ಉತ್ಪಾದಕರ ಮಹಾಮಂಡಳ ನಿಯಮಿತ, ಕಹಾಮ ಸಂಕೀರ್ಣ,`}
                    </p>
                    <p className="text-sm  text-neutral-dark1">
                      {locale === 'en'
                        ? `        #2915, KMF Complex,D.R.College Post,Dr.M.H.Marigowda Road,BENGALURU - 560 029.
                      Karnataka.`
                        : `
                      ಅಂಚೆ ಪೆಟ್ಟಿಗೆ ಸಂಖ್ಯೆ- 2915, ಡಿ.ಆರ್. ಕಾಲೇಜು ಪೋಸ್ಟ್, ಡಾ.ಎಂ.ಹೆಚ್.ಮರಿಗೌಡ ರಸ್ತೆ, ಬೆಂಗಳೂರು-560029, ಕರ್ನಾಟಕ
                    `}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4">
                <p className="text-xl font-semibold font-heading	text-primary-darker ">
                  {locale === 'en'
                    ? '           Toll Free'
                    : `
ಶುಲ್ಕರಹಿತ`}
                </p>
                <div className="flex items-start flex-col lg:flex-row ">
                  <div className="w-1/5">
                  <FcCustomerSupport size={40} />
                  </div>

                  <div className="ml-2 w-full">
                    <p className="text-base  text-neutral-dark1">
                      {locale === 'en'
                        ? `              1800 425 8030 10.00AM - 5.30PM Except on Second Saturday,Sunday &
                      GOVT.Holidays`
                        : `

                      080-260 96800 ಸಹಾಯವಾಣಿ: 1800 425 8030 ಟೋಲ್ ಫ್ರೀ 10.00AM - 5.45PM (ಎರಡನೇ ಮತ್ತು ನಾಲ್ಕನೇ ಶನಿವಾರ, ಭಾನುವಾರ ಮತ್ತು ಇತರ ರಾಜ್ಯ ಸರ್ಕಾರಿ ರಜಾದಿನಗಳನ್ನು ಹೊರತುಪಡಿಸಿ`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4">
                <p className="text-xl font-semibold font-heading	text-primary-darker ">
                  {locale === 'en'
                    ? '           Phone'
                    : `
ದೂರವಾಣಿ`}
                </p>
                <div className="flex items-start flex-col lg:flex-row  ">
                  <div className="w-1/5">
                  <FcCallback size={40} />
                  </div>

                  <div className="ml-2 w-full">
                    <p className="text-base text-neutral-dark1"> 080-260 96800</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4">
                <p className="text-xl	text-primary-darker font-heading font-semibold ">
                  {locale === 'en'
                    ? '           Whatsapp'
                    : `
ವಾಟ್ಸ್ ಆ್ಯಪ್ `}
                </p>
                <div className="flex items-start flex-col lg:flex-row  ">
                  <div className="w-1/5">
                  <ImWhatsapp size={40} color='green' />
                  </div>

                  <div className="ml-2 w-full">
                    <p className="text-base  text-neutral-dark1"> 7899683696</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
              <div className="space-y-3 mt-4 mb-4 w-full">
                <p className="text-xl font-semibold	text-primary-darker ">
                  {locale === 'en'
                    ? '           Email'
                    : `
ಮಿಂಚಂಚೆ`}
                </p>
                <div className="flex items-start w-full flex-col lg:flex-row ">
                  <div className="w-1/5">
                  <MdEmail size={40} color='red' />
 
                  </div>

                  <div className="ml-2 w-full">
                    <p className="text-base md:text-xs lg:text-base font-heading  text-neutral-dark1">
                      {' '}
                      customer.nandini@kmf.coop
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
