import React from 'react';
import propTypes from 'prop-types';
 
import { useState } from 'react';

function ImgaeCard({ imgUrl, title, date }) {
 
  return (
 
    <div className="max-w-80 relative rounded-tl-3xl rounded-br-3xl bg-light-light4 overflow-hidden m-auto group hover:bg-primary-main transition-all duration-400 ease-in-out">
    <div className="max-h-[70%]">
      <img
        src={imgUrl}
        alt="featured-img"
        className="w-full h-full group-hover:scale-[1.1]"
        style={{ transition: '.4s all' }}
      />
    </div>
  
    <div className="mt-5 mb-4 p-2 space-y-3 ">
      <p className="text-sm text-neutral-dark1 group-hover:text-white">{date}</p>
      <h1 className="text-md text-justify group-hover:text-white">{title}</h1>
    </div>
  </div>
  
 
  );
}

ImgaeCard.propTypes = {
  imgUrl: propTypes.string,
  title: propTypes.string
};

 
export default ImgaeCard;
