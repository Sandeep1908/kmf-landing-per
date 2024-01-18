import React from 'react';
import propTypes from 'prop-types';
 


function VideCard({ video }) {
 
  return (
 
    <div className="  h-full relative  rounded-md bg-light-light4 overflow-hidden m-auto group hover:bg-primary-main transition-all duration-400 ease-in-out">
    <div className=" w-full h-96">
      <video
        src={video}
         
        loop
        controls
        
        alt="featured-video"
        className="w-full h-full   object-cover"
        style={{ transition: '.4s all' }}
      />
    </div>
 
  </div>
  
 
  );
}

VideCard.propTypes = {
  imgUrl: propTypes.string,
  title: propTypes.string
};

 
export default VideCard;
