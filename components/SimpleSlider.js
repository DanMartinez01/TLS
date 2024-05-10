import React from "react";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";
import ButtonPrimary from "./misc/ButtonPrimary";

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
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 40, // Move down by 50 pixels
    },
    visible: {
      opacity: 1,
      y: 0, // Move back to original position
      transition: {
        delay: 0.1, // Start animation after 0.2 seconds
        duration: 0.1, // Animation duration is 0.8 seconds
      },
    },
  };

  const router = useRouter();
  const { t } = useTranslation();

  const handleButtonClick = () => {
    router.push("/uploadFile");
  };

  return (
    <div className="w-full overflow-hidden mt-20  md:mt-10">
      <Slider {...settings}>
        <div className="w-full">
          <Image src={"/assets/carousel1.png"} width={2000} height={700} />
        </div>
        <div className="w-full">
          <Image src={"/assets/carousel2.png"} width={2000} height={700} />
        </div>
      </Slider>
      <ScrollAnimationWrapper>
        <motion.div
          className="h-98 w-96 mx-auto flex justify-center mb-2"
          variants={scrollAnimation}
        >
          <ButtonPrimary
            addClass="bg-green text-white  text-sm py-1"
            children={t("contact")}
            link="/uploadFile"
          />
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default SimpleSlider;
