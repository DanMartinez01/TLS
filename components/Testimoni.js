import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import { FaUser } from "react-icons/fa";

const Testimoni = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch pt-8"
      >
        {t("reviews", { returnObjects: true }).map((item, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="h-auto bg-white-500 border-2 border-gray-500 hover:border-green transition-all rounded-lg px-4 py-2 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="w-full flex flex-row  items-center justify-around">
                  <div className="bg-green flex items-center justify-center w-12 h-12 rounded-full">
                    {/* Ensure consistent width and height for the user circle */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <FaUser size={24} color="white" />
                    </svg>
                  </div>
                  <div className="w-3/4 flex flex-col text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {item.name}
                    </p>
                    <p className="text-xs text-black-600 capitalize text-wrap">
                      {item.jobPosition}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
              <p className="my-4 text-left">“{item.text}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-2">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-green border hover:bg-green hover:text-white-500 transition-all text-green cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-green border hover:bg-green hover:text-white-500 transition-all text-green cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
