import Image from "next/image";
import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";
import ButtonPrimary from "./misc/ButtonPrimary";

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
      className="w-full h-2/4  sm:mb-14 mt-20 py-12 px-6 sm:px-8 lg:px-16  bg-green"
      id="feature"
    >
      <motion.h1
        initial={{ x: -1000 }} // Initial position (off-screen to the left)
        animate={{ x: 0 }} // Final position (appear from left)
        transition={{ duration: 0.9 }} // Animation duration
        className=" text-center text-2xl sm:text-3xl lg:text-4xl font-medium  text-white-500 leading-relaxed"
      >
        {t("aboutTitle")}
      </motion.h1>
      <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center mt-16">
        <div className="flex flex-col w-full">
          {t("aboutUs", { returnObjects: true }).map((item, index) => (
            <div className="text-left">
              <p className="text-white-500 text-sm">{item.one}</p>
              <p className="text-white-500 font-bold text-lg">{item.two}</p>
              <p className="text-white-500 text-sm">{item.three}</p>
              <p className="text-white-500 text-sm">{item.four}</p>
              <p className="text-white-500 font-bold text-sm">{item.five}</p>
              <p className="text-white-500 text-sm">{item.six}</p>
            </div>
          ))}

          <ScrollAnimationWrapper>
            <motion.div className="mx-auto mt-10" variants={scrollAnimation}>
              <ButtonPrimary
                addClass="bg-grayTheme text-green"
                children={t("contact")}
                link="/uploadFile"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        {/* <ScrollAnimationWrapper className="hidden lg:flex lg:w-full lg:justify-end xl:flex xl:w-full xl:justify-end ">
          <motion.div
            className="h-98 w-96 bg-gray-500  rounded-full p-4 relative"
            variants={scrollAnimation}
          >
            <Image
              src="/assets/logo-2.png"
              alt="Translingual Solutions"
              layout="responsive"
              quality={100}
              height={120}
              width={120}
              className="rounded-full"
            />
          </motion.div>
        </ScrollAnimationWrapper> */}
        <ScrollAnimationWrapper className="hidden lg:flex lg:w-full lg:justify-end xl:flex xl:w-full xl:justify-end ">
          <motion.div
            className="h-98 w-96 bg-gray-500 rounded-full p-4 relative  z-10"
            variants={scrollAnimation}
          >
            <div className="">
              <Image
                src="/assets/logo-2.png"
                alt="Translingual Solutions"
                layout="responsive"
                quality={100}
                height={120}
                width={120}
                className="rounded-full z-20"
                style={{
                  marginBottom: "-8px",
                  marginLeft: "-8px",
                }}
              />
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
