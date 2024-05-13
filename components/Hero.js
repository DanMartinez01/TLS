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
    <div className="w-full flex justify-center  mx-auto  px-24" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="flex flex-col-reverse items-center  justify-center md:flex-col-reverse lg:flex-col-reverse xl:flex-row py-2 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="flex flex-col items-center row-start-2 sm:row-start-1">
            <h1 className="text-4xl font-medium text-black-500 leading-relaxed text-center">
              {t("formTitle")}
            </h1>
          </div>
          <div className="flex w-2/4">
            <motion.div className="h-full  w-full" variants={scrollAnimation}>
              <Image
                src="/assets/pc.jpg"
                alt="Get a quote"
                quality={100}
                width={360}
                height={220}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
