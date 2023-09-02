import React from "react";
import { GiCargoCrane } from "react-icons/gi";

function HomeAboutCard({
  tittle,
  text,
  text2,
  item1,
  item2,
  item3,
  item4,
  color,
}) {
  return (
    <div
      className={`md:h-full h-[40rem] w-[30rem] m-2   bg-[#011F4B] shadow-2xl py-4 px-8 flex flex-col justify-between rounded-xl min-w-[250px]  `}
    >
      <div className="h-[75px] w-[75px] border-white border-2 rounded-full border-dotted flex items-center justify-center">
        <GiCargoCrane size={50} style={{ color: "white" }} />
      </div>
      <div className=" border-b-2 border-white">
        {" "}
        <h1 className="text-white font-bold md:text-xl">{tittle}</h1>
      </div>
      <p className="text-white/60 text-sm">{text}</p>
      <div className="text-white/60">
        <p>{text2}</p>
        <ul className="px-8">
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
          <li>{item4}</li>
        </ul>
      </div>

      <div className="border-t-2">
        <h1 className="text-white/90">Aine Mickie</h1>
        <div className=" flex items-center justify-end text-white">
          <img
            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1690043604/white-removebg-preview_hvva1a.png"
            alt=""
            className="h-1/2 w-[8rem] object-contain"
          />
        </div>

        <p className="-mt-4 text-white/60">Software Developer</p>
      </div>
    </div>
  );
}

export default HomeAboutCard;
