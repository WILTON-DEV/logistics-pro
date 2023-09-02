import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";
import ImageScroll from "../designLayouts/ImageScroll";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full ">
      <Slider {...settings}>
        <Link to="/offer">
          <div>
            <ImageScroll
              imgSrc={bannerImgOne}
              head=" Delivery Service"
              headSpecial="Trusted"
              headOther="Logistics"
              subTittle="  From Origin to Destination, We Bridge Distances with Precision
                  and Care"
            />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <ImageScroll
              imgSrc={bannerImgTwo}
              head="We Offer "
              headSpecial="Warehousing"
              headOther="Across the Country"
              subTittle="  From Origin to Destination, We Bridge Distances with Precision
                 and Care"
            />
          </div>
        </Link>
        <Link to="/offer">
          <div className="h-[10vh]">
            <ImageScroll
              imgSrc={bannerImgThree}
              head="Cargo "
              headSpecial="Shipment"
              headOther="Across the whorl world"
              subTittle="Charting the Course to Your Cargo Success"
            />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
