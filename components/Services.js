import { useMemo, useState, useEffect, React } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import { TbWorldCog } from "react-icons/tb";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Services = () => {
  const { t } = useTranslation();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 40, // Move down by 50 pixels
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

  // Define array of box shadow styles, including your custom shadow
  const boxShadowStyles = [
    "0 6px 12px rgba(75, 114, 99, 0.3)",
    "0 0 24px rgba(75, 114, 99, 0.5)",
  ];

  // Use state to track current box shadow style index
  const [boxShadowIndex, setBoxShadowIndex] = useState(0);

  // Use effect to toggle box shadow periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setBoxShadowIndex(
        (prevIndex) => (prevIndex + 1) % boxShadowStyles.length
      );
    }, 1000); // Change box shadow every 3 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  // Define transition duration and easing
  const transitionDuration = "0.3s";
  const transitionTimingFunction = "ease-in-out";

  return (
    <div
      id="services"
      className="bg-cover bg-center h-full p-24"
      // style={{ backgroundImage: "url('assets/white.jpg')" }}
    >
      <ScrollAnimationWrapper>
        <motion.h3
          className="text-center mb-12 text-2xl sm:text-3xl lg:text-4xl font-medium text-black-500 leading-relaxed"
          variants={scrollAnimation}
        >
          {t("servtitle")}
        </motion.h3>
      </ScrollAnimationWrapper>

      <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row xl:flex-row pb-8">
        {/* Services Card */}
        <motion.div className="flex flex-col items-center mt-4  w-3/4">
          <div className="my-4 space-y-3 border rounded-lg border-gray-100 border-1 pb-6 h-full w-full md:w-3/4 bg-white-500 shadow-xl shadow-slate-700 hover:scale-105">
            <div
              className="flex w-24 h-24 mx-auto mt-6 justify-center  items-center text-2xl text-center  text-white-500   bg-green rounded-full"
              style={{
                boxShadow: boxShadowStyles[boxShadowIndex],
                transition: `box-shadow ${transitionDuration} ${transitionTimingFunction}`,
              }}
            >
              <CgUserList size={56} />
            </div>
            <h2 className="uppercase text-center font-semibold text-xl text-black-500">
              {t("servsubtitle")}
            </h2>
            {t("servicesList", { returnObjects: true }).map((item, index) => (
              <div key={index} className="flex items-center px-4 pt-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  <FaCheckCircle size={20} color="#486f60" />
                </div>
                <div className="ml-2 w-full">
                  <p className="text-sm lg:text-md xl:text-md leading whitespace-normal">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industries Card */}
        <motion.div className="flex flex-col items-center  mt-4  w-3/4">
          <div className="my-4 space-y-3 border rounded-lg border-gray-100 border-1 pb-6 h-full  w-full md:w-3/4 bg-white-500 shadow-xl shadow-slate-700 hover:scale-105">
            <div
              className="flex w-24 h-24 mx-auto mt-6 justify-center  items-center text-2xl text-center  text-white-500   bg-green rounded-full"
              style={{
                boxShadow: boxShadowStyles[boxShadowIndex],
                transition: `box-shadow ${transitionDuration} ${transitionTimingFunction}`,
              }}
            >
              <TbWorldCog size={56} />
            </div>
            <h2 className="mx-auto uppercase text-center  font-semibold text-xl text-black-500">
              {t("indsubtitle")}
            </h2>
            {t("industriesList", { returnObjects: true }).map((item, index) => (
              <div key={index} className="flex items-center px-4 pt-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  <FaCheckCircle size={20} color="#486f60" />
                </div>
                <div className="ml-2 w-full">
                  <p className="text-sm lg:text-md xl:text-md leading whitespace-normal">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <p className="text-center mx-auto w-3/4 text-black-600">
        {t("disclaimer")}
      </p>
    </div>
  );
};

export default Services;
