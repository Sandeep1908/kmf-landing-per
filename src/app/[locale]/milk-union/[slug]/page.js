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
import Link from 'next/link';
import { useMyContext } from '@/context/headerContext';

import { BlocksRenderer, Typography } from '@strapi/blocks-react-renderer';

function MilkUnionDetail({ slug }) {
  const imagesArr = [bengaluruMilkImg.src, Union1.src, Union2.src];
  const [unionImages, setUnionImages] = useState([]);
  const [union, setUnion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allUnions, setAllUnions] = useState([]);
  const param = useParams();
  const [banner, setBanner] = useState();
  const [bannerImg, setBannerImg] = useState();
  const [readMore, setReadMore] = useState(false);

  const axios = useApi();
  const [loading, setLoading] = useState(true);

  const locale = useParams().locale;
  const { isScroll, setIsScroll, id, setId } = useMyContext();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/milk-unions/${param?.slug}`);
      const { data: unions } = await axios.get('/api/milk-unions');

      setBanner(data?.data?.attributes?.bannervideo?.data?.attributes?.url);
      setBannerImg(data?.data?.attributes?.banner?.data?.attributes?.url);

      setAllUnions(unions?.data);
      setUnion(data?.data);
      setUnionImages(data?.data?.attributes?.image?.data);
      setLoading(false);
    })();
  }, []);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className={`w-full h-full absolute   z-[-1] ${isScroll ? 'top-48' : ''}  `}>
      {banner ? (
        <section className={`w-full h-[700px] pt-28 relative  grid place-items-center `}>
          {/* <img src={banner?banner[0]:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
           */}

          <video
            src={banner || ''}
            muted
            autoPlay
            loop
            controls
            playsInline
            className={`w-full  h-full    object-fill absolute top-0  ${
              isScroll ? 'h-[400px]' : ''
            } `}
          />
        </section>
      ) : (
        <section className={`w-full h-[500px] pt-28 relative  grid place-items-center `}>
          {/* <img src={banner?banner[0]:HeroImg.src} className="w-full h-full absolute top-0 z-[-1]" />
           */}

          <img
            src={bannerImg || ''}
            className={`w-full  h-full    object-fill absolute top-0 z-[-1] ${
              isScroll ? 'h-[400px]' : ''
            } `}
          />
        </section>
      )}

      <div className="w-full h-auto bg-[#F6F6F6] ">
        <section className="max-w-[1282px] h-full bg-white   m-auto grid grid-cols-3 gap-5   p-2 ">
          <div className="w-full max-w-7xl h-full  col-span-2  m-auto p-5  rounded-tl-3xl  rounded-br-3xl   shadow-sm">
            <div className="w-full h-full flex flex-col space-x-5 justify-center items-center lg:flex-row lg:justify-start">
              <div className="w-full h-full flex flex-col justify-center items-center pt-10 space-y-5 lg:items-start">
                <div className="mb-20  mt-20  relative w-full  flex justify-center items-center ">
                  <img
                    src="/images/heading/heading-primary.svg"
                    className="absolute   w-[530px] top-[-50px]    object-contain"
                  />
                  <h1 className=" text-primary-main relative max-w-[300px] m-auto text-center z-10 font-heading text-xl font-extrabold uppercase">
                    {union?.attributes?.name}
                  </h1>
                </div>
                <p className="text-md"> {union?.attributes?.union_code}</p>

                <div className=" w-full h-full transition-all duration-300  ">
                  {union && union.attributes && union.attributes.about && (
                    <BlocksRenderer
                      content={
                        readMore ? union.attributes.about : union.attributes.about.slice(0, 5)
                      }
                      blocks={{
                        // You can use the default components to set class names...
                        paragraph: ({ children }) => (
                          <p className="text-neutral900 w-full">{children}</p>
                        ),
                        // ...or point to a design system
                        heading: ({ children, level }) => {
                          switch (level) {
                            case 1:
                              return <h1 className="text-xl">{children}</h1>;
                            case 2:
                              return <h2 className="text-lg">{children}</h2>;
                            case 3:
                              return <h3>{children}</h3>;
                            case 4:
                              return <h4>{children}</h4>;
                            case 5:
                              return <h5>{children}</h5>;
                            case 6:
                              return <h6>{children}</h6>;
                            default:
                              return <h1>{children}</h1>;
                          }
                        },
                        code: ({ children }) => {
                          const columns =
                            children?.[0]?.props?.text.split(',')[0].trim() === 'columns'
                              ? children?.[0]?.props?.text.split(',').slice(1)
                              : [];

                          return (
                            <table className="table-fixed  border-spacing-y-2	 border-collapse border-black border      w-full ">
                              <thead className=" text-left ">
                                {columns?.map((item, id) => {
                                  return (
                                    <th className="p-2   border-r border-black " key={id}>
                                      {item}
                                    </th>
                                  );
                                })}
                              </thead>
                              <tbody className="text-left  text-md ">
                                <tr className="w-full ">
                                  {children?.[0]?.props?.text.split(',')[0].trim() !== 'columns' &&
                                    children?.[0]?.props?.text?.split(',')?.map((item, id) => {
                                      return (
                                        <td
                                          className=" p-2 text-md font-content border-r border-black "
                                          key={id}>
                                          {' '}
                                          {item}
                                        </td>
                                      );
                                    })}
                                </tr>
                              </tbody>
                            </table>
                          );
                        },

                        // For links, you may want to use the component from your router or framework
                        link: ({ children, url }) => <Link to={url}>{children}</Link>
                      }}
                    />
                  )}

                  <button
                    onClick={toggleReadMore}
                    className="w-full flex justify-end text-primary-main">
                    {readMore ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-fit flex flex-col  shadow-md bg-white p-2  justify-start   items-start rounded-lg border-b-2 border-primary-main  ">
            <div className="w-full    shadow-md bg-white  ">
              <h1 className="p-5">Milk Unions</h1>
            </div>

            {allUnions?.map((item, id) => {
              return (
                <Link key={id} href={`/${locale}/milk-union/${item?.id}`}>
                  <p
                    className={`  border m-1 p-1 text-xs rounded w-full ${
                      item?.id === parseInt(param?.slug) ? 'bg-primary-main text-white' : ''
                    }  `}>
                    {id + 1} - {item?.attributes?.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <section className="w-full   pb-10  p-2 bg-[#F6F6F6]">
        <div className="max-w-[1282px] h-full  m-auto p-5  rounded-lg  bg-primary-darker text-white  shadow-sm ">
          <div className="flex flex-col h-full space-y-1  p-2 justify-between items-start">
            <h1 className="text-2xl">{union?.attributes?.longtitle}</h1>

            <div className="flex justify-center items-start space-x-4">
              <img src={locationIco.src} className="w-5 h-5" />
              <p className="text-lg">{union?.attributes?.address}</p>
            </div>

            <div className="flex justify-center items-start space-x-4">
              <img src={callIco.src} className="w-5 h-5" />
              <p className="text-lg"> {union?.attributes?.phone}</p>
            </div>

            <div className="flex justify-center items-start space-x-4">
              <img src={printIco.src} className="w-5 h-5" />
              <p className="text-lg"> {union?.attributes?.fax}</p>
            </div>

            <div className="flex justify-center items-start space-x-4">
              <img src={mailIco.src} className="w-5 h-5" />
              <p className="text-lg"> {union?.attributes?.email}</p>
            </div>

            <div className="flex justify-end items-end w-full space-x-4">
              <Link href={union?.attributes?.unionlink || ''}>
                <p className="text-xl   transition-all duration-300 cursor-pointer hover:underline text-white ">
                  {' '}
                  Know More...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MilkUnionDetail;
