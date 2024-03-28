import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo-2.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <Logo className="h-8 w-auto mb-6" /> */}
          <Image
            src={Logo}
            className="h-4 w-auto mb-6"
            width={200}
            height={180}
          />
          <p className="mb-4">
            <strong className="font-medium">TransLingual Solutions</strong> is a
            private virtual network that has unique features and has high
            security.
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
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Server{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              LaslesVPN ?{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-green cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
