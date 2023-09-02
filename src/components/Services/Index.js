import React from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import { useMediaQuery } from "@uidotdev/usehooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceIndex = () => {
  // ... Your media queries and servicesData array
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );

  const servicesData = [
    {
      service: "Export & Import",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692360457/2_ls3lpp.jpg",
    },
    {
      service: "Freight Fowarding",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692360457/6_zhscqt.jpg",
    },
    {
      service: "Customs Bokerage",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692722367/custom_tkeqpc.jpg",
      id: 2,
    },
    {
      service: "Marketing &  Distribtion",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692722365/images_bxd6eq.jpg",
      id: 2,
    },
    {
      service: "WareHousing",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692360456/44_kqncov.jpg",
      id: 2,
    },
    {
      service: "Bsiness Consulting",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692722365/images_1_cefi0a.jpg",
      id: 2,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: isSmallDevice ? 1 : 3, // Adjust number of slides based on device
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="  min-h-[100vh] -ml-11 -mr-11 py-[5rem]" style={{
      backgroundImage: 'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1692399596/bg.drawio_1_.drawio_mfsd7c.png")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
  
    
    }}>
      <div className="w-full flex items-center justify-center ">
        <div className="   md:p-4  text-center md:w-1/2">
          <p className="font-bold mb-1 md:mb-2 text-red-600/60">OUR SERVICES</p>
          <p className="md:text-[3.5rem] text-[18px] font-extrabold md:mb-[4rem] mb-[1rem] text-white ">
            Competitive & <br />
            <span className="text-red-600">Fast Services </span>For You
          </p>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi rerum
            ducimus officia odit, eligendi quam, impedit sapiente alias dolor,
            minus aliquam aspernatur enim saepe molestias perspiciatis.
            Veritatis sint officiis quasi?
          </p>
        </div>
      </div>
      <div className="mb-8">
        <Slider {...settings} className="p-4">
          {servicesData.map((data) => (
            <div key={data.service} className=" p-4">
              {" "}
              {/* Key should be unique */}
              <ServiceCard service={data.service} image={data.image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceIndex;
