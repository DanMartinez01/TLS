import React, { useMemo } from "react";
import Testimoni from "../Testimoni";
import PricingCard from "./PricingCard";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { RiFolderReceivedFill } from "react-icons/ri";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation();

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-10"
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
          {/* desktop */}
          <div className="hidden sm:flex flex-col justify-between items-center">
            <div className="flex flex-row items-center justify-around  mr-44 p-2">
              <PricingCard
                icon={<RiUploadCloud2Fill size={30} color="#4b7263" />}
                text={t("text1")}
              />
              <FaArrowRight style={{ margin: "4" }} color="#4b7263" />
              <div className="flex flex-col items-center">
                <PricingCard
                  icon={<MdOutlinePriceChange size={30} color="#4b7263" />}
                  text={t("text2")}
                />
                <FaArrowDown style={{ marginTop: "4" }} color="#4b7263" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-around  ml-44 p-2">
              <PricingCard
                icon={<MdPayments size={30} color="#4b7263" />}
                text={t("text3")}
              />
              <FaArrowRight style={{ margin: "4" }} color="#4b7263" />
              <PricingCard
                icon={<RiFolderReceivedFill size={30} color="#4b7263" />}
                text={t("text4")}
              />
            </div>
          </div>
          {/* mobile */}
          <div className="flex flex-col md:hidden lg:hidden xl:hidden justify-between items-center mx-auto">
            <PricingCard
              icon={<RiUploadCloud2Fill size={30} color="#4b7263" />}
              text={t("text1")}
            />
            <FaArrowDown
              style={{ marginTop: "4", marginBottom: "4" }}
              color="#4b7263"
            />
            <PricingCard
              icon={<MdOutlinePriceChange size={30} color="#4b7263" />}
              text={t("text2")}
            />
            <FaArrowDown
              style={{ marginTop: "4", marginBottom: "4" }}
              color="#4b7263"
            />
            <PricingCard
              icon={<MdPayments size={30} color="#4b7263" />}
              text={t("text3")}
            />
            <FaArrowDown
              style={{ marginTop: "4", marginBottom: "4" }}
              color="#4b7263"
            />
            <PricingCard
              icon={<RiFolderReceivedFill size={30} color="#4b7263" />}
              text={t("text4")}
            />
          </div>
        </div>

        {/* testimonies */}
        <div className="flex flex-col w-full pt-24 mb-10" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              {t("reviewsTitle")}
            </motion.h3>
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
