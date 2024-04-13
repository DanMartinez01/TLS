import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full mx-auto justify-center flex-row pb-10 lg:px-8 lg:max-w-7xl"
      id="services"
    >
      <motion.h3 className="text-center mb-16 text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
        {t("servtitle")}
      </motion.h3>

      <div className="w-full px-2 flex flex-col justify-between md:flex-row lg:flex-row xl:flex-row pb-8">
        {/* Services Card */}
        <motion.div className="flex flex-col items-center mt-4 w-2/4">
          <h2 className="text-2xl text-center font-bold-700 md:text-start lg:text-start xl:text-start sm:text-3xl mb-8">
            {t("servsubtitle")}
          </h2>
          <div className="my-4 space-y-10 border rounded-lg border-gray-500 border-2 py-6 w-3/4 h-full">
            {t("servicesList", { returnObjects: true }).map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <FaCheckCircle size={20} color="#486f60" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-md leading">{item}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industries Card */}
        <motion.div className="flex flex-col items-center  mt-4 w-2/4">
          <h2 className="text-2xl text-center font-bold-700 md:text-start lg:text-start xl:text-start sm:text-3xl mb-8">
            {t("indsubtitle")}
          </h2>
          <div className="my-4 space-y-10 border border-2 border-gray-500 rounded-lg py-6 w-3/4 h-full">
            {t("industriesList", { returnObjects: true }).map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <FaCheckCircle size={20} color="#486f60" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-md leading">{item}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="text-center">{t("disclaimer")}</p>
    </div>
  );
};

export default Services;
