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
        className="flex items-stretch justify-items-stretch"
      >
        {t("reviews", { returnObjects: true }).map((item, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="h-auto border-2 border-gray-500 hover:border-green transition-all rounded-lg p-4 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <div className="mr-4 bg-green flex items-center justify-center w-12 h-12 rounded-full">
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
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {item.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {item.location}
                    </p>
                  </div>
                </div>
                {/* <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div> */}
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
