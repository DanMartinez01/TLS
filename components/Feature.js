import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import useCustomTranslation from "../utils/useCustomTranslation";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useCustomTranslation();

  return (
    <div
      className="w-full h-2/4   sm:mb-14 py-16 px-6 sm:px-8 lg:px-16  bg-green"
      id="feature"
    >
      <div className="flex flex-col xl:flex-row justify-center items-center">
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col w-full xl:w-3/4"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-5xl font-medium leading-relaxed text-white-500 lg:mb-4">
              Translingual Solutions
            </h3>
            <p className="my-8 text-white-500 lg:leading-loose">
              {t("aboutUsText")}
            </p>

            {/* <ul className="text-white-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul> */}
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
