'use client';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel as Carousels } from 'react-responsive-carousel';
 

const CarouselImage = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Start from the first slide (index 0)
const [isPlaying,setIsPlaying]=useState(false)
  const handleSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(()=>{
setIsPlaying(true)
  },)
  return (
    <div className="relative w-full">
      <Carousels
        autoPlay={isPlaying}
        showArrows={true}
        interval={4000}
        showStatus={false}
        infiniteLoop={true} // Use curly braces for boolean props
        showThumbs={false}
        showIndicators={false}
        selectedItem={currentSlide}
        onChange={handleSlide}
      >
        {images.map((img, idx) => (
          <div key={idx} className='w-full h-full max-h-[350px]'>
            <img src={img} alt="" className="w-full h-full object-cover md:object-fill" /> {/* Ensure to fill container */}
          </div>
        ))}
      </Carousels>
    </div>
  );
};
CarouselImage.propTypes = {
  images: PropTypes.array
};

export const CarouselNotification = ({ images, title, description, link }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);
  const carouselRef = useRef(null);

  const handleSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full">
      <Carousels 
    
        autoPlay={isPlaying}
        interval={4000}
        showStatus={false}
        infiniteLoop
        showThumbs={false}
        showIndicators={true}
        selectedItem={currentSlide}
        onChange={handleSlide}>
        {images.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img} alt="" className="w-full h-80 object-cover" />

              <div className="absolute top-1/3 w-full left-0 flex flex-col justify-center space-y-7 items-center pl-10 pr-10 sm:flex-row   sm:items-end sm:justify-between ">
                <div className="flex justify-start items-start flex-col lg:pl-20">
                  <h1 className="text-neutral-light4 text-[40px]">{title}</h1>
                  <p className="text-[24px] text-neutral-light4">{description}</p>
                </div>

                <div className="lg:pr-20">
                  <button className=" w-[180px] h-[36px] text-center rounded-md border border-neutral-light4 text-neutral-light4  ">
                    View All
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousels >
    </div>
  );
};



 

export default CarouselImage;
