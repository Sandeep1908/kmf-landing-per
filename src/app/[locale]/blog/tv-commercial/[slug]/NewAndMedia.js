import React from 'react';

function NewsAndMedia() {
 
  return (
    <div className="w-full m-auto h-auto flex flex-col justify-center items-center ">
      <iframe
        src="https://www.youtube.com/embed/DAWxhmAS3yg?si=XrnV0CoUojllV0WK"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="w-full max-w-[1350px] m-auto h-[500px]"></iframe>
    </div>
  );
}

export default NewsAndMedia;
