import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import LanguageSelector from "../components/LanguageSelector";
import Footer from "../components/Layout/Footer";

const privacy = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="pb-24">
        <div className="w-full h-24 flex justify-end items-center px-4 ">
          <a href="/" className="hover:text-green">
            <span className="w-full flex flex-row items-center text-xl my-auto ">
              <FaArrowLeft />
              <p className="mx-4 hover:text-green"> Back to Home</p>
            </span>
          </a>
          <LanguageSelector />
        </div>
        <div className="w-full flex flex-row">
          {/* <Image
          src="/assets/logo-2.png"
          width={100}
          height={100}
          className="rounded-full w-48 h-24"
        /> */}
          <div>
            {t("privacy", { returnObjects: true }).map((item, index) => (
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
                <p className="mb-2 font-semibold text-xl">{item.subtitle}</p>
                <p className="">{item.one}</p>
                <p className="">{item.two}</p>
                <p className="">{item.three}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default privacy;
