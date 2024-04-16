import React, { useMemo } from "react";
import Testimoni from "./Testimoni";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { RiFolderReceivedFill } from "react-icons/ri";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation();
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "RiUploadCloud2Fill":
        return <RiUploadCloud2Fill color="#486f60" size={48} />;
      case "MdOutlinePriceChange":
        return <MdOutlinePriceChange color="#486f60" size={48} />;
      case "MdPayments":
        return <MdPayments color="#486f60" size={48} />;
      case "RiFolderReceivedFill":
        return <RiFolderReceivedFill color="#486f60" size={48} />;
      default:
        return null;
    }
  };
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              {t("howToTitle")}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              {t("howTo")}
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {t("stepByStep", { returnObjects: true }).map((item, index) => (
              <ScrollAnimationWrapper className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-start items-center border-2 border-gray-500 rounded-xl py-4 px-4 lg:px-10 xl:px-16"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    {renderIcon(item.icon)}
                  </div>
                  {/* <p className="text-lg text-black-600 text-start my-2 sm:my-7">
                    {item.text}
                  </p> */}
                  {index === 0 ? (
                    <a
                      href="/uploadFile"
                      className="text-green font-semibold hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        {/* testimonies */}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              {t("reviewsTitle")}
            </motion.h3>
            {/* <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p> */}
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
