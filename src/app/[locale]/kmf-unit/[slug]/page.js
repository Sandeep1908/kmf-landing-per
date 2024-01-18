'use client';
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


function KmfUnitDetail() {
  
  const [unit, setUnit] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banner,setBanner]=useState()
  const param = useParams();

  const axios = useApi();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/units-of-kmfs/${param?.slug}`);
     
      setBanner(data?.data?.attributes?.banner?.data?.attributes?.url)
      setUnit(data?.data);
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
          className="max-w-[1282px]   m-auto p-3  rounded-tl-3xl  rounded-br-3xl  bg-white  "
           >
          <div className="w-full flex flex-col space-x-5 justify-start items-start lg:flex-row lg:justify-start">
          

            <div className=" w-full flex flex-col justify-start items-start pt-10 space-y-5  ">
              <h1 className="text-2xl text-justify ">{unit?.attributes?.title}</h1>
             

              {unit?.attributes?.description?.map((item, idx) => {
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

 

      <Footer />
    </div>
  );
}

export default KmfUnitDetail;
