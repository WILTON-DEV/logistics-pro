import React from "react";

function ServiceCard({ service, image }) {
  return (
    <div className=" relative h-[25rem] md:w-[24rem]  rounded-xl translate transition ease-in-out duration-1000 hover:translate-y-2">
      <div className=" h-full w-full z-10">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className=" transition duration-1000 ease-in-out  absolute top-0 left-0 h-full w-full z-20 hover:translate-y-2 rounded-xl flex-col flex items-center justify-center space-y-6 bg-gradient-to-t from-red-600 ">
        <h1 className="text-white font-extrabold text-[24px] text-center">
          {service}
        </h1>
        <button className="bg-[#011F4B] border-[#1F3042] hover:bg-[#011F4B]/0 transition ease-in-out duration-1000 border-2  text-white font-bold  p-4 rounded-md">
          View Services
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
