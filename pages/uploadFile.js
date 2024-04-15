import { useState } from "react";
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
      <div className="relative w-full h-72 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/assets/book.jpg")` }}
        ></div>
        <div className="absolute inset-0 bg-green opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ x: -1000 }} // Initial position (off-screen to the left)
            animate={{ x: 0 }} // Final position (appear from left)
            transition={{ duration: 0.9 }} // Animation duration
            className="text-white-300 text-5xl font-semibold text-center"
          >
            Get a free quote
          </motion.h1>
        </div>
      </div>

      <div className="w-full  mx-auto  py-10 justify-center bg-white">
        <h1 className="w-full lg:w-2/4 md:w-2/4 mx-auto text-center px-4 text-4xl font-semibold flex items-center text-black-500">
          Completa el formulario y te enviamos la cotizacion
        </h1>
        <Upload />
      </div>
      <Footer />
    </>
  );
};

export default uploadFile;
