import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";
import { FaInfoCircle } from "react-icons/fa";
import {
  MdMiscellaneousServices,
  MdReviews,
  MdOutlineRequestPage,
  MdContactMail,
} from "react-icons/md";

const Header = () => {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "FaInfoCircle":
        return <FaInfoCircle size={24} color="green" />;
      case "MdMiscellaneousServices":
        return <MdMiscellaneousServices size={24} color="green" />;
      case "MdReviews":
        return <MdReviews size={24} color="green" />;
      case "MdOutlineRequestPage":
        return <MdOutlineRequestPage size={24} color="green" />;
      case "MdContactMail":
        return <MdContactMail size={24} color="green" />;
      default:
        return null;
    }
  };

  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  // const { t } = useCustomTranslation();
  const { t } = useTranslation();

  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-12 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="flex flex-row items-center">
            {/* <Image src="/assets/logo.png" width={100} height={60} /> */}
            <a href="/" className="text-green text-bold text-2xl">
              Translingual solutions
            </a>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {t("header", { returnObjects: true }).map((item, index) => (
              <LinkScroll
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(item.link);
                }}
                className={`px-4 py-2 mx-1 cursor-pointer animation-hover inline-block relative 
                  ${
                    activeLink === item.link
                      ? "text-green animation-active"
                      : "text-black-500 hover:text-green"
                  }`}
              >
                {item.label}
              </LinkScroll>
            ))}
            <a
              className="bg-green px-4 py-2 text-white-500 rounded-lg"
              href="/uploadFile"
            >
              {t("contact")}
            </a>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <LanguageSelector />
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="w-full fixed lg:hidden bottom-0 left-0 right-0 z-20  shadow-t ">
        <div className="bg-white-500 px-4 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {t("header", { returnObjects: true }).map((item, index) => (
              <LinkScroll
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(item.link);
                }}
                className={`mx-1 sm:mx-2 px-2 sm:px-4 py-2 flex flex-col items-center justify-center text-xs border-t-2 transition-all bg-orange-100" +
                  ${
                    activeLink === item.link
                      ? " border-green text-green"
                      : " border-transparent"
                  }`}
              >
                {item.icon && (
                  <span className="mr-2">{renderIcon(item.icon)}</span>
                )}
                {item.label}
              </LinkScroll>
            ))}
            <span className="flex flex-col justify-center items-center text-xs">
              <MdContactMail color="green" size={24} />
              <a href="/uploadFile">Contact Us</a>
            </span>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
