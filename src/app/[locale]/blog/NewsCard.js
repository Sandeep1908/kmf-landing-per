import Link from 'next/link';
import React from 'react';

function NewsCard({ image, date, createdBy, title, description, link }) {
  return (
    <div className="w-72 h-80 shadow-md bg-white p-5 rounded-lg flex flex-col items-start justify-center space-y-5 border border-black  ">
      <div className="flex w-full h-[70%] justify-center items-center">
        <img src={image} className="w-full h-full object-cover" />
      </div>

      <div className="w-full h-[10%] relative flex justify-between items-center before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4 ">
        <p className="text-sm text-neutral-dark1">{date}</p>
        <p className="text-sm text-neutral-dark1">{createdBy}</p>
      </div>

      <div className="flex flex-col h-[20%]  w-full  justify-start items-start space-y-5 ">
        <h1 className="text-md font-bold ">{title?.length > 50 ? title?.substring(0,50)+"....":title}</h1>
         
 
      </div>
    </div>
  );
}

export default NewsCard;
