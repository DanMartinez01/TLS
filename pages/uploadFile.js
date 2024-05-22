import Hero from "../components/Hero";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Upload from "../components/Upload";
import { FaArrowLeft } from "react-icons/fa";
import LanguageSelector from "../components/LanguageSelector";

const uploadFile = () => {
  return (
    <div className="-mb-12">
      <div className="w-full h-24 flex justify-end items-center px-4 py-8 mb-8">
        <a href="/" className="hover:text-green">
          <span className="w-full flex flex-row items-center text-xl my-auto ">
            <FaArrowLeft />
            <p className="mx-4 hover:text-green">Home</p>
          </span>
        </a>
        <LanguageSelector />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-around px-8 md:px-2 lg:px-6 xl:px-16 mt-10 mx-auto">
        <Hero />
        <Upload />
      </div>
      <Footer />
    </div>
  );
};

export default uploadFile;
