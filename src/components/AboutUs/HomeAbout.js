import React from "react";
import HomeAboutCard from "./HomeAboutCard";
import { useEffect, useState } from "react";

function HomeAbout() {
  const cardsData = [
    {
      tittle: "NO MATTER WHAT YOU DO, YOUR CONTRIBUTION MAKES A DIFFERENCE",
      text: "As business becomes more global and competitive, everyone from entrepreneurs to big companies turn to us for flexible and innovative solutions. It is the No. 1 priority of all our companies.",
      text2: "It’s how we deliver real value.",
      list_item1: "item1",
      list_item2: "item2",
      list_item3: "item3",
      list_item4: "item4",
      color: "bg-red-600",
    },
    {
      tittle:
        "We started small with core business of supplying general merchandise",
      text: "In addition, buying and processing grain and other farm products as value addition. We have since grown into a well established company with a regional network of professionals in areas of sales & marketing, customs clearing, transport management, warehousing and customized distribution services",
      text2:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam distinctio vero ex deserunt repellendus aliquam libero ",
      list_item1: "item1",
      list_item2: "item2",
      list_item3: "item3",
      list_item4: "item4",
      color: "bg-green-600",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 12000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className="flex items-center justify-center h-[100vh]  mt-8  -ml-11 -mr-11 bg-red-600 "
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692360457/2_ls3lpp.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed" 
      }}
      
    >
      <div className="w-full h-full flex items-center justify-between bg-gray-900/70 ">
        <div className="hidden h-full w-1/2 md:flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692720668/yeer-removebg-preview_ezbml1.png"
          alt=""
          className=" object-cover h-full w-full"
        />
      </div>
      {cardsData.map((data, index) => (
        <div
          key={index}
          className={`h-full md:w-1/2  flex items-center justify-center py-4 transition min-w-[250px] ${
            index === currentCardIndex ? "visible" : "hidden"
          }`}
        >
          <HomeAboutCard
            tittle={data.tittle}
            text={data.text}
            text2={data.text2}
            item1={data.list_item1}
            item2={data.list_item2}
            item3={data.list_item3}
            item4={data.list_item4}
            color={data.color}
          />
        </div>
      ))}
      </div>
    </div>
  );
}

export default HomeAbout;
