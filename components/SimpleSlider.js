// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SimpleSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
//   };
//   return (
//     <div className="w-full overflow-hidden mt-36 md:mt-10">
//       <Slider {...settings}>
//         <div className="w-full">
//           <Image src={"/assets/carousel1.png"} width={2000} height={800} />
//         </div>
//         <div className="w-full">
//           <Image src={"/assets/carousel2.png"} width={2000} height={800} />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default SimpleSlider;

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

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
    autoplaySpeed: 2500, // Set autoplay speed (in milliseconds)
  };

  const handleButtonClick = () => {
    // Handle button click event
  };

  return (
    <div className="w-full overflow-hidden mt-36 md:mt-10 relative">
      <Slider {...settings}>
        <div className="w-full">
          <Image src={"/assets/carousel1.png"} width={2000} height={800} />
        </div>
        <div className="w-full">
          <Image src={"/assets/carousel2.png"} width={2000} height={800} />
        </div>
      </Slider>
      {/* Button positioned absolutely within the carousel container */}
      <motion.button
        className="hidden sm:block md:block absolute top-2/3 left-1/2 w-72 p-3 bg-green text-white-500 text-2xl rounded-3xl"
        initial={{ x: -900 }}
        animate={{ x: -150 }}
        transition={{ duration: 0.2 }}
        onClick={handleButtonClick}
      >
        Request your free quote
      </motion.button>
    </div>
  );
};

export default SimpleSlider;
