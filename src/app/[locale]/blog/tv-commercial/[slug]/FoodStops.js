import React from 'react';

function FoodStops() {
 
  return (
    <div className="w-full m-auto h-auto flex flex-col justify-center items-center ">
      <video
        src="https://kmf-public.s3.ap-south-1.amazonaws.com/KMF_RAMESHWARAM_VIDEO_FINAL_de3421b512.mp4"
        title="YouTube video player"
        controls
        loop
        muted
        className="w-full max-w-[1350px] m-auto h-[500px]"></video>
    </div>
  );
}

export default FoodStops;