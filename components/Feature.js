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
      y: 50, // Move down by 50 pixels
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
      className="w-full h-2/4  sm:mb-14 py-16 px-6 sm:px-8 lg:px-16  bg-green"
      id="feature"
    >
      <div className="flex flex-col xl:flex-row justify-center items-center">
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col w-full xl:w-3/4"
            variants={scrollAnimation}
          >
            <motion.h3
              className="text-3xl lg:text-5xl font-medium leading-relaxed text-white-500 lg:mb-4"
              variants={animationVariants}
              initial="hidden"
              animate="visible"
            >
              Translingual Solutions
            </motion.h3>
            {t("aboutUs", { returnObjects: true }).map((item, index) => (
              <p className="text-white-500 leading-relaxed">{item}</p>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="hidden xl:flex xl:w-full">
          <motion.div className="h-96 w-96" variants={scrollAnimation}>
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
