import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';

function About({setLoading}) {
  const [aboutUs, setAboutUs] = useState([]);

  const axios = useApi();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/our-journeys');
      setAboutUs(data?.data[0]?.attributes?.description);
      setLoading(false)
    })();
  }, []);
  return (
    <div className="w-full flex-col items-start justify-start p-10 space-y-5">
      {aboutUs?.map((item, idx) => {
        return (
          <p key={idx} className="text-sm text-justify">
            {item?.children[0]?.text}
          </p>
        );
      })}
    </div>
  );
}

export default About;
