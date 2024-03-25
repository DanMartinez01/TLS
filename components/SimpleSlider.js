import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
  };
  return (
    <div className="w-full overflow-hidden mt-36 md:mt-10">
      <Slider {...settings}>
        <div className="w-full">
          <Image src={"/assets/carousel1.png"} width={2000} height={800} />
        </div>
        <div className="w-full">
          <Image src={"/assets/carousel2.png"} width={2000} height={800} />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
