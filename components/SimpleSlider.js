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
import { useRouter } from "next/router";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set autoplay speed (in milliseconds)
  };

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/uploadFile");
  };

  return (
    <div className="w-full overflow-hidden mt-20  md:mt-10 relative">
      <Slider {...settings}>
        <div className="w-full">
          <Image src={"/assets/carousel1.png"} width={2000} height={990} />
        </div>
        <div className="w-full">
          <Image src={"/assets/carousel2.png"} width={2000} height={990} />
        </div>
      </Slider>
      {/* Button positioned absolutely within the carousel container */}
      <motion.button
        className="absolute top-3/4 left-1/2 w-2/4 md:w-72 h-12 md:h-16 max-w-3/4 mx-auto p-3 bg-green text-white-500 text-lg md:text-2xl rounded-3xl hover:bg-white hover:text-green"
        initial={{ x: "-100%", y: "-50%" }}
        animate={{ x: "-50%", y: "-50%" }}
        transition={{ duration: 0.2 }}
        onClick={handleButtonClick}
      >
        Contact us
      </motion.button>
    </div>
  );
};

export default SimpleSlider;
