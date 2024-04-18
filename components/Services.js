import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8" id="services">
      <motion.h3 className="text-center mb-16 text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
        {t("servtitle")}
      </motion.h3>

      <div className="flex flex-col justify-center md:flex-row lg:flex-row xl:flex-row pb-8">
        {/* Services Card */}
        <motion.div className="flex flex-col items-center mt-4 mx-auto w-3/4">
          <h2 className="text-2xl text-center font-bold-700 md:text-start lg:text-start xl:text-start sm:text-3xl mb-4">
            {t("servsubtitle")}
          </h2>
          <div className="my-4 space-y-10 border rounded-lg border-gray-500 border-2 py-6 h-full w-full md:w-2/4">
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
          <h2 className="text-2xl text-center font-bold-700 md:text-start lg:text-start xl:text-start sm:text-3xl mb-4">
            {t("indsubtitle")}
          </h2>
          <div className="my-4 space-y-10 border rounded-lg border-gray-500 border-2 py-6 h-full  w-full md:w-2/4">
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

      <p className="text-center mx-auto w-3/4">{t("disclaimer")}</p>
    </div>
  );
};

export default Services;
