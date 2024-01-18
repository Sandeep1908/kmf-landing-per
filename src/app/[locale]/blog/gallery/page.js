'use client';

import React, { useEffect, useState } from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';

// import { gallery } from '@/configtext/gallery';
import ImgaeCard from './ImageCard';
import Footer from '@/components/Footer';
import VideCard from './VideoCard';
import useApi from '@/hooks/useApi';
import { useParams } from 'next/navigation';

function Gallery() {
  const [galleryItems, setGalleryItesm] = useState([]);
  const listItems = ['Video', 'Images'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videos, setVideos] = useState([]);
  const [imageItems, setImageItems] = useState([]);

  const axios = useApi();
  const locale=useParams().locale
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/galleries');
      const imagesItem = data?.data?.map((items) => {
 
        return {
          title: items?.attributes?.title,
          date: items?.attributes?.date,
          image: items?.attributes?.images?.data?.attributes?.url
        };
      });
      setImageItems(imagesItem);
      setVideos([
        ...videos,
        data?.data?.map((item) => item?.attributes?.video?.data?.attributes?.url)
      ]);
      setGalleryItesm(videos);
    })();
  }, []);

  const handleClickItem = (idx) => {
    setCurrentIndex(idx);
    const galleryItems = idx === 0 ? videos : imageItems;
    setGalleryItesm(galleryItems);
  };

  return (
    <div className="w-full h-full absolute top-36 z-[-1]  bg-[#F6F6F6]  ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>
      <section className="max-w-7xl m-auto pt-10 bg-[#F6F6F6] ">
        <div className="w-full space-y-5 p-4 ">
          <h1 className="text-center text-xl text-primary-main">{locale==='en'?`Gallery`:`
ಗ್ಯಾಲರಿ`}</h1>

          <div className="w-full flex justify-center items-center pt-10 relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4">
            <ul className="flex gap-5">
              {listItems?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      currentIndex === idx
                        ? 'text-secondary-main relative before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-secondary-main'
                        : ''
                    } uppercase`}
                    onClick={() => handleClickItem(idx)}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center flex-wrap pt-10 p-4 space-y-4 bg-[#F6F6F6]">
          {galleryItems?.map((item, idx) => {
     

            if (item.image) {
              return (
                <ImgaeCard key={idx} title={item.title} imgUrl={item.image} date={item.date} />
              );
            } else {
              return <VideCard key={idx} video={item} />;
            }
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Gallery;
