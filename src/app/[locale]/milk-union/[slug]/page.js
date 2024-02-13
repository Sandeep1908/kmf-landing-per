'use client'
import React, { useEffect, useState } from 'react';
import Logo from '@/images/logo/logo.png';
import HeroImg from '@/images/milk-union/milk-union-home.png';
import bengaluruMilkImg from '@/images/milk-union/bengaluru-milk.png';
import Union1 from '@/images/milk-union/union-1.png';
import Union2 from '@/images/milk-union/union-2.png';
import locationIco from '@/images/milk-union/icons/location_on.svg';
import mailIco from '@/images/milk-union/icons/mail.svg';
import callIco from '@/images/milk-union/icons/call.svg';
import printIco from '@/images/milk-union/icons/print.svg';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
function MilkUnionDetail({ slug }) {
  const imagesArr = [bengaluruMilkImg.src, Union1.src, Union2.src];
  const [unionImages, setUnionImages] = useState([]);
  const [union, setUnion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const param = useParams();
  const [banner,setBanner]=useState()
  const axios = useApi();
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/milk-unions/${param?.slug}`)
      setBanner(data?.data?.attributes?.banner?.data?.attributes?.url)
      
      setUnion(data?.data);
      setUnionImages(data?.data?.attributes?.image?.data);
      setLoading(false)
    })();
  }, []);

  return (
    <div className="w-full h-full absolute top-36 z-[-1] bg-[#F6F6F6]">
        <section className={`w-full h-72 pt-28 relative  grid place-items-center company-bg`}>
        <img src={banner?banner:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
        <img src={Logo.src} alt="milk-union-logo" className={`w-[200px] ${banner?'hidden':'block'}`} />
      </section>

      <section className="w-full  p-2 bg-[#F6F6F6]">
        <div
          className="max-w-[1282px]   m-auto p-5  rounded-tl-3xl  rounded-br-3xl  bg-white  shadow-sm"
          >
          <div className="w-full flex flex-col space-x-5 justify-center items-center lg:flex-row lg:justify-start">

            {unionImages?.[currentIndex]?
              <div className="w-full flex flex-col justify-center items-center space-y-5">
              <div className="  max-w-[458px]    ">
                <img
                  src={unionImages?.[currentIndex]?.attributes?.url}
                  alt="slider-img"
                  className="w-full h-full"
                />
              </div>

          
            </div>
            
            :''}
          

            <div className=" w-full flex flex-col justify-center items-center pt-10 space-y-5 lg:items-start">
              <h1 className="text-2xl text-justify ">{union?.attributes?.name}</h1>
              <p className="text-md"> {union?.attributes?.union_code}</p>

              {union?.attributes?.about?.map((item, idx) => {
                return (
                  <p key={idx} className="text-neutral-dark1 text-sm">
                    {item?.children[0]?.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full   p-2 bg-[#F6F6F6]">
        <div
          className="max-w-[1282px] h-full  m-auto p-5  rounded-tl-3xl  rounded-br-3xl  bg-white  shadow-sm "
         >
          <div className="flex flex-col h-full space-y-5  p-3 justify-between items-start">
            <h1 className="text-2xl">{union?.attributes?.name}</h1>

            <div className="flex justify-center items-start space-x-4">
              <img src={locationIco.src} />
              <p className="text-lg">{union?.attributes?.address}</p>
            </div>

            <div className="flex justify-center items-start space-x-4">
              <img src={callIco.src} />
              <p className="text-lg"> {union?.attributes?.phone}</p>
            </div>

            <div className="flex justify-center items-start space-x-4">
              <img src={printIco.src} />
              <p className="text-lg"> {union?.attributes?.fax}</p>
            </div>

            <div className="flex justify-center items-start space-x-4">
              <img src={mailIco.src} />
              <p className="text-lg"> {union?.attributes?.email}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MilkUnionDetail;
