import React from "react";

const ImageScroll = ({ imgSrc, className, head, headSpecial,headOther, subTittle }) => {
  return (
    <div className="relative h-[70vh]">
      <div className="absolute top-0 left-0 bg-[#011F4B]/60 w-full h-full">
        <div className="h-full w-full   flex flex-col  justify-start ">
          <div className="w-full  md:w-[60vw] lg:w-[60vw] flex flex-col items-center justify-between   p-4 ">
            <div className=" flex flex-col  justify-center  p-4 ">
              <div className="prose lg:prose-xl mb-[2rem]">
                <h1 className=" md:text-[3rem]   mb-[2rem] text-white font-extrabold">
                  {head}{" "}
                  <span className="text-[#A62226]">{headSpecial} </span>{headOther}
                </h1>
                <p className=" text-justify text-[1.5rem]  text-white  md:w-3/4 w-full mb-6">
                {subTittle}
                </p>
              </div>
              <div className=" w-full  flex py-2 ">
               
                  <button className=" transition duration-1000 h-16 w-[10rem] md:w-[12rem] bg-red-600 hover:bg-red-600/0 hover:border-2 hover:border-red-600 mr-4 rounded-md font-bold text-white">
                    Create shipment
                  </button>
          
                <button className="transition duration-1000 h-16  md:w-[12rem] border-2 border-red-600 mr-4 rounded-md font-bold text-white hover:bg-red-600">
                  Track Shipment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={`w-full h-full object-cover ${className}`}
        src={imgSrc}
        alt={imgSrc}
      />
    </div>
  );
};

export default ImageScroll;
