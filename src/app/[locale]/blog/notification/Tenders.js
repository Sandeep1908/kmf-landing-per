import React from 'react';
import Link from 'next/link';

function Tenders({ title, description, tenderNo, image, date, link }) {
  return (
    <div className="flex flex-col  justify-evenly items-center p-5   bg-white rounded-tl-3xl  rounded-br-3xl sm:flex-row ">
      <div className="w-2/5 sm:w-1/5 relative before:absolute before:-right-3 before:w-1 before:h-full before:rounded-lg before:bg-secondary-main before:hidden lg:before:block">
        <img src={image} className=" w-full h-full md:w-40 md:h-60 " />
      </div>

      <div className=" w-full justify-center sm:w-2/5 flex flex-col sm:justify-between items-start space-y-5">
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
          <h1 className="text-lg">{title}</h1>
          <p className="text-justify text-neutral-dark1 text-sm">{description}</p>
          <p className="text-md mt-4 text-justify">{tenderNo}</p>
        </div>

        <div className=" w-full flex flex-col  justify-between items-center sm:flex-row">
          <p className="text-neutral-dark2">Last date: {date}</p>

          <Link
            href={link || ''}
            className="bg-primary-main w-28 h-10 flex justify-center items-center  text-neutral-light4 font-semibold rounded-md">
            Download
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tenders;
