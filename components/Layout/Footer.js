import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo-2.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocationPin, MdContactMail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 pt-10 lg:pt-12 xl:pt-16 mt-0">
      <div className="max-w-screen-xl w-full  px-6 sm:px-8 lg:px-8 xl:px-12">
        <div className="flex flex-col items-start">
          {/* <Logo className="h-8 w-auto mb-6" /> */}
          <Image
            src={Logo}
            className="h-4 w-auto mb-6"
            width={200}
            height={180}
          />
          <p className="mb-4">
            <strong className="font-medium">
              <a href="/">TransLingual Solutions</a>
            </strong>
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Facebook  /> */}
              <FaFacebook className="h-6 w-6 text-green" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaInstagram className="h-6 w-6 text-green" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - TransLingual Solutions
          </p>
        </div>
        <div className="flex flex-col mb-2">
          <ul className="text-black-500 ">
            <li className="my-2 font-semibold hover:text-green cursor-pointer transition-all">
              {t("footerTitle")}
            </li>
            <li className="flex flex-row items-end text-black-600 my-2">
              <MdLocationPin size={24} />
              <a
                className="text-black-600 ml-1"
                href="https://maps.app.goo.gl/pNvtnV7RM73sSgLE7"
              >
                {t("argAddress")}
              </a>
            </li>
            <li className="flex flex-row items-start text-black-600 my-2">
              <MdLocationPin size={24} />
              <a
                className="text-black-600 ml-1"
                href="https://maps.app.goo.gl/cmvZFPGmaeDrYcn29"
              >
                {t("usAddress")}
              </a>
            </li>

            <li className="my-2 font-semibold hover:text-green cursor-pointer transition-all">
              <a href={`mailto:Info@translingualsolutions.com`}>{t("email")}</a>
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              <a href="/privacy"> {t("footerPrivacy")}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-row items-center bg-green px-6 sm:px-8 lg:px-8 xl:px-12 py-4 pb-20 md:pb-18 lg:pb-12 xl:pb-10">
        <p className="mt-auto mr-4 text-white-500 transition-all text-xs md:text-sm lg:text-sm xl:text-sm">
          {t("certificate")}
        </p>
        <Image
          src={t("icon")}
          width={48}
          height={48}
          className="mt-auto ml-2 w-72 h- md:w-36 md:h-36 lg:w-48 lg:h-48"
        />
      </div>
    </div>
  );
};

export default Footer;
