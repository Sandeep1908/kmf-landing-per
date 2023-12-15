'use client';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
const CarouselImage = ({ images }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);
  const carouselRef = useRef(null);

  const handleSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full">
      <Carousel
        ref={carouselRef}
        autoPlay={isPlaying}
        showArrows={true}
        interval={4000}
        showStatus={false}
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        selectedItem={currentSlide}
        onChange={handleSlide}>
        {images.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img} alt="" className="w-full h-[800px] object-cover" />
            </div>
          );
        })}
      </Carousel>

      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 flex flex-col  space-y-4  ">
        <button className=" bg-light-light4 text-sm  text-black w-[200px] h-[50px] rounded-sm tracking-wide  hover:text-white after:absolute after:inset-0 after:bg-primary-gradient after:w-0 hover:after:w-full transform origin-left after:transition-all after:duration-[.7s]  hover:after:z-[-1]"  >
          VIEW ALL PRODUCT
        </button>
      </div>
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
      <Carousel
        ref={carouselRef}
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
              <img src={img} alt="" className="w-full h-[316px] object-cover" />

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
      </Carousel>
    </div>
  );
};

export default CarouselImage;
