'use client'
import React, { useEffect, useState } from 'react';
import logo from '../images/logo/logo.png';
import locationVectorIco from '../images/footer/locationVector.svg';
import callVectorIco from '../images/footer/callVector.svg';
import msgVectorIco from '../images/footer/msgVector.svg';
import nearMeIco from '../images/footer/near_me.svg';
import facebookIco from '../images/footer/facbook.png';
import instagramIco from '../images/footer/instagram.png';
import linkedinIco from '../images/footer/linkedin.png';
import ytIco from '../images/footer/yt.png';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
function Footer() {
  const[footerItem,setFooterItem]=useState([])
  const params=useParams()
  const axios =useApi()
  useEffect(()=>{
    (
      async()=>{
        const {data}=await axios.get('/api/footers')
        const footer=data?.data?.map(item=>{
          return(
            {address:item?.attributes?.address,
              telephone:item?.attributes?.telephone,
              email:item?.attributes?.email,
              copyright:item?.attributes?.copyright
            }
          )
        })
        setFooterItem(footer)
      }
    )()
  },[params?.locale])
  return (
    <section className="w-full h-full md:h-auto pt-10 relative bg-primary-subtle  footer-bg  ">
      <div className=" z-10 relative p-5 max-w-7xl   m-auto flex flex-col justify-between items-center md:p-10 md:items-start">
        <div>
          <img src={logo.src} className="w-28" />
        </div>

        <div className="  pt-10 w-full flex flex-col justify-center items-center  gap-5 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col justify-center items-center md:items-start p-2 max-w-96 space-y-5">
            <h1 className="text-lg mb-5 relative before:absolute before:-bottom-3 before:w-10 before:h-1 before:bg-primary-lighter">
              Address
            </h1>

            <div className="flex justify-center items-start space-x-3">
              <img src={locationVectorIco.src} />

              <div className="flex flex-col justify-center items-center md:items-start space-y-5">
                <p className="text-neutral-dark1 text-justify text-sm">
                 {footerItem?.[0]?.address}
                </p>
              <div>
              <iframe align="middle" allowfullscreen="" frameborder="0" height="250" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.518745456276!2d77.60279164133709!3d12.938623223603017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ef1a5c4365%3A0xf0eb81ef4c8cd455!2sKMF!5e0!3m2!1sen!2sin!4v1456068635330"  width="100%"></iframe>
              </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-2 max-w-96 justify-center space-y-5 items-center md:items-start">
            <h1 className="text-lg mb-5 relative before:absolute before:-bottom-3 before:w-10 before:h-1 before:bg-primary-lighter">
              Telephone
            </h1>

            <div className="flex justify-center items-start space-x-3">
              <img src={callVectorIco.src} />

              <div className="flex flex-col justify-center items-start space-y-5">
                <p className="text-neutral-dark1 text-justify text-sm">
                {footerItem?.[0]?.telephone}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-2 max-w-96 space-y-5 justify-center items-center md:items-start">
            <h1 className="text-lg mb-5 relative before:absolute before:-bottom-3 before:w-28 before:h-1 before:bg-primary-lighter">
              E-mail
            </h1>

            <div className="flex justify-center items-start space-x-3">
              <img src={msgVectorIco.src} />

              <div className="flex flex-col justify-center items-start space-y-5">
                <p className="text-neutral-dark1 text-justify">   {footerItem?.[0]?.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full justify-between items-center mt-10 space-y-6  flex-wrap md:flex-row">
          <div className="flex justify-center items-center">
            <p className="text-sm">©    {footerItem?.[0]?.copyright}</p>
          </div>

     
        </div>
      </div>
    </section>
  );
}

export default Footer;
