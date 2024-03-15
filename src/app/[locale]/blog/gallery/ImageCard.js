import React from 'react';
import propTypes from 'prop-types';
import './style.css';

import { useState, useEffect } from 'react';
import useApi from '@/hooks/useApi';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';

function ImgaeCard() {
  const [imageItems, setImageItems] = useState([]);
  const axios = useApi();
  const locale = useLocale().locale;
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/imagecategories');

      setImageItems(data.data);
    })();
  }, []);

  return (
    <div className="w-full h-full  grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   pt-10 p-4  gap-5 bg-[#F6F6F6]">
      {imageItems?.map((item, idx) => {
        return (
          <Link href={`/${locale}/blog/gallery/images/${item?.id}` || ''} key={item?.id}>
            
              <div className="bg-white  shadow-md hover:scale-105 hover:shadow-xl duration-500">
                <a href="#">
                  <img
                    src={item?.attributes?.banner?.data?.attributes?.url}
                    alt="Product image"
                    className="h-80 w-72 object-cover"
                  />
                </a>
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Category</span>
                  <p className="text-lg font-bold text-black truncate block  uppercase">{item?.attributes?.name}</p>
                 
                </div>
              </div>
      
          </Link>
        );
      })}
    </div>
  );
}

ImgaeCard.propTypes = {
  imgUrl: propTypes.string,
  title: propTypes.string
};

export default ImgaeCard;
