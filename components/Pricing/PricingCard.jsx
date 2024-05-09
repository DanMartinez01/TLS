import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const PricingCard = (props) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation();

  return (
    <ScrollAnimationWrapper className="">
      <motion.div
        variants={scrollAnimation}
        className="flex flex-col justify-center items-center rounded-full overflow-hidden border-2 border-gray-100 shadow-xl hover:scale-110 w-64 h-64"
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
        style={{ width: "180px", height: "180px", borderRadius: "50%" }}
      >
        {props.icon}
        <div className="p-4 w-40 h-48 overflow-hidden flex flex-col">
          <p className="text-wrap text-xs">{props.text}</p>
        </div>
        {/* {props.arrow} */}
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default PricingCard;
