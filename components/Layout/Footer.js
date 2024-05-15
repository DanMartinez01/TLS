import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo2.png";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdLocationPin, MdContactMail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 pt-10 lg:pt-12 xl:pt-16 -mt-16">
      <div className="max-w-screen-xl w-full  px-6 sm:px-8 lg:px-8 xl:px-12">
        <div className="flex flex-col items-start">
          <Image src={Logo} className="w-auto mb-6" width={180} height={80} />
          <p className="mb-4">
            <strong className="font-medium text-green">
              <a href="/">TransLingual Solutions</a>
            </strong>
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.facebook.com/profile.php?id=61555467706410">
                <FaFacebook className="h-6 w-6 text-green" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.instagram.com/translingualsolutions/">
                <FaInstagram className="h-6 w-6 text-green" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.linkedin.com/company/translingual-solutions/?viewAsMember=true">
                <FaLinkedinIn className="h-6 w-6 text-green" />
              </a>
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
            <li className="flex flex-row items-start text-black-600 my-2">
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
              <a href={`mailto:info@translingualsolutions.com`}>{t("email")}</a>
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              <a href="/privacy"> {t("footerPrivacy")}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-row items-center bg-green   px-6 sm:px-8 lg:px-8 xl:px-12 pt-4 pb-4 mb-16 md:mb-16 lg:mb-0 xl:mb-0">
        <div className="rounded-full bg-grayTheme p-6 py-auto mr-2"></div>
        <p className="mr-4 text-white-500 transition-all text-xs md:text-sm lg:text-sm xl:text-sm">
          {t("certificate")}
        </p>
        <Image
          src={t("icon")}
          width={48}
          height={48}
          className="ml-2 w-72 h- md:w-36 md:h-36 lg:w-48 lg:h-48"
        />
      </div>
    </div>
  );
};

export default Footer;
