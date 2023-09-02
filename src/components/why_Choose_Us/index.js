import React from "react";
import { SlSocialDropbox } from "react-icons/sl";
import { HiPlusSm } from "react-icons/hi";
import Card from "./Card";

function index() {
  const cardsData = [
    {
      tittle: "Live chat 24 hours",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas unde ratione quam ipsa provident, dolorum magni ",
      height: "12rem",
      background: "white",
      textColor: "gray-400",
          textTittle: "[#1F3042] ",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1690040201/settings-svgrepo-com_2_yzmo6w.svg"
    },
    {
      tittle: "Import Export Agent",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas unde ratione quam ipsa provident, dolorum magni ",
      height: "14rem",
         background: "red-600",
       textColor: "white",
       textTittle: "white",
       svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1690032879/settings-svgrepo-com_xb5zbq.svg"
    },
  ];
  return (
    <div className="h-[150vh] md:h-[115vh] w-full ">
      <div className="h-full w-full  grid grid-cols-1 gap-2 md:flex md:justify-between">
        <div className="w-full md:w-[40vw] md:h-full   relative md:p-6 p-2">
          <div className="h-full w-full ">
            <img
              src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692382868/faq_ufbxqd-min_ax7bfr.jpg"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute md:bottom-10 bottom-[1rem] left-0 h-[8rem] w-[10rem] md:h-[14rem] md:w-[18rem] md:bg-red-600 bg-red-600/60 rounded-tr-2xl rounded-br-2xl md:border-t-8 md:border-b-8 md:border-r-8 flex items-center justify-center">
            <div className=" h-3/4 w-3/4 flex flex-col items-center justify-between md:text-2xl font-extrabold text-white">
              <SlSocialDropbox size={80} style={{ color: "white" }} />
              <div className=" w-1/2 flex  justify-center">
                <p>9.2M</p>
                <HiPlusSm style={{ marginTop: "0px" }} />
              </div>
              <p className="text-center">Delivered Goods</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60vw] h-3/4 md:h-full p-4 ">
          <div className=" h-full w-full flex flex-col md:justify-start justify-between">
            <div className="  flex flex-col p-4 justify-between ">
              <p className="font-bold mb-2 text-red-600/60">WHY CHOOSE US</p>
              <p className="md:text-[3.5rem] text-[18px] font-extrabold mb-[4rem]  text-[#1F3042] ">We <span className="text-red-600">Export & Import</span> <br /> Goods all Over The World</p>
              <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi rerum ducimus officia odit, eligendi quam, impedit sapiente alias dolor, minus aliquam aspernatur enim saepe molestias perspiciatis. Veritatis sint officiis quasi?</p>
            </div>
            {/* begin card section */}
            <div className="  grid-cols-1  md:flex justify-between  md:p-4 w-full ">
              {cardsData.map((data) => (
                <Card
                  tittle={data.tittle}
                  text={data.text}
                  height={data.height}
                  background={data.background}
                  textColor={data.textColor}
                  textTittle={data.textTittle}
                  svg={data.svg}
                />
              ))}
            </div>
            {/* end card section */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
