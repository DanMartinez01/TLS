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
    <div className="" id="about">
      <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-center  justify-center  py-2 sm:py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text:-4xl font-medium text-green md:text-black-500 lg:text-black-500 xl:text-black-500 text-center">
              {t("formTitle")}
            </h1>
          </div>
          <div className="hidden sm:block">
            <motion.div className="h-full  w-full">
              <Image
                src="/assets/pc.jpg"
                alt="Get a quote"
                quality={100}
                width={320}
                height={200}
                responsive
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
