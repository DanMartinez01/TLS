import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-2 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="flex flex-col md:flex-row lg:flex-row xl:flex-row py-4 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-center row-start-2 sm:row-start-1 mx-auto">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-center">
              Complete the form and get a <strong>Free Quote</strong>.
            </h1>
            {/* <p className="text-black-500 mt-4 mb-6">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary> */}
          </div>
          <div className="flex w-3/4 mx-auto md:mx-auto lg:ml-auto xl:ml-auto">
            <motion.div className="h-full  w-full " variants={scrollAnimation}>
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
