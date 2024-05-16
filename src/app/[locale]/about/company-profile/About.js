import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';

function About({ setLoading }) {
  const [aboutUs, setAboutUs] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const axios = useApi();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/our-journeys');

      setAboutUs(data?.data[0]?.attributes?.description);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="w-full   m-auto  rounded-lg      flex-col items-start justify-start p-10 space-y-5">
      {aboutUs.length > 2
        ? aboutUs?.map((item, idx) => {
          
            if (idx < 2) {
              return (
                <div key={idx} className={`${readMore ? 'hidden' : ''}`}>
                  <p className="text-xl font-josefin  text-justify">{item?.children[0]?.text}</p>

                
                </div>
              );
        
            }
          })
        : aboutUs?.map((item, idx) => {
            return (
              <p key={idx} className="text-xl font-josefin  text-justify">
                {item?.children[0]?.text}
              </p>
            );
          })}
                <div
              className={`w-full flex justify-end items-end text-lg text-primary-main hover:underline cursor-pointer ${readMore?'hidden':''}`}
              onClick={() => setReadMore(true)}>
              Read more...
            </div>

      {readMore &&
        aboutUs?.map((item, idx) => {
          return (
            <p key={idx} className="text-xl font-josefin  text-justify">
              {item?.children[0]?.text}
            </p>
          );
        })}
          <div
              className={`w-full flex justify-end items-end text-lg text-primary-main hover:underline cursor-pointer ${!readMore?' hidden':'block'}`}
              onClick={() => setReadMore(false)}>
              Read Less...
            </div>
    </div>
  );
}

export default About;
