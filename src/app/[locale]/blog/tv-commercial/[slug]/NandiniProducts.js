import React from 'react';

function NandiniProducts() {
  const vidLinks = [
    'https://www.youtube.com/embed/o4ltDjszjFM?si=lfqlKSyPEV56ec8l',
    'https://www.youtube.com/embed/MYHRYCC9aeA?si=jNuPykfpNVdCW0WK',
    'https://www.youtube.com/embed/-lGjkvecK44?si=4-Uh9Be7Y7dDQ55K',
    'https://www.youtube.com/embed/LuFHXaMoMic?si=KzepZhnROfWBppRv',
    'https://www.youtube.com/embed/h0PH4L9NCjU?si=pVxEWR9uC2MvDgZb',
    'https://www.youtube.com/embed/s6nXdb4Le2I?si=VqbO94w7_ULFZgOB',
    'https://www.youtube.com/embed/9ghbDugU_g8?si=ObxjT6nPdPk9UkyL',
    'https://www.youtube.com/embed/QVQmK2uBNmI?si=nPWQjM4HVcJCljiS',
    'https://www.youtube.com/embed/zAxOpW_G1w4?si=HAjKwhKlboReJ5Ql',
    'https://www.youtube.com/embed/aOULrMEL3yg?si=P51SPBS0K_tBxJOT',
    'https://www.youtube.com/embed/2_rfzSRx0oo?si=G5sxaJe5oLgafNQQ',
    'https://www.youtube.com/embed/ikPnsnIAFZ8?si=h2QI1qW5DhTIwQU-',
    'https://www.youtube.com/embed/aA8wd5EqeRc?si=aVH-nyf5sJu-gTpX',
     

    'https://www.youtube.com/embed/jy2ZgQPeuws?si=C8RREwApPEgVIByw',
    'https://www.youtube.com/embed/IsmykY00d70?si=zjw_n-FBP3TQWV-j'
  ];
  return (
    <div className="w-full m-auto h-auto flex flex-col justify-center items-center ">
      <iframe
        src="https://www.youtube.com/embed/-k3eENe49g8?si=_gORhyTrdsNl1ZC1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="w-full max-w-[1400px] m-auto h-[500px]        "></iframe>
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

export default NandiniProducts;
