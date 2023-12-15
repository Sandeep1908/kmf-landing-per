import React from "react";
import propTypes from "prop-types";

function Card({ imgUrl, title, description }) {
  return (
    <div className="max-w-[400px]  h-[480px] bg-light-light4 rounded-md overflow-hidden  m-auto" style={{boxShadow:'0px 11px 49px 0px rgba(0, 0, 0, 0.15)'}} >

        <div className="p-2 h-[70%]">
            <img src={imgUrl}  alt="featured-img" className=" w-full    h-full hover:scale-[1.1] " style={{transition:'.4s all'}}/>
        </div>

        <div className="mt-10">
        <h1 className="text-2xl text-center ">{title}</h1>
        </div>

 
    </div>
  );
}

Card.propTypes = {
  imgUrl: propTypes.string,
  title: propTypes.string,
};



export const LinkCard=({ imgUrl, title, description })=> {
  return (
    <div className=" ">

        <div className="p-2 w-[250px] h-[250px] flex justify-center items-center border-neutral-dark1   bg-neutral-light4 rounded-full" style={{boxShadow:'0px 8px 24px 0px rgba(0, 0, 0, 0.12)'}}>
            <img src={imgUrl}  alt="featured-img" className=" w-[120px] h-[120px] object-contain hover:rotate-45 " style={{transition:'.4s all'}}/>
        </div>

        <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center ">{title}</h1>
        <p className="text-justify text-[#595959]">{description}</p>
        </div>

 
    </div>
  );
}
export default Card;
