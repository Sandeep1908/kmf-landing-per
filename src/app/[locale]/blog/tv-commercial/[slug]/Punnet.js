import React from 'react';

function Punnet() {
  const vidLinks = [
    'https://www.youtube.com/embed/4p2JGB-5y1Y?si=yQYm3CxsKByamgHI',
    'https://www.youtube.com/embed/OHlTeqgxCZo?si=PS5o8Z90ugN60OkW',
  
  ];
  return (
    <div className="w-full m-auto h-auto flex flex-col justify-center items-center ">
  
      <div
        className="w-full flex
 flex-wrap gap-5
    mt-20
    ">
        {vidLinks?.map((item, id) => {
          return (
            <iframe
              key={id}
              width="400"
              height="250"
              src={item}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          );
        })}
      </div>
    </div>
  );
}

export default Punnet;
