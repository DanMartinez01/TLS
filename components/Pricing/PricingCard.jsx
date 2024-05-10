import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const PricingCard = ({ icon, text, number, addClass }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation();

  // Define array of box shadow styles, including your custom shadow
  const boxShadowStyles = [
    "0 6px 12px rgba(75, 114, 99, 0.3)",
    "0 0 20px rgba(75, 114, 99, 0.5)",
  ];

  // Use state to track current box shadow style index
  const [boxShadowIndex, setBoxShadowIndex] = useState(0);

  // Use effect to toggle box shadow periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setBoxShadowIndex(
        (prevIndex) => (prevIndex + 1) % boxShadowStyles.length
      );
    }, 4000); // Change box shadow every 3 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  // Define transition duration and easing
  const transitionDuration = "0.3s";
  const transitionTimingFunction = "ease-in-out";

  return (
    <ScrollAnimationWrapper>
      <motion.div
        variants={scrollAnimation}
        className={
          "flex flex-col justify-center items-center rounded-full overflow-hidden border-2 border-gray-100 shadow-xl hover:scale-60 w-64 h-64 relative bg-white-300 " +
          addClass
        }
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
        style={{
          width: "190px",
          height: "190px",
          borderRadius: "50%",
          boxShadow: boxShadowStyles[boxShadowIndex],
          transition: `box-shadow ${transitionDuration} ${transitionTimingFunction}`,
        }}
      >
        <div className="px-4 w-48 h-48 overflow-hidden flex flex-col justify-center items-center">
          {icon}
          <p
            className={
              " flex flex-row  items-center text-center font-bold text-green text-2xl  " +
              addClass
            }
          >
            {number}
          </p>
          <p
            className={"text-wrap text-xs text-black-600 text-bold " + addClass}
          >
            {text}
          </p>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default PricingCard;
