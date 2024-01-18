import Link from 'next/link';
import React from 'react';

function NewsCard({ image, date, createdBy, title, description, link }) {
  return (
    <div className="max-w-lg flex flex-col items-start justify-center space-y-5  ">
      <div className="flex w-full justify-center items-center">
        <img src={image} className="w-full h-60" />
      </div>

      <div className="w-full relative flex justify-between items-center before:absolute before:-bottom-3 before:w-full before:h-0.5 before:bg-neutral-dark4 ">
        <p className="text-sm text-neutral-dark1">{date}</p>
        <p className="text-sm text-neutral-dark1">{createdBy}</p>
      </div>

      <div className="flex flex-col justify-start items-start space-y-5 ">
        <h1 className="text-xl font-bold text-justify">{title}</h1>
        {/* {description?.map((item, idx) => {
          if(idx==0){
            return(

              <p key={idx} className="text-sm text-neutral-dark1 text-justify">{item?.children[0]?.text}</p>
              
            )
          }
       
        })} */}

        <Link href={link} className="bg-primary-main w-32 h-12 flex justify-center items-center text-neutral-light4 font-semibold rounded-md">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
