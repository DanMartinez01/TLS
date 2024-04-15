import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo-2.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 pt-16 pb-8 mt-0">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col items-start ">
          {/* <Logo className="h-8 w-auto mb-6" /> */}
          <Image
            src={Logo}
            className="h-4 w-auto mb-6"
            width={200}
            height={180}
          />
          <p className="mb-4">
            <strong className="font-medium">TransLingual Solutions</strong>
            {/* is a
            private virtual network that has unique features and has high
            security. */}
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
        <div className="flex flex-col mb-10">
          {t("footer", { returnObjects: true }).map((item, index) => (
            <ul className="text-black-500 ">
              <li className="my-2 font-semibold hover:text-green cursor-pointer transition-all">
                {item.title}
              </li>
              <li className="my-2 hover:text-green cursor-pointer transition-all">
                {item.argAddress}
              </li>
              <li className="my-2 hover:text-green cursor-pointer transition-all">
                {item.usAddress}
              </li>
              <li className="my-2 font-semibold hover:text-green cursor-pointer transition-all">
                {item.email}
              </li>
              <li className="my-2 hover:text-green cursor-pointer transition-all">
                <a href="/privacy"> {item.privacy}</a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
