import { useState } from "react";
import Hero from "../components/Hero";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Upload from "../components/Upload";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import LanguageSelector from "../components/LanguageSelector";

const uploadFile = () => {
  return (
    <>
      <div className="w-full h-24 flex justify-end items-center px-4">
        <a href="/" className="hover:text-green">
          <span className="w-full flex flex-row items-center text-xl my-auto ">
            <FaArrowLeft />
            <p className="mx-4 hover:text-green"> Back to Home</p>
          </span>
        </a>
        <LanguageSelector />
      </div>
      <Hero />

      <div className="w-full  mx-auto  pt-4 pb-36 justify-center bg-white">
        <Upload />
      </div>
      <Footer />
    </>
  );
};

export default uploadFile;
