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
      // className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto bg-green"
      className="w-full h-2/4 mb-6  sm:mb-14 py-6 px-6 sm:px-8 lg:px-16  bg-green py-20"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 items-center lg:relative">
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center sm:mx-auto ml-auto w-full lg:w-9/12 py-2"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-5xl font-medium leading-relaxed text-white-500">
              We Provide Many Features You Can Use
            </h3>
            <p className="my-4 text-white-500">{t("aboutUsText")}</p>

            <ul className="text-white-500 self-start list-inside ml-8">
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
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full">
          <motion.div
            className="h-2/6 w-2/6 sm:hidden lg:absolute  lg:-right-20 lg:top-2"
            variants={scrollAnimation}
          >
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
