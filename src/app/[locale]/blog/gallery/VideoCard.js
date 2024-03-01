import React from 'react';
import propTypes from 'prop-types';

import { useState, useEffect } from 'react';
import useApi from '@/hooks/useApi';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';
 
function VideCard() {
  const [imageItems, setImageItems] = useState([]);
  const axios = useApi();
  const locale=useLocale().locale;
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
        <Link href={`/${locale}/blog/gallery/videos/${item?.id}` || ''} key={idx}>
          <div className="card">
            <div className="card-image">
              <img
                src={item?.attributes?.banner?.data?.attributes?.url}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="category"> Illustration </div>
            <div className="heading uppercase"> {item?.attributes?.name}</div>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

VideCard.propTypes = {
  imgUrl: propTypes.string,
  title: propTypes.string
};

export default VideCard;
