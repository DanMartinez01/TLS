import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-xl  px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="flex flex-col md:flex-row lg:flex-row xl:flex-row py-2 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1 mx-auto">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-relaxed text-center">
              {t("formTitle")}
            </h1>
          </div>
          <div className="flex w-2/4 mx-auto md:mx-auto lg:ml-auto xl:ml-auto">
            <motion.div className="h-full  w-full" variants={scrollAnimation}>
              <Image
                src="/assets/pc.jpg"
                alt="Get a quote"
                quality={100}
                width={80}
                height={80}
                layout="responsive"
                className="w-48 h-48"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
