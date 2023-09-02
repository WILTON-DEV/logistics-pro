import React from "react";

function Card({tittle, text, height, background, textColor, textTittle, svg}) {

  return (
    <div className={`p-4 hover:translate-y-2 transition mb-4 md:mb-0  w-full md:w-[45%] h-[10rem] md:h-[${height}] bg-${background}  flex justify-between rounded-xl shadow-xl `}>
      <div className="w-1/4  flex justify-center">
        <img
          src={svg}
          alt=""
          className="h-[3rem] w-[3rem]"
        />
      </div>
      <div className="w-3/4 overflow-hidden">
        <p className={`md:text-2xl font-extrabold mb-2 text-${textTittle}`}>{tittle}</p>
        <p className={`text-sm md:text-[14px] text-${textColor}`}>
         {text}
        </p>
      </div>
    </div>
  );
}

export default Card;
