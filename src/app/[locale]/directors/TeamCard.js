import React from 'react';
import propTypes from 'prop-types';

const TeamCard = ({ imgUrl, desc, fullName }) => {
  return (
    <div className="max-w-80 relative rounded-tl-3xl rounded-br-3xl  shadow-md  overflow-hidden  group  transition-all duration-400 ease-in-out ">
      <div className="max-h-[70%] overflow-hidden ">
        <img
          src={imgUrl}
          alt="featured-img"
          className="w-full h-full group-hover:scale-[1.1]"
          style={{ transition: '.4s all' }}
        />
      </div>

      <div className="mt-5  flex justify-center items-center flex-col p-4 space-y-3 ">
        <p className="text-md font-bold text-neutral-dark1">{fullName}</p>
        <h1 className="text-sm text-center ">{desc}</h1>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  imgUrl: propTypes.string,
  fullName: propTypes.string,
  desc: propTypes.string
};

export default TeamCard;
