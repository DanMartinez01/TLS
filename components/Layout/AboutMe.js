import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <section class="mb-4 md:mb-4 lg:mb-0 xl:mb-0 py-6 px-4 md:px-8">
        <div class="w-full flex flex-row justify-start items-center text-center">
          <div className="">
            <Image
              className="rounded-full"
              src="/assets/profile3.jpg"
              alt=""
              width={100}
              height={100}
              quality={100}
            />
          </div>
          <div class="flex flex-col ml-4">
            <div class="">
              <div class="flex flex-col md:flex-row items-center justify-start">
                <p class="flex flex-row items-center text-indigo-900 font-semibold md:font-bold text-sm md:text-md">
                  <hr className="w-4 font-bold hidden sm:block" />
                  Antonina Estefanía Carbone
                </p>
                <div className="flex items-center bg-green rounded-full w-8 h-8 flex items-center justify-center ml-1 md:ml-2 my-1">
                  <Image src={t("icon")} width={20} height={20} quality={100} />
                </div>
              </div>

              <p class="text-indigo-300 md:text-left text-xs md:text-sm my-1">
                {t("certificate")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
