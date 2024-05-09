import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { TbWorldCog } from "react-icons/tb";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div
      id="services"
      className="bg-cover bg-center h-full pt-20 pb-20"
      style={{ backgroundImage: "url('assets/white.jpg')" }}
    >
      <motion.h3 className="text-center mb-12 text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
        {t("servtitle")}
      </motion.h3>

      <div className="flex flex-col justify-center md:flex-row lg:flex-row xl:flex-row pb-8">
        {/* Services Card */}
        <motion.div className="flex flex-col items-center mt-4 mx-auto w-3/4">
          <div className="my-4 space-y-10 border rounded-lg border-gray-500 border-2 pb-6 h-full w-full md:w-2/4 bg-white-500">
            <div className="flex justify-center  items-center text-2xl text-center  text-white-500 font-bold-700  sm:text-3xl mb-4 py-4  bg-green rounded-t-lg">
              <h2 className="mr-2">{t("servsubtitle")}</h2>
              <GrServices />
            </div>

            {t("servicesList", { returnObjects: true }).map((item, index) => (
              <div key={index} className="flex items-center px-4">
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
        <motion.div className="flex flex-col items-center mt-4 mx-auto w-3/4">
          <div className="my-4 space-y-10 border rounded-lg border-gray-500 border-2 pb-6 h-full  w-full md:w-2/4 bg-white-500">
            <div className="flex justify-center  items-center text-2xl text-center  text-white-500 font-bold-700  sm:text-3xl mb-4 py-4  bg-green rounded-t-lg">
              <h2 className="mr-2">{t("indsubtitle")}</h2>
              <TbWorldCog />
            </div>
            {t("industriesList", { returnObjects: true }).map((item, index) => (
              <div key={index} className="flex items-center px-4">
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
