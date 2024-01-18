'use client';

import React, { useState, useEffect } from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';
import newsImg1 from '@/images/blog/newImg.png';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';
import Link from 'next/link';

function BlogDetail() {
  const param = useParams();
  const axios = useApi();
  const [blog, setBlog] = useState([]);
  const [recentNew, setRecentNew] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/blog-posts/${param?.slug}`);
      const { data: recentnew } = await axios.get(
        '/api/blog-posts?sort[0]=createdAt:desc&_limit=3'
      );
      setBlog(data.data);
      if(recentnew?.data?.length > 3){
        setRecentNew(recentnew.data?.slice(0,3));
      }
      else{
        setRecentNew(recentnew?.data)
      }
 
    })();
  }, []);

  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>

      <section className="w-full h-auto pt-10  ">
        <div className="w-full p-4 flex  flex-col flex-wrap  justify-center items-center lg:flex-row lg:justify-around lg:items-start">
          <div className="max-w-4xl flex flex-col items-start justify-center space-y-5  ">
            <div className="w-full h-full flex justify-center items-center">
              <img src={blog?.attributes?.image?.data?.attributes?.url} className="w-full h-96 object-contain"  />
            </div>

            <div className="w-full relative flex justify-between items-center before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4 ">
              <p className="text-sm text-neutral-dark1">{blog?.attributes?.date}</p>
              <p className="text-sm text-neutral-dark1">By: Admin</p>
            </div>

            <div className="flex flex-col justify-start items-start space-y-5">
              <h1 className="text-xl font-bold text-justify">{blog?.attributes?.title}</h1>

              {blog?.attributes?.content?.map((item, idx) => {
                return (
                  <p key={idx} className="text-sm text-neutral-dark1 text-justify">
                    {item?.children[0]?.text}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="flex w-full   flex-wrap sm:flex-nowrap  gap-5 justify-evenly  lg:flex-col lg:max-w-md  items-start lg:justify-center space-y-5  pt-10 lg:pt-0 ">
            <div className="w-full flex flex-col justify-center items-center lg:items-start space-y-6">
              <div>
                <h1 className="text-primary-main   text-lg">Recent News</h1>
              </div>

              {recentNew?.map((news, idx) => {
                return (
                  <Link href={`/${news?.attributes?.locale}/blog/${news?.id}`} key={idx}>
                    <div className="max-w-72 h-36  relative  before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
                      <div className=" w-full  h-full flex justify-center items-start space-x-4">
                        <div className="w-full h-full">
                          <img
                            src={news?.attributes?.image?.data?.attributes?.url}
                            className="w-full h-full"
                          />
                        </div>

                        <div className="flex flex-col justify-between items-start h-full">
                          <p className="text-sm text-neutral-dark1 text-justify">
                            {news?.attributes?.title}
                          </p>
                          <p className="text-xs text-neutral-dark1">{news?.attributes?.date}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="w-full flex flex-col justify-center items-center lg:items-start space-y-6">
              <div>
                <h1 className="text-primary-main   text-lg">Tags</h1>
              </div>

              <div className="max-w-72 h-36  relative   ">
                <div className="w-full flex flex-wrap justify-around gap-5">
                  <p className="w-28 text-sm flex justify-center items-center rounded-md h-10 text-neutral-dark3 border border-neutral-dark4">
                    Dairy Farm
                  </p>

                  <p className="w-28 text-sm flex justify-center items-center rounded-md h-10 text-neutral-dark3 border border-neutral-dark4">
                    Dairy Farm
                  </p>

                  <p className="w-28 text-sm flex justify-center items-center rounded-md h-10 text-neutral-dark3 border border-neutral-dark4">
                    Dairy Farm
                  </p>

                  <p className="w-28 text-sm flex justify-center items-center rounded-md h-10 text-neutral-dark3 border border-neutral-dark4">
                    Dairy Farm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogDetail;
