// LanguageSelector.js
import React, { useState } from "react";
import useCustomTranslation from "../utils/useCustomTranslation";
import { IoIosArrowDown } from "react-icons/io";

function LanguageSelector() {
  const { changeLanguage } = useCustomTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = (locale) => {
    changeLanguage(locale);
    toggleDropdown(); // Close the dropdown after selecting a language
  };

  return (
    <div className="relative inline-block text-left">
      {/* Desktop version with dropdown */}
      <div className="">
        <div>
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex justify-center items-center  w-full rounded-md border border-gray-100 shadow-sm px-2 py-1
            md:px-4 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2
            bg-white-500 text-xs md:text-sm lg:text-sm xl:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <p className="mr-1">Language</p>
            {/* Toggle arrow */}
            <IoIosArrowDown />
          </button>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white-500 ring-1 ring-black ring-opacity-5 z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <button
                onClick={() => handleChangeLanguage("en")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                English
              </button>
              <button
                onClick={() => handleChangeLanguage("es")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                Spanish
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile version with flag buttons */}
      {/* <div className="block lg:hidden">
        <button onClick={() => handleChangeLanguage("en")} className="mr-2">
          <img
            src="/assets/uk-flag.png" 
            alt="UK Flag"
            className="w-8 h-8 rounded-full"
          />
        </button>
        <button onClick={() => handleChangeLanguage("es")}>
          <img
            src="/assets/spain-flag.png" 
            alt="Spain Flag"
            className="w-8 h-8"
          />
        </button>
      </div> */}
    </div>
  );
}

export default LanguageSelector;
