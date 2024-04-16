import Image from "next/image";
import React, { useMemo, useState, useEffect } from "react";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation();

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

  return (
    <div
      className="w-full h-2/4  sm:mb-14 py-12 px-6 sm:px-8 lg:px-16  bg-green"
      id="feature"
    >
      <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center">
        <div className="flex flex-col w-full xl:w-3/4">
          <motion.h1
            initial={{ x: -1000 }} // Initial position (off-screen to the left)
            animate={{ x: 0 }} // Final position (appear from left)
            transition={{ duration: 0.9 }} // Animation duration
            className="text-3xl lg:text-5xl font-medium leading-relaxed text-white-500 lg:mb-4"
          >
            About Us
          </motion.h1>

          <p>
            {t("aboutUs", { returnObjects: true }).map((item, index) => (
              <span class="inline-flex items-baseline">
                <span className="text-white-500">{item.one}</span>
                <span className="text-white-500 font-bold pl-1">
                  {item.two}
                </span>
                <span className="text-white-500">{item.three}</span>
                <span className="text-white-500">{item.four}</span>
                <span className="text-white-500 font-bold">{item.five}</span>
                <span className="text-white-500">{item.six}</span>
              </span>
            ))}
          </p>
        </div>
        <ScrollAnimationWrapper className="hidden lg:flex lg:w-full lg:justify-end xl:flex xl:w-full xl:justify-end">
          <motion.div className="h-98 w-96" variants={scrollAnimation}>
            <Image
              src="/assets/logo-2.png"
              alt="Translingual Solutions"
              layout="responsive"
              quality={100}
              height={150}
              width={150}
              className="rounded-full"
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
