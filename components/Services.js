import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="w-full mx-auto justify-center  flex-row  pb-10 lg:px-8 lg:max-w-7xl "
      id="services"
    >
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-center mb-16 text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
        >
          Services & Industries
        </motion.h3>
      </ScrollAnimationWrapper>

      <div className="flex flex-col justify-center md:flex-row lg:flex-row xl:flex-row pb-8">
        <ScrollAnimationWrapper>
          {/* <div className="flex flex-col w-2/5 items-center"> */}
          <motion.div
            variants={scrollAnimation}
            className="flex flex-col w-3/4 items-center  mx-auto"
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.1,
              },
            }}
          >
            <div>
              <h2 className="text-1xl flex  text-start sm:text-3xl mb-8">
                Services:
              </h2>
              <div className="mt-4 space-y-12 border rounded-lg  border-gray-500  py-4 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium leadi ">
                      Certified and Sworn Translations, legally validated at
                      Sworn Translators’ Association of the City of Buenos
                      Aires*
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium leadi ">
                      Scientific and Technical Translations
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">Localization</h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium leadi ">
                      Transcreation
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium leadi ">
                      Editing and Proofreading{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        </ScrollAnimationWrapper>
        {/* second column */}
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="flex flex-col w-3/4 items-center mx-auto"
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.1,
              },
            }}
          >
            {/* <div className="flex flex-col  w-2/5 items-center"> */}
            <div>
              <h2 className="text-1xl mb-6  sm:text-3xl">Industries:</h2>
              <div className="mt-4 space-y-12 border border-gray-100 rounded-lg py-4 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium leadi ">
                      Certified and Sworn Translations, legally validated at
                      Sworn Translators’ Association of the City of Buenos
                      Aires*
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium leadi ">
                      Scientific and Technical Translations
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium leadi ">Localization</h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium leadi ">
                      Transcreation
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaCheckCircle size={20} color="green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium leadi ">
                      Editing and Proofreading{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <p>
        * The signature of our Sworn Translators is duly registered at Sworn
        Translators’ Association of the City of Buenos Aires, which offers our
        clients the ability to request a digitally certified project from
        Translingual Solutions from the comfort of their home or office, with no
        need to commute or handle procedures in person.{" "}
      </p>
    </div>
  );
};

export default Services;
